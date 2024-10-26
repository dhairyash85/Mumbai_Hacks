import { useEffect, useState } from "react";
import { Navbar } from "../Components/Navbar";
import formImage from "/form.png";
import { Link } from "react-router-dom";
import { Footer } from "../Components/Footer";
// import axios from "axios";
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
    netWorth: "",
    totalAssets: "",
    totalLiabilities: "",
    emergencyFundBalance: "",
    retirementAccountBalance: "",
    investmentAccountBalance: "",
    autoLoanBalance: "",
    rentPayments: "",
  });
  const {addForm, connectWallet, walletAddress, addFinance}=useWalletContract()

  const [predictedCreditScore, setPredictedCreditScore] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleSubmit = async (e) => {
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
    e.preventDefault();
    await connectWallet()
    // if(!walletAddress){
    //   return toast.error('Please connect your wallet')
      
    // }
    
    const payload = {
      AutoLoanBalance: Number(formData.autoLoanBalance),
      RentPayments: Number(formData.rentPayments),
      NetWorth: Number(formData.netWorth),
      TotalAssets: 20002300, // Static value as per your request
      TotalLiabilities: Number(formData.totalLiabilities),
      MonthlyHousingCosts: Number(formData.housingCost),
      MonthlyEntertainmentCosts: Number(formData.foodCost),
      Age: Number(formData.age),
      NumberOfDependents: Number(formData.dependents),
      SavingsAccountBalance: Number(formData.savingsBalance),
      CheckingAccountBalance: Number(formData.checkingBalance),
      InvestmentAccountBalance: Number(formData.investmentAccountBalance),
      RetirementAccountBalance: 3023000, // Static value as per your request
      EmergencyFundBalance: Number(formData.emergencyFundBalance),
    };

    console.log("Submitting payload:", payload); // Log the payload to see if values are changing
    await addFinance(payload)
    try {
      const response = await axios.post("http://localhost:5100/predict", payload);
      setPredictedCreditScore(response.data.predicted_credit_score);
      console.log("Predicted Credit Score:", response.data.predicted_credit_score);
      
      // Optional: Reset form data after submission
      // setFormData({
      //   age: "",
      //   maritalStatus: "",
      //   dependents: "",
      //   employmentStatus: "",
      //   healthInsurance: "",
      //   lifeInsurance: "",
      //   carInsurance: "",
      //   housingCost: "",
      //   transportCost: "",
      //   foodCost: "",
      //   savingsBalance: "",
      //   checkingBalance: "",
      //   netWorth: "",
      //   totalAssets: "",
      //   totalLiabilities: "",
      //   emergencyFundBalance: "",
      //   retirementAccountBalance: "",
      //   investmentAccountBalance: "",
      //   autoLoanBalance: "",
      //   rentPayments: "",
      // });
      
    } catch (error) {
      console.error("Error submitting data:", error);
      setPredictedCreditScore(null); // Reset if there's an error
    }
    console.log(formData);
    try{

      // const url=await handleFileUpload(formData.document)
      // if(url){
        const res=await addForm(formData)
        console.log(res)
      // }
    }catch(err){
      console.log(err)
    }
  };
  const [finance, setFinance] = useState(null); 
  const context = useWalletContract();
  const { getFinance } = context;

  useEffect(() => {
    const fetchFinancee = async () => {
      try {
        const res = await getFinance();
        setFinance(res.data);
        console.log(res.data);
  
        setFormData((prevData) => ({
          ...prevData,
          ...res.data,
        }));
      } catch (error) {
        console.error("Error fetching finance data:", error);
      }
    };
  
    fetchFinancee();
  }, [getFinance]);
  



  return (
    <div className="bg-black">
      <div className="w-full bg-black">
        <nav className="container relative flex flex-wrap items-center justify-between py-8 lg:justify-between xl:px-1">
          <Link
            to="/"
            className="flex items-center justify-center pl-[100px] space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100"
          >
            <img src="/logo.png" width="32" alt="Logo" className="w-8" />
            <span>Credify Pro</span>
          </Link>
          <div className="hidden lg:flex gap-3 nav__item lg:ml-auto lg:order-2">
            <Link
              to="/kyc"
              className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </div>
      <div className="pt-10 flex items-center h-screen bg-black">
        <img
          src="https://nextly.web3templates.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.4e76c802.png&w=640&q=75"
          width="500"
          className="object-cover w-fit max-h-80 ml-[10.5rem] mb-[12.5rem]"
          alt="Hero Illustration"
          loading="eager"
        />
        <form
          onSubmit={handleSubmit}
          className="mx-auto max-h-full overflow-y-auto bg-black p-6 rounded-lg shadow-md text-white w-full max-w-4xl"
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
            <label className={inputfieldlabelclass}>Health Insurance Status</label>
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
            <label className={inputfieldlabelclass}>Life Insurance Status</label>
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

          <div className="text-3xl mt-8 mb-4">Financial Information</div>
          <div className="mb-5">
            <label className={inputfieldlabelclass}>Savings Account Balance</label>
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
            <label className={inputfieldlabelclass}>Checking Account Balance</label>
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
            <label className={inputfieldlabelclass}>Net Worth</label>
            <input
              type="number"
              name="netWorth"
              value={formData.netWorth}
              onChange={handleInputChange}
              className={inputfieldclass}
              placeholder="Enter net worth"
              required
            />
          </div>
          <div className="mb-5">
            <label className={inputfieldlabelclass}>Total Assets</label>
            <input
              type="number"
              name="totalAssets"
              value={formData.totalAssets}
              onChange={handleInputChange}
              className={inputfieldclass}
              placeholder="Enter total assets"
              required
            />
          </div>
          <div className="mb-5">
            <label className={inputfieldlabelclass}>Total Liabilities</label>
            <input
              type="number"
              name="totalLiabilities"
              value={formData.totalLiabilities}
              onChange={handleInputChange}
              className={inputfieldclass}
              placeholder="Enter total liabilities"
              required
            />
          </div>
          <div className="mb-5">
            <label className={inputfieldlabelclass}>Emergency Fund Balance</label>
            <input
              type="number"
              name="emergencyFundBalance"
              value={formData.emergencyFundBalance}
              onChange={handleInputChange}
              className={inputfieldclass}
              placeholder="Enter emergency fund balance"
              required
            />
          </div>
          <div className="mb-5">
            <label className={inputfieldlabelclass}>Retirement Account Balance</label>
            <input
              type="number"
              name="retirementAccountBalance"
              value={formData.retirementAccountBalance}
              onChange={handleInputChange}
              className={inputfieldclass}
              placeholder="Enter retirement account balance"
              required
            />
          </div>
          <div className="mb-5">
            <label className={inputfieldlabelclass}>Investment Account Balance</label>
            <input
              type="number"
              name="investmentAccountBalance"
              value={formData.investmentAccountBalance}
              onChange={handleInputChange}
              className={inputfieldclass}
              placeholder="Enter investment account balance"
              required
            />
          </div>
          <div className="mb-5">
            <label className={inputfieldlabelclass}>Auto Loan Balance</label>
            <input
              type="number"
              name="autoLoanBalance"
              value={formData.autoLoanBalance}
              onChange={handleInputChange}
              className={inputfieldclass}
              placeholder="Enter auto loan balance"
              required
            />
          </div>
          <div className="mb-5">
            <label className={inputfieldlabelclass}>Rent Payments</label>
            <input
              type="number"
              name="rentPayments"
              value={formData.rentPayments}
              onChange={handleInputChange}
              className={inputfieldclass}
              placeholder="Enter rent payments"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 text-white bg-indigo-600 rounded-md px-4 py-2"
          >
            Predict Credit Score
          </button>

          {predictedCreditScore !== null && (
            <div className="mt-4 text-lg">
              Predicted Credit Score: {predictedCreditScore}
            </div>
          )}
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Forms;
