//************* adding a click event to DIV 
//********************************************//

/*function divEvent (event) {
	console.log("I am DOM div");
}

document.getElementById("myDiv").addEventListener("click", divEvent);*/


// **** Display li using show button *********//

const showBtn = document.getElementById("DomSbtn");
const addBtn = document.getElementById("DomAbtn");
const ol = document.querySelector("ol");
const li = document.getElementsByTagName("li");


function pushShowBtn () {
	
		//for(var i = 0; i <= listLi.length ; ++i){
			console.log(ol.textContent);
			//console.log(ol.children);
}

showBtn.addEventListener("click", pushShowBtn);

//*******************************************
// **** Add li pushing add button *********//


function pushAddBtn () {
	//console.log("works?")

	const newLi = document.createElement("li");
	const text = document.createTextNode("something");
	ol.appendChild(newLi);
	newLi.appendChild(text);

	
//const newLi = document.createElement("li");
//newLi.appendChild(document.createTextNode)[0];

}

addBtn.addEventListener("click", pushAddBtn);
