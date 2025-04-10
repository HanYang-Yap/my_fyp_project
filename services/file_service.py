import asyncio
import json
import os
from concurrent.futures import ThreadPoolExecutor
from typing import Any, Dict, Optional

from firebase_admin import firestore
from flask import jsonify
from IPython.display import display
from langchain.prompts import ChatPromptTemplate
from langchain_community.document_loaders import PyPDFLoader
from langchain_core.prompts import ChatPromptTemplate
from langchain_openai import ChatOpenAI

from redis_client import r
from services.evaluation_service import EvaluationService

REDIS_TTL = 7200  # 1 hour

## Langchain設置

with open("static/evaluation_criteria.json", "r", encoding="utf-8") as f:
    evaluation_criteria = json.load(f)
    
def setup_langchain():
    os.environ["OPENAI_API_KEY"] = os.getenv("OPENAI_API_KEY")
    if not os.environ.get("OPENAI_API_KEY"):
        # 若沒設置OPENAI_API_KEY，待加
        pass
    # model = ChatOpenAI(model="gpt-4o-mini")
    model = ChatOpenAI(model="gpt-4o")
    return model

model = setup_langchain()

async def load_pdf(file_path: str, file_id: str, user_id: str) -> str:
    """
    讀取PDF並返回分段列表
    Args:
        file_path (str): PDF文件路徑/後續連接可不用
        file_id (str): 文件唯一id
        user_id (str): 使用者ID
    Returns:
        list: 文件內容的段落列表
    """
    try:
        loader = PyPDFLoader(file_path)
        pages = []
        async for page in loader.alazy_load():
            pages.append(page)

        full_text = ""
        for page in pages:
            full_text += page.page_content.replace("\n", "").replace(" ", "")
            
        # 使用divide_text將文本分段
        dividing_list = divide_text_noSuggestion(full_text)

        # 儲存 dividing_list 到 Redis
        r.set(f"{user_id}:{file_id}:dividing", json.dumps(dividing_list), ex=REDIS_TTL)
        # 儲存 summary 到 Redis
        r.set(f"file:{file_id}:summary", json.dumps(full_text), ex=REDIS_TTL)

        return dividing_list
    except Exception as e:
        raise ValueError(f"PDF加載失敗: {str(e)}")

    # 方法二：從 Firebase 讀檔 先註解
    # db = firestore.client()
    # bucket = storage_client.bucket(Config.FIREBASE_STORAGE_BUCKET)
    # blob = bucket.blob(file_path)
    # blob.download_to_filename(file_path)
    # loader = PyPDFLoader(file_path)
    # pages = []
    # async for page in loader.alazy_load():
    #     pages.append(page)
    # summary = ""
    # for page in pages:
    #     content = page.page_content.replace("\n", "").replace(" ", "")
    #     summary += content
    # r.set(f"file:{file_id}:summary", summary, ex=REDIS_TTL)
    # return summary

def get_dividingList_redis(user_id:str, file_id: str) -> str:
    data = r.get(f"{user_id}:{file_id}:dividing")
    if not data:
        raise ValueError("查無快取資料，請先呼叫 /allSuggestion 建立段落")
    return json.loads(data)

def get_summary_redis(file_id: str) -> str:
    data = r.get(f"file:{file_id}:summary")
    if not data:
        raise ValueError("查無快取資料，請先呼叫 /allSuggestion 建立段落")
    return json.loads(data)

def update_summary_redis(file_id: str, new_summary: str) -> None:
    if not file_id or not new_summary:
        raise ValueError("缺少必要的fileId或fileContent")
    r.set(f"file:{file_id}:summary", new_summary, ex=REDIS_TTL)
    return True

## 一、初步閱讀與診斷

