import FifoLifo from './FifoLifo';

test('Testing the FifoLifo Class', () => {
    console.log("Testing for constructor");
    const obj =  new FifoLifo();
    expect(obj.arr.length).toBe(0);
    
    console.log("Testing for Insertion method");
    obj.insert("ant");
    expect(obj.arr.length).toBe(1);
    obj.insert("bird");
    expect(obj.arr.length).toBe(2);
    obj.insert("cat");
    expect(obj.arr.length).toBe(3);
    obj.insert("dog");
    expect(obj.arr.length).toBe(4);
    obj.insert("eagle");
    expect(obj.arr.length).toBe(5);
    obj.insert("fish");
    expect(obj.arr.length).toBe(6);
    // console.log(obj.arr);
   
    console.log("Testing for delFifo method");
    obj.delFifo();
    expect(obj.arr.length).toBe(5);
    // console.log(obj.arr);
    obj.delFifo();
    expect(obj.arr.length).toBe(4);
    // console.log(obj.arr);

    console.log('Test Insertion method after using delFifo');
    obj.insert('goat');
    expect(obj.arr.length).toBe(5);
    // console.log(obj.arr);

    console.log("Testing for delLifo method");
    obj.delLifo();
    expect(obj.arr.length).toBe(4);
    obj.delLifo();
    expect(obj.arr.length).toBe(3);
    // console.log(obj.arr);

    console.log('Test Insertion method after using delLifo');
    obj.insert('bird');
    expect(obj.arr.length).toBe(4);
    obj.insert('ant');
    expect(obj.arr.length).toBe(5);
    console.log(obj.arr);
});