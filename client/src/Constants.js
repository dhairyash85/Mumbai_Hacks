export const abi=[
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "addre",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "age",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "city",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "addr",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "bank_account",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "adhar_num",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "image",
          "type": "string"
        }
      ],
      "name": "addKYC",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "person",
          "type": "address"
        }
      ],
      "name": "approveKYC",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "getKYC",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "age",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "city",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "addr",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "bank_account",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "adhar_num",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "image",
              "type": "string"
            },
            {
              "internalType": "enum KYC.Status",
              "name": "st",
              "type": "uint8"
            }
          ],
          "internalType": "struct KYC.Person",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "person",
          "type": "address"
        }
      ],
      "name": "rejectKYC",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]

export const contract="0xd730BE197f5F5DAD0FD1F67B7B2a0bF5df9856d7"

// export default{abi, contract}