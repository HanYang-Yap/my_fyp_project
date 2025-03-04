import os

import openai
from flask import Blueprint, jsonify, render_template, request

# 創建 Blueprint
test_bp = Blueprint('test_bp', __name__)

# 獲取當前環境
env = os.getenv("FLASK_ENV", "development")

# 🔹 環境配置檢查 API
@test_bp.route('/config')
def config():
    return f"Running in {env} mode. Debug: {os.getenv('DEBUG', 'False')}"

# 🔹 OpenAI API 端點
@test_bp.route('/ask_openai', methods=['POST'])
def ask_openai():
    data = request.get_json()
    user_input = data.get("question")

    if not user_input:
        return jsonify({"error": "Missing 'question' parameter"}), 400

    try:
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": user_input}]
        )
        return jsonify({"response": response["choices"][0]["message"]["content"]})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

# 🔹 測試首頁
@test_bp.route('/')
def test():
    return 'Hello, this is the index page!'

# 🔹 測試 home 頁面 (渲染 HTML)
@test_bp.route('/home')
def home():
    name = '姓名變數'
    return render_template('home.html', user_name=name)

# 🔹 透過 URL 參數傳遞使用者資訊
@test_bp.route('/user/<name>/<int:age>')
def user_age(name, age):
    return f"Your name is {name} and you are {age} years old!"

# 🔹 處理 URL Query 參數
@test_bp.route('/handle_url_params')
def handle_url_params():
    if 'Name' in request.args and 'Greeting' in request.args:
        name = request.args.get('Name')
        greeting = request.args.get('Greeting')
        return f"{greeting}, {name}!"
    else:
        return 'Name or Greeting parameter is missing!'

# 🔹 GET/POST API (支援表單提交)
@test_bp.route('/handle_getpost_request', methods=['POST', 'GET'])
def handle_getpost_request():
    if request.method == 'POST':
        if 'Name' in request.form and 'Greeting' in request.form:
            name = request.form.get('Name')
            greeting = request.form.get('Greeting')
            return f"{greeting}, {name}!"
        else:
            return '[POST] Name or Greeting parameter is missing!'
    else:
        return '[GET] Name or Greeting parameter is missing!'
