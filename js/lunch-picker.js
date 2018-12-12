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


/*

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

*/
