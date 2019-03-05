console.log("Hello World From JS");

function makeDiv(message) {
	const div = document.createElement("div");
	div.textContent = message;
	div.className = "clPanel";
	return div;
}
console.log("testing makeDiv", makeDiv("Make me a div"));

let count = 1;
document.body.addEventListener("click", onBodyClicked);
function onBodyClicked(event) {
	console.log("Test here");
	event.target.textContent = "Bang " + count++;
	// console.log("This is:", bodyTag);
	
}

//insert before
// body.insertBefore(new node, element)
// const p = target.parentElement
//p.insertBefore(new node, element);
// when we dont have the parent or siblibg:
// create var p =target.ParentElement  - var s = target.nextSibling ==> p.insertBefore(newNode, S);