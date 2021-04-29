pragma solidity >=0.4.25 <0.6.0;
pragma experimental ABIEncoderV2;

contract Logger {

    string [1000] public log;
    uint currentindex = 0;

    constructor() public{
        log[currentindex] = "-BEGIN ELECTION";
        currentindex++;
    }
    function logMessage(string memory newMessage) public{
        log[currentindex] = newMessage;
        currentindex++;

    }
    function getLog() public view returns (string[1000] memory){
        return log;
    }
}
