/*

*/
//console.log("Hello World from external JavaScript");

/// create the function
function onButtonClicked(){
  console.log("I am in the button click event");// Test works
    let x = Number(document.getElementById("inp").value);// Number

  console.log (x+1);                                //Test works (var x)
}

//addEventListener
document.getElementById("btn1").addEventListener("click",onButtonClicked);

/********            **************/
/******** Calculator **************/
/********           **************/

function calculate(operation){
    var firstInput = document.calculator.input1.value
    var secondInput = document.calculator.input2.value
    var result = eval(firstInput + operation + secondInput) /* test*/
    document.calculator.outcome.value = result

}


/********             **************/
/******** Canadian Taxes **************/
/*********** ---         --- *********/


let boton = document.getElementById("btnCal");
boton.addEventListener("click",taxCalculator); //add event to the button



function taxCalculator(){
  let amount = Number(document.getElementById("income").value);
  taxes = 0;


       if (amount <= 47630) {
     taxes =   amount * 0.15;


  } else if (amount > 47630) {
    taxes = (amount-47630) * 0.205 + 7145;


  } else if (amount > 95259) {
    taxes = (amount-95259) * 0.26 + 16908;


  } else if (amount > 147667) {
    taxes = (amount-147667) * 0.29 + 30.535;


  } else { (amount > 210371 )
    taxes =  (amount -147667) * 0.33 + 48719;

  }
   //document.getElementById("canTax").value = taxes;

   document.getElementById("canTax").value = taxes // call the form named calculator2
                                          // assign value to canTax Id to get the taxes in the input.
 }

 /*********** ---                    --- *********/
  /*********** --- Working with Arrays --- *********/
/*********** ---                     --- *********/

let addArrBtn =  document.getElementById("addBtn").addEventListener("click",addingArray);
let showArrayBtn = document.getElementById("showArr").addEventListener("click",showArray);
let totalArrayBtn = document.getElementById("totalArr").addEventListener("click",total);
let clearArrayBtn = document.getElementById("clearArr").addEventListener("click",clearArray);


let itemsArr = [];


function addingArray () {
boxArr = Number(document.getElementById("inputArr").value);
let x = document.forms["arrayTask"]["inputArr"].value;

itemsArr.push(boxArr);
if (isNaN(x)) {
  document.getElementById("ArrMsj").textContent = "input is not a number!";

} else

document.getElementById("ArrMsj").textContent = "number has been added";
console.log(x);
console.log(itemsArr);
return false;
}

 //show the array...It works!!!/
function showArray () {
document.getElementById("inputArr").textContent = console.log(itemsArr);

}


function total() {
  var sum = 0;
  for (var i = 0; i < itemsArr.length; i++) {
   sum = sum + itemsArr[i]   // Add number on each iteration
  };
  console.log(sum);
 // document.getElementById("ArrMsj").value = total;
}


// ***********/
function clearArray () {
  itemsArr = [];
  document.getElementById("ArrMsj").textContent = "Array is clear now!";
}

/*********** ---                    --- *********/
  /*********** --- Working with Dictionaries --- *********/
/*********** ---                     --- *********/

inputObj = document.getElementById("inputDic");
lookOBj = document.getElementById("lookBtn").addEventListener("click", filtro);


function filtro()   {
  const provinces = {
    ab: "alberta",
    bc: "british columbia",
    on: "ontario",
    sk: "saskatchewan",
  };
  console.log(provinces[inputObj.value]);
}
