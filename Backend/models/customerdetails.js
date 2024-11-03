const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  image: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  phone: {
    type: String,
    required: false,
    trim: true
  },
  position: {
    type: String,
    enum: ['ceo', 'manager', 'developer', 'other'],
    required: true,
    default: 'other'
  },
  location: {
    type: String,
    required: false
  },
  website: {
    type: String,
    required: false,
    trim: true
  },
  projecttitle: {
    type: String,
    required: false
  }
}, { timestamps: true });

const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;
