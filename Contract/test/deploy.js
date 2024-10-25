const { ethers } = require("hardhat");

async function main() {
  const KYC = await ethers.getContractFactory("KYC");
  const kyc = await KYC.deploy();
  console.log(kyc)
  console.log("KYC deployed to:", kyc.target);
}
main()
.then(()=>console.log("Successful")).catch(err=>console.log("errr  ",  err))