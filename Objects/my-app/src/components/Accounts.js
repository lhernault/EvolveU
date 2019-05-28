import Account from './Account'
// functions about accounts
class Accounts {
	constructor (){
		
		this.arrayAccount = [];	
        this.counter = 0;	

	}

	addAccount (balance, accname ) {
		let addNewAcc = new Account (this.counter, balance, accname);
			this.arrayAccount.push(addNewAcc);
			this.counter ++;
			// return this.addNewAcc;

	}

	removeAccount (id) {
		let index = 0;
		this.arrayAccount.forEach(item => {
			if (item.id === id) {
				this.arrayAccount.splice(index, 1);// 2 is the # accounts
				return
			}
			index++;
		})		
	}
		
	totalAccount ()	{		
			
	 	this.act = this.arrayAccount.reduce((acc, value) =>{
		return parseInt(acc) + parseInt(value.balance);		
		}, 0);
		console.log("Hello",this.act);
		return this.act;
	}


	highestAccount () {		
		// let max = Math.max.apply(null, this.arrayAccount.map(function(a){return a.balance;}));
  //        return max;
  		const max = this.arrayAccount.reduce((prev, current) => {
  			if (prev.balance > current.balance ) {
  				return prev
  			}
  				return current 
		}, 0);
  		return `${max.accname} ${max.balance}`;
	}

// 
	lowestAccount () {
			const min = this.arrayAccount.reduce((prev, current) => {
  			if (prev.balance < current.balance ) {
  				return prev
  			}
  				return current 
		}, 0);
  		return `${min.accname} ${min.balance}`;
	}	



	deposit (id, amount) {
		this.arrayAccount.forEach(item => {
			if (item.id === id) {
				item.deposit(amount);
			}
		})
	}

	withdraw (id, amount) {
		this.arrayAccount.forEach(item => {
			if (item.id === id) {
				item.withdraw(amount);
			}

		})
	}



}


export default Accounts;
