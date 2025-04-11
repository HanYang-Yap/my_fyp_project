document.addEventListener('DOMContentLoaded', function() {
    // 表單元素
    const loginForm = document.querySelector('.login-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const loginButton = document.querySelector('.login-button');
    const rememberMeCheckbox = document.querySelector('.checkbox-input');
    const socialButtons = document.querySelectorAll('.social-button');
    const forgotPasswordLink = document.querySelector('.forgot-password');
    const registerLink = document.querySelector('.register-link a');
    
    // 表單提交處理
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 驗證表單
        if (validateForm()) {
            // 顯示加載動畫
            loginButton.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> 登入中...';
            loginButton.disabled = true;
            
            // 獲取完整電子郵件作為 student_id
            const studentId = emailInput.value.trim();
            
            // 模擬API登入請求
            setTimeout(function() {
                // 這裡應該是實際的API請求
                const success = Math.random() > 0.2; // 模擬80%成功率
                
                if (success) {
                    showNotification('登入成功！正在跳轉...', 'success');
                    // 儲存記住我選項
                    if (rememberMeCheckbox.checked) {
                        localStorage.setItem('rememberedEmail', emailInput.value);
                    } else {
                        localStorage.removeItem('rememberedEmail');
                    }
                    
                    // 跳轉至學生的主頁，使用完整電子郵件
                    setTimeout(function() {
                        window.location.href = `/home/${studentId}`;
                    }, 1500);
                } else {
                    showNotification('登入失敗，請檢查您的憑證', 'error');
                    loginButton.innerHTML = '登入';
                    loginButton.disabled = false;
                }
            }, 1500);
        }
    });
    
    // 處理社交登入
    function handleSocialLogin(platform) {
        showNotification(`正在使用${platform}登入...`, 'info');
        
        // 這裡應實作實際的社交登入功能
        // ...
        
        // 模擬登入過程
        setTimeout(function() {
            showNotification(`${platform}登入成功！正在跳轉...`, 'success');
            
            // 使用預設電子郵件
            const defaultStudentId = 'social_user@example.com';
            
            // 模擬跳轉至學生首頁
            setTimeout(function() {
                window.location.href = `/home/${defaultStudentId}`;
            }, 1500);
        }, 1500);
    }
    
    // 其餘的功能保持不變...
    
    // 表單驗證函數
    function validateForm() {
        let isValid = true;
        
        // 檢查電子郵件
        if (!emailInput.value.trim()) {
            showInputError(emailInput, '請輸入電子郵件');
            isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            showInputError(emailInput, '請輸入有效的電子郵件');
            isValid = false;
        } else {
            clearInputError(emailInput);
        }
        
        // 檢查密碼
        if (!passwordInput.value) {
            showInputError(passwordInput, '請輸入密碼');
            isValid = false;
        } else if (passwordInput.value.length < 6) {
            showInputError(passwordInput, '密碼至少需要6個字符');
            isValid = false;
        } else {
            clearInputError(passwordInput);
        }
        
        return isValid;
    }
    
    // 電子郵件格式驗證
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // 顯示輸入錯誤
    function showInputError(inputElement, message) {
        const formGroup = inputElement.closest('.form-group');
        
        // 清除已存在的錯誤訊息
        clearInputError(inputElement);
        
        // 新增錯誤樣式
        inputElement.classList.add('error-input');
        
        // 新增錯誤訊息
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.textContent = message;
        formGroup.appendChild(errorElement);
        
        // 添加錯誤樣式
        inputElement.style.borderColor = '#e53e3e';
        inputElement.style.boxShadow = '0 0 0 3px rgba(229, 62, 62, 0.1)';
    }
    
    // 清除輸入錯誤
    function clearInputError(inputElement) {
        const formGroup = inputElement.closest('.form-group');
        const errorElement = formGroup.querySelector('.error-message');
        
        if (errorElement) {
            formGroup.removeChild(errorElement);
        }
        
        // 移除錯誤樣式
        inputElement.classList.remove('error-input');
        inputElement.style.borderColor = '';
        inputElement.style.boxShadow = '';
    }
    
    // 輸入欄位焦點事件
    [emailInput, passwordInput].forEach(input => {
        input.addEventListener('focus', function() {
            this.style.borderColor = '#5d8a9e';
            this.style.boxShadow = '0 0 0 3px rgba(93, 138, 158, 0.1)';
        });
        
        input.addEventListener('blur', function() {
            this.style.borderColor = '#e2e8f0';
            this.style.boxShadow = 'none';
        });
        
        // 輸入時清除錯誤
        input.addEventListener('input', function() {
            clearInputError(this);
        });
    });
    
    // 社交登入按鈕效果
    socialButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
        
        button.addEventListener('click', function() {
            const platform = this.querySelector('i').className;
            
            if (platform.includes('google')) {
                // 處理Google登入
                console.log('Google登入');
                handleSocialLogin('Google');
            } else if (platform.includes('facebook')) {
                // 處理Facebook登入
                console.log('Facebook登入');
                handleSocialLogin('Facebook');
            } else if (platform.includes('apple')) {
                // 處理Apple登入
                console.log('Apple登入');
                handleSocialLogin('Apple');
            }
        });
    });
    
    // 忘記密碼連結
    forgotPasswordLink.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = '/forgetpassword';
    });
    
    // 註冊連結
    registerLink.addEventListener('click', function(e) {
        e.preventDefault();
        showNotification('正在跳轉至註冊頁面...', 'info');
        
        // 模擬跳轉至註冊頁面
        setTimeout(function() {
            window.location.href = '/signup';
        }, 1000);
    });
    
    // 檢查是否有記住的電子郵件
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    if (rememberedEmail) {
        emailInput.value = rememberedEmail;
        rememberMeCheckbox.checked = true;
    }
    
    // 頁面載入動畫
    addPageLoadAnimation();
    
    // 頁面載入動畫
    function addPageLoadAnimation() {
        const brandSide = document.querySelector('.brand-side');
        const loginSide = document.querySelector('.login-side');
        
        // 重置可能的過場樣式
        document.body.style.opacity = '0';
        
        // 設置初始狀態
        setTimeout(function() {
            document.body.style.transition = 'opacity 0.5s ease';
            document.body.style.opacity = '1';
            
            brandSide.style.transition = 'transform 0.8s ease, opacity 0.8s ease';
            loginSide.style.transition = 'transform 0.8s ease, opacity 0.8s ease';
            
            brandSide.style.transform = 'translateX(0)';
            brandSide.style.opacity = '1';
            
            loginSide.style.transform = 'translateX(0)';
            loginSide.style.opacity = '1';
        }, 100);
    }
    
    // 通知提示
    function showNotification(message, type = 'info') {
        // 移除現有通知
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            document.body.removeChild(existingNotification);
        }
        
        // 創建通知元素
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        // 樣式設置
        notification.style.position = 'fixed';
        notification.style.bottom = '20px';
        notification.style.right = '20px';
        notification.style.padding = '15px 25px';
        notification.style.borderRadius = '8px';
        notification.style.fontWeight = '500';
        notification.style.zIndex = '9999';
        notification.style.transition = 'all 0.3s ease';
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(20px)';
        
        // 根據類型設置樣式
        if (type === 'success') {
            notification.style.backgroundColor = '#48bb78';
            notification.style.color = 'white';
        } else if (type === 'error') {
            notification.style.backgroundColor = '#e53e3e';
            notification.style.color = 'white';
        } else if (type === 'info') {
            notification.style.backgroundColor = '#4299e1';
            notification.style.color = 'white';
        }
        
        // 添加到頁面
        document.body.appendChild(notification);
        
        // 顯示通知
        setTimeout(function() {
            notification.style.opacity = '1';
            notification.style.transform = 'translateY(0)';
        }, 10);
        
        // 自動隱藏通知
        setTimeout(function() {
            notification.style.opacity = '0';
            notification.style.transform = 'translateY(20px)';
            
            setTimeout(function() {
                if (notification.parentNode) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
    
    // 模態對話框
    function showModal(title, content) {
        // 移除現有模態框
        const existingModal = document.querySelector('.modal-container');
        if (existingModal) {
            document.body.removeChild(existingModal);
        }
        
        // 創建模態容器
        const modalContainer = document.createElement('div');
        modalContainer.className = 'modal-container';
        
        // 設置模態容器樣式
        modalContainer.style.position = 'fixed';
        modalContainer.style.top = '0';
        modalContainer.style.left = '0';
        modalContainer.style.width = '100%';
        modalContainer.style.height = '100%';
        modalContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        modalContainer.style.display = 'flex';
        modalContainer.style.alignItems = 'center';
        modalContainer.style.justifyContent = 'center';
        modalContainer.style.zIndex = '9999';
        modalContainer.style.opacity = '0';
        modalContainer.style.transition = 'opacity 0.3s ease';
        
        // 創建模態內容
        modalContainer.innerHTML = `
            <div class="modal-content" style="background-color: white; padding: 30px; border-radius: 10px; width: 90%; max-width: 400px; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2); position: relative;">
                <button class="modal-close" style="position: absolute; top: 15px; right: 15px; background: none; border: none; font-size: 1.5rem; cursor: pointer; color: #718096;">&times;</button>
                <h3 style="margin-top: 0; margin-bottom: 15px; color: #3a4049; font-size: 1.5rem;">${title}</h3>
                <div class="modal-body">
                    ${content}
                </div>
            </div>
        `;
        
        // 添加到頁面
        document.body.appendChild(modalContainer);
        
        // 顯示模態框
        setTimeout(function() {
            modalContainer.style.opacity = '1';
        }, 10);
        
        // 關閉按鈕事件
        const closeButton = modalContainer.querySelector('.modal-close');
        closeButton.addEventListener('click', closeModal);
        
        // 點擊外部關閉
        modalContainer.addEventListener('click', function(e) {
            if (e.target === modalContainer) {
                closeModal();
            }
        });
    }
    
    // 關閉模態框
    function closeModal() {
        const modalContainer = document.querySelector('.modal-container');
        if (modalContainer) {
            modalContainer.style.opacity = '0';
            
            setTimeout(function() {
                if (modalContainer.parentNode) {
                    document.body.removeChild(modalContainer);
                }
            }, 300);
        }
    }
    
    // 添加樣式到頭部
    addStyles();
    
    // 添加需要的 CSS 樣式
    function addStyles() {
        const styleElement = document.createElement('style');
        styleElement.textContent = `
            .error-message {
                color: #e53e3e;
                font-size: 0.8rem;
                margin-top: 5px;
            }
            
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
            
            @keyframes fadeInUp {
                0% {
                    opacity: 0;
                    transform: translateY(20px);
                }
                100% {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            @keyframes slideIn {
                0% {
                    opacity: 0;
                    transform: translateX(-50px);
                }
                100% {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
            
            .brand-side {
                opacity: 0;
                transform: translateX(-50px);
            }
            
            .login-side {
                opacity: 0;
                transform: translateX(50px);
            }
            
            .login-form {
                animation: fadeInUp 0.8s ease forwards;
                animation-delay: 0.3s;
                opacity: 0;
            }
            
            .feature-item {
                opacity: 0;
                animation: slideIn 0.6s ease forwards;
            }
            
            .feature-item:nth-child(1) {
                animation-delay: 0.6s;
            }
            
            .feature-item:nth-child(2) {
                animation-delay: 0.8s;
            }
            
            .feature-item:nth-child(3) {
                animation-delay: 1s;
            }
            
            .feature-item:nth-child(4) {
                animation-delay: 1.2s;
            }
        `;
        
        document.head.appendChild(styleElement);
    }
    
    // 根據頁面寬度調整響應式行為
    function adjustResponsiveLayout() {
        const width = window.innerWidth;
        const brandSide = document.querySelector('.brand-side');
        const loginSide = document.querySelector('.login-side');
        
        if (width <= 900) {
            // 在低於900px時，調整布局
            document.querySelectorAll('.feature-text').forEach(text => {
                text.style.fontSize = '1rem';
            });
            
            brandSide.style.padding = '40px 5% 60px';
        } else {
            // 恢復默認設置
            document.querySelectorAll('.feature-text').forEach(text => {
                text.style.fontSize = '1.1rem';
            });
            
            brandSide.style.padding = '';
        }
    }
    
    // 監聽窗口大小變化
    window.addEventListener('resize', adjustResponsiveLayout);
    
    // 頁面載入時調整一次
    adjustResponsiveLayout();
});