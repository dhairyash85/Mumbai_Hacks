// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;


contract Credit { 
    enum Status{
        pending,
        approved,
        rejected
    }
    struct Person {
        string name;
        uint256 age;
        string city;
        string addr;
        string bank_account;
        string adhar_num;
        string image;
        Status st;
    }

    mapping(address=>string[]) private forms;

    mapping(address => Person) private kycData;



    address owner=0xe0AE955311088A18BeB7c52e5844d3aF5B90d804;
    modifier onlyOwner() {
        require(msg.sender==owner, "Owner only function");
        _;
    }
    function addKYC(
        address addre,
        string memory name,
        uint256 age,
        string memory city,
        string memory addr,
        string memory bank_account,
        string memory adhar_num,
        string memory image
    ) public  {
        kycData[addre] = Person(name, age, city, addr, bank_account, adhar_num, image, Status.pending);
    }
    function approveKYC(address person) public {
        Person storage temp=kycData[person];
        temp.st=Status.approved;
    }
    function rejectKYC(address person) public {
        Person storage temp=kycData[person];
        temp.st=Status.rejected;
    }
    function getKYC(address user) public view returns (Person memory) {
        return kycData[user];
    }

    function addForm(string calldata form, address user) public {
        string[] storage temp=forms[user];
        temp.push(form);
        forms[user]=temp;
    }
    function getForms(address user) public view returns (string[] memory) {
        return forms[user];
    }

}
