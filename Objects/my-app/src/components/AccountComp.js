import React, { Component } from 'react';
import Account from './Account';
import './AccountComp.css';


class AccountComp extends Component {
	constructor(props){
		super(props);
		this.account = new Account(0,0, "a-account")
		this.state = {
			inputAmount : 0,
			balance: 0,


		}

		
	}	

	handleChange= (event) => {
        if (event.target.id === "inputAmount") {
            this.setState({input: event.target.value})
        } else {
            
        }
           console.log(this.state)
    }	


     handleClick = (event) => {
    if (event.target.id === "deposit" ) {
        this.account.deposit(Number(this.state.input))
        console.log("Balance",this.account.balance);
       
        console.log(this.state)
    } else if (event.target.id === "withdraw" ) {
        this.account.withdraw(Number(this.state.input))
        console.log("Balance",this.account.balance);
        
    } else if (event.target.id === "balance" ) {
       let baln =  this.account.checkBlc()
       console.log(baln)
        	this.setState({
             balance: baln
           
        })
    }
}

removeAccount = () => {
	this.props.onRemove(this.props.accountObject.id)
}

depot = () => {
	this.props.onDeposit(this.props.accountObject.id, this.state.deposit)
}

withdraw1 = () => {
	this.props.onWithdraw(this.props.accountObject.id, this.state.withdraw)
}



render (props){

	return (
		<div className= "boxChild">
			<h5 className= "txth5">My Account</h5>
			<div>
				<input id="inputAmount" className = "inpD" onChange={this.handleChange}/>
				<button id="deposit" className = "inputBtn" onClick={this.handleClick}>Deposit</button>
				<button id="withdraw" className = "inputBtn" onClick={this.handleClick}>Withdraw</button>
				<button id="balance" className = "inputBtn" onClick={this.handleClick}>Balance</button>
				<br></br>
				<button id="delete" className = "inputBtn" onClick={this.removeAccount}>Delete</button>
			</div>
			<div className = "txtdiv">
			<h6>Account Name :       {this.account.accname}</h6>
            <h6>Account Balance :    {this.state.balance}</h6>
            <br></br>
          	</div>
		</div>


	);



}




}

export default AccountComp;