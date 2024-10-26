import { useState } from "react";
import { Navbar } from "../Components/Navbar";
import formImage from "/form.png";
import { Link } from "react-router-dom";
import { Footer } from "../Components/Footer";

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

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle file upload
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      document: e.target.files[0],
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can send the formData to the backend or process it as needed
    console.log(formData);
  };

  return (
    <div className="bg-black">
      <div>
        <div className="w-full bg-black">
          <nav className="container relative flex flex-wrap items-center justify-between py-8 lg:justify-between xl:px-1">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center justify-center pl-[100px] space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100"
            >
              <img
                src="/logo.png" // Update this path to your logo image
                width="32"
                alt="Logo"
                className="w-8"
              />
              <span>Credify Pro</span>
            </Link>

            {/* Get Started button - only show on medium and larger screens */}
            <div className="hidden lg:flex gap-3 nav__item lg:ml-auto lg:order-2">
              <Link
                to="/kyc"
                className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5"
                onClick={() => {
                  connectWallet;
                }}
              >
                Get Started
              </Link>
            </div>

            {/* Hamburger Icon for Mobile - only show on small screens */}
            {/* <button
          className="text-white lg:hidden ml-auto"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button> */}

            {/* Menu - Adjust visibility based on state */}
            {/* <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full lg:flex lg:w-auto lg:items-center text-center`}
        >
          <ul className="justify-end flex-1 list-none lg:flex lg:pt-0 pt-6">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <a
                  href="/kyc"
                  className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                >
                  {menu}
                </a>
              </li>
            ))}
          </ul>
        </div> */}
          </nav>
        </div>
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
      <Footer />
    </div>
  );
}

export default Forms;
