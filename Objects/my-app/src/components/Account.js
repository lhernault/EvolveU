
//functions here!
class Account  { //creating the account . it has deposit, withdraw and balance
    constructor(id, balance, accname) { // atributs
        this.balance = parseInt(balance); //parseInt force to be #
        this.accname = accname;
        this.id = id;
    }

    checkBlc() {
        return this.balance;
    }
    
    deposit(valueadd) {
      const newDepBlc =  this.balance + parseInt(valueadd)
      this.balance = newDepBlc;
      return this.balance

        // return 0;
    }

    withdraw(valuesub){
    	const newWithBlc = this.balance - parseInt(valuesub)
    	this.balance = newWithBlc;
      	return this.balance
    }

}

export default  Account ;