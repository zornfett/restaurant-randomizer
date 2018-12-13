window.onload = function() {
	console.log('loadie');

};

document.getElementById('submatron').onclick = function arrayStuffs() {
	// debugger;
	console.log('clicked');

	var db = new Array('Stack1','Stack2','Stack16','Stack17','Stack13','Stack14','Stack15','Stack6','Stack7','Stack8','Stack9','Stack10');

	var setzt = new Array(
		{
			"id":1,
			"name":"JR's BBQ",
			"phone":"310.837.6838",
			"menu":"http://www.jrs-bbq.com/menu.php"
		},
		{
			"id":2,
			"name":"Rio Bravo",
			"phone":"323.938.9858",
			"menu":"http://elriobravorestaurant.com/?page_id=329"
		},
		{
			"id":3,
			"name":"Delicious Pizza",
			"phone":"323.424.3014",
			"menu":"https://deliciouspizza.com/media/DeliciousPizzaMenu-WA.pdf"
		},
		{
			"id":4,
			"name":"Open Face",
			"phone":"855.676.3223",
			"menu":"https://openfacefoodshop.com/menu/"
		},
		{
			"id":666,
			"name":"XXXX",
			"phone":"XXXX",
			"menu":"XXXX"
		}
	);

	var i;
	// for (i=0;i<db.length;i++){
	// 	var restaurants = db[Math.floor(Math.random() * db.length)];
	// 	document.getElementById('displayHere').innerText = restaurants;
	// }
	for (i=0;i<setzt.length;i++){
		var restaurants = setzt[Math.floor(Math.random() * setzt.length)];
		document.getElementById('displayHere').innerText = restaurants;
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

// function initThings() {
// 	console.log('loadie');
// 	// var butt = document.getElementById('submatron');
// 	// butt.onclick = arrayStuffs();

// };

*/
