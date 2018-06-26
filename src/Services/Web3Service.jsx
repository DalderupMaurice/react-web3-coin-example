import Web3 from "web3";

import myContract from "../assets/contract/build/contracts/Coin.json";

export default class Web3Service {
  constructor(contract = null, connectionUrl = null) {
    this.web3 = new Web3(connectionUrl || Web3.givenProvider);

    this.contract = {};
    if (contract) this.contract = this.addContract(myContract);
  }

  addContract = async contractJSON =>
    (this.contract = await new this.web3.eth.Contract(myContract.abi));

  getContract = () => this.contract;

  createAccount = () => this.web3.eth.accounts.create();
}
