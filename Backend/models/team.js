const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  rank: {
    type: String,
    enum: ['ceo', 'manager', 'developer', 'other'],
    required: true,
    default: 'other'
  },
  office: {
    type: String,
    required: false,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  }
}, { timestamps: true });

const Team = mongoose.model('Team', teamSchema);
module.exports = Team;
