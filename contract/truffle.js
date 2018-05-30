const HDWalletProvider = require("truffle-hdwallet-provider");
const config = require("../config");

module.exports = {
  networks: {
    ganache: { // Ganache
      host: "localhost",
      port: 7545,
      gas: 4700000,
      network_id: 5777
    },
    infura: { // infura.io
      provider: function() {
        return new HDWalletProvider(config.account.mnemonic, config.url)
      },
      network_id: 3,
      gas: 4700000
    }
  }
};
