const Migrations = artifacts.require("./Migrations.sol");
const Coin = artifacts.require("./Coin.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Coin);
};