def generate_learning_diagnosis(
    file_id: str,
    department: str,
    requirements: str,
    summary: str
) -> str:
    """
    診斷學生學習歷程並提供優化建議
    
    Args:
        department (str): 目標系所名稱
        requirements (str): 系所要求代號
        summary (str): 學習歷程總結/多元表現綜整心得
        problem (Optional[str], optional): 使用者自身認為已有的缺陷或疑問. Defaults to None.
    
    Returns:
        str: 診斷報告
    """
    # 定義可用的項目
    sections = {
        "F": "F：高中自主學習計畫與成果",
        "G": "G：社團活動經驗",
        "H": "H：擔任幹部經驗",
        "I": "I：服務學習經驗",
        "J": "J：競賽表現",
        "K": "K：非修課紀錄之成果作品",
        "L": "L：檢定證照",
        "M": "M：特殊優良表現證明",
        "N": "N：多元表現綜整心得",
        "O": "O：高中學習歷程反思",
        "P": "P：就讀動機",
        "Q": "Q：未來學習計畫與生涯規劃"
    }
    
    selected_sections = "\n".join([
        sections[char] for char in requirements if char in sections
    ])

    system_template = """
    你是一位專精於協助高中生優化大學入學申請學習歷程的專家。你的目標是診斷並優化學生的申請資料，申請目標為 {department}，資料內容需符合該校系規定指標：{requirements}，字母意義如下。

    {selected_sections}

    診斷要求: 請針對每一段落進行以下六項診斷，並提供具體建議，但只需輸出六個最嚴重的診斷問題，以清楚表達改善方向。
    1. 錯字與標點符號：檢查語法、錯別字或格式問題，指出並建議修正。
    2. 偏題部分：檢查段落是否偏離主題，並建議刪改或調整內容以回到核心目標。
    3. 精簡建議：指出冗長或重複的部分，提供簡潔表達的建議。
    4. 增長建議：如內容不足，建議補充與申請科系相關、能突顯學生特點的內容。
    5. 架構檢查：檢查段落的邏輯性與層次性，指出不清晰的部分並建議改善。
    6. 完整度：確認是否涵蓋該段落應有的必要內容，指出缺失並提供建議補充的方向。

    指導目標: 根據診斷結果，提出具體建議，使文字更加流暢且邏輯清晰，並突顯學生個人特點與其申請科系的相關性。確保整體語言符合專業審核標準。

    學習歷程總結/多元表現綜整心得:
    {summary}

    輸出規則: 請根據診斷過程，指出最嚴重的六個問題診斷，並按照以下範例格式簡明呈現。其中字母與數字代號根據以上規則執行。
    輸出格式: [字母代號][數字代號]:[問題類型][問題診斷結果]。
    輸出範例:
    1. O5：[架構檢查]在"某某"段落中，對於...。
    2. P2：[偏題部分]在"某某"段落中提到...建議...。
    3. ...
    最終結果: 總共會有六條問題類型與其問題描述與診斷。
    
    """

    prompt_template = ChatPromptTemplate.from_messages([("system", system_template)])
    prompt = prompt_template.invoke({
        "department": department,
        "requirements": requirements,
        "selected_sections": selected_sections,
        "summary": summary
    })

    response = model.invoke(prompt)
    return response.content

def process_diagnose_request(user_id: str, file_id: str, department_and_type: str) -> tuple:
    """
    處理診斷請求，解析資料並執行診斷
    Args:
        user_id (str): 使用者ID
        file_id (str): 檔案ID
        department_and_type (str): 系所與類型字串，格式為 "學校-系所-類型"
    Returns:
        tuple: (檔案內容, 診斷結果)
    """

    parts = department_and_type.split("-")
    if len(parts) < 2:
        raise ValueError("系所類型格式無效")
        
    department = "-".join(parts[:-1])  # 學校和系所名稱可能包含連字號
    requirements = parts[-1]
    
    # 檔案路徑 #未來更改
    # file_path = "C:\\Users\\owner\\Documents\\NCCU\\專題\\初步閱讀與診斷用的.pdf"
    # file_path = "C:\\Users\\sophi\\OneDrive\\桌面\\初步閱讀與診斷用的(1).pdf"
    file_path = "\\Users\\hy\\Downloads\\初步閱讀與診斷用的(1).pdf"
    
    # 讀取檔案內容 同步呼叫非同步函數
    dividing_list = run_async_function(lambda: load_pdf(file_path, file_id, user_id))
    
    # 將完整文本連接起來用於診斷
    file_content = "\n\n".join(dividing_list)

    diagnosed_result = generate_learning_diagnosis(
        file_id=file_id,
        department=department,
        requirements=requirements,
        summary=file_content
    )
    
    # 將diagnosed_result存入Redis
    r.set(f"file:{file_id}:diagnosed_result", diagnosed_result, ex=REDIS_TTL)
    # 將department存入Redis，summary僅供使用者於初步診斷修改完後、傳遞給allSuggestion
    r.set(f"file:{file_id}:department", department, ex=REDIS_TTL)

    return file_content, diagnosed_result

## 二、生成引導式問題

