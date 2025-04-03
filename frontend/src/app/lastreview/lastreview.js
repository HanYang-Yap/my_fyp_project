// 初始化雷達圖
window.onload = function () {
    const ctx = document.getElementById('radarChart').getContext('2d');

    // 圖表數據
    const data = {
        labels: ['錯字&標點符號', '偏題', '精簡', '增長', '架構'],
        datasets: [{
            data: [5.0, 5.0, 4.0, 4.0, 4.0],
            backgroundColor: 'rgba(74, 111, 165, 0.25)',
            borderColor: 'rgba(74, 111, 165, 1)',
            borderWidth: 2,
            pointBackgroundColor: '#4a6fa5',
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
            pointRadius: 6,
            pointHoverRadius: 8
        }]
    };

    // 移除空段落（避免多餘空白）
    const paragraphs = document.querySelectorAll('.paragraph');
    paragraphs.forEach(p => {
        if (!p.innerText.trim()) {
            p.remove();
        }
    });

    // 圖表配置
    const config = {
        type: 'radar',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    min: 0,
                    max: 5,
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1,
                        display: true,
                        backdropColor: 'transparent',
                        color: '#555',
                        font: {
                            size: 10
                        }
                    },
                    angleLines: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    },
                    pointLabels: {
                        display: false  // 隱藏雷達圖的標籤，使用自定義標籤代替
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: false  // 禁用原生的工具提示，使用自定義工具提示
                }
            },
            elements: {
                line: {
                    tension: 0.1 // 輕微的曲線
                }
            },
            animation: {
                duration: 1200
            }
        }
    };

    new Chart(ctx, config);

    // 複製功能
    const copyButton = document.getElementById('copyButton');
    const documentContent = document.getElementById('documentContent');
    
    copyButton.addEventListener('click', function() {
        let text = '';
        const paragraphs = documentContent.querySelectorAll('.paragraph');
        
        paragraphs.forEach(paragraph => {
            text += paragraph.innerText + '\n\n';
        });
        
        navigator.clipboard.writeText(text).then(() => {
            copyButton.classList.add('copied');
            copyButton.innerHTML = `
                <svg width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                已複製
            `;
            
            setTimeout(() => {
                copyButton.classList.remove('copied');
                copyButton.innerHTML = `
                    <svg width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                    複製文章
                `;
            }, 2000);
            
            // 顯示工具提示
            showTooltip(copyButton, '已成功複製到剪貼簿！');
        }).catch(err => {
            console.error('複製失敗:', err);
        });
    });
    
    // 匯出文件功能
    const exportButton = document.getElementById('exportButton');
    
    exportButton.addEventListener('click', function() {
        let text = '';
        const paragraphs = documentContent.querySelectorAll('.paragraph');
        
        paragraphs.forEach(paragraph => {
            text += paragraph.innerText + '\n\n';
        });
        
        // 創建 Blob 並下載
        const blob = new Blob([text], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = '學習歷程_最終文章.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        // 顯示工具提示
        showTooltip(exportButton, '文件已成功匯出！');
    });

    // 工具提示函數 - 提取為可重用函數
    function showTooltip(element, message) {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.innerText = message;
        tooltip.style.top = '-40px';
        tooltip.style.left = '50%';
        tooltip.style.transform = 'translateX(-50%)';
        
        element.style.position = 'relative';
        element.appendChild(tooltip);
        
        setTimeout(() => {
            tooltip.style.opacity = '1';
            tooltip.style.transform = 'translateX(-50%) translateY(0)';
        }, 10);
        
        setTimeout(() => {
            tooltip.style.opacity = '0';
            tooltip.style.transform = 'translateX(-50%) translateY(10px)';
            setTimeout(() => {
                tooltip.remove();
            }, 300);
        }, 1500);
    }

    // 初始化雷達標籤互動
    initializeRadarLabels();
};

// 雷達標籤互動效果
function initializeRadarLabels() {
    const radarLabels = document.querySelectorAll('.radar-label');
    
    radarLabels.forEach(label => {
        // 懸停效果已經在 CSS 中實現
        // 可以添加點擊事件以顯示更詳細的資訊
        label.addEventListener('click', function() {
            const criterionName = this.textContent.trim().split('\n')[0].trim();
            const criterionScore = this.querySelector('.criterion-score').textContent;
            const tooltipContent = this.querySelector('.radar-tooltip').textContent.trim();
            
            // 這裡可以實現點擊顯示詳細資訊的功能
            console.log(`評分項目: ${criterionName}, 分數: ${criterionScore}`);
            console.log(`詳細說明: ${tooltipContent}`);
            
            // 如果需要在頁面中顯示更詳細的資訊，可以在這裡實現
        });
    });
}

// 動態添加動畫效果
function addAnimationEffects() {
    const animateElements = document.querySelectorAll('.animate-in');
    
    animateElements.forEach((element, index) => {
        // 設置延遲
        const delay = 0.1 + (index * 0.1);
        element.style.animationDelay = `${delay}s`;
    });
}

// 頁面加載完成後執行
document.addEventListener('DOMContentLoaded', function() {
    addAnimationEffects();
    
    // 為按鈕添加懸停效果
    const buttons = document.querySelectorAll('.action-btn, .copy-button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});