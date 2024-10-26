import requests
import sys
from PIL import Image
import pytesseract
from pdf2image import convert_from_path
from io import BytesIO

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

def ocr_from_image(image):
    return pytesseract.image_to_string(image)

def download_file(url):
    response = requests.get(url)
    if response.status_code == 200:
        return BytesIO(response.content)
    else:
        print(f"Failed to download file: {response.status_code} {response.text}")
        return None

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
                        "text": f"Extract the following details from the text:\n{text} amount to be repaid, total amount paid, due date, InterestRate etc. on first line give the amount to be repaid second total amount page third due date and 4th interest rate i dont want any other text descriptipon just give what i asked"
                    }
                ]
            }
        ]
    }

    response = requests.post(url, json=data, headers=headers)
    
    if response.status_code == 200:
        response_data = response.json()
        # print("Successfully processed.")
        # Return the response text to be used later
        return response_data['candidates'][0]['content']['parts'][0]['text']
    else:
        print("Failed to send data:", response.status_code, response.text)
        return None

if __name__ == "__main__":
    if len(sys.argv) > 1:
        document_url = sys.argv[1]
        
        # Download the file from the URL
        file = download_file(document_url)
        if file:
            # Determine the type of file (PDF or image)
            if document_url.lower().endswith('.pdf'):
                extracted_text = ocr_from_pdf(file)
            else:
                image = Image.open(file)
                extracted_text = ocr_from_image(image)
            
            if extracted_text:
                # print("Extracted Text:")
                # print(extracted_text)
                gemini_response = send_to_gemini(extracted_text)
                
                if gemini_response:
                    # print("Gemini Response:")
                    print(gemini_response)  # Print the Gemini response
    else:
        print("No document URL provided.")
