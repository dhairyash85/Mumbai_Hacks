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

const setAutoLoanBalance = async (req, res) => {
    const { amount, address } = req.body;
    console.log(req.body)
    console.log("Amount:", amount);
    console.log("Wallet Address:", address);

    // Validate inputs
    if (amount <= 0) {
        return res.status(400).send("Amount must be greater than zero.");
    }

    try {
        const userFinanceData = await UserFinanceData.findOne({ walletAddress:address });
        console.log(userFinanceData)
        if (!userFinanceData) {
            return res.status(404).send("No finance data found for this wallet address");
        }

        // Check if sufficient balance is available
        if (userFinanceData.autoLoanBalance < amount) {
            return res.status(400).send("Insufficient auto loan balance.");
        }

        // Reduce the auto loan balance
        userFinanceData.autoLoanBalance -= amount;
        await userFinanceData.save();

        res.status(200).json({
            message: "Auto loan balance updated successfully",
            updatedBalance: userFinanceData.autoLoanBalance,
        });
    } catch (error) {
        console.error("Error updating auto loan balance:", error);
        res.status(500).send("Error updating auto loan balance");
    }
};


module.exports = { addFinanceData, getFinanceData ,setAutoLoanBalance};
