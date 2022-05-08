// require('babel-register');
// require('babel-polyfill');
var HDWalletProvider = require("@truffle/hdwallet-provider");
require('dotenv').config();
const fs = require('fs');
var mnemonic = "PRIVATE_KEY_HERE";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: function() {
       return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/INFURA_KEY_HERE");
      },
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000,
    },
  },
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    // Add ETHERSCAN_API_KEY in .env file to verify contracts deployed through truffle
    etherscan: process.env.ETHERSCAN_API_KEY
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      version: "0.5.0",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