def evaluate_content_quality(diagnosis_result: str) -> str:
    """
    評估內容品質的三個維度
    
    Args:
        diagnosis_result (str): 初步診斷結果
        
    Returns:
        str: 內容品質評估結果
    """
    # 確保 model 已初始化
    model = setup_langchain()
    
    system_template_quality_check = """
    任務：

    請根據提供的學生初步閱讀與診斷檔案{diagnosis_result}，評估其內容品質，並針對三個維度進行診斷：

    1. 必要性 (高)：是否缺少學系或學校要求的關鍵內容（如學習動機、未來規劃等）？
    2. 完整性 (中)：內容是否過於簡短、籠統，缺少細節或具體事例？
    3. 擴展性 (低)：內容是否完整但略顯平淡，缺少個人特色？

    輸出格式：
        "必要性": 必要性診斷結果
        "完整性": 完整性整段結果
        "擴展性": 擴展性診斷結果
        "結論": 簡述以上問題與可改進的部分
    """

    prompt_quality_check = ChatPromptTemplate.from_messages([
        ("system", system_template_quality_check)
    ])

    quality_check_prompt = prompt_quality_check.invoke({"diagnosis_result": diagnosis_result})
    quality_check_response = model.invoke(quality_check_prompt)
    return quality_check_response.content

def identify_student_issues(stu_problem: str) -> str:
    """
    識別學生的核心問題
    
    Args:
        stu_problem (str): 學生提出的問題
        
    Returns:
        str: 識別出的核心問題清單
    """
    # 確保 model 已初始化
    model = setup_langchain()
    
    system_template_identify_issues = """
    任務：

    學生填寫的自身疑問或學習缺陷是"{stu_problem}"，請從以上的需求列出1-3個核心問題。

    限制條件：
    1. 問題應來自學生的填寫內容，勿額外推測。
    2. 只挑選最多三個與學習歷程高度相關的問題。

    輸出格式限制如下，不要有空行或標號：
    ["學生疑問 1", "學生疑問 2", "學生疑問 3"]
    """

    prompt_identify_issues = ChatPromptTemplate.from_messages([
        ("system", system_template_identify_issues)
    ])

    identify_issues_prompt = prompt_identify_issues.invoke({"stu_problem": stu_problem})
    identify_issues_response = model.invoke(identify_issues_prompt)
    return identify_issues_response.content

def generate_guided_questions(previous_suggestion: str, diagnosis_result: str, student_problem: str) -> list[str]:
    """
    生成引導式問題清單
    
    Args:
        previous_suggestion (str): 原有的具體建議
        diagnosis_result (str): 三維度診斷結果
        student_problem (str): 學生問題
        
    Returns:
        List[str]: 引導式問題清單
    """
    # 確保 model 已初始化
    model = setup_langchain()
    
    system_template_questions = """
    任務：
    原有的具體建議為:{previous_suggestion}
    三維度診斷結果:{diagnosis_result}、與學生問題"{problem}"提出最多十個具體的引導式問題，幫助學生完善個人化學習歷程，以供學生完善大學入學檔案。
    問題應該幫助學生：
    1. 深入反思個人經歷
    2. 凸顯獨特性和成長
    3. 連結學習動機與未來規劃
    注意問題避免過於攏統與概括。

    最後，請務必要輸出格式成以下形式、用逗號分開:
    問題1, 問題2, 問題3, ..., 問題10
    """

    prompt_template_questions = ChatPromptTemplate.from_messages([
        ("system", system_template_questions)
    ])

    combined_input = {
        "previous_suggestion": previous_suggestion,
        "diagnosis_result": diagnosis_result,
        "problem": student_problem
    }
    
    questions_prompt = prompt_template_questions.invoke(combined_input)
    questions_response = model.invoke(questions_prompt)
    
    # 解析問題清單
    return parse_questions(questions_response.content)

def parse_questions(questions_string: str) -> list[str]:
    """
    解析問題字串為清單
    
    Args:
        questions_string (str): 問題字串，以逗號分隔
        
    Returns:
        List[str]: 問題清單
    """
    if "：" in questions_string:
        questions_string = questions_string.split("：", 1)[1].strip()
    
    questions = [q.strip() for q in questions_string.split(",")]
    clean_questions = []
    
    for q in questions:
        if "." in q:
            parts = q.split(".")
            clean_questions.append(parts[0].strip())
            if len(parts) > 1 and parts[1].strip():
                clean_questions.append(parts[1].strip())
        else:
            clean_questions.append(q)
            
    clean_questions = [q for q in clean_questions if q]
    return clean_questions

