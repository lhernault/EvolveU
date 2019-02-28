console.log ("Hello World from basicdom.js");
//console.log("Document", document);

//console.log(idH1);

const push = document.getElementById("idBtnPush");
push.addEventListener("click", onButtonPushed)

function onButtonPushed () {
  console.log ("You pushed the button!")
}

//**************************************************************************/
//************************Event click***************************************
//**************************************************************************/

let id_H1 = document.getElementById("idH1");
id_H1.addEventListener ("click", pushOne)

  function pushOne () {
  if (id_H1.textContent === "Hello World") {
    id_H1.textContent = "Hello Universe";
  } else {
    id_H1.textContent = "Hello World";
  }
}

//**************************************************************************/
//****************************Event MouseOver******************************
//**************************************************************************/

let id_H3 = document.getElementById("idH3");
id_H3.addEventListener ("mouseover", pushTwo)

  function pushTwo () {
    if (id_H3.textContent === "Hello Alberta") {
      id_H3.textContent = "Hello Saskatchewan";
    } else {
      id_H3.textContent = "Hello Alberta";
    }
  }

//**************************************************************************/
//******************************random event********************************
//**************************************************************************/

let id_H2 = document.getElementById("idH2");
id_H2.addEventListener ("click", focusThree)

    function focusThree () {
      if (id_H2.textContent === "Hello Canada") {
      id_H2.style.background = "blue";
    }
//**************************************************************************/
// **** Getting the attribute!!!

var x = document.getElementsByTagName("H2")[0].getAttribute("place"); 
console.log("the attribute is :" + x);
}

//**************************************************************************/
//********************************create an element************************
//**************************************************************************/


function addH1 (){
const newH1 =  document.createElement("h1");
document.body.appendChild(newH1).textContent= "Hola!";
}

//**************************************************************************/
//****************************add element to DIV***************************
//**************************************************************************/

const divToNew = document.getElementById("idDiv");  // try ** to div
const newButton = document.createElement("button");

newButton.appendChild(document.createTextNode("New Button"));
divToNew.appendChild(newButton); //before document.body.appendchild

// move the listener to here and change listener to newBUtton
newButton.addEventListener ("click", addToDiv); // before document.body.addnewlist

function addToDiv (e) {
   var parrafo = document.createElement("P");
    var texto= document.createTextNode("This is a new paragraph.");
    parrafo.appendChild(texto);
    divToNew.appendChild(parrafo) //*** before was body.appendchild

 //const newTxt = document.createTextNode("I am the new button")
 //newButton.appendChild(document.createTextNode("New Button"));
 //newButton.appendChild(newTxt);
//document.body.appendChild(newButton);
 //document.getElementById("idDiv").appendChild(newButton); I delete the id from DIV
}



//**************************************************************************/
//*************************onBodyCLick*************************************
/***************************************************************************/

const body = document.getElementsByTagName("body")[0];

document.body.addEventListener("click",onBodyClick);


function onBodyClick (e) {
    console.log("it works?");
  //  var x =  target;
  //  getElementsByTagName("body").textContent = "the target is" + x.tagName + "element";
 console.log("e", e);
 console.log(e.target , "target");

};

//**************************************************************************/
//****************************Create a shop list***************************
//**************************************************************************/


const botonShop = document.getElementById("submitStuff");


function shoopingList () {
  let inputList = document.getElementById("stuffInput").value;
  inputList.value = "";

    const ul = document.getElementById("lista");
    const li = document.createElement("li");
    const txtLi = document.createTextNode(inputList);
    
    li.appendChild(txtLi);
    ul.appendChild(li);
  
  }

botonShop.addEventListener ("click", shoopingList);

















