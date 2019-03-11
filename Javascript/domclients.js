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
//let count = 0;

const client = Object.keys(data["clients"]).map(function(key, index)
	{ return data["clients"][key]["name"]; });


//const city = getNestedObject(user, ['personalInfo', 'addresses', 0, 'city']);
/*const balance = data.clients.balance;
const result = client.filter(obj => {
  return client.name.id == client.balance.id
})*/

const div = document.getElementById("container");	
	
	function dataClients (padre) {

const element = document.createElement("div");
	element.className = "card-body";
    element.createTextNode = "test";

let clientName = document.createElement ("h1");
	clientName.appendChild(document.createTextNode (client));//(client + " " + count));


	element.appendChild(clientName);

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
	/*const div = document.getElementById("container");
        const element = document.createElement("div");
        element.className = "card-body";
        element.createTextNode = "test"*/

   
        /*`
                <div class="card-body">
                    <strong>Product</strong>: ${product.name} -                                       
                </div>
          
        `;*/
        
  
  