// contractMiddleware.js
const { ethers } = require("ethers");
const {abi} = require("../Constants.js"); 
const contractAddress = "0xeF00deD5d11b2cccF84b230d5a55b0971C73D47a";

const provider = new ethers.JsonRpcProvider("https://ethereum-holesky.publicnode.com");
const wallet = new ethers.Wallet("730a75039d93d81b892ddcb3939304e5166ec530d7b63c9d72a49f6336e744f0", provider);
const contract = new ethers.Contract(contractAddress, abi, wallet);

const attachContract = (req, res, next) => {
    req.provider = provider;
    req.wallet = wallet;
    console.log(wallet)
    req.contract = contract;
    next();
};

module.exports = attachContract;
