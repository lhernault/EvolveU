import React, { Component } from 'react';
import AccountComp from './AccountComp';
import Accounts from './Accounts';
import './AccountComp.css';


class AccountsComp extends Component {
	constructor(){
		super();
		this.state = {
			theNewAccount: new Accounts(),
			accountName: '',
			accountBalance: 0,
			total: 0,
			highest: 0,
			lowest: 0,
			
		}
	}


	 onHandleChange = (e) => {
		e.preventDefault();
		console.log("target", e.target.id);
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	
	gettingNewAccount = () => {
		const array1 = this.state.theNewAccount
		array1.addAccount(this.state.accountName,Number(this.state.balance));
		this.setState({theNewAccount: array1});
	}

	gettingAccountRemove = (id) => {
		const array1 = this.state.theNewAccount
		array1.removeAccount(id);
		this.setState({theNewAccount: array1});		
	}

	gettingDeposit = (balance, id) => {
		const array1 = this.state.theNewAccount
		array1.depot(balance, id);
		this.setState({theNewAccount: array1});	
	}

	gettingWithdraw = (balance, id) => {
		const array1 = this.state.theNewAccount
		array1.withdraw1(balance, id);  
		this.setState({theNewAccount: array1});	
	}

	getttingTotal = () => {
		let totAcc =this.theNewAccount.totalAccount();
		this.setState({totAcc: totAcc});
		return totAcc;
	}

	gettingHighest = () => {
		let high = this.theNewAccount.highestAccount();
		this.setState({high: high});
		return high;
	}

	gettingLowest = () => {
		let low = this.theNewAccount.lowestAccount();
		this.setState({low: low});
		return low;
	}



render() {

		const obj = this.state.theNewAccount.arrayAccount
		const list = obj.map(value => {
			return <AccountComp key={value.id}
								accountObject = {value}
								onRemove = {this.gettingAccountRemove}
								onDeposit = {this.gettingDeposit}
								onWithdraw = {this.gettingWithdraw}

			/>
	// const list = this.state.theNewAccount.arrayAccount.map((value) => {

	// 	return <AccountComp 
	// 		gettingDeposit = {this.gettingDeposit}
	// 		key ={value.id}
	// 		accountName = {this.state.theNewAccount.arrayAccount[value.id].accountName}
	// 		accountBalance = {this.state.theNewAccount.arrayAccount[value.id].accountBalance}
	// 		id = {this.state.theNewAccount.arrayAccount[value.id]}
	// 		removeAccount = {(id) => this.removeAccount(id)}	
	// 	/>
	});
		console.log(obj);


	return (
		<div className = "boxParent">
			<div>
				<h4 className = "txth3">Accounts List</h4> 
				<input onChange={this.onHandleChange} name="accountName" className="inpName" id='accountName'type='text' placeholder='Enter Name'></input>
				<br></br>
				<input onChange={this.onHandleChange} name="accountBalance" className="inpbalance" id='accountBalance'type='number' placeholder='Enter Balance'></input>
				<br></br>
				<button onClick={this.gettingNewAccount} id="adding" className = "inputBtnP"> Add </button>
			</div>
				<br></br>
				
				{list}

			</div>

	)

}


}

export default AccountsComp;