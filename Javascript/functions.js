console.log("hello from the functions.js file v1")

function myFunction() {
			console.log("Hello from myFunction");
		}
		myFunction();
		//myFunction();


console.log("Hello from functions.js v2");

		function myFunction(xx, yy) {
			console.log("Hello from myFunction v2", xx, yy);
			const value_to_return = xx + "-" + yy;
			return value_to_return;
		} 
	
		const value1 = myFunction("Rocks","Rings");
		const value2 = myFunction("Coding","Fun");
	
		console.log("v1:", value1);
		console.log("v2:", value2);
	
		const func = myFunction;
	
		console.log(func("Hello","World"));


//Add Numbers #1



function my_add (n1,n2,n3){
 
  
  return n1+n2+n3
}
const ans12 = my_add(1,2,3);
console.log('my_add answer 1:', ans12);
console.log('my_add answer 2:',my_add(2,22,222));


//Create Email Address #2


function my_email (x, y) {
 return (x + "." + y + "@" + "evolveu" + "." + "ca")
}
const ans14 = my_email('jane','smith');
console.log('my_email answer 1:', ans14);

console.log('my_email answer 1:',my_email('bill','jones'));


//Array Sum: #3



let arrayExc = [2, 3, 5, 6];
let sum = 0;
function sumArray() {
	
		for (i=0; i < arrayExc.length; i++) {
		sum += arrayExc[i];
		
} 
return sum
}
console.log("total of array is " + sumArray());




//String Search: #4

const string_array = [
	'this is a string',
	'that is also a string',
	'what about this',
	'what about that',
];

const search1 = "this";
const search2 = "is";



function look_for_string (string_array , search1) {
	let counter = 0;
	for (i=0; i < string_array.length; i++){
		if (string_array[i].search(search1) > -1) {
			counter += 1;

		//	return i;
		}

	

		}
return counter

	 //return -1
}

const ans1 = look_for_string(string_array, search1);
const ans2 = look_for_string(string_array, search2);

console.log("We found '", search1, "' in", ans1, "lines");
console.log("We found '", search2, "' in", ans2, "lines");