def gen_questions(file_id: str, student_problem: Optional[str] = None) -> Dict:
    """生成引導問題"""
    # 從 Redis 獲取診斷結果,檔案內容和系所名稱
    diagnosed_result = r.get(f"file:{file_id}:diagnosed_result")
    if not diagnosed_result:
        raise ValueError("請先進行診斷，然後再進行全面評估。")
    
    file_content = r.get(f"file:{file_id}:summary")
    if not file_content:
        raise ValueError("請先讀取 PDF 檔案，然後再進行診斷。")

    department = r.get(f"file:{file_id}:department")
    if not department:
        raise ValueError("請先讀取系所名稱，然後再進行全面評估。")
    
    # 評估內容品質
    quality_assessment = evaluate_content_quality(diagnosed_result)
    
    # 識別學生問題
    if student_problem:
        core_issues = identify_student_issues(student_problem)
    else:
        core_issues = "[]"  # 空清單
    
    # 生成引導問題
    guided_questions = generate_guided_questions(diagnosed_result, quality_assessment, core_issues)
    
    # 組合所有結果
    results = {
        "coreIssues": core_issues,
        "guidedQuestions": guided_questions
    }
    
    return results

def save_qa(QA_response: str, user_id: str, file_id: str) -> None:
    """
    儲存引導問題與學生回答
    Args:
        QA_response (str): 引導問題與學生回答的字串
        user_id (str): 使用者ID
        file_id (str): 檔案ID
    """
    
    if QA_response!= "":
        # 儲存到 Redis 中，設定 TTL 為 1 小時
        r.set(f"{user_id}:{file_id}:QA_response", QA_response, ex=REDIS_TTL)
        return True
    return False


## 三、檢查全文邏輯與流暢度

def all_check(summary: str) -> Dict[str, Any]:
    """
    分析文本長度並提供字數建議和流暢度檢查
    Args:
        summary (str): 需要分析的文本內容
    Returns:
        Dict: 包含字數統計、建議和全文檢查結果的字典
    """
    def count_words(text: str) -> int:
        """計算文本字數"""
        return len(text.split())

    def count_characters(text: str) -> int:
        """計算文本字元數"""
        return len(text)

    # 計算字數
    word_count = count_words(summary)
    char_count = count_characters(summary)

    # 字數建議
    if word_count > 800:
        word_feedback = "⚠️ 字數超標，建議精簡部分內容（壓縮 50-100 字）。"
    elif word_count < 600:
        word_feedback = "⚠️ 内容過於簡略，建議擴充部分細節（增加 50-100 字）。"
    else:
        word_feedback = "✅ 字數適中，無需特別修改長度。"

    # 字數統計摘要
    word_count_summary = f"""
    📌 字數統計
    - 總字數：{word_count} 字
    - 總字元數：{char_count} 字元
    - 字數建議：{word_feedback}
    """

    # 檢查邏輯與流暢度的 Prompt 模板
    all_template_check = """
    你是一位專業的文字編輯專家，負責檢查大學入學書面資料，確保內容邏輯清晰、詳細且具說服力。請根據以下要求分析全文：
    1. 段落間的邏輯關聯性與自然過渡：確保每段之間的銜接順暢，沒有突兀的跳躍。
    2. 細節的深度與支撐力：檢查是否有足夠的例證來支持論點。
    3. 與學校特色或系所方向的關聯：確認是否能展現對該學校或系所的理解與適配性。
    4. 表達方式的流暢與精準：修正冗長、模糊或語意不清的句子。

    步驟
    - 先閱讀全文{origin_text}，分析每個段落的主要內容。
    - 依據{word_count_summary}得知字數改進的建議
    - 針對全文提供 總體改進方向，確保不同段落不會過度重複內容。
    - 為每個段落標記 需要改善的重點，例如：
        - 段落 1（開頭）：「需更明確表達動機。」
        - 段落 3（學科連結）：「應強調該學校的課程特色。」
        - 段落 5（結尾）：「可以更有力地總結動機。」

    請按照以下格式輸出純JSON回應：
    {{
        "全文總體建議": {{
            "邏輯與過渡": "...",
            "細節深度": "...",
            "學系關聯": "...",
            "表達流暢性": "...",
            "字數建議": "..."
        }},
        "各段落改進方向": {{
            "段落 1": "...",
            "段落 2": "...",
            ...
        }}
    }}
    """

    # 創建 Prompt 模板
    prompt_template_check = ChatPromptTemplate.from_messages([
        ("system", all_template_check)
    ])
    
    # 調用模型進行分析
    check_prompt = prompt_template_check.invoke({
        "origin_text": summary,
        "word_count_summary": word_count_summary
    })
    check_response = model.invoke(check_prompt)

    try:
        # 嘗試解析響應為 JSON
        flow_analysis = json.loads(check_response.content)
    except json.JSONDecodeError:
        # 若解析失敗，創建一個預設結構
        flow_analysis = {
            "全文總體建議": {
                "邏輯與過渡": "無法自動解析",
                "細節深度": "無法自動解析",
                "學系關聯": "無法自動解析",
                "表達流暢性": "無法自動解析",
                "字數建議": word_feedback
            },
            "各段落改進方向": {}
        }

    # 組合結果
    result = {
        "字數統計": {
            "總字數": word_count,
            "總字元數": char_count,
            "字數建議": word_feedback
        },
        "流暢度分析": flow_analysis
    }

    return result

