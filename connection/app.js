const contract = require('truffle-contract');

const logger_artifact = require('../build/contracts/Logger.json');
var Logger = contract(logger_artifact);

module.exports = {
  initWeb3: async function() {
// Modern dapp browsers...
    if (window.ethereum) {
      App.web3Provider = window.ethereum;
      try {
        // Request account access
        await window.ethereum.enable();
      } catch (error) {
        // User denied account access...
        console.error("User denied account access")
      }
    }
// Legacy dapp browsers...
    else if (window.web3) {
      App.web3Provider = window.web3.currentProvider;
    }
// If no injected web3 instance is detected, fall back to Ganache
    else {
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
    }
    web3 = new Web3(App.web3Provider);

    return App.initContract();
  },
  log: function(message) {
    console.log("Attempting to log ", message)
    var self = this;

    // Bootstrap the MetaCoin abstraction for Use.
    Logger.setProvider(self.web3.currentProvider);

    var meta;
    Logger.deployed().then(function(instance) {
      meta = instance;
      meta.log(message);
    }).catch(function(e) {
      console.log(e);
    });
  },
  getLog: function(){
    console.log("Attempting to return log ")
    var self = this;

    // Bootstrap the MetaCoin abstraction for Use.
    Logger.setProvider(self.web3.currentProvider);

    var meta;
    Logger.deployed().then(function(instance) {
      meta = instance;
      return meta.getLog();
    }).catch(function(e) {
      console.log(e);
    });
  }
}
