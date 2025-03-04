import os

import openai  # OpenAI
from flask import Flask, jsonify, render_template, request

from config import DevelopmentConfig, ProductionConfig
from controllers.test_controller import test_bp
from controllers.user_controller import create_user_controller

app = Flask(__name__,template_folder="templates")

# 根據環境載入不同設定，預設開發模式
env = os.getenv("FLASK_ENV", "development") 
if env == 'production':
    app_config = ProductionConfig()
else:
    app_config = DevelopmentConfig()

app.config.from_object(app_config)
# 設定 OpenAI API Key
openai.api_key = app.config["OPENAI_API_KEY"]
# 設定 Firebase
# db = app_config.init_firebase()

# 註冊 API Blueprint
# app.register_blueprint(create_user_controller(db), url_prefix='/api/users') # 使用者 API
app.register_blueprint(test_bp, url_prefix='/test') # 測試用

if __name__ == '__main__':
    app.run(debug=True, port=5000)