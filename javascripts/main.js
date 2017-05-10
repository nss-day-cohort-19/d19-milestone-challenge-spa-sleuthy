"use strict";
console.log("main js loads");

// XHR for json file
var carDiv = document.getElementById("cars");
var dataRequest = new XMLHttpRequest();

// event listener to check XHR status
dataRequest.addEventListener("load", dataRequestComplete);
dataRequest.addEventListener("error", dataRequestFailed);

// parse json data after it is loaded
function dataRequestComplete(event){
	console.log("Car inventory has loaded");
	var data = JSON.parse(event.target.responseText);
	console.log("The car inventory data is: ", data);

	populatePage(data);
}

function dataRequestFailed(event){
	console.log("An error prevented the data from loading.");
}

dataRequest.open("GET", "inventory.json");
dataRequest.send();

// place car data onto DOM
function populatePage(inventory){
  // Loop over the inventory and populate the page
  	for (var i = 0; i < inventory.length; i++){
		var carMake = inventory[i].make;
  		var carModel = inventory[i].model;
  		var carYear = inventory[i].year;
  		var carPrice = inventory[i].price;
  		var carDesc = inventory[i].description;
		var newCarDiv = "";
		newCarDiv = carDiv.innerHTML;
		newCarDiv +=`<div class="carsLoaded container">
                    	<div class="row col-md-12 cardStyle">
                        <div class="col-md-3" class="originalStyle" id="carInfo"><h4>${yearData} ${makeData} ${modelData}</h4></div>
                        <div class="col-md-3 price"><h4>${priceData}</h4></div>
                        <div class="col-md-6 descrip"><h5 class="descEdit">${descData}</h5></div>
                    </div>
                </div>`;
    	}
    	CarLot.activateEvents();
	}

})(CarLot || {});


// Load the inventory and send a callback function to be
// invoked after the process is complete
// CarLot.loadInventory();