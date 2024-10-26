const UserFinanceData = require('../model/userFinanceData');

// Add Finance Data
const addFinanceData = async (req, res) => {
    const { walletAddress, formData } = req.body;
    console.log(walletAddress)
    console.log(formData)

    const payload = {
        walletAddress,
        autoLoanBalance: (formData.AutoLoanBalance),
        rentPayments: (formData.RentPayments),
        netWorth: (formData.NetWorth),
        totalAssets: 20002300, // Static value
        totalLiabilities: (formData.TotalLiabilities),
        monthlyHousingCosts: (formData.HousingCost),
        monthlyEntertainmentCosts: (formData.FoodCost),
        age: (formData.Age),
        OfDependents: (formData.NumberOfDependents),
        savingsAccountBalance: (formData.SavingsAccountBalance),
        checkingAccountBalance: (formData.CheckingAccountBalance),
        investmentAccountBalance: (formData.InvestmentAccountBalance),
        retirementAccountBalance: 3023000, // Static value
        emergencyFundBalance: (formData.EmergencyFundBalance),
    };
    console.log(payload)
    try {
        const existingData = await UserFinanceData.findOneAndUpdate(
            { walletAddress },
            payload,
            { new: true, upsert: true } // Update if exists, insert if not
        );
        res.status(200).json({ message: "Finance data added successfully", data: existingData });
    } catch (error) {
        console.error("Error adding finance data:", error);
        res.status(500).send("Error adding finance data");
    }
};

// Get Finance Data
const getFinanceData = async (req, res) => {
    const { walletAddress } = req.params;

    try {
        const userFinanceData = await UserFinanceData.findOne({ walletAddress });
        if (!userFinanceData) {
            return res.status(404).send("No finance data found for this wallet address");
        }
        res.status(200).json(userFinanceData);
    } catch (error) {
        console.error("Error retrieving finance data:", error);
        res.status(500).send("Error retrieving finance data");
    }
};

module.exports = { addFinanceData, getFinanceData };
