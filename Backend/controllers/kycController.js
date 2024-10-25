// controllers/kycController.js
// const { ethers } = require("ethers");


exports.addKYC = async (req, res) => {
    const contract=req.contract
    console.log('calling')
    const { address, name, age, city, addr, bank_account, adhar_num, image } = req.body;
    try {
        const tx = await contract.addKYC(address, name, age, city, addr, bank_account, adhar_num, image);
        await tx.wait();
        res.status(200).json({ message: "KYC data added successfully" });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message });
    }
};

exports.approveKYC = async (req, res) => {
    const contract=req.contract
    const { address } = req.params;
    try {
        const tx = await contract.approveKYC(address);
        await tx.wait();
        res.status(200).json({ message: "KYC approved" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.rejectKYC = async (req, res) => {
    const contract=req.contract
    const { address } = req.params;
    try {
        const tx = await contract.rejectKYC(address);
        await tx.wait();
        res.status(200).json({ message: "KYC rejected" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getKYC = async (req, res) => {
    const contract=req.contract
    const { address } = req.params;
    try {
        const kycData = await contract.getKYC(address);
        console.log(kycData)
        const formattedKycData = {
            name: kycData[0],
            age: kycData[1].toString(),  // BigInt to string
            city: kycData[2],
            addr: kycData[3],
            bank_account: kycData[4],
            adhar_num: kycData[5],
            image: kycData[6],
            st: kycData[7].toString()  // Enum status, assuming no BigInt here
        };
        console.log(formattedKycData)
        res.status(200).json(formattedKycData);
        // res.status(200).json(kycData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
