const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');

const restakerRoutes = require('./routes/restakers');
const validatorRoutes = require('./routes/validators');
const rewardRoutes = require('./routes/rewards');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use('/restakers', restakerRoutes);
app.use('/validators', validatorRoutes);
app.use('/rewards', rewardRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
