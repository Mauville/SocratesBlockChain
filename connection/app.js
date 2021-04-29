const contract = require('truffle-contract');
const Web3 = require('web3');
const logger_artifact = require('../build/contracts/Logger.json');
var Logger = contract(logger_artifact);
var provider = new Web3.providers.HttpProvider('http://127.0.0.1:7545');
Logger.setProvider(provider)
Logger.defaults()
let Appual = {


    log: async function (message) {
        console.log("Attempting to log ", message)
        const instance = await Logger.deployed();
        const result = await instance.logMessage(1).then(function (e){
            console.log(e);
        })

    },
    getLog: async function () {
        console.log("Attempting to return log ")
        // Bootstrap the MetaCoin abstraction for Use.
        const instance = await Logger.deployed();
        const result = await instance.getLog();
        console.log(result);

        return result
    }
}

module.exports = Appual;