## 四、逐段深入改寫

def divide_text_noSuggestion(text: str) -> list:
    #逐段深入預分段
    system_template = """
    你是一個專業的文本切割工具，請根據給定的文章內容，嚴格依照4至6段落數，將文章內容拆分成有意義的段，若段落含有標題請將標題也涵蓋入該段落(標題與段落間有空行也要跟著空行)。
    文章：{full_text}
    請一定要回傳 list格式如下
    ["這是第一段內容",這是第二段內容",...]
    """
    dividing_list = []

    prompt_template = ChatPromptTemplate.from_messages([("system", system_template)])
    prompt = prompt_template.invoke({"full_text": text})
    dividing_response = model.invoke(prompt)
    try:
        dividing_list = json.loads(dividing_response.content)
    except json.JSONDecodeError:
        print("❌ GPT 回傳錯誤內容：", dividing_response.content)
        raise

    return dividing_list

def divide_text(file_id: str, text: str) -> list:
    #逐段深入預分段
    system_template = """
    你是一個專業的文本分析工具，請根據給定的文章內容，嚴格依照{check_response}建議的段落數，將文章內容拆分成有意義的段，若段落含有標題請將標題也涵蓋入該段落(標題與段落間有空行也要跟著空行)。
    文章：{full_text}
    請一定要回傳 list格式
    ["這是第一段內容",這是第二段內容",...]
    """
    dividing_list = []
    all_check_response = json.dumps(all_check(text), ensure_ascii=False)
    # 存入 Redis
    r.set(f"file:{file_id}:all_check_response", all_check_response, ex=REDIS_TTL)

    prompt_template = ChatPromptTemplate.from_messages([("system", system_template)])
    prompt = prompt_template.invoke({"full_text": text, "check_response": all_check_response})
    dividing_response = model.invoke(prompt)
    try:
        dividing_list = json.loads(dividing_response.content)
    except json.JSONDecodeError:
        print("❌ GPT 回傳錯誤內容：", dividing_response.content)
        raise

    return dividing_list

