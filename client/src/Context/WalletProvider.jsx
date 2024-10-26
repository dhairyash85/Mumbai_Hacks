import React, { createContext, useContext, useState, useEffect } from "react";
import { abi, contract as contractAddress } from "../Constants.js";
import { ethers } from "ethers";
import axiosInstance from "../Axios.js";

const WalletContractContext = createContext();

export const WalletContractProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [kycContract, setKycContract] = useState(null);
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
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
  const addKyc = async (formData) => {
    console.log(formData)
    const {
      walletAddress,
      name,
      age,
      city,
      homeAddress,
      bankAccNumber,
      aadharCardNumber,
      image,
    } = formData;
    const res = await axiosInstance.post("/kyc/add", {
      address: walletAddress,
      name: name,
      age: age,
      city: city,
      addr: homeAddress,
      bank_account: bankAccNumber,
      adhar_num: aadharCardNumber,
      image: image,
    });
    return res;
  };
  const getKyc = async () => {
    if (walletAddress) {
        try{
            const res = await axiosInstance.get(`/kyc/${walletAddress}`);
            console.log(res)

            return res;
        }catch(err){
            console.log(err)
        }
    } else return { error: "No address found" };
  };
  const addForm = async (formData) => {
    if(!walletAddress){
        return {error:"randike"}
    }
    const res = await axiosInstance.post("/form/add", { walletAddress, formData });
    return res;
  };
  const addFinance = async (formData) => {
    if(!walletAddress){
        return {error:"randike"}
    }
    const res = await axiosInstance.post("/finance/addFinanceData", { walletAddress, formData });
    return res;
  };

  const getFinance=async()=>{
    if(!walletAddress){
      return {error:"randike"}
  }
  const res = await axiosInstance.get(`/getFinanceData/${walletAddress}`);
  return res;
  }

  const getForms = async () => {

    if (walletAddress) {
      const res = await axiosInstance.get(`/form/${walletAddress}`);
      console.log(res)
      return res;
    }
    else{
      await connectWallet()
      if(walletAddress){

        const res = await axiosInstance.get(`/form/${walletAddress}`);
        console.log(res)
        return res;
      }
    }
  };

  const initializeContract = (signer) => {
    const contractInstance = new ethers.Contract(contractAddress, abi, signer);
    setKycContract(contractInstance);
  };

  // useEffect(() => {
  //     connectWallet();
  // }, []);

  return (
    <WalletContractContext.Provider
      value={{
        walletAddress,
        kycContract,
        connectWallet,
        addForm,
        addKyc,
        getForms,
        getKyc,
        addFinance,
        getFinance,
      }}
    >
      {children}
    </WalletContractContext.Provider>
  );
};

export const useWalletContract = () => useContext(WalletContractContext);
