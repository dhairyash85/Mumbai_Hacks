const express = require('express');
const router = express.Router();
const userFinanceController = require('../controllers/userFinanceController');

// Route to add finance data
router.post('/addFinanceData', userFinanceController.addFinanceData);

// Route to get finance data by wallet address
router.get('/getFinanceData/:walletAddress',  userFinanceController.getFinanceData);

module.exports = router;
