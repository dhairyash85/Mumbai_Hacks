from flask import Flask, jsonify, request, make_response
from flask_cors import CORS
import subprocess

app = Flask(__name__)

# Allow CORS for the specific origin
CORS(app, origins="http://localhost:5173")

@app.route('/', methods=['GET'])
def sex():
    print("ah")
    return jsonify({"message": "hello", "info": "adsfds"})  # Use a dictionary for JSON response

@app.route('/car', methods=['POST'])
def run_script():
    data = request.get_json()
    document_url = data.get('url')

    if not document_url:
        return jsonify({'error': 'No URL provided'}), 400

    try:
        # Call the external script and pass the URL
        result = subprocess.run(['python', 'main.py', document_url], capture_output=True, text=True)

        response_data = {
            'output': result.stdout,
            'error': result.stderr if result.stderr else None
        }
        response = make_response(jsonify(response_data))

        return response
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
