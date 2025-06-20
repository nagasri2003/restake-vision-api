const mongoose = require('mongoose');

const RewardSchema = new mongoose.Schema({
  walletAddress: String,
  totalRewardsReceivedStETH: String,
  rewardsBreakdown: [
    {
      operatorAddress: String,
      amountStETH: String,
      timestamps: [Number]
    }
  ]
});

module.exports = mongoose.model('Reward', RewardSchema);