# 逐段深入改寫的 Prompt 模板
def rewrite_paragraph(rewrite_paragraph: str, response_content: str, QA: str, check_response_content: str) -> dict :
    system_template_rewrite = """
    你是一位專業的文字編輯專家，專門幫助高中生修改大學入學書面資料。我將提供以下內容：
    1. 欲修改的段落：{rewrite_paragraph}
    2. 初步診斷分析：{modification_suggestion}
    3. 引導學生深入思考的問題清單與回答：{question_list}
    4. 全文完整修改建議：{complete_suggestion}

    請依下列步驟執行：
    【步驟 1：整合問答】
    - 僅納入與本段落內容最相關的 1～2 組問答。
    - 若學生回答中無實際經驗，請略過該組問答。

    【步驟 2：提出修改方向與具體建議】
    - 結合「初步診斷分析」與「全文修改建議」，提出此段的改進方向。
    - 修改建議應簡潔、有邏輯、符合高中生語氣。

    【步驟 3：修改段落】
    - 改善語句流暢度、邏輯與說服力。
    - 若有需要，可補充例證（避免與其他段落重複）。
    - 句型保持清晰簡單，避免過度學術化。

    【步驟 4：條列細項修改】
    每項修改請分類，若修改僅為詞語變動，請**僅顯示變動詞語的前後對照**；若涉及整句調整，才顯示完整句子。

    分類包含：
    - 修正錯字（含標點）
    - 聚焦主題（刪除偏題句）
    - 精簡語句（刪除冗詞）
    - 補充內容（補足要點或例證）
    - 修正文句（語法或語序調整）
    - 其他建議（語氣、邏輯或風格改善）


    輸出成json，以下是範例，請務必要按照以下格式輸出、不可有```json等格式出現：
    {{
        "該段落改進方向": "請提供改寫的主要方向。",
        "細項": [
        {{
        "類別": "修正錯字",
        "修改建議": "修正拼字錯誤。",
        "修改前句子": "堅持不懈",
        "修改後句子": "堅持不懈"}},
        {{
        "類別": "精簡語句",
        "修改建議": "刪除重複詞語。",
        "修改前句子": "實際實踐",
        "修改後句子": "實踐"}},
        {{
        "類別": "補充內容",
        "修改建議": "補充具體例子。",
        "修改前句子": "我很關心社會議題。",
        "修改後句子": "我關心社會議題，例如我曾參與校內環保社舉辦的二手市集。"}},
        {{
        "類別": "其他建議",
        "修改建議": "請提供語氣上的改善。",
        "修改前句子":"這是一個修改前的句子示例。",
        "修改後句子": "這是一個修改後的句子示例。"}},...
        ],
        "段落完整修改前內容": "這是經過改寫前的完整段落內容..."
        "段落完整修改後內容": "這是經過改寫後的完整段落內容..."
    }}

    """
    # 創建 Prompt 模板
    prompt_template_rewrite = ChatPromptTemplate.from_messages([("system", system_template_rewrite)])

    rewrite_prompt = prompt_template_rewrite.invoke({"rewrite_paragraph":rewrite_paragraph,"modification_suggestion": response_content,"question_list":QA, "complete_suggestion":check_response_content})
    rewrite_response = model.invoke(
        rewrite_prompt,
        temperature=0.7,  # 增加到 0.7-0.8，提高創造性
        top_p=0.9,     # 略微降低以保持多樣性但避免過於奇怪的表達
        #top_k=40      # 增加到 40-50，擴大可能的詞彙選擇範圍
    )
    #print(rewrite_response.content)
    suggestion_dict = json.loads(rewrite_response.content)

    return suggestion_dict

def get_rewrite_suggestions(user_id: str, file_id: str, file_content: str):
    # 檢查輸入參數的有效性
    if not all([user_id, file_id, file_content]):
        raise ValueError("user_id, file_id 和 file_content 不能為空")

    # 從 Redis 獲取必要資料
    responses = {
        "first_response": r.get(f"file:{file_id}:diagnosed_result"),
        "QA_response": r.get(f"{user_id}:{file_id}:QA_response"),
        "all_check_response": r.get(f"file:{file_id}:all_check_response")
    }
    #QA_response = "Q: 你學習 C++ 和 3D 建模的動機是什麼？這些技能對你的長期職業目標有何影響？A: 我對遊戲開發和科技很有興趣，C++ 是很多遊戲引擎的基礎，而 3D 建模可以幫我創造出遊戲中的角色或場景。這些技能如果學得好，將來想進遊戲公司或當自由開發者都很有幫助。Q: 在自學過程中有哪些學習策略或工具對你特別有效？A: 我覺得看 YouTube 教學影片配合實作最有效，像是邊看邊跟著打程式碼。另外也會用筆記把重點整理起來，有時還會上網站像是 W3Schools 或是 Unity 教學文件。Q: 你如何評估自己的學習成果，以便能在未來的工作或學業中充分展現？A: 我會做一些小專案來測試學到的東西，例如用 C++ 做個小遊戲或用 Blender 建模做出角色。這些成果可以放在作品集裡，以後找實習或申請大學可以用來展示實力。"
    
    # 檢查必要資料是否存在
    for key, value in responses.items():
        if not value:
            raise ValueError(f"找不到{key}資料，請先完成相應操作")

    # 分段存入 Redis，設定 TTL 為 1 小時
    try:
        dividing_list = divide_text(file_id, file_content)
    except Exception as e:
        print(f"分段文本時發生錯誤: {e}")
        raise
    r.set(f"{user_id}:{file_id}:dividing", json.dumps(dividing_list), ex=REDIS_TTL)

    def process_one(index, paragraph):
        try:
            if paragraph.strip():
                suggestion = rewrite_paragraph(
                    rewrite_paragraph=paragraph,
                    response_content=responses["first_response"],
                    QA=responses["QA_response"],
                    check_response_content=responses["all_check_response"]
                )
                r.set(f"{user_id}:{file_id}:suggestion:{index + 1}", json.dumps(suggestion), ex=REDIS_TTL)
                return {f"第{index + 1}段": suggestion}
        except Exception as e:
            print(f"處理第 {index + 1} 段時發生錯誤: {e}")
        return None

    # 多執行緒處理所有段落
    results = []
    with ThreadPoolExecutor(max_workers=12) as executor:
        futures = [executor.submit(process_one, idx, para) for idx, para in enumerate(dividing_list)]
        for f in futures:
            result = f.result()
            if result:
                results.append(result)
    
    return results


