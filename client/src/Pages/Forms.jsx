import { useEffect, useState } from "react";
import { Navbar } from "../Components/Navbar";
import formImage from "/form.png";
import { useWalletContract } from "../Context/WalletProvider";
import axios from "axios";
import { toast } from "react-toastify";

const inputfieldlabelclass =
  "block mb-2 text-sm font-medium text-gray-900 dark:text-white";
const inputfieldclass =
  "min-w-96 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

function Forms() {
  const [formData, setFormData] = useState({
    age: "",
    maritalStatus: "",
    dependents: "",
    employmentStatus: "",
    healthInsurance: "",
    lifeInsurance: "",
    carInsurance: "",
    housingCost: "",
    transportCost: "",
    foodCost: "",
    savingsBalance: "",
    checkingBalance: "",
    document: null,
  });
  const {addForm, connectWallet, walletAddress}=useWalletContract()

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  useEffect(()=>{
    connectWallet()
  },[])
  // Handle file upload
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      document: e.target.files[0],
    });
  };

  // Handle form submission
  const handleFileUpload = async (file) => {
    const cloudinaryUrl = "https://api.cloudinary.com/v1_1/dke7f8nkt/upload";
    const formData = new FormData();
  
    // Determine the resource type based on the file type
    const resourceType = file.type === "application/pdf" ? "raw" : "image";
  
    // Appending the file and required parameters
    formData.append("file", file);
    formData.append("upload_preset", "TraderHub");
  
    try {
      const res = await axios.post(cloudinaryUrl, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        params: { resource_type: resourceType }
      });
      setFormData(prev=>{return{...prev,document:res.data.secure_url}})
      return res.data.secure_url; // Cloudinary URL of the uploaded file
    } catch (err) {
      console.error("Error uploading file:", err);
      return null;
    }
  };

  const handleSubmit = async(e) => {
    if(!walletAddress){
      return toast.error('Please connect your wallet')

    }
    e.preventDefault();
    console.log(formData);
    try{

      const url=await handleFileUpload(formData.document)
      if(url){
        const res=await addForm(formData)
        console.log(res)
      }
    }catch(err){
      console.log(err)
    }
  };

  return (
    <>
      <Navbar />
      <div className="pt-10 flex items-center h-screen bg-gray-900">
        <img
          src={formImage}
          width="500"
          className="object-cover max-h-80 ml-[5.5rem] mb-[12.5rem]"
          alt="Hero Illustration"
          loading="eager"
        />
        <form
          onSubmit={handleSubmit}
          className="pt-14 mx-auto max-h-full overflow-y-auto bg-gray-800 p-6 rounded-lg shadow-md text-white w-full max-w-4xl"
        >
          <div className="text-3xl mb-4">Personal Information</div>
          <div className="mb-5">
            <label className={inputfieldlabelclass}>Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              className={inputfieldclass}
              placeholder="Enter your age"
              required
            />
          </div>
          <div className="mb-5">
            <label className={inputfieldlabelclass}>Marital Status</label>
            <select
              name="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleInputChange}
              className={inputfieldclass}
            >
              <option value="">Choose a status</option>
              <option value="married">Married</option>
              <option value="unmarried">Unmarried</option>
            </select>
          </div>
          <div className="mb-5">
            <label className={inputfieldlabelclass}>Number of Dependents</label>
            <input
              type="number"
              name="dependents"
              value={formData.dependents}
              onChange={handleInputChange}
              className={inputfieldclass}
              placeholder="Enter number of dependents"
              required
            />
          </div>
          <div className="mb-5">
            <label className={inputfieldlabelclass}>Employment Status</label>
            <select
              name="employmentStatus"
              value={formData.employmentStatus}
              onChange={handleInputChange}
              className={inputfieldclass}
            >
              <option value="">Choose a status</option>
              <option value="working">Working</option>
              <option value="unemployed">Unemployed</option>
            </select>
          </div>

          <div className="text-3xl mt-8 mb-4">Insurance Status</div>
          <div className="mb-5">
            <label className={inputfieldlabelclass}>
              Health Insurance Status
            </label>
            <input
              type="text"
              name="healthInsurance"
              value={formData.healthInsurance}
              onChange={handleInputChange}
              className={inputfieldclass}
              placeholder="Enter health insurance status"
              required
            />
          </div>
          <div className="mb-5">
            <label className={inputfieldlabelclass}>
              Life Insurance Status
            </label>
            <select
              name="lifeInsurance"
              value={formData.lifeInsurance}
              onChange={handleInputChange}
              className={inputfieldclass}
            >
              <option value="">Choose a status</option>
              <option value="insured">Insured</option>
              <option value="not-insured">Not Insured</option>
            </select>
          </div>
          <div className="mb-5">
            <label className={inputfieldlabelclass}>Car Insurance Status</label>
            <select
              name="carInsurance"
              value={formData.carInsurance}
              onChange={handleInputChange}
              className={inputfieldclass}
            >
              <option value="">Choose a status</option>
              <option value="insured">Insured</option>
              <option value="not-insured">Not Insured</option>
            </select>
          </div>

          <div className="text-3xl mt-8 mb-4">Monthly Expenses</div>
          <div className="mb-5">
            <label className={inputfieldlabelclass}>Housing Cost</label>
            <input
              type="number"
              name="housingCost"
              value={formData.housingCost}
              onChange={handleInputChange}
              className={inputfieldclass}
              placeholder="Enter monthly housing cost"
              required
            />
          </div>
          <div className="mb-5">
            <label className={inputfieldlabelclass}>Transportation Cost</label>
            <input
              type="number"
              name="transportCost"
              value={formData.transportCost}
              onChange={handleInputChange}
              className={inputfieldclass}
              placeholder="Enter monthly transportation cost"
              required
            />
          </div>
          <div className="mb-5">
            <label className={inputfieldlabelclass}>Food Cost</label>
            <input
              type="number"
              name="foodCost"
              value={formData.foodCost}
              onChange={handleInputChange}
              className={inputfieldclass}
              placeholder="Enter monthly food cost"
              required
            />
          </div>

          <div className="text-3xl mt-8 mb-4">Account Balances</div>
          <div className="mb-5">
            <label className={inputfieldlabelclass}>
              Savings Account Balance
            </label>
            <input
              type="number"
              name="savingsBalance"
              value={formData.savingsBalance}
              onChange={handleInputChange}
              className={inputfieldclass}
              placeholder="Enter savings account balance"
              required
            />
          </div>
          <div className="mb-5">
            <label className={inputfieldlabelclass}>
              Checking Account Balance
            </label>
            <input
              type="number"
              name="checkingBalance"
              value={formData.checkingBalance}
              onChange={handleInputChange}
              className={inputfieldclass}
              placeholder="Enter checking account balance"
              required
            />
          </div>

          <div className="mb-5">
            <label className={inputfieldlabelclass}>Upload Document</label>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-600"
              id="upload-document"
              type="file"
              onChange={handleFileChange}
            />
          </div>

          <button
            type="submit"
            className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Forms;
