const contract = require('truffle-contract');
const Web3 = require('web3');

const logger_artifact = require('../build/contracts/Logger.json');
var Logger = contract(logger_artifact);
Logger.setProvider(new Web3.providers.HttpProvider('127.0.0.1:8545'));
let Appual = {
    web3Provider: null,
    web3: null,

    initWeb3: async function () {
        Appual.web3Provider = new Web3.providers.HttpProvider('127.0.0.1:8545');
        Appual.web3 = new Web3(this.web3Provider);
    },

    log: async function (message) {
        if (this.web3 == null) {
            await this.initWeb3()
        }
        console.log("Attempting to log ", message)

        // Bootstrap the MetaCoin abstraction for Use.
        Logger.deployed().then(function (instance) {
            console.log("Attempting to call contract")
            instance.log(message);
        }).catch(function (e) {
            console.log(e)
        })
    },
    getLog: async function () {
        await this.initWeb3()
        console.log("Attempting to return log ")

        // Bootstrap the MetaCoin abstraction for Use.
        Logger.setProvider(this.web3.currentProvider);

        var meta;
        Logger.deployed().then(function (instance) {
            meta = instance;
            return meta.getLog();
        }).catch(function (e) {
            console.log(e);
        });
    }
}

module.exports = Appual;