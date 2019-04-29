const data = {
    // object 0
    clients: [
        // array
        { name: "Jane", balance: 10 }, // object 0
        { name: "Liam", balance: 1000 },
        { name: "Emma", balance: 1330 },
        { name: "Olivia", balance: 310 },
        { name: "Noah", balance: 503 },
        { name: "William", balance: 520 },
        { name: "Benjamin", balance: 150 }
    ]
};

let a = Object.values (data.clients);
console.log(a);
function textN() {
    let info = [];
    let i = 0;
    for (i = 0; i < a.length; i++) {
        console.log(i);
        info.push();
    }
    return (info);
}
let text = textN();
//let count=0;
console.log(textN);
//console.log(data.clients[0]);
//console.log(Object.values(data.clients[0]));
const div = document.getElementById("container");

function dataClients(parent) {
    console.log("works?");
    const element = document.createElement("div");
    element.className = "card-body";
    element.id = "divdiv";

    let clientName = document.createElement("h1");
    clientName.textContent = (text);
    //clientName.textContent = ("client" + " " + count);

    //let clientBalance = document.createElement("h1");
    //clientBalance.textContent = data.clients.[0].name;
    parent.target.parentNode.append(element);

    const dltBtn = document.createElement("button");
    dltBtn.id = "dltBtn";
    dltBtn.className = "btnCard"; //("btnCard"+ count);
    dltBtn.textContent = "Delete";

    element.appendChild(dltBtn);

    // count++
}

document.body.addEventListener("click", dataClients);

/*1st try

function getProperty(obj, prop) {
        let customer = prop.split('.'), // split a string into an array
            last = customer.pop(), // remove last element in an array
            l = customer.length, 
            i = 1,
            current = customer[0];
            
        while((obj = obj[current]) && i < l) {
            current = customer[i];
            i++;
        }

        if(obj) {
            return obj[last];
        }
    }

console.log(getProperty (data, name));
console.log(getProperty(data, balance));


//let count = getProperty (data, name);
//let count2 = getProperty(data, balance);

const div = document.getElementById("container");

function dataClients (parent) {

const element = document.createElement("div");
  element.className = "card-body";
  element.id = "divdiv";
  
let clientName = document.createElement ("h1");
clientName.textContent = (getProperty (data, name));//(client + " " + count));
//clientName.textContent = (name + " " + count);


let clientBalance = document.createElement ("h1");
clientBalance.textContent = (getProperty(data, balance));


const dltBtn = document.createElement("button");  
  dltBtn.id = "dltBtn";
  dltBtn.className= ("btnCard")//("btnCard"+ count);
  dltBtn.textContent="Delete";
  
  element.appendChild(dltBtn);  
  
 // count++ 

  }

document.body.addEventListener("click", dataClients);

*/

////**************2 try***************///////

/**1s try. display value but * Display all the value in one div
const client = Object.keys(data["clients"]).map(function(key, index)
  { return data["clients"][key]["name"]; }); 

let balance = Object.keys(data["clients"]).map(function(key, index)
  { return data["clients"][key]["balance"]; });



const div = document.getElementById("container");



  function dataClients (parent) {

const element = document.createElement("div");
  element.className = "card-body";
  element.id = "divdiv";
  
let clientName = document.createElement ("h1");
clientName.textContent = (client);//(client + " " + count));

//let clientBalance = document.createElement ("h1");
//  clientBalance.appendChild(document.createTextNode) = (balance);

  element.appendChild(clientName);
  //element.appendChild(clientBalance);

  parent.target.parentNode.append(element);

const dltBtn = document.createElement("button");  
  dltBtn.id = "dltBtn";
  dltBtn.className= ("btnCard")//("btnCard"+ count);
  dltBtn.textContent="Delete";
  //deleteBtn.appendChild(document.createTextNode("Delete"));
  element.appendChild(dltBtn);  
  
  //count++ 
  }

document.body.addEventListener("click", dataClients);*/