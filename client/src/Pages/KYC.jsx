import React, { useState } from "react";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";

function KYC() {
  // State for form data
  const [formData, setFormData] = useState({
    walletAddress: "",
    name: "",
    age: "",
    city: "",
    homeAddress: "",
    bankAccNumber: "",
    aadharCardNumber: "",
    image: null,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle file input for image upload
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission, e.g., send the data to an API
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-black">
      <div className="px-[200px]">
        <Navbar />
      </div>
      <div className="min-h-full w-full bg-black flex justify-center items-center">
        <div className="flex max-w-4xl w-full bg-black shadow-lg rounded-lg overflow-hidden">
          {/* Left Side - Image */}
          <div className="w-1/2 flex items-center justify-center bg-black">
            <img
              src="https://nextly.web3templates.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbenefit-two.1d7648d5.png&w=640&q=75"
              alt="KYC Illustration"
              className="w-full h-auto"
              style={{ maxHeight: "400px" }} // Optional max height for image
            />
          </div>

          {/* Right Side - Form */}
          <div className="w-1/2 p-6 flex flex-col justify-center">
            <div className="flex flex-col items-center">
              <h1 className="text-2xl font-extrabold text-white mb-6">
                KYC Form
              </h1>
              <form className="w-full max-w-sm" onSubmit={handleSubmit}>
                <input
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 placeholder-white mb-4"
                  type="text"
                  name="walletAddress"
                  placeholder="Wallet Address"
                  value={formData.walletAddress}
                  onChange={handleChange}
                  required
                />
                <input
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 placeholder-white mb-4"
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 placeholder-white mb-4"
                  type="number"
                  name="age"
                  placeholder="Age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                />
                <input
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 placeholder-white mb-4"
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
                <input
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 placeholder-white mb-4"
                  type="text"
                  name="homeAddress"
                  placeholder="Home Address"
                  value={formData.homeAddress}
                  onChange={handleChange}
                  required
                />
                <input
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 placeholder-white mb-4"
                  type="text"
                  name="bankAccNumber"
                  placeholder="Bank Account Number"
                  value={formData.bankAccNumber}
                  onChange={handleChange}
                  required
                />
                <input
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 placeholder-white mb-4"
                  type="text"
                  name="aadharCardNumber"
                  placeholder="Aadhar Card Number"
                  value={formData.aadharCardNumber}
                  onChange={handleChange}
                  required
                />
                <input
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 mb-4"
                  type="file"
                  name="image"
                  onChange={handleFileChange}
                  required
                />
                <button
                  type="submit"
                  className="w-full mt-4 tracking-wide font-semibold bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-500 transition-all duration-300 ease-in-out"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default KYC;
