import Node from './Node';

test('Testing the Node Class', () => {
	console.log('Testing the Node class constructor method');
	const obj = new Node('smb', 354, null,null);
	expect(obj.subject).toBe('smb');
	expect(obj.amount).toBe(354);
	expect(obj.next).toBe(null);
	expect(obj.previous).toBe(null);

	console.log('Testing the Show Method');
	expect(obj.show()).toBe('smb 354')
});