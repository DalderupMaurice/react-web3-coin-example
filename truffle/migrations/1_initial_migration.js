const Migrations = artifacts.require('Migrations');
const coin = artifacts.require('../Coin.sol');

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(coin);
};
