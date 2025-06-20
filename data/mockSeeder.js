const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Restaker = require('../models/Restaker');
const Validator = require('../models/Validator');
const Reward = require('../models/Reward');

dotenv.config();
mongoose.connect(process.env.MONGO_URI);

(async () => {
  await Restaker.deleteMany();
  await Validator.deleteMany();
  await Reward.deleteMany();

  await Restaker.create([
    {
      userAddress: '0xA1...',
      amountRestakedStETH: '120.75',
      targetAVSOperatorAddress: '0xOP1...'
    }
  ]);

  await Validator.create([
    {
      operatorAddress: '0xOP1...',
      totalDelegatedStakeStETH: '1500',
      slashHistory: [
        { timestamp: 1710000000, amountStETH: '10', reason: 'Double-signing' }
      ],
      status: 'active'
    }
  ]);

  await Reward.create([
    {
      walletAddress: '0xA1...',
      totalRewardsReceivedStETH: '45.3',
      rewardsBreakdown: [
        {
          operatorAddress: '0xOP1...',
          amountStETH: '45.3',
          timestamps: [1710000000]
        }
      ]
    }
  ]);

  console.log('Mock data inserted');
  process.exit();
})();
