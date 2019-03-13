const data = 
	{clients:
		[
			{name:"Jane", balance:10},
			{name:"Liam", balance:1000},
			{name:"Emma", balance:1330},
			{name:"Olivia", balance:310},
			{name:"Noah", balance:503},
			{name:"William", balance:520},
			{name:"Benjamin", balance:150},
		]
	};





//**1s try. display value but * Display all the value in one div
const client = Object.keys(data["clients"]).map(function(key, index)

	{ return data["clients"][key]["name"]; }); 


let balance = Object.keys(data["clients"]).map(function(key, index)

	{ return data["clients"][key]["balance"]; });





const div = document.getElementById("container");	
	
	function dataClients (padre) {

const element = document.createElement("div");
	element.className = "card-body";
  //  element.createTextNode = "test";



let clientName = document.createElement ("h1");
	clientName.textContent = (client);//(client + " " + count));

//let clientBalance = document.createElement ("h1");
//	clientBalance.appendChild(document.createTextNode) = (balance);


	element.appendChild(clientName);
	//element.appendChild(clientBalance);

	padre.target.parentNode.append(element);


const dltBtn = document.createElement("button");	
	dltBtn.id = "dltBtn";
	dltBtn.className= ("btnCard")//("btnCard"+ count);
	dltBtn.textContent="Delete";
	//deleteBtn.appendChild(document.createTextNode("Delete"));
	element.appendChild(dltBtn);	
	
	//count++	
}

document.body.addEventListener("click", dataClients);
	
        
  

