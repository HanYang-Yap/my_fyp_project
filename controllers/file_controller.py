import asyncio
import os
import traceback

from flask import (Blueprint, Flask, jsonify, render_template, request,
                   send_file)

from services.file_service import (accept_suggestion, edit_paragraph,
                                   evaluate_full_text, gen_questions,
                                   get_dividingList_redis,
                                   get_rewrite_suggestions,
                                   get_single_rewrite_suggestion,
                                   get_specified_paragraph, get_statistics,
                                   get_summary_redis, process_diagnose_request,
                                   save_qa, update_summary_redis)

file_bp = Blueprint('file_bp', __name__)
env = os.getenv("OPENAI_API_KEY", "development")

@file_bp.route("/diagnose", methods=["POST"])
def diagnose():
    #一、初步閱讀與診斷 呈現內容
    try:
        data = request.get_json()
        if not all(key in data for key in ["userId", "fileId", "departmentandtype"]):
            return jsonify({"error": "缺少必要欄位"}), 400
        
        user_id = data["userId"]
        file_id = data["fileId"]
        department_and_type = data["departmentandtype"]

        file_content, diagnosed_result = process_diagnose_request(user_id, file_id, department_and_type)

        response = {
            "fileId": file_id,
            "userId": user_id,
            "diagnosedResult": diagnosed_result,
            "fileContent": file_content
        }

        return jsonify(response), 200
        
    except ValueError as e:
        return jsonify({"error": str(e)}), 400
    except Exception as e:
        return jsonify({"error": f"發生非預期錯誤: {str(e)}"}), 500

@file_bp.route("/questions", methods=["POST"])
def get_guided_questions():
    """取得引導式問題清單"""
    try:
        data = request.get_json()
        if not all(key in data for key in ["userId", "fileId"]):
            return jsonify({"error": "缺少必要欄位"}), 400
        
        user_id = data["userId"]
        file_id = data["fileId"]
        student_problem = data.get("stuproblem")  # 可選參數

        questions = gen_questions(file_id, student_problem)
        
        # 回傳問題清單
        return jsonify(questions), 200
        
    except ValueError as e:
        return jsonify({"error": str(e)}), 400
    except Exception as e:
        return jsonify({"error": f"發生非預期錯誤: {str(e)}"}), 500
    
@file_bp.route('/saveQA', methods=['POST'])
def save_QandA():
    try:
        data = request.get_json()
        user_id = data.get("userId")
        file_id = data.get("fileId")
        QA_response = data.get("QA_response")
        if not all([user_id, file_id, QA_response]):
            return jsonify({"error": "缺少必要的參數(userId, fileId, QA_response)"}), 400
        
        # 儲存問題與答案
        success = save_qa(QA_response, user_id, file_id)
        if success:
            return jsonify({"message": "儲存成功"}), 200
        else:
            return jsonify({"error": "儲存失敗"}), 500

    except Exception as e:
        return jsonify({"error": f"伺服器錯誤: {str(e)}"}), 500
    
@file_bp.route('/allSuggestion', methods=['POST'])
def all_suggestions():
    try:
        data = request.get_json()
        user_id = data.get("userId")
        file_id = data.get("fileId")

        file_content = get_summary_redis(file_id)
        if not file_content.strip() or not user_id or not file_id:
            raise ValueError("缺少 fileContent、userId 或 fileId")

        suggestions = get_rewrite_suggestions(user_id, file_id, file_content)
        return jsonify({"suggestions": suggestions})

    except ValueError as ve:
        return jsonify({"error": str(ve)}), 400
    except Exception as e:
        return jsonify({"error": "伺服器錯誤", "details": str(e)}), 500
    
@file_bp.route('/singleSuggestion', methods=['POST'])
def single_suggestion():
    try:
        data = request.get_json()
        user_id = data.get("userId")
        file_id = data.get("fileId")
        index = int(data.get("index", -1))

        if not user_id or not file_id or index < 0:
            raise ValueError("請提供 userId, fileId 與有效 index")

        suggestion = get_single_rewrite_suggestion(user_id, file_id, index)
        return jsonify({"suggestion": suggestion})

    except ValueError as ve:
        return jsonify({"error": str(ve)}), 400
    except Exception as e:
        return jsonify({"error": "伺服器錯誤", "details": str(e)}), 500
    
@file_bp.route('/evaluation', methods=['POST'])
def evaluate_text():
    try:
        data = request.get_json()
        user_id = data.get("userId")
        file_id = data.get("fileId")

        if not user_id or not file_id:
            return jsonify({"error": "請提供 userId 與 fileId"}), 400

        result_dict = evaluate_full_text(user_id, file_id)

        return jsonify({"message": "評分成功", "data": result_dict})

    except Exception as e:
        return jsonify({"error": "伺服器錯誤", "details": str(e)}), 500
    
