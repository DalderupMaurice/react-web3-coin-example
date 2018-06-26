import React, { Component } from "react";
import { notification } from "antd";

import Web3Service from "../../Services/Web3Service";

import contract from "../../assets/contract/build/contracts/Coin.json";
import MyForm from "../../components/Form/MyForm";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    console.log(contract);

    this.web3Service = new Web3Service(contract.abi); // no param, assuming metamask
  }

  openNotification = (title, message) => {
    const args = {
      message: title,
      description: message,
      duration: 5
    };
    notification.open(args);
  };

  handleSubmit = () => {
    const account = this.web3Service.createAccount();
    const contract = this.web3Service.getContract();
    console.log("=======");
    console.log(contract);
    const gasCost = contract.methods.addUser(account.address).estimateGas();
  };

  render() {
    const { tx } = this.state;

    return (
      <div>
        <MyForm handleSubmit={this.handleSubmit} btnText="Send Transaction" />
        {/* <DataDisplay asset={this.state.tx} /> */}
      </div>
    );
  }
}

export default HomePage;
