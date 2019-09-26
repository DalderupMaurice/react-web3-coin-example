import React, { Component } from "react";
import { notification } from "antd";

import Web3Service from "../../Services/Web3Service";

import CoinContract from "../../assets/contract/build/contracts/Coin.json";
import MyForm from "../../components/Form/MyForm";
import DataDisplay from "../../components/DataDisplay/DataDisplay";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      metaMaskAcc: "0xBd043c73089D14F0CE6db2518F6B721cCB3c2DC6",
      gasCost: 0,
      account: {},
      contract: {},
      txAddUser: {},
      txInitUser: {},
      retrievedUser: {}
    };

    this.web3Service = null;
  }

  async componentDidMount() {
    window.ethereum.enable();
    this.web3Service = await new Web3Service(CoinContract); // no param, assuming metamask
    this.setState({
      contract: this.web3Service.getContract(),
      account: this.web3Service.createAccount().address
    });
  }

  addUser = async userToAdd => {
    const { contract, metaMaskAcc } = this.state;
    await this.setState({
      txAddUser: await contract.methods.addUser(userToAdd.value).send({
        from: metaMaskAcc
      })
    });
    this.openNotification(
      `User Added in SC! ${this.state.txAddUser.transactionHash}`
    );
  };

  calculateGas = async userToAdd => {
    const { contract } = this.state;
    await this.setState({
      gasCost: await contract.methods.addUser(userToAdd.value).estimateGas()
    });
    this.openNotification(`Gas calculated! ${this.state.gasCost}`);
  };

  initializeUser = async amountCoins => {
    const { account, contract, metaMaskAcc } = this.state;
    await this.setState({
      txInitUser: await contract.methods
        .setAssignableCoins(account, amountCoins.value)
        .send({
          from: metaMaskAcc
        })
    });
    this.openNotification(
      `User coins initialized in SC! ${this.state.txAddUser.transactionHash}`
    );
  };

  getUser = async givenUser => {
    const { contract, metaMaskAcc } = this.state;
    await this.setState({
      retrievedUser: await contract.methods
        .assignableCoins(givenUser.value)
        .call({
          from: metaMaskAcc
        })
    });
    this.openNotification(`User Added in SC! ${this.state.retrievedUser}`);
  };

  openNotification = (title, message) => {
    const args = {
      message: title,
      description: message,
      duration: 5
    };
    notification.open(args);
  };

  render() {
    const {
      gasCost,
      txAddUser,
      account,
      retrievedUser,
      txInitUser
    } = this.state;

    return (
      <div>
        <DataDisplay text="Current account: " data={account} />

        <MyForm handleSubmit={this.calculateGas} btnText="Calculate Gas" />
        <DataDisplay text="Gas cost for operation: " data={gasCost} />

        <MyForm handleSubmit={this.addUser} btnText="Add user" />
        <DataDisplay
          text="Added user, txHash: "
          data={txAddUser.transactionHash}
        />

        <MyForm handleSubmit={this.initializeUser} btnText="Give coins" />
        <DataDisplay
          text="Gave coins, txHash: "
          data={txInitUser.transactionHash}
        />

        <MyForm handleSubmit={this.getUser} btnText="Get user" />
        <DataDisplay text="Amount of coins: " data={retrievedUser} />
      </div>
    );
  }
}

export default HomePage;
