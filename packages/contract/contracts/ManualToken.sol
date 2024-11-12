// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import { ERC20 } from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ManualToken is ERC20 {
  constructor(uint256 initialTotalSupply) ERC20('ZGLBTC', 'ZBTC') {
    _mint(msg.sender, initialTotalSupply);
  }
}