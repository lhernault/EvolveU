import Accounts from "./Accounts.js";


test ('array test', () => {
	console.log ("testing the array");

	let nw = new Accounts();
	expect(nw.arrayAccount.length).toBe(0);	

	nw.addAccount(0, "a-account");
	expect (nw.arrayAccount[0].accname).toBe("a-account");
	

})

test ('array test', () => {
	console.log ("testing the remove account");

	let rm = new Accounts();
	rm.removeAccount(0, "a-account");
	expect (rm.arrayAccount[0]).toBe();



})

test ('array test', () => {
	console.log ("testing the total");

	let nwAcc =  new Accounts();
	nwAcc.addAccount(500, "a-account");
	nwAcc.addAccount(250, "b-account");

	console.log(nwAcc);

	expect (nwAcc.totalAccount()).toBe(750);
	//expect(nwAcc.arrayAccount.length).toBe(2);

})

test ('array test', () => {
	console.log ("testing the highestAccount");

	let nwAc = new Accounts();
	nwAc.addAccount(500, "a-account");
	nwAc.addAccount(250, "b-account");
	nwAc.addAccount(850, "c-account");
	nwAc.addAccount(650, "d-account");
	nwAc.addAccount(300, "e-account");

	console.log(nwAc);

	expect (nwAc.highestAccount()).toBe("c-account 850");
	console.log("deleting");
	console.log(nwAc);
	nwAc.removeAccount(4);// 4 is the index
	console.log(nwAc);
	expect(nwAc.arrayAccount.length).toBe(4);
})


test ('array test', () => {
	console.log ("testing the lowestAccount");

	let nwA = new Accounts();	
	nwA.addAccount(500, "a-account");
	nwA.addAccount(250, "b-account");
	nwA.addAccount(850, "c-account");
	nwA.addAccount(650, "d-account");
	nwA.addAccount(300, "e-account");

	console.log(nwA);

	expect (nwA.lowestAccount()).toBe("b-account 250");

	console.log("Testing before", nwA)
	nwA.deposit(4, 30)
	expect(nwA.arrayAccount[4].balance).toBe(330);

	console.log("Testing after, nwA");
	nwA.withdraw (3, 150)
	expect(nwA.arrayAccount[4].balance).toBe(330);


})





