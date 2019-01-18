var spinTheWheel = document.getElementById('submatron');
var fullList = document.getElementById('restaurant-list');

// pick a random foodplace
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
	fullList.setAttribute("style", "display:none;");
};

// show restaurant list
var showAll = document.getElementById('showAll');
showAll.onclick = function displayList() {
	console.log('displayList');

	var restaurantList = setzt;
	restaurantList = restaurantList.map(item => item.name).toString().replace(/,/g, '<br>'); // <input type="checkbox" > .. display as list?
	// restaurantList = restaurantList.map(item => item.name).toString().replace(/,/g, ' <input type="checkbox" id="' + name + '" name="' + name + '"><br>');
	document.getElementById('restaurant-list').innerHTML = restaurantList;
	fullList.setAttribute("style", "display:block;");
};
