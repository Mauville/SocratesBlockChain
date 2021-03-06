pragma solidity >=0.4.25 <0.6.0;
//pragma experimental ABIEncoderV2;

contract Logger {

    uint [1000] public log;
    uint currentindex = 0;
    event ValueSet(uint val);

    constructor() public{
        log[currentindex] = 1001;
        currentindex++;
    }
    function logMessage(uint x) public{
        log[currentindex] = x;
        emit ValueSet(x);
    }
    function getLog() public view returns(uint [1000] memory){
        return log;
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
