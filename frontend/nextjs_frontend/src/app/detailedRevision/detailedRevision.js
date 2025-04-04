/**
 * UniTopia 逐段深入討論與改寫頁面的主要 JavaScript 文件
 * 負責處理頁面互動、段落選擇、建議顯示和修改接受等功能
 */

// 初始化頁面
document.addEventListener('DOMContentLoaded', function() {
    // 初始化字數統計
    updateWordCount();
    
    // 添加事件監聽器
    attachEventListeners();
    
    // 初始化工具提示
    initializeTooltips();
});

/**
 * 添加所有事件監聽器到頁面元素
 */
function attachEventListeners() {
    // 段落標記點擊處理
    document.querySelectorAll('.paragraph-marker').forEach(marker => {
        marker.addEventListener('click', function() {
            const paragraphNum = this.parentElement.getAttribute('data-paragraph');
            showParagraphSuggestions(parseInt(paragraphNum));
        });
    });

    // 檢查按鈕點擊處理
    const checkButton = document.getElementById('check-button');
    if (checkButton) {
        checkButton.addEventListener('click', function() {
            showNotification('正在重新檢查並生成建議...');
            // TODO: 在實際實現中，這裡會觸發文檔分析
        });
    }

    // 段落審核按鈕點擊處理
    document.querySelectorAll('.review-paragraph-btn').forEach(button => {
        button.addEventListener('click', function() {
            const paragraphNum = this.parentElement.getAttribute('data-paragraph');
            showNotification(`正在重新審核第${paragraphNum}段...`);
            // TODO: 在實際實現中，這裡會觸發新的分析
        });
    });

    // 接受建議按鈕點擊處理
    document.querySelectorAll('.suggestion-actions .accept').forEach(button => {
        button.addEventListener('click', handleSuggestionAcceptance);
    });

    // 高亮文本點擊處理
    document.querySelectorAll('.highlight, .highlight-error, .highlight-warning').forEach(highlight => {
        highlight.addEventListener('click', handleHighlightClick);
    });

    // 可編輯段落的焦點處理
    document.querySelectorAll('[contenteditable]').forEach(element => {
        element.addEventListener('focus', function() {
            const paragraph = this.closest('.paragraph');
            const paragraphNum = paragraph.getAttribute('data-paragraph');
            showParagraphSuggestions(parseInt(paragraphNum));
        });
        
        // 內容變更時更新字數
        element.addEventListener('input', updateWordCount);
    });
}

/**
 * 初始化雷達圖的工具提示功能
 */
function initializeTooltips() {
    const tooltip = document.getElementById('radar-tooltip');
    
    document.querySelectorAll('.radar-point').forEach(point => {
        point.addEventListener('mouseenter', function(event) {
            const score = this.getAttribute('data-score');
            const label = this.getAttribute('data-label');
            
            tooltip.textContent = `${label}: ${score}分`;
            updateTooltipPosition(tooltip, event);
            tooltip.style.opacity = 1;
        });
        
        point.addEventListener('mousemove', function(event) {
            updateTooltipPosition(tooltip, event);
        });
        
        point.addEventListener('mouseleave', function() {
            tooltip.style.opacity = 0;
        });
    });
}

/**
 * 更新工具提示的位置
 * @param {HTMLElement} tooltip - 工具提示元素
 * @param {Event} event - 鼠標事件
 */
function updateTooltipPosition(tooltip, event) {
    tooltip.style.left = (event.pageX + 10) + 'px';
    tooltip.style.top = (event.pageY - 20) + 'px';
}

/**
 * 顯示通知消息
 * @param {string} message - 要顯示的消息文本
 * @param {string} type - 通知類型 (success, error, warning)
 */
function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notification-text');
    
    if (!notification || !notificationText) return;
    
    notificationText.textContent = message;
    notification.className = `notification ${type}`;
    notification.classList.add('show');
    
    // 3秒後自動隱藏通知
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

/**
 * 顯示特定段落的建議
 * @param {number} paragraphNum - 段落編號
 */
function showParagraphSuggestions(paragraphNum) {
    // 隱藏所有建議組
    document.querySelectorAll('.paragraph-suggestions').forEach(group => {
        group.classList.remove('active');
    });
    
    // 獲取空狀態提示元素
    const emptyState = document.getElementById('empty-state');
    
    // 重置所有段落高亮
    document.querySelectorAll('.paragraph').forEach(p => {
        p.classList.remove('active');
    });
    
    if (paragraphNum > 0) {
        // 顯示選定的段落建議
        const suggestionsToShow = document.querySelector(`.paragraph-suggestions[data-paragraph="${paragraphNum}"]`);
        if (suggestionsToShow) {
            suggestionsToShow.classList.add('active');
            if (emptyState) emptyState.style.display = 'none';
        }
        
        // 高亮顯示選定的段落
        const paragraphToHighlight = document.querySelector(`.paragraph[data-paragraph="${paragraphNum}"]`);
        if (paragraphToHighlight) {
            paragraphToHighlight.classList.add('active');
        }
    } else if (emptyState) {
        // 當未選擇段落時顯示空狀態
        emptyState.style.display = 'flex';
    }
}

