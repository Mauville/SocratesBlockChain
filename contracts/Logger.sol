pragma solidity >=0.4.25 <0.6.0;
//pragma experimental ABIEncoderV2;

contract Logger {

    uint [1000] public log;
    uint currentindex = 0;
    event ValueSet(uint val);
    uint storedData = 0;

//    constructor() public{
//        log[currentindex] = 1;
//        currentindex++;
//    }
    function logMessage(uint x) public{
        storedData = x;
        emit ValueSet(x);
    }
    function getLog() public view returns(uint){
        return storedData;
    }
//    function logMessage(uint newMessage) public{
//        log[currentindex] = newMessage;
//        currentindex++;
//
//    }
//    function getLog() public view returns (uint[1000] memory){
//        return log;
//    }
}
