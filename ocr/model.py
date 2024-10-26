from flask import Flask, request, jsonify
import joblib
import numpy as np
import pandas as pd
from flask_cors import CORS

app = Flask(__name__)

# Load the trained model and scaler
model = joblib.load('credit_score_model.pkl')
scaler = joblib.load('scaler.pkl')  # Load the scaler if you used one during training

# Enable CORS for all origins
CORS(app)

# List of features used for prediction
features = [
    'HealthInsuranceStatus', 'AutoLoanBalance', 'RentPayments', 'NetWorth',
    'TotalAssets', 'TotalLiabilities', 'LifeInsuranceStatus', 'CarInsuranceStatus',
    'HomeInsuranceStatus', 'MonthlyHousingCosts', 'MonthlyEntertainmentCosts',
    'Age', 'MaritalStatus', 'EmploymentStatus', 'NumberOfDependents',
    'SavingsAccountBalance', 'CheckingAccountBalance', 'InvestmentAccountBalance',
    'RetirementAccountBalance', 'EmergencyFundBalance'
]

# Define a route for predictions
@app.route('/predict', methods=['POST'])
def predict_credit_score():
    try:
        # Get JSON data from the request
        data = request.json

        # Extract features in the correct order
        input_data = [data.get(feature, 0) for feature in features]

        # Convert the input data to a DataFrame for scaling
        input_df = pd.DataFrame([input_data], columns=features)
        
        # Scale the input data
        input_data_scaled = scaler.transform(input_df)

        # Make prediction
        prediction = model.predict(input_data_scaled)

        # Return the result as JSON
        return jsonify({'predicted_credit_score': prediction[0]})
    
    except Exception as e:
        return jsonify({'error': str(e)}), 400

# Run the Flask app
if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=5100)
