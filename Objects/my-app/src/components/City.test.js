import City from './City.js';

test('city test', () => {
	console.log("testing City")
	const cityTest = new City(0, 'Antananarivo', -18.933333, 47.516667, 1391433);

	expect(cityTest.id).toBe(0);
	expect(cityTest.name).toBe('Antananarivo');
	expect(cityTest.lat).toBe(-18.933333);
	expect(cityTest.long).toBe(47.516667);
	expect(cityTest.pop).toBe(1391433);

	/********Testing the Methods of City*/

	console.log("testing show City")
	expect(cityTest.show()).toBe('0 Antananarivo -18.933333 47.516667 1391433');
	
	console.log("testing movedIn")
	expect(cityTest.movedIn(2)).toBe(1391435);
	
	console.log("testing moveOut")
	expect(cityTest.movedOut(35)).toBe(1391400);

	console.log("testing how big")
	expect(cityTest.howBig(100000)).toBe('City');

	console.log("testing how big")
	expect(cityTest.whichSphere(-18.933333)).toBe('South');

});

test('test the object reference', () => {
	const city = new City (5, 'myCity', -20, 10, 500000);
	expect(city.show()).toEqual('5 myCity -20 10 500000');
	expect(city.pop).toEqual(500000)
	let myFav = city
	expect(myFav.movedIn(100)).toEqual(500100);
	let myCity = myFav
	expect(myCity.movedIn(500)).toEqual(500600)
});