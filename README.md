# Zeru Restaking Info API

This project implements a RESTful API that aggregates and exposes restaking data from EigenLayer. It provides user restaking activity, validator metadata, and reward insights through clean and structured endpoints.

---

##  Features

- ✅ Get a list of users who restaked their stETH
- ✅ Retrieve validator details including slashing events
- ✅ View reward breakdown per wallet and validator
- ✅ Built with Node.js, Express, MongoDB, and modular structure
- ✅ Easily extendable to pull live data from subgraphs or on-chain

---

## 📦 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose)
- **Others**: dotenv, axios, cors

---

## 📁 API Endpoints

### `GET /restakers`

Returns a list of users who restaked their stETH:

```json
[
  {
    "userAddress": "0xA1...",
    "amountRestakedStETH": "120.75",
    "targetAVSOperatorAddress": "0xOP1..."
  }
]
📊 Data Source Strategy
This project currently uses mock data. In a production version:

Use Graph Protocol Subgraphs to fetch structured data.

Fallback to Web3.js or web3.py to query on-chain contracts.

Optionally enrich data from Rated Network APIs.

Contracts to monitor include:

EigenLayerManager

DelegationManager

StrategyManager

Slasher

Lido’s stETH contract

📁 Project Structure
arduino
Copy code
zeru-restaking-api/
├── server.js
├── .env
├── config/
│   └── db.js
├── models/
├── controllers/
├── routes/
├── data/
│   └── mockSeeder.js