def get_single_rewrite_suggestion(user_id: str, file_id: str, index: int):
    data = r.get(f"{user_id}:{file_id}:dividing")
    if not data:
        raise ValueError("查無快取資料，請先呼叫 /allSuggestion 建立段落")
    dividing_list = json.loads(data)

    first_response = r.get(f"file:{file_id}:diagnosed_result")
    QA_response = r.get(f"{user_id}:{file_id}:QA_response")
    all_check_response = r.get(f"file:{file_id}:all_check_response")

    suggestion = rewrite_paragraph(
                rewrite_paragraph=dividing_list[index],
                response_content=first_response,
                QA=QA_response,
                check_response_content=all_check_response
            )
    
    r.set(f"{user_id}:{file_id}:suggestion:{index+1}", json.dumps(suggestion), ex=REDIS_TTL)

    return suggestion

def accept_suggestion(user_id: str, file_id: str, paragraph_index: int, original_sentence: str):
    """
    在指定段落中找出 original_sentence 對應的細項，
    並以該細項中的修改後句子覆蓋原句，然後更新 dividing。
    """
    dividing_key = f"{user_id}:{file_id}:dividing"
    suggestion_key = f"{user_id}:{file_id}:suggestion:{paragraph_index}"

    dividing_data = r.get(dividing_key)
    suggestion_data = r.get(suggestion_key)

    if not dividing_data or not suggestion_data:
        raise ValueError("找不到段落或建議資料")

    dividing_list = json.loads(dividing_data)
    suggestion = json.loads(suggestion_data)

    paragraph = dividing_list[paragraph_index-1]
    replaced = False

    for i, item in enumerate(suggestion["細項"]):
            before = item.get("修改前句子")
            after = item.get("修改後句子")
            if before and after and before.strip() == original_sentence.strip():
                paragraph = paragraph.replace(before, after, 1)
                del suggestion["細項"][i]  # 刪除該筆建議
                replaced = True
                break  # 僅處理該筆細項，避免其他相似句誤蓋

    if not replaced:
        print(f"找不到對應的修改建議：{original_sentence}")
        raise ValueError("找不到對應的修改建議或原句不在段落中")

    dividing_list[paragraph_index-1] = paragraph
    r.set(dividing_key, json.dumps(dividing_list))
    r.set(suggestion_key, json.dumps(suggestion))
    
def edit_paragraph(user_id: str, file_id: str, index: int, new_text: str) -> bool:
    """
    儲存使用者接受的段落改寫內容到 Redis。
    """
    key = f"{user_id}:{file_id}:dividing"
    data = r.get(key)
    
    if not data:
        raise ValueError("Redis 中找不到原始段落，請先呼叫 /allSuggestion")

    try:
        dividing_list = json.loads(data)
    except json.JSONDecodeError:
        raise ValueError("Redis 中的資料格式錯誤，無法解析")

    # 更新指定段落
    if index < 1 or index > len(dividing_list):
        raise IndexError("段落索引超出範圍")

    dividing_list[index-1] = new_text

    # 儲存回 Redis（覆蓋原本內容）
    r.set(key, json.dumps(dividing_list), ex=REDIS_TTL)
    print("edit_paragraph successfully")
    
def get_specified_paragraph(user_id: str, file_id: str, index: int):

    """
    根據段落索引從 Redis 中取得指定段落的所有修改前句子。
    """
    # 構建 Redis 鍵
    suggestion_key = f"{user_id}:{file_id}:suggestion:{index}"

    # 從 Redis 讀取該段建議
    data = r.get(suggestion_key)

    if not data:
        raise ValueError(f"找不到指定的段落建議：{suggestion_key}")

    # 解析資料
    suggestion = json.loads(data)
    # 提取段落的修改前內容
    modification_before_sentences = []
    
    if "細項" in suggestion:
        for item in suggestion["細項"]:
            if "修改前句子" in item:
                modification_before_sentences.append(item["修改前句子"])


    if not modification_before_sentences:
        raise ValueError(f"該段落無修改前句子：{suggestion_key}")

    return {
        "段落編號": index,
        "修改前句子": modification_before_sentences
    }


