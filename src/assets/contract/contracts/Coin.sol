pragma solidity ^0.4.24;

contract Coin {
	address adminAddress;

	mapping (address => uint) public assignableCoins;
	mapping (address => uint) public spendableCoins;

	event Transfer(
		address indexed from,
		address indexed to,
		uint256 amount,
		string reason,
		uint timestamp
	);

	constructor() public {
		adminAddress = msg.sender;
	}

	modifier onlyByCreator {
        require(msg.sender == adminAddress, "Only admins can call this function");
        _;
    }

	function addUser(address userAddress) public onlyByCreator {
		assignableCoins[userAddress] = 0;
		spendableCoins[userAddress] = 0;
	}

	function setAssignableCoins(address userAddress, uint amount) public onlyByCreator {
		assignableCoins[userAddress] = amount;
	}

	function addAssignableCoins(address userAddress, uint amount) public onlyByCreator {
		assignableCoins[userAddress] += amount;
	}

	function burnCoin(address addr, uint amount) public onlyByCreator{
		require((spendableCoins[addr] - amount) >= 0, "Balance cannot be below 0");
		spendableCoins[addr] -= amount;
	}

	function sendCoin(address receiver, uint amount, string reason) public {
		require(assignableCoins[msg.sender] >= amount && receiver != msg.sender && amount <= 3, "Can't send coins to yourself");
		spendableCoins[receiver] = spendableCoins[receiver] + (amount);
		assignableCoins[msg.sender] = assignableCoins[msg.sender] - amount;
		emit Transfer(msg.sender, receiver, amount, reason, block.timestamp);
	}
}