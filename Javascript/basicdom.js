console.log ("hello world from basicdom.js");
console.log("Document", document);

//console.log(idH1);


let id_H1 = document.getElementById("idH1");
id_H1.addEventListener ("click", pushOne)

  function pushOne () {
  if (id_H1.textContent === "Hello World") {
    id_H1.textContent = "Hello Universe";
  } else {
    id_H1.textContent = "Hello World";
  }
}

//Event MouseOver

let id_H3 = document.getElementById("idH3");
id_H3.addEventListener ("mouseover", pushTwo)

  function pushTwo () {
    if (id_H3.textContent === "Hello Alberta") {
      id_H3.textContent = "Hello Saskatchewan";
    } else {
      id_H3.textContent = "Hello Alberta";
    }
  }

//random event

let id_H2 = document.getElementById("idH2");
id_H2.addEventListener ("click", focusThree)

    function focusThree () {
      if (id_H2.textContent === "Hello Canada") {
      id_H2.style.background = "red";
    }
}


























/*

/*
$("#btnCal").click(function () {
  payments.push({
      amount: parseInt($("#income").val()),
  }   );
  total = 0;
  for(x in payments){
  total += payments[x].amount;
  }
  $("#total").html(total);
  $("#income").val("");
  $("#taxes").html(taxCalculator(total));
});*/
