/*	
	Write the function that will create this output:
//943943
*** the two values are not the same:
    p1--> a
    p2--> b
*** the two values are not the same:
    p1--> 1
    p2--> 2
*** the two values are not the same:
    p1--> 2
    p2--> 2
*/

// Write the function after this comment ---
function assertEquals (p1, p2){
	if (p1===p2) {
		return true;
	}

	else if (p1!==p2){
		console.log("the two values are not the same:p1-->",p1 ,"p2-->", p2);
		return false;
	}

}
// and before this comment ---

assertEquals("a","b");
assertEquals("a","a");
assertEquals(1,2);
assertEquals(2,2);
assertEquals("2",2);
assertEquals("This value","This value");


/********************************************************************/
/*******************************************************************/
/*	
	Write the function to format an email based on an array
*/

// Write the function after this comment ---
function makeEmailArr ([firstName, LastName]){
	console.log(makeEmailArr);
		return (firstName + LastName + "@" + "evolveu.ca");


}


// and before this comment ---

const arrayLarry = ['larry', 'shumlich'];
assertEquals('larry.shumlich@evolveu.ca', makeEmailArr(arrayLarry));
assertEquals('bill.smith@evolveu.com', makeEmailArr(['bill','smith']));
assertEquals('amy.jones@evolveu.ca', makeEmailArr(['amy','jones']));

console.log(makeEmailArr(arrayLarry));