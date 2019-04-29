import acc from "./Account";

test('account test', () => {
	console.log("testing account")
	let first = new acc.Account(0, 'checkingAccount');

	expect(first.blc).toBe(0);

	expect(first.accname).toBe('checkingAccount');

	expect(first.checkBlc(0)).toBe(0);

	expect(first.deposit(15)).toBe(15);

	expect(first.withdraw(5)).toBe(10);

	
});



 