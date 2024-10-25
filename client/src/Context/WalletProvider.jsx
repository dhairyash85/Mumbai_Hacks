import React, { createContext, useContext, useState, useEffect } from 'react';
import {abi, contract as contractAddress} from "../Constants.js"
import { ethers } from 'ethers';

const WalletContractContext = createContext();

export const WalletContractProvider = ({ children }) => {
    const [walletAddress, setWalletAddress] = useState(null);
    const [kycContract, setKycContract] = useState(null);
    const connectWallet = async () => {
        if (window.ethereum) {
            try {
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                const provider = new ethers.BrowserProvider(window.ethereum);
                const signer = provider.getSigner();
                const address = await signer.getAddress();
                setWalletAddress(address);
                initializeContract(signer);
            } catch (error) {
                console.error("Wallet connection failed:", error);
            }
        } else {
            console.error("MetaMask not found. Please install it.");
        }
    };

    const initializeContract = (signer) => {
        const contractInstance = new ethers.Contract(contractAddress, abi, signer);
        setKycContract(contractInstance);
    };

    useEffect(() => {
        connectWallet();
    }, []);

    return (
        <WalletContractContext.Provider value={{ walletAddress, kycContract, connectWallet }}>
            {children}
        </WalletContractContext.Provider>
    );
};

export const useWalletContract = () => useContext(WalletContractContext);
