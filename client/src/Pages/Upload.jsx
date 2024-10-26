import React, { useState } from 'react';
import { Navbar } from '../Components/Navbar';
import axios from 'axios';

const inputfieldlabelclass = "block mb-2 text-sm font-medium text-gray-900 dark:text-white";
const inputfieldclass = "min-w-96 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

function Upload() {
    const [formData, setFormData] = useState({
        image: null,
        category: '',
    });
    const [apiResponse, setApiResponse] = useState(null); // New state for API response

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            handleImageUpload(file);
        }
    };

    const handleImageUpload = async (imageFile) => {
        const cloudinaryUrl = "https://api.cloudinary.com/v1_1/dke7f8nkt/image/upload";
        const formData = new FormData();

        formData.append("file", imageFile);
        formData.append("upload_preset", "TraderHub");

        try {
            const res = await axios.post(cloudinaryUrl, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            const uploadedImageUrl = res.data.secure_url;
            setFormData(prev => ({
                ...prev,
                image: uploadedImageUrl,
            }));
            console.log(uploadedImageUrl);

            // Send the image URL to the Flask API
            await sendImageUrlToApi(uploadedImageUrl);
            return uploadedImageUrl; // Cloudinary URL of the uploaded image
        } catch (err) {
            console.error("Error uploading image:", err);
            return null;
        }
    };

    const sendImageUrlToApi = async (imageUrl) => {
        try {
            const response = await axios.post('http://localhost:5000/car', {
                url: imageUrl,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            
            console.log('Response from API:', response.data);
            
            // Split the output string by newline and filter out empty strings
            const outputData = response.data.output
                .split('\n')
                .map(item => item.trim())
                .filter(item => item !== ''); // Remove any empty strings
            
            // Ensure the outputData has the expected number of items
            if (outputData.length === 4) {
                setApiResponse(outputData); // Store the parsed API response
            } else {
                console.error('Unexpected output format:', outputData);
            }
        } catch (error) {
            console.error('Error sending image URL to API:', error);
        }
    };
    
    

    const handleCategoryChange = (e) => {
        setFormData(prev => ({
            ...prev,
            category: e.target.value,
        }));
    };

    return (
        <div className='bg-black min-h-screen'>
            <Navbar />
            <div className="mb-5">
                <label className={inputfieldlabelclass}>Choose file category</label>
                <select
                    name="category"
                    className={inputfieldclass}
                    onChange={handleCategoryChange}
                >
                    <option value="">Choose a category</option>
                    <option value="car">Car Loan</option>
                    <option value="home">Home Loan</option>
                </select>
            </div>

            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Wanna import data?</label>
            <input
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="file_input"
                type="file"
            />

            {/* Displaying the API response */}
            {apiResponse && (
    <div className="mt-5 text-white">
        <h2 className="text-lg font-semibold">Payment Information</h2>
        <p><strong>Amount to be Paid:</strong> {apiResponse[0]}</p>
        <p><strong>Total Amount Paid:</strong> {apiResponse[1]}</p>
        <p><strong>Due Date:</strong> {apiResponse[2]}</p>
        <p><strong>Interest Rate:</strong> {apiResponse[3]}</p>
    </div>
)}

        </div>
    );
}

export default Upload;
