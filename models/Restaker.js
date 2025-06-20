const mongoose = require('mongoose');

const RestakerSchema = new mongoose.Schema({
  userAddress: String,
  amountRestakedStETH: String,
  targetAVSOperatorAddress: String
});

module.exports = mongoose.model('Restaker', RestakerSchema);
