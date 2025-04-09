from flask import Blueprint, render_template, jsonify
import logging
from datetime import datetime, timedelta
import os
import pandas as pd
import re
from config import Config

def create_home_controller(db):
    """
    Creates a home controller blueprint for handling home page routes.
    
    Args:
        db: Firestore client instance
    
    Returns:
        Blueprint: Flask blueprint with home routes
    """
    home_bp = Blueprint('home', __name__)
    
    # Set up logging
    logger = logging.getLogger('home_controller')
    handler = logging.StreamHandler()
    handler.setFormatter(logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s'))
    logger.addHandler(handler)
    logger.setLevel(logging.INFO)
    
    @home_bp.route('/<student_id>', methods=['GET'])
    def home_page(student_id):
        """
        Render the home page with personalized data for a specific student
        
        Args:
            student_id: Firebase user ID of the student
            
        Returns:
            Rendered HTML template with student data
        """
        try:
            logger.info(f"Home page requested for student ID: {student_id}")
            
            # Get student info
            student_info = get_student_info(db, student_id)
            
            # Get upcoming interviews from CSV data based on student preferences
            upcoming_interviews = get_upcoming_interviews_from_csv(db, student_id)
            
            # Get nearest interview for countdown display
            nearest_interview = None
            days_remaining = None
            
            if upcoming_interviews and len(upcoming_interviews) > 0:
                # Sort by date to get the earliest interview
                upcoming_interviews.sort(key=lambda x: x['date'])
                nearest_interview = upcoming_interviews[0]
                
                # Calculate days remaining
                interview_date = datetime.strptime(nearest_interview['date'], '%Y-%m-%d')
                today = datetime.now().replace(hour=0, minute=0, second=0, microsecond=0)
                days_remaining = (interview_date - today).days
                
                # If it's today, show 0
                if days_remaining < 0:
                    days_remaining = 0
            
            # Configure Firebase for frontend
            firebase_config = {
                'apiKey': Config.FIREBASE_API_KEY,
                'authDomain': Config.FIREBASE_AUTH_DOMAIN,
                'projectId': Config.FIREBASE_PROJECT_ID,
                'storageBucket': Config.FIREBASE_STORAGE_BUCKET,
                'messagingSenderId': Config.FIREBASE_MESSAGING_SENDER_ID,
                'appId': Config.FIREBASE_APP_ID
            }
            
            # Render template with data
            return render_template(
                'home.html',
                student_id=student_id,
                student_name=student_info.get('name', '同學'),
                school_name=student_info.get('school', ''),
                nearest_interview=nearest_interview,
                days_remaining=days_remaining,
                firebase_config=firebase_config
            )
            
        except Exception as e:
            logger.error(f"Error rendering home page: {str(e)}")
            # Fallback to generic version with default values
            firebase_config = {
                'apiKey': Config.FIREBASE_API_KEY,
                'authDomain': Config.FIREBASE_AUTH_DOMAIN,
                'projectId': Config.FIREBASE_PROJECT_ID,
                'storageBucket': Config.FIREBASE_STORAGE_BUCKET,
                'messagingSenderId': Config.FIREBASE_MESSAGING_SENDER_ID,
                'appId': Config.FIREBASE_APP_ID
            }
            return render_template(
                'home.html',
                student_id=student_id,
                student_name='同學',
                school_name='測試高中',
                nearest_interview=None,
                days_remaining=None,
                firebase_config=firebase_config
            )
    
    @home_bp.route('/api/<student_id>', methods=['GET'])
    def get_student_data(student_id):
        """
        API endpoint to get student data for AJAX requests
        
        Args:
            student_id: Firebase user ID of the student
            
        Returns:
            JSON response with student data
        """
        try:
            # Get student info
            student_info = get_student_info(db, student_id)
            
            # Get upcoming interviews
            upcoming_interviews = get_upcoming_interviews_from_csv(db, student_id)
            
            return jsonify({
                'status': 'success',
                'student': student_info,
                'interviews': upcoming_interviews
            })
        except Exception as e:
            logger.error(f"Error getting student data: {str(e)}")
            return jsonify({
                'status': 'error',
                'message': str(e)
            })
    
    def get_student_info(db, student_id):
        """
        Get student information from Firestore
        
        Args:
            db: Firestore client instance
            student_id: Student ID
            
        Returns:
            dict: Student information
        """
        try:
            # Default student info
            student_info = {
                'id': student_id,
                'name': '同學',
                'school': '測試高中',
                'email': ''
            }
            
            # Try to get real student data
            user_ref = db.collection('users').document(student_id).get()
            if user_ref.exists:
                user_data = user_ref.to_dict()
                student_info = {
                    'id': student_id,
                    'name': user_data.get('name', '同學'),
                    'school': user_data.get('school', '測試高中'),
                    'email': user_data.get('email', '')
                }
            
            return student_info
        except Exception as e:
            logger.error(f"Error getting student info: {str(e)}")
            return {
                'id': student_id,
                'name': '同學',
                'school': '測試高中'
            }
    
    def get_student_preferred_departments(db, student_id):
        """
        Get the student's preferred departments from Firebase
        
        Args:
            db: Firestore client instance
            student_id: Student ID
            
        Returns:
            list: List of preferred departments
        """
        try:
            preferred_departments = []
            
            # Try to get preferred departments from user data
            user_ref = db.collection('users').document(student_id).get()
            if user_ref.exists:
                user_data = user_ref.to_dict()
                preferred_departments = user_data.get('preferred_departments', [])
            
            # If no preferred departments found in user data, try user_wishes collection
            if not preferred_departments:
                wishes_query = db.collection('user_wishes').where('user_id', '==', student_id).limit(1).stream()
                for doc in wishes_query:
                    wishes_data = doc.to_dict()
                    preferred_departments = wishes_data.get('wishes', [])
                    break
                
                # If still not found, try direct document lookup
                if not preferred_departments:
                    direct_wishes_ref = db.collection('user_wishes').document(student_id).get()
                    if direct_wishes_ref.exists:
                        wishes_data = direct_wishes_ref.to_dict()
                        preferred_departments = wishes_data.get('wishes', [])
            
            return preferred_departments
        except Exception as e:
            logger.error(f"Error getting preferred departments: {str(e)}")
            return []
    
    def get_upcoming_interviews_from_csv(db, student_id):
        """
        Get upcoming interviews from CSV based on student's preferred departments
        
        Args:
            db: Firestore client instance
            student_id: Student ID
            
        Returns:
            list: List of upcoming interviews
        """
        try:
            # Load the CSV data
            departments_df = None
            csv_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'data', 'all_schools_departments.csv')
            
            try:
                departments_df = pd.read_csv(csv_path, encoding='utf-8')
                # Clean up whitespace in text columns
                departments_df = departments_df.apply(lambda x: x.str.strip() if x.dtype == "object" else x)
                logger.info(f"CSV loaded successfully with {len(departments_df)} rows")
            except Exception as e:
                logger.error(f"Error loading CSV: {str(e)}")
                return []
            
            # Get student's preferred departments
            preferred_departments = get_student_preferred_departments(db, student_id)
            
            if not preferred_departments:
                logger.warning(f"No preferred departments found for student {student_id}")
                return []
            
            # Now that we have the preferred departments, find their interview dates in the CSV
            events = []
            
            for pref in preferred_departments:
                rank = pref.get('rank', 0)
                school = pref.get('school', '')
                department = pref.get('department', '')
                
                if not school or not department:
                    continue
                
                # Find matching department in the CSV
                matches = find_matching_department(school, department, departments_df)
                
                if matches.empty:
                    continue
                
                # For each matching row, extract interview dates
                for _, row in matches.iterrows():
                    date_str = row.get('指定項目甄試日期', None)
                    
                    if pd.isna(date_str) or not date_str:
                        continue
                    
                    # Extract additional information
                    item_desc = row.get('項目', '')
                    details = row.get('說明', '')
                    
                    # Parse the date
                    parsed_dates = parse_roc_date(date_str)
                    
                    # Handle date ranges and single dates
                    if isinstance(parsed_dates, list):
                        # It's a date range
                        for date in parsed_dates:
                            event = create_event(date, school, department, rank, date_str, item_desc, details)
                            events.append(event)
                    elif parsed_dates:
                        # Single date
                        event = create_event(parsed_dates, school, department, rank, date_str, item_desc, details)
                        events.append(event)
            
            # Filter to only include future events
            today = datetime.now().replace(hour=0, minute=0, second=0, microsecond=0)
            future_events = []
            
            for event in events:
                try:
                    event_date = datetime.strptime(event['date'], '%Y-%m-%d')
                    if event_date >= today:
                        future_events.append(event)
                except:
                    # Skip events with invalid dates
                    pass
            
            # Sort by date
            future_events.sort(key=lambda x: x['date'])
            
            return future_events
                
        except Exception as e:
            logger.error(f"Error getting upcoming interviews from CSV: {str(e)}")
            return []
    
    def find_matching_department(school, department, df):
        """
        Find matching department in the dataframe
        
        Args:
            school: School name
            department: Department name
            df: Dataframe to search in
            
        Returns:
            pandas.DataFrame: Filtered dataframe with matching rows
        """
        # Try exact match first
        matches = df[(df['學校'] == school) & (df['科系'] == department)]
        
        # If exact match found, return it
        if not matches.empty:
            return matches
        
        # Try to find departments that start with the given department name
        school_df = df[df['學校'] == school]
        if school_df.empty:
            return pd.DataFrame()
        
        # Try partial match
        partial_matches = school_df[school_df['科系'].str.contains(department, regex=False)]
        if not partial_matches.empty:
            return partial_matches
        
        # Try the other way around
        for _, row in school_df.iterrows():
            if row['科系'] in department:
                return pd.DataFrame([row])
        
        # No match found
        return pd.DataFrame()
    
    def parse_roc_date(date_str):
        """
        Parse ROC era date (e.g., 114.5.16) to ISO format (2025-05-16)
        Also handles concatenated dates like 114.5.18114.5.19
        
        Args:
            date_str: ROC date string
                
        Returns:
            str or list: ISO formatted date string or list of date strings for ranges
        """
        if not date_str:
            return None
        
        # Handle explicit date ranges with "至" separator
        if '至' in date_str:
            try:
                dates = []
                start_date, end_date = date_str.split('至')
                start = convert_roc_to_iso(start_date)
                end = convert_roc_to_iso(end_date)
                
                if start and end:
                    # Convert to datetime objects for comparison
                    start_dt = datetime.strptime(start, '%Y-%m-%d')
                    end_dt = datetime.strptime(end, '%Y-%m-%d')
                    
                    # Return a list of all dates in the range
                    current = start_dt
                    while current <= end_dt:
                        dates.append(current.strftime('%Y-%m-%d'))
                        current = current + timedelta(days=1)
                    
                    return dates
            except:
                return None
        
        # If all else fails, try to parse as a single date
        return convert_roc_to_iso(date_str)
    
    def convert_roc_to_iso(date_str):
        """
        Convert a single ROC date to ISO format
        
        Args:
            date_str: A string containing a ROC date (e.g., 114.5.16)
            
        Returns:
            str: ISO formatted date (e.g., 2025-05-16) or None if invalid
        """
        try:
            # Extract numbers from the string using regex
            match = re.search(r'(\d+)\.(\d+)\.(\d+)', date_str)
            if not match:
                return None
            
            roc_year, month, day = map(int, match.groups())
            gregorian_year = roc_year + 1911  # Convert ROC year to Gregorian
            
            # Validate date components
            if month < 1 or month > 12 or day < 1 or day > 31:
                return None
                
            return f"{gregorian_year}-{month:02d}-{day:02d}"
        except:
            return None
    
    def create_event(date, school, department, rank, original_date, item_desc, details):
        """
        Helper function to create consistent event objects
        
        Args:
            date: Event date (ISO format)
            school: School name
            department: Department name
            rank: Preference rank
            original_date: Original date string from CSV
            item_desc: Description of the interview item
            details: Additional details
            
        Returns:
            dict: Event object
        """
        event = {
            'date': date,
            'title': f"{school}{department}面試",
            'type': 'interview',
            'school': school,
            'department': department,
            'preference_rank': rank,
            'original_date': original_date
        }
        
        # Add item description if available
        if item_desc:
            event['item_description'] = item_desc
        
        # Add details if available
        if details:
            event['details'] = details
            
            # Try to extract location information if available in the details
            location_match = re.search(r'地[點址][:：]?\s*([^\n,，。]+)', details)
            if location_match:
                event['location'] = location_match.group(1).strip()
            
            # Try to extract time information
            time_match = re.search(r'時間[:：]?\s*([^\n,，。]+)', details)
            if time_match:
                event['time'] = time_match.group(1).strip()
        
        return event
    
    return home_bp