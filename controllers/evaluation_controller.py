import traceback

from firebase_admin import firestore
from flask import Blueprint, jsonify, request

from services.evaluation_service import EvaluationService

evaluation_bp = Blueprint('evaluation_bp', __name__)

def get_evaluation_service():
    db = firestore.client()
    return EvaluationService(db)

def handle_internal_error(e):
    print("❌ Internal Server Error:", traceback.format_exc())
    return jsonify({"error": "伺服器內部錯誤", "details": str(e)}), 500

@evaluation_bp.route('/totalScore', methods=['POST'])
def get_total_score():
    try:
        evaluation_service = get_evaluation_service()
        data = request.get_json()
        user_id = data.get('userId')
        file_id = data.get('fileId')

        if not user_id or not file_id:
            return jsonify({"error": "userId 和 fileId 為必填項"}), 400

        evaluations = evaluation_service.query({"user_id": user_id, "file_id": file_id})
        if not evaluations:
            return jsonify({"error": "未找到該評分資料"}), 404

        evaluation = evaluations[0]
        return jsonify({"totalScore": evaluation.scores[-1]})

    except Exception as e:
        return handle_internal_error(e)


@evaluation_bp.route('/radarScores', methods=['POST'])
def get_radar_scores():
    try:
        evaluation_service = get_evaluation_service()
        data = request.get_json()
        user_id = data.get('userId')
        file_id = data.get('fileId')

        if not user_id or not file_id:
            return jsonify({"error": "userId 和 fileId 為必填項"}), 400

        evaluations = evaluation_service.query({"user_id": user_id, "file_id": file_id})
        if not evaluations:
            return jsonify({"error": "未找到該評分資料"}), 404

        evaluation = evaluations[0]
        return jsonify({"radarScores": evaluation.scores[:-1]})

    except Exception as e:
        return handle_internal_error(e)


@evaluation_bp.route('/suggestions', methods=['POST'])
def get_suggestions():
    try:
        evaluation_service = get_evaluation_service()
        data = request.get_json()
        user_id = data.get('userId')
        file_id = data.get('fileId')

        if not user_id or not file_id:
            return jsonify({"error": "userId 和 fileId 為必填項"}), 400

        evaluations = evaluation_service.query({"user_id": user_id, "file_id": file_id})
        if not evaluations:
            return jsonify({"error": "未找到該評分資料"}), 404

        evaluation = evaluations[0]
        return jsonify({"suggestions": evaluation.suggestions})

    except Exception as e:
        return handle_internal_error(e)

@evaluation_bp.route('/userRevisedHistory', methods=['POST'])
def user_revised_history_controller():
    try:
        data = request.get_json()
        user_id = data.get("userId") 
        if not user_id:
            return jsonify({"error": "缺少必要的 userId"}), 400
        
        # 查詢該用戶的所有評估記錄
        evaluation_service = get_evaluation_service()
        evaluations = evaluation_service.query({"user_id": user_id})
        
        # 格式化返回結果
        user_revised_history = {
            "userId": user_id,
            "totalEvaluations": len(evaluations),
            "evaluations": [
                {
                    "fileId": eval.file_id,
                    "evaluationId": eval.evaluation_id,
                    "scores": eval.scores,
                    "scoreLabels": eval.score_labels,
                    "suggestions": eval.suggestions
                } for eval in evaluations
            ]
        }
        
        return jsonify(user_revised_history), 200
    
    except Exception as e:
        return jsonify({"error": "伺服器內部錯誤", "details": str(e)}), 500