
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;


// interface ISmartContract  {
//   function getTransactionCount() external view returns (uint256);
//   function getTransactions() external view returns (TranscationStrut[] memory);
//   function transfer(address receiver, uint256 amount, string calldata message, string calldata keyord) external;
// }


contract MyTransaction1  {
  TransactionStruct[] private transactions;
  uint256 private count;
  event Transfer(address indexed from, address indexed receiver, uint256 amount);
  struct TransactionStruct  {
    address sender;
    address receiver;
    uint256 amount;
    string message;
    string keyword;
    uint256 date;
}

  constructor() {
    count = 0;
  }

  function version() public pure returns (string memory) {
    return "1.0.0";
  }

  function transfer(address payable receiver, uint256 amount, string calldata message, string calldata keyword) payable public  {
    transactions.push(TransactionStruct(msg.sender,receiver, amount, message, keyword, block.timestamp));
    emit Transfer(msg.sender, receiver, amount);
    count++;
  }

  function getTransactionCount() public view returns (uint256) { 
    return count; 
  }

  function getTransactions() public view returns (TransactionStruct[] memory) { 
    return transactions; 
  }
}