@file_bp.route("/acceptSuggestion", methods=["POST"])
def accept_suggestion_route():
    try:
        data = request.get_json()
        user_id = data.get("userId")
        file_id = data.get("fileId")
        paragraph_index = data.get("paragraphIndex")
        original_sentence = data.get("originalSentence")

        if not all([user_id, file_id, isinstance(paragraph_index, int), original_sentence]):
            return jsonify({"error": "userId, fileId, paragraphIndex, originalSentence 為必填項"}), 400

        accept_suggestion(user_id, file_id, paragraph_index, original_sentence)

        return jsonify({"message": "建議已成功套用"}), 200

    except ValueError as ve:
        print(str(ve))
        return jsonify({"error": str(ve)}), 400
    except Exception as e:
        print(str(e))
        return jsonify({"error": "伺服器錯誤", "details": str(e)}), 500

@file_bp.route('/editParagraph', methods=['POST'])
def edit_paragraph_api():
    try:
        data = request.get_json()
        user_id = data.get("userId")
        file_id = data.get("fileId")
        index = data.get("index")
        new_text = data.get("newText")

        if not all([user_id, file_id, isinstance(index, int), new_text]):
            raise ValueError("請提供 userId, fileId, index 與 newText")

        edit_paragraph(user_id, file_id, index, new_text)

        return jsonify({"message": "success"})

    except Exception as e:
        print("🔥 未預期錯誤：", str(e))
        traceback.print_exc()
        return jsonify({"error": "伺服器錯誤", "details": str(e)}), 500
    
@file_bp.route('/getBeforeSetence', methods=['POST'])
def get_paragraph():
    # 從 URL 請求中獲取 user_id, file_id 和段落索引
    data= request.get_json()
    user_id = data.get('userId')
    file_id = data.get('fileId')
    index = data.get('index')
    

    if not user_id or not file_id or index is None:
        return jsonify({"error": "缺少必要的參數(userId, fileId, index)"}), 400

    try:
        # 調用函式來取得指定段落的修改前句子
        result = get_specified_paragraph(user_id, file_id, index)
        return jsonify(result)
    except ValueError as e:
        return jsonify({"error": str(e)}), 400

@file_bp.route('/statistics', methods=['POST'])
def post_statistics():
    try:
        data = request.get_json()
        user_id = data.get("userId")
        file_id = data.get("fileId")

        if not user_id or not file_id:
            return jsonify({"error": "請提供 userId 和 fileId"}), 400

        stats = get_statistics(user_id, file_id)

        return jsonify({"message": "success", "data": stats})

    except ValueError as ve:
        return jsonify({"error": str(ve)}), 400
    except Exception as e:
        return jsonify({"error": "伺服器內部錯誤", "details": str(e)}), 500

@file_bp.route('/updateFullText', methods=['POST'])
def update_file():
    try:
        data = request.get_json()
        file_id = data.get("fileId")
        file_content = data.get("fileContent")
        if not file_id or not file_content:
            return jsonify({"error": "缺少必要的fileId或fileContent"}), 400
        # 更新 Redis 中的文件內容
        update_summary_redis(file_id, file_content)
        return jsonify({"message": "更新成功"}), 200

    except ValueError as ve:
        return jsonify({"error": str(ve)}), 400
    except Exception as e:
        return jsonify({"error": "伺服器內部錯誤", "details": str(e)}), 500

@file_bp.route('/getFullText', methods=['POST'])
def get_full_text():
    try:
        data = request.get_json()
        user_id = data.get("userId")
        file_id = data.get("fileId")
        if not user_id or not file_id:
            return jsonify({"error": "缺少必要的userId或fileId"}), 400
        
        dividing_list = get_dividingList_redis(user_id, file_id)
        full_text = "\n\n".join(dividing_list)
        return jsonify({"fileContent": full_text}), 200

    except ValueError as ve:
        return jsonify({"error": str(ve)}), 400
    except Exception as e:
        return jsonify({"error": "伺服器內部錯誤", "details": str(e)}), 500

@file_bp.route('/getFullSummary', methods=['POST'])
def get_full_summary():
    try:
        data = request.get_json()
        file_id = data.get("fileId")
        if not file_id:
            return jsonify({"error": "缺少fileId"}), 400
        full_text = get_summary_redis(file_id)
        return jsonify({"fileContent": full_text}), 200
    except ValueError as ve:
        return jsonify({"error": str(ve)}), 400
    except Exception as e:
        return jsonify({"error": "伺服器內部錯誤", "details": str(e)}), 500
