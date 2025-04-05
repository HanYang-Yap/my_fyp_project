from flask import Blueprint, jsonify
import pandas as pd
import re
from datetime import datetime
import firebase_admin
from firebase_admin import firestore

def create_calendar_controller(db):
    """
    Creates a calendar controller blueprint for handling calendar-related routes.
    
    Args:
        db: Firestore client instance
    
    Returns:
        Blueprint: Flask blueprint with calendar routes
    """
    calendar_bp = Blueprint('calendar', __name__)
    
    # Load the CSV data once when the controller is created
    try:
        departments_df = pd.read_csv('all_schools_departments.csv')
        # print(f"CSV loaded successfully with {len(departments_df)} rows")
    except Exception as e:
        print(f"Error loading CSV: {str(e)}")
        departments_df = None
    
    def parse_roc_date(date_str):
        """
        Parse ROC era date (e.g., 114.5.16) to ISO format (2025-05-16)
        """
        if pd.isna(date_str) or not date_str:
            return None
        
        # Handle date ranges like "114.5.24至114.5.25"
        if '至' in date_str:
            dates = []
            start_date, end_date = date_str.split('至')
            start = parse_roc_date(start_date)
            end = parse_roc_date(end_date)
            
            if start and end:
                # Convert to datetime objects for comparison
                start_dt = datetime.strptime(start, '%Y-%m-%d')
                end_dt = datetime.strptime(end, '%Y-%m-%d')
                
                # Return a list of all dates in the range
                current = start_dt
                while current <= end_dt:
                    dates.append(current.strftime('%Y-%m-%d'))
                    current = current.replace(day=current.day + 1)
                
                return dates
            return None
        
        # Extract numbers from the string using regex
        match = re.search(r'(\d+)\.(\d+)\.(\d+)', date_str)
        if not match:
            return None
        
        roc_year, month, day = map(int, match.groups())
        gregorian_year = roc_year + 1911  # Convert ROC year to Gregorian
        
        try:
            return f"{gregorian_year}-{month:02d}-{day:02d}"
        except ValueError:
            return None
    
    @calendar_bp.route('/calendar/<student_id>', methods=['GET'])
    def get_student_calendar(student_id):
        """
        Get personalized calendar events for a specific student
        """
        try:
            if departments_df is None:
                return jsonify({
                    'status': 'error',
                    'message': 'Department data not available'
                }), 500
            
            # Get student preferences from Firebase
            student_ref = db.collection('user_wishes').where('user_id', '==', student_id).limit(1).stream()
            
            student_wishes = None
            for doc in student_ref:
                student_wishes = doc.to_dict()
                break
            
            if not student_wishes or 'wishes' not in student_wishes:
                return jsonify({
                    'status': 'error',
                    'message': 'Student preferences not found'
                }), 404
            
            # Get the student's name and info
            student_info = {}
            user_ref = db.collection('users').document(student_id).get()
            if user_ref.exists:
                user_data = user_ref.to_dict()
                student_info = {
                    'id': student_id,
                    'name': user_data.get('name', ''),
                    'school': user_data.get('school', ''),
                    'email': user_data.get('email', '')
                }
            
            # Process each wish to find matching departments and interview dates
            events = []
            wishes = student_wishes.get('wishes', [])
            
            for i, wish in enumerate(wishes, 1):
                school_name = wish.get('school', '')
                dept_name = wish.get('department', '')
                
                if not school_name or not dept_name:
                    continue
                
                # Find matching departments in the CSV
                matches = departments_df[
                    (departments_df['學校'] == school_name) & 
                    (departments_df['科系'] == dept_name)
                ]
                
                if matches.empty:
                    continue
                
                # Get interview date
                for _, row in matches.iterrows():
                    date_str = row.get('指定項目甄試日期', None)
                    
                    if pd.isna(date_str) or not date_str:
                        continue
                    
                    parsed_dates = parse_roc_date(date_str)
                    
                    # Handle both single dates and date ranges
                    if isinstance(parsed_dates, list):
                        # It's a date range, create an event for each date
                        for date in parsed_dates:
                            event = {
                                'date': date,
                                'title': f"{school_name} {dept_name} 面試",
                                'type': 'interview',
                                'school': school_name,
                                'department': dept_name,
                                'preference_rank': i,
                                'original_date': date_str
                            }
                            events.append(event)
                    elif parsed_dates:
                        # Single date
                        event = {
                            'date': parsed_dates,
                            'title': f"{school_name} {dept_name} 面試",
                            'type': 'interview',
                            'school': school_name,
                            'department': dept_name,
                            'preference_rank': i,
                            'original_date': date_str
                        }
                        events.append(event)
            
            # Sort events by date
            events.sort(key=lambda x: x['date'])
            
            response = {
                'status': 'success',
                'student': student_info,
                'events': events
            }
            
            return jsonify(response)
            
        except Exception as e:
            print(f"Error getting calendar: {str(e)}")
            return jsonify({
                'status': 'error',
                'message': f'Failed to get calendar: {str(e)}'
            }), 500
    
    return calendar_bp