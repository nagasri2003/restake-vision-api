const Reward = require('../models/Reward');

exports.getRewardsByAddress = async (req, res) => {
  try {
    const rewards = await Reward.findOne({ walletAddress: req.params.address });
    if (!rewards) return res.status(404).json({ message: 'No rewards found' });
    res.json(rewards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
