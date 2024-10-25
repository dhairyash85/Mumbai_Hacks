// controllers/formController.js
const { ethers } = require("ethers");
const crypto = require("crypto");


exports.addForm = async (req, res) => {
    const { address, formData } = req.body;
    const contract=req.contract
    const formHash = crypto.createHash("sha256").update(JSON.stringify(formData)).digest("hex");

    try {
        const tx = await contract.addForm(ethers.utils.formatBytes32String(formHash), address);
        await tx.wait();
        res.status(200).json({ message: "Form submitted and hashed successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getForms = async (req, res) => {
    const { address } = req.params;
    const contract=req.contract
    try {
        const formHashes = await contract.getForms(address);
        const unhashedForms = formHashes.map(hash => ethers.utils.parseBytes32String(hash));

        res.status(200).json(unhashedForms);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
