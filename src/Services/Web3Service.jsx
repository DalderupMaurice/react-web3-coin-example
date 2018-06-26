import Web3 from "web3";
import _ from "lodash";

export default class Web3Service {
  constructor(contract = null, connectionUrl = null) {
    this.web3 = new Web3(connectionUrl || Web3.givenProvider);

    this.contract = {};
    if (contract) this.contract = this.addContract(contract);
  }

  addContract = async contractJSON => {
    this.contract = await new this.web3.eth.Contract(contractJSON.abi);
    const key = _.findKey(contractJSON.networks, "address");
    this.contract.options.address = contractJSON.networks[key].address;
  };

  getContract = () => this.contract;

  createAccount = () => this.web3.eth.accounts.create();
}
