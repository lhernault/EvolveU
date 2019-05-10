import Account from "./Account";

test('account test', () => {
	console.log("testing account")
	const first = new Account(100, 0, 'checkingAccount');

	expect(first.balance).toBe(0);

	expect(first.accname).toBe('checkingAccount');

	expect(first.checkBlc(0)).toBe(0);

	expect(first.deposit(15)).toBe(15);

	expect(first.withdraw(5)).toBe(10);

	
});



 