// controllers/formController.js
const { ethers } = require("ethers");
const crypto = require("crypto");
const{ PinataSDK } = require("pinata");
const form = require("../model/form");

const symmetricKey = Buffer.from("0123456789abcdef0123456789abcdef", "utf-8"); // 32 bytes key for AES-256

const iv = Buffer.from("abcdef9876543210", "utf-8"); // 16 bytes IV for AES-256 CBC

const pinata = new PinataSDK({
  pinataJwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJiZTM2YjhhNi0zMDFhLTQwOGYtOTUyYy01Nzk1NzkzN2FiNjgiLCJlbWFpbCI6ImphaW5kaGFpcnlhc2hqQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6IkZSQTEifSx7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6Ik5ZQzEifV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiI3OTNlNjFkMDExNmE1OWNlYmQ5OCIsInNjb3BlZEtleVNlY3JldCI6IjZhY2Q2YmY5ZjM4MGMxYzFhMmY3YTc4ZTJhODIzMDIyNTZiZmQwZWZjODg3N2Q3YWEwODIwM2JjNjViNDQzZWIiLCJleHAiOjE3NjE0MzM0ODJ9.TNeZ2OWwX3Jpz31jvx6NnFu_8YKADaLnTstZPUqQO2o"
});

function encrypt(data) {
    const cipher = crypto.createCipheriv("aes-256-cbc", symmetricKey, iv);
    let encrypted = cipher.update(data, "utf8", "hex");
    encrypted += cipher.final("hex");
    return iv.toString("hex") + ":" + encrypted; // Store IV with encrypted data
}

// Decrypt function
function decrypt(encryptedData) {
    const [ivHex, encrypted] = encryptedData.split(":");
    const decipher = crypto.createDecipheriv("aes-256-cbc", symmetricKey, Buffer.from(ivHex, "hex"));
    let decrypted = decipher.update(encrypted, "hex", "utf8");
    decrypted += decipher.final("utf8");
    return decrypted;
}
// pinata.gateways.get
async function addForm(req, res) {
    const { walletAddress, formData } = req.body;

    try {
        const contract = req.contract;

        // Upload data to Pinata
        const upload = await pinata.upload.json(formData);
        // console.log(upload);
        const tx = await contract.addForm(upload.cid, walletAddress);
        await tx.wait();

        // Store in MongoDB
        await form.updateOne(
            { walletAddress },
            { $set: formData, walletAddress, document: upload.cid },
            { upsert: true } // Update if exists, insert if not
        );

        res.status(200).send("Form added successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error adding form");
    }
}

// Controller function to get forms
async function getForms(req, res) {
    const { userAddress } = req.params;

    try {
        // Fetch form data directly from MongoDB using walletAddress
        const userData = await form.findOne({ walletAddress: userAddress });

        if (!userData) {
            return res.status(404).send("No data found for this wallet address");
        }

        res.status(200).json(userData);
    } catch (error) {
        console.error("Error retrieving forms:", error);
        res.status(500).send("Error retrieving forms");
    }
}

module.exports = { addForm, getForms };