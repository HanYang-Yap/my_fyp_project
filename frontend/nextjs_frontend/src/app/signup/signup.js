document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registerForm');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const strengthFill = document.getElementById('strengthFill');
    const strengthText = document.getElementById('strengthText');
    const submitBtn = document.getElementById('submitBtn');
    const termsCheckbox = document.getElementById('terms');
    
    // 密碼強度檢測
    passwordInput.addEventListener('input', function() {
        const password = this.value;
        let strength = 0;
        
        // 長度檢查
        if (password.length >= 8) {
            strength += 1;
        }
        
        // 大小寫檢查
        if (/[A-Z]/.test(password) && /[a-z]/.test(password)) {
            strength += 1;
        }
        
        // 特殊字符檢查
        if (/[0-9]/.test(password) || /[^A-Za-z0-9]/.test(password)) {
            strength += 1;
        }
        
        // 更新強度顯示
        strengthFill.className = 'strength-fill';
        
        if (strength === 0) {
            strengthFill.style.width = '0%';
            strengthText.textContent = '弱';
            strengthText.style.color = '#e53e3e';
        } else if (strength === 1) {
            strengthFill.style.width = '33%';
            strengthFill.style.backgroundColor = '#e53e3e';
            strengthText.textContent = '弱';
            strengthText.style.color = '#e53e3e';
        } else if (strength === 2) {
            strengthFill.style.width = '66%';
            strengthFill.style.backgroundColor = '#ed8936';
            strengthText.textContent = '中等';
            strengthText.style.color = '#ed8936';
        } else {
            strengthFill.style.width = '100%';
            strengthFill.style.backgroundColor = '#38a169';
            strengthText.textContent = '強';
            strengthText.style.color = '#38a169';
        }
        
        // 同時檢查確認密碼
        if (confirmPasswordInput.value) {
            validateConfirmPassword();
        }
    });
    
    // 確認密碼驗證
    function validateConfirmPassword() {
        const confirmError = document.getElementById('confirmPasswordError');
        if (passwordInput.value !== confirmPasswordInput.value) {
            confirmError.style.display = 'block';
            return false;
        } else {
            confirmError.style.display = 'none';
            return true;
        }
    }
    
    confirmPasswordInput.addEventListener('input', validateConfirmPassword);
    
    // 檢查表單是否可提交
    function checkFormValidity() {
        const requiredFields = form.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!field.value || (field.type === 'checkbox' && !field.checked)) {
                isValid = false;
            }
        });
        
        if (passwordInput.value !== confirmPasswordInput.value) {
            isValid = false;
        }
        
        submitBtn.disabled = !isValid;
        return isValid;
    }
    
    // 監聽所有輸入字段變更
    form.querySelectorAll('input, select').forEach(element => {
        element.addEventListener('input', checkFormValidity);
    });
    
    // 社交登入按鈕處理
    document.querySelectorAll('.social-button').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 獲取按鈕類型（Google, Facebook, Apple）
            const socialType = this.querySelector('i').className.includes('google') ? 'google' : 
                               this.querySelector('i').className.includes('facebook') ? 'facebook' : 'apple';
            
            // 社交登入處理函數
            handleSocialLogin(socialType);
        });
    });
    
    // 社交登入處理函數
    function handleSocialLogin(provider) {
        // 顯示加載狀態
        showLoadingState(true);
        
        // 根據不同的社交媒體執行不同的登入流程
        // 這裡只是示例，實際應該根據您的後端認證系統進行調整
        console.log(`開始 ${provider} 登入流程`);
        
        // 模擬 API 呼叫
        // 在實際環境中，您需要使用真實的社交登入 API
        setTimeout(() => {
            showLoadingState(false);
            
            // 這裡可以添加重定向到社交登入頁面的代碼
            alert(`您選擇了使用 ${provider} 登入，此功能正在開發中。`);
        }, 1000);
    }
    
    // 顯示或隱藏加載狀態
    function showLoadingState(isLoading) {
        submitBtn.disabled = isLoading;
        
        if (isLoading) {
            // 可以在這裡添加加載動畫
            submitBtn.innerHTML = '處理中...';
        } else {
            submitBtn.innerHTML = '註冊';
        }
    }
    
    // 添加表單提交事件處理
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // 進行前端驗證
        let formValid = validateForm();
        
        // 如果驗證通過，嘗試發送數據到服務器
        if (formValid) {
            await submitFormData();
        }
    });
    
    // 表單驗證函數
    function validateForm() {
        let formValid = true;
        
        // 檢查名字
        if (!document.getElementById('firstName').value) {
            document.getElementById('firstNameError').style.display = 'block';
            formValid = false;
        } else {
            document.getElementById('firstNameError').style.display = 'none';
        }
        
        // 檢查姓氏
        if (!document.getElementById('lastName').value) {
            document.getElementById('lastNameError').style.display = 'block';
            formValid = false;
        } else {
            document.getElementById('lastNameError').style.display = 'none';
        }
        
        // 檢查電子郵件
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(document.getElementById('email').value)) {
            document.getElementById('emailError').style.display = 'block';
            formValid = false;
        } else {
            document.getElementById('emailError').style.display = 'none';
        }
        
        // 檢查密碼
        if (passwordInput.value.length < 8) {
            document.getElementById('passwordError').style.display = 'block';
            formValid = false;
        } else {
            document.getElementById('passwordError').style.display = 'none';
        }
        
        // 檢查確認密碼
        if (!validateConfirmPassword()) {
            formValid = false;
        }
        
        // 檢查學校
        if (!document.getElementById('school').value) {
            document.getElementById('schoolError').style.display = 'block';
            formValid = false;
        } else {
            document.getElementById('schoolError').style.display = 'none';
        }
        
        // 檢查年級
        if (document.getElementById('grade').value === "") {
            document.getElementById('gradeError').style.display = 'block';
            formValid = false;
        } else {
            document.getElementById('gradeError').style.display = 'none';
        }
        
        // 檢查條款同意
        if (!termsCheckbox.checked) {
            document.getElementById('termsError').style.display = 'block';
            formValid = false;
        } else {
            document.getElementById('termsError').style.display = 'none';
        }
        
        return formValid;
    }
    
    // 提交表單數據到服務器
    async function submitFormData() {
        try {
            // 顯示加載狀態
            showLoadingState(true);
            
            // 收集表單數據
            const formData = {
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                email: document.getElementById('email').value,
                password: passwordInput.value,
                school: document.getElementById('school').value,
                grade: document.getElementById('grade').value,
                agreeToTerms: termsCheckbox.checked
            };
            
            // 發送數據到服務器
            // 注意：將 'YOUR_API_ENDPOINT' 替換為您實際的 API 端點
            const response = await fetch('YOUR_API_ENDPOINT/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            
            // 解析響應
            const result = await response.json();
            
            // 隱藏加載狀態
            showLoadingState(false);
            
            // 處理註冊結果
            if (response.ok) {
                // 註冊成功
                handleRegistrationSuccess(result);
            } else {
                // 註冊失敗
                handleRegistrationError(result);
            }
        } catch (error) {
            // 處理網絡錯誤
            showLoadingState(false);
            console.error('註冊過程中發生錯誤:', error);
            alert('連接服務器時發生錯誤，請稍後再試。');
        }
    }
    
    // 處理註冊成功
    function handleRegistrationSuccess(result) {
        // 顯示成功訊息
        alert('註冊成功！請檢查您的郵箱激活帳號。');
        
        // 清空表單
        form.reset();
        strengthFill.style.width = '0%';
        strengthText.textContent = '弱';
        
        // 可以在這裡添加重定向邏輯
        // 例如，重定向到登入頁面或歡迎頁面
        // window.location.href = 'login.html';
    }
    
    // 處理註冊錯誤
    function handleRegistrationError(result) {
        // 根據服務器返回的錯誤信息顯示相應的錯誤
        if (result.error && result.field) {
            // 如果服務器指明了哪個字段有錯誤
            const errorElement = document.getElementById(`${result.field}Error`);
            if (errorElement) {
                errorElement.textContent = result.error;
                errorElement.style.display = 'block';
            } else {
                // 如果是一個未預期的字段錯誤
                alert(`錯誤: ${result.error}`);
            }
        } else if (result.error) {
            // 一般錯誤信息
            alert(`註冊失敗: ${result.error}`);
        } else {
            // 未知錯誤
            alert('註冊過程中發生未知錯誤，請稍後再試。');
        }
    }
    
    // 初始化按鈕狀態
    checkFormValidity();
});

document.getElementById("login").addEventListener("click",
    function(event) {
     event.preventDefault();
     window.location.href = "/login";
     });