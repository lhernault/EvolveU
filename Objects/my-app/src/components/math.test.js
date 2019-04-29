import math from "./math";

test('Test the math functions', () => {
	console.log('Hello World');
	expect(math.sum(1,2)).toBe(3);
});

test('Test the math functions', () => {
	console.log('Hello World');
	expect(math.sub(5,2)).toBe(3);
});

test('Test the math functions', () => {
	console.log('Hello World');
	expect(math.mul(5,2)).toBe(10);
});

test('Test the math functions', () => {
	console.log('Hello World');
	expect(math.div(4,2)).toBe(2);
});