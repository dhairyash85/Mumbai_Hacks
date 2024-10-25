const { ethers } = require("hardhat");

async function main() {
  const Credit = await ethers.getContractFactory("Credit");
  const credit = await Credit.deploy();
  console.log(credit)
  console.log("Credit deployed to:", credit.target);
}
main()
.then(()=>console.log("Successful")).catch(err=>console.log("errr  ",  err))