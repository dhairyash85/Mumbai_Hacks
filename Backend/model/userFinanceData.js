// models/UserFinanceData.js
const mongoose = require('mongoose');

const userFinanceDataSchema = new mongoose.Schema({
    walletAddress: {
        type: String,
        required: true,
        unique: true,
    },
    autoLoanBalance: Number,
    rentPayments: Number,
    netWorth: Number,
    totalAssets: {
        type: Number,
        default: 20002300, // Static value
    },
    totalLiabilities: Number,
    monthlyHousingCosts: Number,
    monthlyEntertainmentCosts: Number,
    age: Number,
    numberOfDependents: Number,
    savingsAccountBalance: Number,
    checkingAccountBalance: Number,
    investmentAccountBalance: Number,
    retirementAccountBalance: {
        type: Number,
        default: 3023000, // Static value
    },
    emergencyFundBalance: Number,
});

module.exports = mongoose.model('UserFinanceData', userFinanceDataSchema);
