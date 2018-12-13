document.getElementById('submatron').onclick = function arrayStuffs() {
	console.log('clicked');
	// add restaurants here!
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
		}
		
		// {
		// 	"id":666,
		// 	"name":"XXXX",
		// 	"phone":"XXXX",
		// 	"menu":"XXXX"
		// }
	);
	// spin the wheel / display!
	var i;
	for (i=0;i<setzt.length;i++){
		var restaurant = setzt[Math.floor(Math.random() * setzt.length)];
		// var theWinner = restaurant['name'] + '\n' + restaurant['phone']  + '\n' + restaurant['menu'];
		var name = restaurant['name'];
		var phone = restaurant['phone'];
		var menu = restaurant['menu'];
		document.getElementById('displayHere').innerHTML = '<span>' + name + '</span><br>' + phone + '<br><a href="' + menu + '">' + menu + '</a>';
	}
	// snack storm!
	var snacks = document.getElementById('snacks');
	snacks.setAttribute("style", "display:block;");

};