/**
 * 計算文本中的字數（適用於中文文本，每個字符視為一個字）
 * @param {string} text - 要計算的文本
 * @return {number} 字數
 */
function countWords(text) {
    // 移除 HTML 標籤並清理文本
    const cleanText = text.replace(/<[^>]*>/g, '').replace(/[\n\r]+/g, ' ').trim();
    
    // 對於中文文本，每個字符視為一個字
    // 對於混合有英文的文本，這是簡化的方法
    return cleanText.length;
}

/**
 * 更新頁面上的字數統計
 */
function updateWordCount() {
    let totalWords = 0;
    
    // 獲取所有段落內容
    document.querySelectorAll('.paragraph-text [contenteditable]').forEach(paragraph => {
        totalWords += countWords(paragraph.innerText);
    });
    
    // 更新字數顯示
    const wordCountElement = document.getElementById('current-word-count');
    const wordCountLabel = document.getElementById('word-count-label');
    
    if (!wordCountElement || !wordCountLabel) return;
    
    wordCountElement.textContent = totalWords;
    
    // 根據字數變更顏色和標籤
    if (totalWords > 800) {
        wordCountElement.style.color = 'red';
        wordCountLabel.innerHTML = '⚠️總字數：';
    } else if (totalWords > 720) { // 800 的 90%
        wordCountElement.style.color = '#FFA726'; // 警告橙色
        wordCountLabel.innerHTML = '總字數：';
    } else {
        wordCountElement.style.color = 'black';
        wordCountLabel.innerHTML = '總字數：';
    }
}

/**
 * 處理點擊高亮文本的事件
 */
function handleHighlightClick() {
    const problemId = this.getAttribute('data-problem-id');
    const paragraphNum = problemId.split('-')[0];
    
    // 切換到正確的段落標籤
    showParagraphSuggestions(parseInt(paragraphNum));
    
    // 找到對應的建議卡片
    const suggestionCard = document.querySelector(`.issue-card[data-problem-id="${problemId}"]`);
    
    if (suggestionCard) {
        // 滾動到建議位置
        suggestionCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // 短暫高亮顯示建議
        suggestionCard.style.backgroundColor = 'rgba(90, 140, 168, 0.1)';
        setTimeout(() => {
            suggestionCard.style.backgroundColor = '';
        }, 1000);
    }
}

/**
 * 處理接受建議的事件
 */
function handleSuggestionAcceptance() {
    const card = this.closest('.issue-card');
    const problemId = card.getAttribute('data-problem-id');
    const suggestionText = card.querySelector('.suggestion-text').textContent.trim();
    
    // 在編輯器中找到有問題的文本
    const problemElement = document.querySelector(`[data-problem-id="${problemId}"]`);
    
    if (problemElement) {
        // 用建議替換有問題的文本
        const normalText = document.createTextNode(suggestionText);
        problemElement.parentNode.replaceChild(normalText, problemElement);
        
        // 顯示成功通知
        showNotification(`修改已接受: "${suggestionText}"`);
        
        // 更新變更後的字數
        updateWordCount();
    }
    
    // 移除建議卡片
    card.style.opacity = '0.5';
    setTimeout(() => {
        card.remove();
    }, 300);
}

/**
 * 檢查文本內容並提供建議的函數
 * 注意：此函數為示例，實際實現需要與後端或AI服務集成
 * @param {string} text - 要分析的文本
 * @return {Array} 建議列表
 */
function analyzeText(text) {
    // 這裡應該是實際的文本分析邏輯
    // 在真實實現中，這可能會調用 API 或使用 NLP 庫
    return []; // 返回建議數組
}

/**
 * 重新生成特定段落的建議
 * @param {number} paragraphNum - 段落編號
 */
function regenerateSuggestions(paragraphNum) {
    const paragraphElement = document.querySelector(`.paragraph[data-paragraph="${paragraphNum}"]`);
    if (!paragraphElement) return;
    
    const paragraphText = paragraphElement.querySelector('[contenteditable]').innerText;
    const suggestions = analyzeText(paragraphText);
    
    // TODO: 用新建議更新 UI
    
    showNotification(`第 ${paragraphNum} 段分析完成，找到 ${suggestions.length} 個建議`);
}

/**
 * 將整個文檔導出為純文本
 * @return {string} 純文本格式的文檔
 */
function exportAsPlainText() {
    let result = '';
    
    document.querySelectorAll('.paragraph-text [contenteditable]').forEach(paragraph => {
        result += paragraph.innerText + '\n\n';
    });
    
    return result.trim();
}

/**
 * 顯示導出選項的對話框
 * 注意：此函數為示例，實際實現可能需要添加 HTML 元素
 */
function showExportDialog() {
    // 在實際實現中，這裡會顯示導出選項對話框
    const text = exportAsPlainText();
    
    // 創建一個臨時文本區域用於複製
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    
    showNotification('文檔已複製到剪貼板');
}

document.getElementById("lastreview").addEventListener("click",
    function(event) {
    event.preventDefault();
     window.location.href = "/lastreview";
     });