## 五、最後評分

def evaluate_full_text(user_id: str, file_id: str) :
    """
    合併所有段落的原文與改寫後內容，並送入 GPT 評估整體品質。
    """

    # 1. 從 Redis 取出 dividing_list（原始段落）
    data = r.get(f"{user_id}:{file_id}:dividing")
    if not data:
        raise ValueError("Redis 中找不到分段內容，請先執行 /allSuggestion 建立段落")

    try:
        dividing_list = json.loads(data)
    except Exception as e:
        raise ValueError(f"無法解析 Redis 中的分段資料：{str(e)}")

    # 2. 合併原始段落與修改後段落
    full_text = "\n\n".join(dividing_list)



    # 4. 建立 Prompt
    evaluation_template =evaluation_template = """
        任務：你是一位招生評審委員，請根據提供的文章進行評估與建議。

        請根據以下六個面向對文章給分與提供建議：
        1. 錯字&標點符號
        2. 偏題
        3. 精簡
        4. 增長
        5. 架構
        6. 完整度

        請使用以下 JSON 格式回傳結果（務必為有效 JSON，避免出現 ```json 標記或多餘的文字）：

        {{
        "scores": [int, int, int, int, int, int, float],  // 六項評分 + 總平均 (0~5 分)
        "scoreLabels": [
            "錯字&標點符號",
            "偏題",
            "精簡",
            "增長",
            "架構",
            "完整度",
            "總分"
        ],
        "suggestions": [
            "針對錯字與標點符號的建議",
            "針對偏題問題的建議",
            "針對是否精簡的建議",
            "針對是否應補充內容的建議",
            "針對段落架構邏輯性的建議",
            "針對內容完整性的建議",
            "整體總結建議"
        ]
        }}

        請評估以下文章：
        文章內容：
        {end_text}

        評分標準：
        {evaluation_criteria}
        """


    prompt_template = ChatPromptTemplate.from_messages([("system", evaluation_template)])
    evaluation_prompt = prompt_template.invoke({
        "end_text": full_text,
        "evaluation_criteria": evaluation_criteria
    })

    response = model.invoke(evaluation_prompt)
    evaluation_result = json.loads(response.content)
    
    # 存入Firebase
    db = firestore.client()
    evaluation_service = EvaluationService(db)
    evaluation_service.create_evaluation(
        user_id=user_id,
        file_id=file_id,
        scores=evaluation_result["scores"],
        score_labels=evaluation_result["scoreLabels"],
        suggestions=evaluation_result["suggestions"]
    )
    return evaluation_result
    

def get_statistics(user_id: str, file_id: str):
    """
    根據 Redis 中 suggestion 資料統計：段落數、修改建議、語法問題、表達優化。
    """
    dividing_key = f"{user_id}:{file_id}:dividing"
    dividing_data = r.get(dividing_key)
    if not dividing_data:
        raise ValueError("請先呼叫 /allSuggestion 建立段落")

    suggestions = []
    i = 1
    while True:
        s_key = f"{user_id}:{file_id}:suggestion:{i}"
        s_data = r.get(s_key)
        if not s_data:
            break
        suggestions.append(json.loads(s_data))
        i += 1

    num_paragraphs = len(suggestions)
    total_revisions = 0
    grammar_issues = 0
    expression_issues = 0
    other_suggestion=0
    
    for s in suggestions:
        for item in s["細項"]:
            total_revisions += 1
            if item.get("類別") in ["修正文句", "修正錯字"]:
                grammar_issues += 1
            elif item.get("類別") in ["精簡語句", "聚焦主題", "補充內容","補足要點"]:
                expression_issues += 1
            else:
                other_suggestion += 1

    return {
        "段落": num_paragraphs,
        "修改建議": total_revisions,
        "語法問題": grammar_issues,
        "表達優化": expression_issues,
        "其他建議": other_suggestion
    }

## 其他

def run_async_function(async_func):
    """
    執行非同步函數並返回結果
    
    Args:
        async_func: 要執行的非同步函數
        
    Returns:
        非同步函數的執行結果
    """
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    try:
        return loop.run_until_complete(async_func())
    finally:
        loop.close()