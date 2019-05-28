import React, { Component } from 'react';
import AccountComp from './AccountComp';
import Accounts from './Accounts';
import './General.css';


class AccountsComp extends Component {
	constructor(){
		super();
		this.state = {
			theNewAccount: new Accounts(),
			accountName: null,
			accountBalance: 0,
			// total: 0,
			// highest: 0,
			// lowest: 0,			
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
		array1.addAccount(this.state.accountBalance,(this.state.accountName));
		this.setState({theNewAccount: array1});
		console.log(array1);
	}

	gettingAccountRemove = (id) => {
		const array1 = this.state.theNewAccount
		array1.removeAccount(id);
		this.setState({theNewAccount: array1});		
	}

	gettingDeposit = (id, amount) => {
		const array1 = this.state.theNewAccount
		array1.deposit(id, amount);
		this.setState({theNewAccount: array1});	
	}

	gettingWithdraw = (id, amount) => {
		const array1 = this.state.theNewAccount
		array1.withdraw(id, amount);  
		this.setState({theNewAccount: array1});	
	}

	



render() {

		const obj = this.state.theNewAccount.arrayAccount
		const list = obj.map(value => {
			return <AccountComp key={value.id}
								accountObject={value}
								onRemove = {this.gettingAccountRemove}
								onDeposit = {this.gettingDeposit}
								onWithdraw = {this.gettingWithdraw}

			/>
		// console.log(obj);
	});
	// const list = this.state.theNewAccount.arrayAccount.map((value) => {

	// 	return <AccountComp 
	// 		gettingDeposit = {this.gettingDeposit}
	// 		key ={value.id}
	// 		accountName = {this.state.theNewAccount.arrayAccount[value.id].accountName}
	// 		accountBalance = {this.state.theNewAccount.arrayAccount[value.id].accountBalance}
	// 		id = {this.state.theNewAccount.arrayAccount[value.id]}
	// 		removeAccount = {(id) => this.removeAccount(id)}	
	// 	/>
	
		


	return (
		<div className = "boxParent">
			
				
				<input onChange={this.onHandleChange} name="accountName" className="inpName" id='accountName'type='text' placeholder='Enter Name'></input>
				<br></br>
				<input onChange={this.onHandleChange} name="accountBalance" className="inpbalance" id='accountBalance'type='number' placeholder='Enter Balance'></input>
				<br></br>
				<button onClick={this.gettingNewAccount} id="adding" className = "inputBtnP"> Add </button>
				
			
				<br></br>

				<div>
					<form>
						<fieldset>
							<legend className = "txth3">Accounts List</legend> 
								<h6> Total : {this.state.theNewAccount.totalAccount()}</h6>
            					<h6> Highest:{this.state.theNewAccount.highestAccount()}</h6>
            					<h6> Lowest:  {this.state.theNewAccount.lowestAccount()} </h6>
						</fieldset>
					</form>
				</div>

				
				{list}

			</div>

	)

}


}

export default AccountsComp;