import requests
import sys
from PIL import Image
import pytesseract
from pdf2image import convert_from_path

def ocr_from_pdf(pdf_path):
    try:
        images = convert_from_path(pdf_path)
    except Exception as e:
        print(f"Error converting PDF to images: {e}")
        return ""

    extracted_text = ""
    for img in images:
        text = pytesseract.image_to_string(img)
        extracted_text += text + "\n"
    
    return extracted_text

def ocr_from_image(image_path):
    try:
        img = Image.open(image_path)
    except Exception as e:
        print(f"Error opening image: {e}")
        return ""

    return pytesseract.image_to_string(img)

def extract_text_from_document(file_path):
    if file_path.lower().endswith('.pdf'):
        return ocr_from_pdf(file_path)
    else:
        return ocr_from_image(file_path)

def send_to_gemini(text):
    url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAT9-mtIv1KyG4UVAApApJstfnz4DwCMhk'
    headers = {
        "Content-Type": "application/json",
    }

    data = {
        "contents": [
            {
                "parts": [
                    {
                        "text": f"Extract the following details from the text:\n{text} amount to be repaid, total amount paid, due date, InterestRate etc. on first line give the amount to be repaid second total amount page third due date and 4th interest rate i dont want any other text descriptipn just give what i asked"
                    }
                ]
            }
        ]
    }

    response = requests.post(url, json=data, headers=headers)
    
    if response.status_code == 200:
        response_data = response.json()
        print("csfully.")
        print("Gemini API Response:")
        print(response_data['candidates'][0]['content']['parts'][0]['text'])  # Print the entire response
    else:
        print("Failed to send data:", response.status_code, response.text)

if __name__ == "__main__":
    file_path = sys.argv[1]  
    extracted_text = extract_text_from_document(file_path)
    
    if extracted_text:
        print("Extracted Text:")
        print(extracted_text)

        send_to_gemini(extracted_text)
