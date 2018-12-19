var spinTheWheel = document.getElementById('submatron');
spinTheWheel.onclick = function pickAplatz() {
	console.log('pickAplatz');

	var i;
	for (i=0;i<setzt.length;i++){
		var restaurant = setzt[Math.floor(Math.random() * setzt.length)];
		// https://andrew.hedges.name/experiments/random/randomness.html
		var name = restaurant['name'];
		var phone = restaurant['phone'];
		var menu = restaurant['menu'];
		document.getElementById('results').innerHTML = '<span>' + name + '</span><br>' + phone + '<br><a href="' + menu + '">' + menu + '</a>';
	}
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

	var j;
	for (j=0;j<setzt.length;j++){

	};
	// 	console.log("var J =" + " " + j);
	// 	console.log("setzt.length =" + " " + setzt.length);
	// 	var restaurantList = j.name + "<br>";
	document.getElementById('restaurant-list').innerHTML = JSON.stringify(setzt);

	var name = setzt[j].name;
	console.log(name);
};
