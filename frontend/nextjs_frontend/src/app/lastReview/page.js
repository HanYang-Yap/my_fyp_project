'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LastReview() {
  const router = useRouter();

  useEffect(() => {
    // Initialize Chart.js when component mounts
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/chart.js@3.7.1/dist/chart.min.js';
      script.async = true;
      script.onload = () => {
        // Initialize radar chart after script loads
        const ctx = document.getElementById('radarChart');
        if (ctx) {
          new Chart(ctx, {
            type: 'radar',
            data: {
              labels: ['錯字&標點符號', '偏題', '精簡', '增長', '架構'],
              datasets: [{
                label: '評分',
                data: [5.0, 5.0, 4.0, 4.0, 4.0],
                backgroundColor: 'rgba(93, 138, 158, 0.2)',
                borderColor: 'rgba(93, 138, 158, 1)',
                pointBackgroundColor: 'rgba(93, 138, 158, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(93, 138, 158, 1)'
              }]
            },
            options: {
              scales: {
                r: {
                  angleLines: {
                    display: true
                  },
                  suggestedMin: 0,
                  suggestedMax: 5
                }
              }
            }
          });
        }
      };
      document.head.appendChild(script);
    }
  }, []);

  const handleComplete = () => {
    // Force a direct URL change
    window.location.href = '/home';
  };

  return (
    <div className="min-h-screen bg-[#f0f2f5] text-[#333] flex">
      {/* Main content area */}
      <div className="flex-grow p-8 relative min-h-screen">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-[#3a4049]">　　最後整合與精修</h1>
        </div>

        {/* Analysis results area */}
        <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#f0f2f5]">
            <div className="text-xl font-bold text-[#3a4049]">整體文章評分分析</div>
            <div className="text-2xl text-[#5d8a9e] bg-[rgba(93,138,158,0.1)] px-5 py-2 rounded-full font-bold">4.4 分</div>
          </div>

          <div className="flex flex-wrap gap-10">
            <div className="w-[450px] h-[450px] relative bg-[#f9fafc] rounded-xl p-5 shadow-sm">
              <canvas id="radarChart"></canvas>
            </div>

            <div className="flex-1 min-w-[300px]">
              <div className="mb-5 p-4 rounded-xl bg-[#f9fafc] border-l-4 border-[#5d8a9e] shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex justify-between items-center mb-2">
                  <div className="font-bold text-[#3a4049] text-base">錯字&標點符號</div>
                  <div className="text-[#5d8a9e] font-bold text-base bg-[rgba(93,138,158,0.1)] px-2.5 py-1 rounded-full">5.0</div>
                </div>
                <div className="text-[#636973] text-sm leading-relaxed">
                  文章無錯字，標點符號使用正確且風格統一，句子流暢易讀。
                </div>
              </div>

              <div className="mb-5 p-4 rounded-xl bg-[#f9fafc] border-l-4 border-[#5d8a9e] shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex justify-between items-center mb-2">
                  <div className="font-bold text-[#3a4049] text-base">偏題</div>
                  <div className="text-[#5d8a9e] font-bold text-base bg-[rgba(93,138,158,0.1)] px-2.5 py-1 rounded-full">5.0</div>
                </div>
                <div className="text-[#636973] text-sm leading-relaxed">
                  文章完全緊扣該校系核心需求，內容深入探討管理資訊系統與經濟學的相關經歷，並能有效展現學習動機。
                </div>
              </div>

              <div className="mb-5 p-4 rounded-xl bg-[#f9fafc] border-l-4 border-[#5d8a9e] shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex justify-between items-center mb-2">
                  <div className="font-bold text-[#3a4049] text-base">精簡</div>
                  <div className="text-[#5d8a9e] font-bold text-base bg-[rgba(93,138,158,0.1)] px-2.5 py-1 rounded-full">4.0</div>
                </div>
                <div className="text-[#636973] text-sm leading-relaxed">
                  整體表達簡潔清晰，大多數段落沒有冗長敘述，但仍有部分細節可以稍作刪減，使內容更精煉。
                </div>
              </div>

              <div className="mb-5 p-4 rounded-xl bg-[#f9fafc] border-l-4 border-[#5d8a9e] shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex justify-between items-center mb-2">
                  <div className="font-bold text-[#3a4049] text-base">增長</div>
                  <div className="text-[#5d8a9e] font-bold text-base bg-[rgba(93,138,158,0.1)] px-2.5 py-1 rounded-full">4.0</div>
                </div>
                <div className="text-[#636973] text-sm leading-relaxed">
                  文章內容完整且有細節支撐，部分段落已補充專題研究與數據分析的實際應用，但還可以進一步拓展學習過程中的挑戰與解決方案。
                </div>
              </div>

              <div className="mb-5 p-4 rounded-xl bg-[#f9fafc] border-l-4 border-[#5d8a9e] shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex justify-between items-center mb-2">
                  <div className="font-bold text-[#3a4049] text-base">架構</div>
                  <div className="text-[#5d8a9e] font-bold text-base bg-[rgba(93,138,158,0.1)] px-2.5 py-1 rounded-full">4.0</div>
                </div>
                <div className="text-[#636973] text-sm leading-relaxed">
                  文章結構良好，層次分明，段落銜接自然，內容有邏輯地鋪陳，但個別轉折仍可更流暢，例如從學習經驗過渡到未來規劃的部分。
                </div>
              </div>

              {/* Summary section */}
              <div className="mt-8 p-5 rounded-xl bg-[#f0f5f9] border-l-4 border-[#5d8a9e] shadow-sm">
                <div className="flex justify-between items-center mb-3">
                  <div className="font-bold text-[#3a4049] text-lg">總體評價</div>
                  <div className="text-[#5d8a9e] font-bold text-lg bg-[rgba(93,138,158,0.1)] px-3 py-1 rounded-full">4.5</div>
                </div>
                <div className="text-[#3a4049] text-sm leading-relaxed">
                  文章涵蓋學習動機、課程經驗、專題研究、課外活動及未來發展，整體完整度高，僅部分細節可再補充，例如如何將學習經驗應用於未來目標。
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final document area */}
        <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
          <div className="flex justify-between items-center mb-5 pb-4 border-b border-[#f0f2f5]">
            <div className="text-xl font-bold text-[#3a4049] flex items-center">
              <div className="mr-2.5 text-[#5d8a9e]">
                <svg width="24" height="24" viewBox="0 0 24 24" stroke="#5d8a9e" fill="none">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              最終文章內容
            </div>
          </div>

          <div className="text-[#3a4049] leading-relaxed text-sm whitespace-pre-line">
            <div className="mb-5 p-2.5 rounded-lg transition-colors hover:bg-[#f9fafc]">
              我對商業管理及經濟學的興趣源自於日常生活中的觀察。從中學時期，我便對市場經濟與企業營運感到好奇，曾參與校內模擬投資比賽並獲得優異成績，也自發組織同學們進行小型創業計畫銷售自製手工產品。在這些經歷中，我意識到資訊技術對現代商業的重要性，尤其對數據分析和決策支持系統的需求促使我思考跨域整合的價值。因此，在大學階段，我選擇雙主修管理資訊系統與經濟學，期望透過資訊技術與數據分析提升對經濟決策的理解，未來能夠將理論應用於企業管理或金融分析領域。
            </div>

            <div className="mb-5 p-2.5 rounded-lg transition-colors hover:bg-[#f9fafc]">
              除了學校課業，我也積極參加業界相關活動，特別是2023年參與台灣金融科技協會舉辦的"數據分析驅動金融創新"系列講座，透過實務案例學習如何運用Python和R語言進行金融數據分析。從中了解金融市場的實務運作，尤其對智能投顧系統和區塊鏈技術在金融交易中的應用深感興趣。這與貴校資管系王教授領導的金融科技實驗室研究方向高度契合。此外，我也有明確的理財觀念，並常透過閱讀研究報告、分析市場趨勢來提升自己的判斷能力。
            </div>

            <div className="mb-5 p-2.5 rounded-lg transition-colors hover:bg-[#f9fafc]">
              在資訊專題中，我與同學合作開發了校園導覽APP，不僅負責後端資料庫設計和API開發，更主導了用戶需求分析和使用者介面優化，運用商業分析方法確保產品符合使用者期望。這個專題讓我學會如何將管理學和資訊科技的理論知識整合應用於解決實際問題，也培養了我的團隊合作能力。此經驗讓我確信，貴校資管系強調的管理與技術並重的教育理念正是我追求的方向。參與這個專案的過程中，我發現自己在面對技術難題時能夠保持冷靜並系統性地分析問題，這是我認為在資訊工程領域中非常重要的特質。
            </div>
          </div>
        </div>

        {/* Button area */}
        <div className="flex justify-end gap-4 mt-8">
          <button className="px-6 py-3 rounded-full border-none text-base font-bold cursor-pointer transition-all flex items-center bg-[#f0f2f5] text-[#3a4049] hover:bg-[#e0e0e0]">
            匯出文件
            <svg width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" className="ml-2.5">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" fill="none" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" />
              <polyline points="7 10 12 15 17 10" fill="none" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round" />
              <line x1="12" y1="15" x2="12" y2="3" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round" />
            </svg>
          </button>
          <button 
            onClick={handleComplete}
            className="px-6 py-3 rounded-full border-none text-base font-bold cursor-pointer transition-all flex items-center bg-[#5d8a9e] text-white shadow-md hover:bg-[#3a5a6a] hover:shadow-lg"
          >
            完成修改
            <svg width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" className="ml-2.5">
              <polyline points="20 6 9 17 4 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                fill="none" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
