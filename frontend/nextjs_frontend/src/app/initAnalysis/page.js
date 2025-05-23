'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import '@/../public/css/initAnalysis.css'; // Import the CSS file directly

export default function InitAnalysis() {
  const router = useRouter();
  const [content, setContent] = useState('');
  const [userInput, setUserInput] = useState('');

  // Define the handleContentChange function
  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  useEffect(() => {
    // Check if we came from portfolio upload
    const analysisData = localStorage.getItem('currentAnalysis');
    if (!analysisData) {
      // If no analysis data, redirect back to portfolio upload
      router.push('/portfolioUpload');
      return;
    }

    // Set initial content from localStorage
    setContent(`在高中三年的學習歷程中，我不斷探索與發掘自己的興趣與專長。藝術創作一直是我從小的興趣，但隨著對科技領域的接觸，我開始發現自己對程式設計和資訊科學有著濃厚的好奇心；不只是試過 C++程式語言，還接觸了 3D 建模軟體和數位繪圖。我發現自己特別喜歡將抽象的概念具體化，這讓我確信資訊管理是我想深入研究的方向。

在校期間，我參與了許多實驗和專題研究。電阻實驗讓我學會如何收集數據並使用Excel進行分析，雖然實驗本身並不複雜，但這過程培養了我的耐心和細心，也是我首次體會到數據分析的魅力。此外，我也積極參與社團活動，擔任電腦社副社長，定期舉辦程式設計工作坊，幫助對程式設計感興趣的同學入門。

資訊領域的實作經驗是我最為重視的部分。大三下學期，我開始學習Python語言，並完成了一個數據分析專案。這是一個針對台灣股市過去十年數據的分析項目，使用pandas和matplotlib進行數據處理和視覺化。首先，我收集了大量的歷史交易數據，然後對數據進行清洗和標準化，去除異常值。接著，我使用各種統計方法分析不同產業的表現趨勢，並開發了一個簡單的線性回歸模型來預測特定股票的短期走勢。這個專案讓我不僅學會了Python編程，還掌握了基本的數據分析流程和技術，從數據收集、清洗到分析和視覺化表達。遇到的最大挑戰是如何處理缺失值，最終我通過研究相關技術文獻，決定採用均值填充法並配合異常值檢測來確保數據質量。

我的語言能力包括流利的中文、中等程度的英文和基礎的日文。英文能力主要體現在閱讀專業文獻和技術文檔方面，雖然口語表達仍有進步空間。邏輯分析能力主要通過程式設計和數學課程培養，尤其擅長結構化思考和問題拆解。

未來，我希望能夠深入學習資料科學和人工智能領域，並探索這些技術在商業決策和市場分析中的應用。同時，我也計劃培養跨領域合作能力，與不同背景的專業人士共同創新。我相信在政治大學資訊管理學系的學習環境中，能夠獲得更全面的專業訓練和實踐機會。`);

    // Clear the analysis data after loading
    localStorage.removeItem('currentAnalysis');
  }, [router]);

  const handleUserInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleNextClick = () => {
    router.push('/queryGuide');
  };

  return (
    <div className="main-content">
      <div className="content-header">
        <h1 className="page-title">　　初步閱讀與診斷</h1>
      </div>
      
      <div className="diagnosis-container">
        {/* 左側診斷結果 */}
        <div className="diagnosis-left">
          <div className="diagnosis-header">
            <div className="diagnosis-title">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M20.24 12.24a6 6 0 00-8.49-8.49L5 10.5V19h8.5l6.74-6.76z" stroke="#5d8a9e" strokeWidth="2" fill="none"/>
                <line x1="16" y1="8" x2="2" y2="22" stroke="#5d8a9e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              診斷結果
            </div>
            <div className="doc-info">
              <div className="doc-type">學習歷程自述檔案</div>
              <div className="school-info">國立臺灣大學 - 資訊工程學系</div>
            </div>
          </div>
          
          <div className="content-panel">
            <ul className="diagnosis-list">
              <li className="diagnosis-item structure">
                <div className="issue-code">1. O5：</div>
                <span className="issue-title">[架構檢查]</span>
                <div className="issue-desc">在"個性和興趣"段落中，對於從藝術到科技興趣轉變的敘述稍顯分散，可以考慮重新組織此段內容，使轉變的原因與過程更具邏輯性。</div>
              </li>
              
              <li className="diagnosis-item irrelevant">
                <div className="issue-code">2. P2：</div>
                <span className="issue-title">[偏題部分]</span>
                <div className="issue-desc">在校表現與挑戰"段落中提到的電阻實驗和Excel使用，與資訊管理的直接關聯性不明顯，建議刪減或用更相關的內容替代，以更突出與資訊管理的關聯性。</div>
              </li>
              
              <li className="diagnosis-item conciseness">
                <div className="issue-code">3. O3：</div>
                <span className="issue-title">[精簡建議]</span>
                <div className="issue-desc">"資訊領域的經驗"段落中，Python專案的細節陳述較為冗長，建議精簡描述，專注於突出重點，例如專案的結果或學習到的關鍵能力。</div>
              </li>
              
              <li className="diagnosis-item completeness">
                <div className="issue-code">4. O6：</div>
                <span className="issue-title">[完整度]</span>
                <div className="issue-desc">"語言與其他能力"段落中，關於邏輯分析能力的提及較少，建議加入相關經歷或數據分析案例，以強化該關鍵能力並更符合系所需求。</div>
              </li>
              
              <li className="diagnosis-item improvement">
                <div className="issue-code">5. P4：</div>
                <span className="issue-title">[增長建議]</span>
                <div className="issue-desc">"未來的規劃與目標"段落中，關於跨領域合作與創新思維的內容較為簡單，建議補充具體計畫或例子，以展現更深入的思考和實際應用的可能性。</div>
              </li>
              
              <li className="diagnosis-item grammar">
                <div className="issue-code">6. O1：</div>
                <span className="issue-title">[錯字與標點符號]</span>
                <div className="issue-desc">整段多數句子之間缺少明顯的標點符號，尤其是在段與段之間的轉換，應檢查全文標點符號的使用，以提升可讀性與語法正確性。</div>
              </li>
            </ul>
          </div>
          
          <div className="user-input-section">
            <div className="user-input-title">
              <svg width="20" height="20" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="#5d8a9e" strokeWidth="2" fill="none"/>
                <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" stroke="#5d8a9e" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="12" cy="17" r="0.5" stroke="#5d8a9e" strokeWidth="2" fill="#5d8a9e"/>
              </svg>
              自我疑問與回饋
            </div>
            <div className="user-input-container">
              <textarea 
                className="user-textarea" 
                placeholder="請輸入您對文件的疑問、已知問題或需要特別關注的部分..."
                value={userInput}
                onChange={handleUserInputChange}
              ></textarea>
              <div className="hint-text">若無疑問可留空此欄位</div>
            </div>
          </div>
        </div>
        
        {/* 右側文件內容 */}
        <div className="diagnosis-right">
          <div className="diagnosis-header">
            <div className="diagnosis-title">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M14 3v4a1 1 0 001 1h4" stroke="#5d8a9e" strokeWidth="2" fill="none"/>
                <path d="M17 21H7a2 2 0 01-2-2V5a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z" stroke="#5d8a9e" strokeWidth="2" fill="none"/>
                <path d="M9 9h6M9 13h6M9 17h4" stroke="#5d8a9e" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              文件內容（可編輯）
            </div>
          </div>
          
          <textarea 
            className="editable-content"
            value={content}
            onChange={handleContentChange}
          ></textarea>
        </div>
      </div>
      
      {/* 下一步按鈕 */}
      <button className="next-button" onClick={handleNextClick}>
        提問引導與釐清
        <svg width="16" height="16" viewBox="0 0 24 24">
          <path d="M5 12h14" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
} 