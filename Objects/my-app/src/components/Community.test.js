import Community from './Community.js';


test('Test the Community', () => {
	
	const n = new Community(); 
	expect(n.cityArrList.length).toBe(0);  
    console.log('testing Community' , n.cityArrList);
    
    n.addCity('Antananarivo', -18.933333, 47.516667, 1391433)
    n.addCity('Santa Barbara', 34.4208, -119.6982, 92101)
    n.addCity('El Bordo', 2.116, -76.989, 11679)

    expect(n.cityArrList.length).toBe(3);  

	expect(n.cityArrList[0].name).toBe('Antananarivo');
	expect(n.cityArrList[0].lat).toBe(-18.933333);
    expect(n.cityArrList[0].long).toBe(47.516667);
    expect(n.cityArrList[0].pop).toBe(1391433);

	
    expect(n.getPop()).toBe(1495213);
    console.log('testing total population',n.getPop());

    expect(n.mostNorthern()).toBe('Santa Barbara 34.4208');
    console.log('testing the Northern', n.mostNorthern());

    expect(n.mostSouthern()).toBe('Antananarivo -18.933333');
    console.log('testing the southern', n.mostSouthern());

    n.movedInCommunity(1, 9);
    console.log(n.cityArrList[1].pop);
    expect(n.cityArrList[1].pop).toBe(92110);
    console.log("testing moveIn people", n.movedInCommunity(), n.cityArrList[1])

    n.movedOutCommunity(2, 9);
    console.log(n.cityArrList[2].pop);
    expect(n.cityArrList[2].pop).toBe(11670);
    console.log("testing moveOut people", n.movedOutCommunity(), n.cityArrList[2])

    
    n.showCity(1);
    expect(n.showCity(1)).toBe(`1 Santa Barbara 34.4208 -119.6982 92110`);
    console.log(n.cityArrList[1])

    n.addCity('Shiraz', 2.116, 29.61031, 52.53113)
    expect(n.cityArrList.length).toBe(4);
    
    n.deleteCity(3);
    expect(n.cityArrList.length).toBe(3);
    console.log(n.cityArrList[2])
    
    

 
   
});