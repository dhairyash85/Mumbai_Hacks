import { useState } from "react";
import { Navbar } from "../Components/Navbar";
import formImage from "../assets/form.png";

const inputfieldlabelclass = "block mb-2 text-sm font-medium text-gray-900 dark:text-white ";
const inputfieldclass = "min-w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

function Forms() {
    const [step, setStep] = useState(1);

    const handleNext = () => {
        setStep((prevStep) => Math.min(prevStep + 1, 5));
    };

    const handleBack = () => {
        setStep((prevStep) => Math.max(prevStep - 1, 1));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Submit form logic
        alert("Form submitted!");
    };

    return (
        <>
            <Navbar />
            <div className="flex items-center">
                <img
                    src={formImage}
                    width="500"
                    className="object-cover max-h-80"
                    alt="Hero Illustration"
                    loading="eager"
                />
                <form className="mx-auto" onSubmit={handleSubmit}>
                    {step === 1 && (
                        <div>
                            <div className="text-3xl text-white">Personal</div>
                            <div className="mb-5 mt-5">
                                <label className={inputfieldlabelclass}>Age</label>
                                <input type="number" id="age" className={inputfieldclass} placeholder="69" required />
                            </div>
                            <div className="mb-5">
                                <label className={inputfieldlabelclass}>Marital Status</label>
                                <select className={inputfieldclass}>
                                    <option selected>Choose a status</option>
                                    <option value="Married">Married 🍆🍑</option>
                                    <option value="Unmarried">Unmarried ✊💦</option>
                                </select>
                            </div>
                            <div className="mb-5 mt-5">
                                <label className={inputfieldlabelclass}>Number Of Dependents</label>
                                <input type="number" id="dependents" className={inputfieldclass} placeholder="69" required />
                            </div>
                        </div>
                    )}
                    {step === 2 && (
                        <div>
                            <div className="text-3xl text-white">Insurance Status</div>
                            <div className="mb-5 mt-5">
                                <label className={inputfieldlabelclass}>Health Insurance Status</label>
                                <select className={inputfieldclass}>
                                    <option selected>Choose a status</option>
                                    <option value="Insured">Insured</option>
                                    <option value="Not Insured">Not Insured</option>
                                </select>
                            </div>
                            <div className="mb-5">
                                <label className={inputfieldlabelclass}>Life Insurance Status</label>
                                <select className={inputfieldclass}>
                                    <option selected>Choose a status</option>
                                    <option value="Insured">Insured</option>
                                    <option value="Not Insured">Not Insured</option>
                                </select>
                            </div>
                        </div>
                    )}
                    {step === 3 && (
                        <div>
                            <div className="text-3xl text-white">Monthly Status</div>
                            <div className="mb-5 mt-5">
                                <label className={inputfieldlabelclass}>Housing Cost</label>
                                <input type="number" id="housingCost" className={inputfieldclass} placeholder="69" required />
                            </div>
                            <div className="mb-5">
                                <label className={inputfieldlabelclass}>Transportation Cost</label>
                                <input type="number" id="transportationCost" className={inputfieldclass} placeholder="69" required />
                            </div>
                        </div>
                    )}
                    {step === 4 && (
                        <div>
                            <div className="text-3xl text-white">Account Balances</div>
                            <div className="mb-5 mt-5">
                                <label className={inputfieldlabelclass}>Savings Account Balance</label>
                                <input type="number" id="savingsAccount" className={inputfieldclass} placeholder="69" required />
                            </div>
                            <div className="mb-5">
                                <label className={inputfieldlabelclass}>Checking Account Balance</label>
                                <input type="number" id="checkingAccount" className={inputfieldclass} placeholder="69" required />
                            </div>
                        </div>
                    )}
                    <div className="flex justify-between mt-5">
                        {step > 1 && (
                            <button type="button" className="text-white bg-gray-700 px-5 py-2 rounded" onClick={handleBack}>
                                Back
                            </button>
                        )}
                        {step < 4 ? (
                            <button type="button" className="text-white bg-blue-700 px-5 py-2 rounded" onClick={handleNext}>
                                Next
                            </button>
                        ) : (
                            <button type="submit" className="text-white bg-green-700 px-5 py-2 rounded">
                                Submit
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </>
    );
}

export default Forms;
