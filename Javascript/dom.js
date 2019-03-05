//************* adding a click event to DIV 
//********************************************//
/*
function divEvent (event) {
	console.log("I am DOM div");
}

document.getElementById("myDiv").addEventListener("click", divEvent); */

//********************************************//
// **** Display li using show button *********//
//******************************************* //

const showBtn = document.getElementById("DomSbtn");
const addBtn = document.getElementById("DomAbtn");
const ol = document.querySelector("ol");
const li = document.getElementsByTagName("li");


function pushShowBtn () {
	
		for(var i = 0; i <= li.length ; ++i){
			console.log(ol.textContent);
			
			//console.log(ol.textContent);
			//console.log(ol.children);
}
}
showBtn.addEventListener("click", pushShowBtn);

//*******************************************
// **** Add li pushing add button *********//
//*******************************************


function pushAddBtn () {
	//console.log("works?")

	const newLi = document.createElement("li");
	const text = document.createTextNode("something" + " ");
	ol.appendChild(newLi);
	newLi.appendChild(text);
}
//const newLi = document.createElement("li");
//newLi.appendChild(document.createTextNode)[0];
addBtn.addEventListener("click", pushAddBtn);



//********************************************//
// ********** Working with cards *** *********//
//******************************************* //

const addCardBtn = document.getElementById("AddCard");
const leftSide = document.getElementById("left");
const divCardBox= document.createElement ("div");

let count = 1;

function makeDivCard() {
//console.log("testing card", makeDivCard("cards??"));
	divCardBox.id = "boxCard";
	divCardBox.className = "a";	

//append the title to the new Div
let title = document.createElement ("h1");
	title.appendChild(document.createTextNode("Card " + " " + count));
	divCardBox.appendChild(title);

	left.appendChild(divCardBox);

//append all buttons to the new Div	
const addBeforeBtn = document.createElement("button");
	addBeforeBtn.id = "beforeBtn";
	addBeforeBtn.className = ("btnCards" + count);
	addBeforeBtn.textContent="Add Before";
	//addBeforeBtn.appendChild(document.createTextNode("Add Before"));
	divCardBox.appendChild(addBeforeBtn);


const addAfterBtn = document.createElement("button");	
	addAfterBtn.id= "afterBtn";
	addAfterBtn.className= ("btnCards" + count);
	addAfterBtn.textContent="Add After";
	//addAfterBtn.appendChild(document.createTextNode("Add After"));
	divCardBox.appendChild(addAfterBtn);

const deleteBtn = document.createElement("button");	
	deleteBtn.id = "dltBtn";
	deleteBtn.className=("btnCards"+ count);
	deleteBtn.textContent="Delete";
	//deleteBtn.appendChild(document.createTextNode("Delete"));
	divCardBox.appendChild(deleteBtn);	
	
	count++
}

addCardBtn.addEventListener("click", makeDivCard);

//*************************************
// create a function with target Event

divCardBox.addEventListener("click", btnsTarget);

function btnsTarget(e) {
	const elementTarget = e.target;
	if (elementTarget.id === "beforeBtn") {
		console.log("this is 1 target");
	}

	else if (elementTarget.id === "afterBtn") {
		console.log("this is 2 target");
	}

	else if (elementTarget.id === "dltBtn") {
		console.log("this is 3 target");
	}

	else { }
}




/*function btnsInAction(e) {
	const element = e.target.querySelector(".beforeBtn");
	if (element==this.beforeBtn) {
		 var parent = divCardBox.parentNode;
		 parent.insertBefore(divCardBox, beforeBtn.nextSibling);
 //console.log(e.target , "target");
} 
}
*/


	/*

divCardBox.addEventListener("click",insertAfter);

function insertAfter(newElement,targetElement) {
const newElement = makeDivCard();
const targetElement = "afterBtn";
    // target is what you want it to go after. Look for this elements parent.
    const parent = targetElement.parentNode;

    // if the parents lastchild is the targetElement...
    if (parent.lastChild === targetElement) {
        // add the newElement after the target element.
        parent.appendChild(newElement);
    } else {
        // else the target has siblings, insert the new element between the target and it's next sibling.
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}


  

const element = e.target.querySelector(".beforeBtn");
	if (element==this.beforeBtn) {
		return;

	while (element && element !== document.body) {
	if (element==thisBeforeBtn) {
		return;
	}
	element = element.parentNode;
}
	this.removeClass();
} false;*/







