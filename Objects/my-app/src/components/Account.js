//functions here!

class Account extends Object { //creating the account . it has deposit, withdraw and balance
    constructor(blc, accname) { // atributs
        super()
        this.blc = parseInt(blc); //parseInt force to be #
        this.accname = accname;
    }

    checkBlc() {
        return this.blc;
    }
    
    deposit(valueadd) {
      const newDepBlc =  this.blc + parseInt(valueadd)
      this.blc = newDepBlc;
      return this.blc

        // return 0;
    }

    withdraw(valuesub){
    	const newWithBlc = this.blc - parseInt(valuesub)
    	this.blc = newWithBlc;
      	return this.blc
    }

}

export default { Account };