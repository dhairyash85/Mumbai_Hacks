import React, { useEffect, useState } from "react";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import { useWalletContract } from "../Context/WalletProvider";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function KYC() {
  // State for form data
  const context = useWalletContract();
  const { connectWallet, walletAddress, addKyc, getKyc } = context;
  const navigate = useNavigate();

  // State for loading and error
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    connectWallet();
  }, []);

  useEffect(() => {
    setFormData((prev) => {
      return { ...prev, walletAddress: walletAddress };
    });
    const getPrev = async () => {
      const res = await getKyc();
      console.log(res);
      if (!res.error) {
        navigate("/dashboard");
      }
    };
    getPrev();
  }, [walletAddress]);

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
  const handleImageUpload = async (imageFile) => {
    const cloudinaryUrl =
      "https://api.cloudinary.com/v1_1/dke7f8nkt/image/upload";
    const formData = new FormData();

    // Appending the image file and required parameters
    formData.append("file", imageFile);
    formData.append("upload_preset", "TraderHub");

    try {
      const res = await axios.post(cloudinaryUrl, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setFormData((prev) => {
        return { ...prev, image: res.data.secure_url };
      });
      return res.data.secure_url; // Cloudinary URL of the uploaded image
    } catch (err) {
      console.error("Error uploading image:", err);
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true
    setError(""); // Reset error state

    // Handle the form submission, e.g., send the data to an API
    const image = await handleImageUpload(formData.image);
    if (image) {
      try {
        const res = await addKyc(formData);
        console.log(res);
        console.log("Form submitted:", formData);
        toast.success("Form Submitted");
        navigate("/dashboard"); // Optionally navigate after submission
      } catch (err) {
        console.error(err);
        setError("Failed to submit KYC. Please try again."); // Set error state
        toast.error("Failed to submit KYC. Please try again."); // Show toast error message
      }
    } else {
      setError("Failed to upload image"); // Set error state
      toast.error("Failed to upload image");
    }
    setLoading(false); // Set loading state to false after submission
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
              {error && <div className="text-red-500 mb-4">{error}</div>}
              <form className="w-full max-w-sm" onSubmit={handleSubmit}>
                <input
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 placeholder-white mb-4"
                  type="text"
                  name="walletAddress"
                  placeholder="Wallet Address"
                  value={formData.walletAddress}
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
                  className={`w-full mt-4 tracking-wide font-semibold bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-500 transition-all duration-300 ease-in-out ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={loading} // Disable button while loading
                >
                  {loading ? "Submitting..." : "Submit"}
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
