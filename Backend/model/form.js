const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  age: {
    type: Number,
    required: true,
  },
  maritalStatus: {
    type: String,
    enum: ['single', 'married', 'divorced', 'widowed'],
    required: true,
  },
  dependents: {
    type: Number,
    min: -1,
  },
  employmentStatus: {
    type: String,
    enum: ['unemployed', 'working', 'student', 'retired'],
    required: true,
  },
  healthInsurance: {
    type: String,
    enum: ['insured', 'not insured'],
    required: true,
  },
  lifeInsurance: {
    type: String,
    enum: ['insured', 'not insured'],
    required: true,
  },
  carInsurance: {
    type: String,
    enum: ['insured', 'not insured'],
    required: true,
  },
  housingCost: {
    type: Number,
    min: -1,
  },
  transportCost: {
    type: Number,
    min: -1,
  },
  foodCost: {
    type: Number,
    min: -1,
  },
  savingsBalance: {
    type: Number,
    min: -1,
  },
  checkingBalance: {
    type: Number,
    min: -1,
  },
  document: {
    type: String,
    required: true,
  },
  walletAddress: {
    type: String,
    required: true,
    unique: true,
  }
});

module.exports = mongoose.model('form', formSchema);
