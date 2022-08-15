// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract OurToken is ERC20 {
    // uint256 initialSupply = 1000e18;
    //18 decimals, so this is 1000 supply
    //standard to add to constructor as below

    constructor(uint256 initialSupply) ERC20('OurToken', 'OT') {
        // first param is who gets the initial supply, 2nd is the quantity
        _mint(msg.sender, initialSupply);
    }
}
