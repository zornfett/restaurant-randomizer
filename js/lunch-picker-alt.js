var spinTheWheel = document.getElementById('submatron');

var i;
for (i=0;i<setzt.length;i++){
	var restaurant = setzt[Math.floor(Math.random() * setzt.length)];
	// https://andrew.hedges.name/experiments/random/randomness.html
	var name = restaurant['name'];
	var phone = restaurant['phone'];
	var menu = restaurant['menu'];
	
}

spinTheWheel.onclick = function pickAplatz() {
	console.log('pickAplatz');
	document.getElementById('results').innerHTML = '<span>' + name + '</span><br>' + phone + '<br><a href="' + menu + '">' + menu + '</a>';

	// snack storm!
	var snacks = document.getElementById('snacks');
	snacks.setAttribute("style", "display:block;");
	spinTheWheel.setAttribute("style", "display:none;");
};

// show restaurant list
var showAll = document.getElementById('showAll');
showAll.onclick = function displayList() {
	console.log('displayList');
	// console.log(setzt.toString()); um, no

	// document.getElementById('restaurant-list').innerHTML = JSON.stringify(setzt);
	document.getElementById('restaurant-list').innerHTML = name + "<br>";


};

/*

	// var j;
	// for (j=0;j<setzt.length;j++){
	// 	var name = restaurant['name'];
	// 	var phone = restaurant['phone'];
	// 	var menu = restaurant['menu'];
	// };
	// 	console.log("var J =" + " " + j);
	// 	console.log("setzt.length =" + " " + setzt.length);
	// 	var restaurantList = j.name + "<br>";

*/