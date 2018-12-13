function initThings() {
	console.log('loadie');
	var butt = document.getElementById('submatron');
	// butt.onclick = collectFoodInfo();
	butt.onclick = Loadquotes();
};

var Loadquotes= function(){
	// debugger;
	// var db = TAFFY([
	// 	{"id":1,"name":"JR's BBQ","phone":"310.837.6838","menu":"http://www.jrs-bbq.com/menu.php"},
	// 	{"id":2,"name":"Rio Bravo","phone":"323.938.9858","menu":"http://elriobravorestaurant.com/?page_id=329"},
	// 	{"id":3,"name":"Delicious Pizza","phone":"323.424.3014","menu":"https://deliciouspizza.com/media/DeliciousPizzaMenu-WA.pdf"},
	// 	{"id":4,"name":"Open Face","phone":"855.676.3223","menu":"https://openfacefoodshop.com/menu/"},
	// ]);
	var db = new Array('Stack1','Stack2','Stack16','Stack17','Stack13','Stack14','Stack15','Stack6','Stack7','Stack8','Stack9','Stack10');

	var i;

	for (i=0;i<db.length;i++){
		var newquotes = db[Math.floor(Math.random() * db.length)];
		document.getElementById('quoteshere').innerText = newquotes;
	}
};


/*
FOR FORM SUBMIT:

// https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick
function initThings() {
	console.log('loadie');
	var butt = document.getElementById('submatron');
	butt.onclick = collectFoodInfo();
};


// put field info into array - https://stackoverflow.com/questions/47078498/javascript-add-value-from-input-box-to-array/47078563
var foodInfo = [];
function collectFoodInfo() {
	console.log('clicksauce');

	fieldData = document.getElementsByClassName('field-data').value;
	foodInfo.push(fieldData);
	// console.log(foodInfo);
	return false; // whoooooaa
};


DISCARD:
window.onload = function() {
	console.log('loadie');
	// onclick run collectFoodInfo - https://stackoverflow.com/questions/21477717/how-to-call-a-js-function-using-onclick-event/21477793
	function arrayPacker() {
		document.geElementById('submatron').onclick {
			console.log('clicksauce');
			collectFoodInfo();
		};
	};
};

function arrayPacker2() {
	document.geElementById('submatron').onclick {
		console.log('clicksauce2');
		collectFoodInfo();
	}
};

https://stackoverflow.com/questions/41999167/how-to-get-random-array-element-onclick-of-a-button-in-javascript
https://www.w3resource.com/javascript-exercises/javascript-array-exercise-35.php
https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
https://www.w3resource.com/javascript-exercises/javascript-array-exercise-35.php

*/
