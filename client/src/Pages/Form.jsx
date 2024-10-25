import { Navbar } from "../Components/Navbar";
import formImage from "../assets/form.png"

const inputfieldlabelclass = "block mb-2 text-sm font-medium text-gray-900 dark:text-white ";
const inputfieldclass = " min-w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

function Forms() {
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
                <form className=" mx-auto">
                    <div className=" text-3xl text-white">Personal</div>
                    <div className="mb-5 mt-5">
                        <label className={inputfieldlabelclass}>
                            Age
                        </label>
                        <input
                            type="number"
                            id="age"
                            className={inputfieldclass}
                            placeholder="69"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <div className="flex ">
                            <label className={inputfieldlabelclass}>
                                Marital Status
                            </label>
                            
                        </div>
                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Choose a status</option>
                            <option value="US">Married 🍆🍑</option>
                            <option value="CA">UnMarried ✊💦</option>
                        </select>
                    </div>
                    <div className="mb-5 mt-5">
                        <label className={inputfieldlabelclass}>
                            Number Of Dependents
                        </label>
                        <input
                            type="number"
                            id="dependents"
                            className={inputfieldclass}
                            placeholder="69"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <div className="flex ">
                            <label className={inputfieldlabelclass}>
                                Employment Status
                            </label>
                            
                        </div>
                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Choose a status</option>
                            <option value="US">Working</option>
                            <option value="CA">Lay off ho gaya bhenchod</option>
                        </select>
                    </div>

                    <div className=" text-3xl text-white">Insurance Status</div>
                    <div className="mb-5 mt-5">
                        <label className={inputfieldlabelclass}>
                            Health Insurance Status
                        </label>
                        <input
                            type="number"
                            id="age"
                            className={inputfieldclass}
                            placeholder="69"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <div className="flex ">
                            <label className={inputfieldlabelclass}>
                                Life Insurance Status
                            </label>
                            
                        </div>
                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Choose a status</option>
                            <option value="US">Married 🍆🍑</option>
                            <option value="CA">UnMarried ✊💦</option>
                        </select>
                    </div>
                    <div className="mb-5 mt-5">
                        <label className={inputfieldlabelclass}>
                            Car Insurance Status
                        </label>
                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Choose a status</option>
                            <option value="US">Insured</option>
                            <option value="CA">UnInsured</option>
                        </select>
                    </div>
                    <div className="mb-5 mt-5">
                        <label className={inputfieldlabelclass}>
                            Home Insurance Status
                        </label>
                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Choose a status</option>
                            <option value="US">Insured</option>
                            <option value="CA">UnInsured</option>
                        </select>
                    </div>

                    <div className=" text-3xl text-white">Monthly Status</div>
                    <div className="mb-5 mt-5">
                        <label className={inputfieldlabelclass}>
                            Housing Cost
                        </label>
                        <input
                            type="number"
                            id="age"
                            className={inputfieldclass}
                            placeholder="69"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <div className="flex ">
                            <label className={inputfieldlabelclass}>
                                Transportation Cost
                            </label>
                            
                        </div>
                        <input
                            type="number"
                            id="dependents"
                            className={inputfieldclass}
                            placeholder="69"
                            required
                        />
                    </div>
                    <div className="mb-5 mt-5">
                        <label className={inputfieldlabelclass}>
                            Food Cost
                        </label>
                        <input
                            type="number"
                            id="dependents"
                            className={inputfieldclass}
                            placeholder="69"
                            required
                        />
                    </div>
                    <div className="mb-5 mt-5">
                        <label className={inputfieldlabelclass}>
                            Heathcare Cost
                        </label>
                        <input
                            type="number"
                            id="dependents"
                            className={inputfieldclass}
                            placeholder="69"
                            required
                        />
                    </div>
                    <div className="mb-5 mt-5">
                        <label className={inputfieldlabelclass}>
                            Entertaintment Cost
                        </label>
                        <input
                            type="number"
                            id="dependents"
                            className={inputfieldclass}
                            placeholder="69"
                            required
                        />
                    </div>



                    <div className=" text-3xl text-white">Account Balances</div>
                    <div className="mb-5 mt-5">
                        <label className={inputfieldlabelclass}>
                            SavingsAccountBalance
                        </label>
                        <input
                            type="number"
                            id="age"
                            className={inputfieldclass}
                            placeholder="69"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <div className="flex ">
                            <label className={inputfieldlabelclass}>
                                CheckingAccountBalance
                            </label>
                            
                        </div>
                        <input
                            type="number"
                            id="dependents"
                            className={inputfieldclass}
                            placeholder="69"
                            required
                        />
                    </div>
                    <div className="mb-5 mt-5">
                        <label className={inputfieldlabelclass}>
                            InvestmentAccountBalance
                        </label>
                        <input
                            type="number"
                            id="dependents"
                            className={inputfieldclass}
                            placeholder="69"
                            required
                        />
                    </div>
                    <div className="mb-5 mt-5">
                        <label className={inputfieldlabelclass}>
                            RetirementAccountBalance
                        </label>
                        <input
                            type="number"
                            id="dependents"
                            className={inputfieldclass}
                            placeholder="69"
                            required
                        />
                    </div>
                    <div className="mb-5 mt-5">
                        <label className={inputfieldlabelclass}>
                            EmergencyFundBalance
                        </label>
                        <input
                            type="number"
                            id="dependents"
                            className={inputfieldclass}
                            placeholder="69"
                            required
                        />
                    </div>
                    

                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="default_size">Default size</label>
                    <input className="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="default_size" type="file" />

                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 min-w-80 "
                    >
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
}

export default Forms;
