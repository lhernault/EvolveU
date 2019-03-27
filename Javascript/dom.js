//************* adding a click event to DIV
//********************************************//
/*
//403 943 943 8654
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

function pushShowBtn() {
	for (var i = 0; i <= li.length; ++i) {
		console.log(ol.textContent);
		//console.log(ol.textContent);
		//console.log(ol.children);}
	}
}
showBtn.addEventListener("click", pushShowBtn);

//*******************************************
// **** Add li pushing add button *********//
//*******************************************
function pushAddBtn() {
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

let count = 1;
//addCardBtn.addEventListener("click", makeDivCard); ***la movi al final de f

/*function gato(maulla){
	console.log("miau", maulla);
}*/

/*******Create a function for make the div************/
/*******---------------------------------************/
/*const divCardBox= document.createElement ("div");
function callingCard () {
	divCardBox.id = "boxCard";
	divCardBox.className = "a";	
//parent.target.parentNode.append(divCardBox);
leftSide.appendChild(divCardBox);

}/*

/*******Create a function to add the buttons to the div*****/
/**********---------------------------------***************/
function makeDivCard(parent) {
	//console.log("testing card", makeDivCard("cards??"));
	const divCardBox = document.createElement("div");
	divCardBox.id = "boxCard";
	divCardBox.className = "a";

	//append the title to the new Div
	let title = document.createElement("h1");
	title.appendChild(document.createTextNode("Card " + " " + count));
	divCardBox.appendChild(title);

	//parent.target.parentNode.append(divCardBox);

	const addAfterBtn = document.createElement("button");
	addAfterBtn.id = "afterBtn";
	addAfterBtn.className = "btnCards" + count;
	addAfterBtn.textContent = "Add After";
	//addAfterBtn.appendChild(document.createTextNode("Add After"));
	divCardBox.appendChild(addAfterBtn);

	const addBeforeBtn = document.createElement("button");
	addBeforeBtn.id = "beforeBtn";
	addBeforeBtn.className = "btnCards" + count;
	addBeforeBtn.textContent = "Add Before";
	//addAfterBtn.appendChild(document.createTextNode("Add After"));
	divCardBox.appendChild(addBeforeBtn);

	const deleteBtn = document.createElement("button");
	deleteBtn.id = "dltBtn";
	deleteBtn.className = "btnCards" + count;
	deleteBtn.textContent = "Delete";
	//deleteBtn.appendChild(document.createTextNode("Delete"));
	divCardBox.appendChild(deleteBtn);

	count++;
	return divCardBox;
}
//addCardBtn.addEventListener("click", callingCard);
addCardBtn.addEventListener("click", addCard);

//*************************************
// create a function with target Event

leftSide.addEventListener("click", btnsTarget);

function btnsTarget(e) {
	const elementTarget = e.target;

	if (elementTarget.id === "beforeBtn") {
		//console.log("this is 1 target", e.target);

		addingBefore(e);
	} else if (elementTarget.id === "afterBtn") {
		console.log("this is 2 target");
		insertingAfter(e);
	} else if (elementTarget.id === "dltBtn") {
		console.log("this is 3 target");
		deleting(elementTarget);
	} else {
	}
}

/* Funcion que funciona con errores aun
function addingBefore(elementTarget) {
	//let a = elementTarget;
	makeDivCard(elementTarget);
	console.log(elementTarget.parentNode);
	//e.appendChild(new_div, "boxCard.afterBtn");

}*/

function addingBefore(beforeBtn) {
	makeDivCard(beforeBtn); // funciona igual que usando elementTarget
	let x = beforeBtn.target.parentNode; // event target of parent
	x.parentNode.insertBefore(makeDivCard(), x);
}

function insertingAfter(afterBtn) {
	makeDivCard(afterBtn);
	let x = afterBtn.target.parentNode;
	x.parentNode.insertBefore(makeDivCard(), x.nextSibling);
	//console.log(elementTarget.parentNode);
}

function deleting(elementTarget) {
	elementTarget.parentNode.remove();
}

function addCard(parent) {
	parent.target.parentNode.append(makeDivCard());
}
