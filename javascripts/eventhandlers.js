"use strict";

// All event handlers
var CarLot = (function (carLot) {

	var inputField = document.getElementById("input");

		carLot.changeCarStyling = function(event) {
			var styleTarget = event.currentTarget;
				for (var i = 0; i < carCards.length; i++){
					carCards[i].classList.remove("newStyle");
				styleTarget.classList.add("newStyle");
				carLot.clearInput();
			};

		carLot.clearInput = function(event){
					var inputField = document.getElementById("input");
							inputField.value = "";
							inputField.focus();
							inputField.addEventListener("keyup", carLot.editDescription);
			};

		carLot.editDescription = function() {
			var descriptionArea = document.getElementsByClassName("descEdit");
			var inputField = document.getElementById("searchBar");

				for (var i = 0; i < carCards.length; i++) {
					if (carCards[i].classList.contains("newStyle")) {
						descriptionArea[i].innerHTML = input.value;
					}
				}
		};
return carLot;
})(CarLot || {});

