from flask import Blueprint, jsonify, request
import pandas as pd
import re
from datetime import datetime, timedelta
import os
import logging

# profile_controller.py
def create_profile_controller(db):
    profile_bp = Blueprint('profile', __name__)
    
    @profile_bp.route('/<student_id>', methods=['GET'])
    def get_profile(student_id):
        try:
            user_doc = db.collection('users').document(student_id).get()
            if user_doc.exists:
                return jsonify({"status": "success", "data": user_doc.to_dict()})
            else:
                return jsonify({"status": "error", "message": "Profile not found"})
        except Exception as e:
            return jsonify({"status": "error", "message": str(e)})
    
    @profile_bp.route('/<student_id>', methods=['POST'])
    def update_profile(student_id):
        try:
            data = request.json
            db.collection('users').document(student_id).set(data, merge=True)
            return jsonify({"status": "success"})
        except Exception as e:
            return jsonify({"status": "error", "message": str(e)})
            
    # Add more endpoints for preferences
    
    return profile_bp