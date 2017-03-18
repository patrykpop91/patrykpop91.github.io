function myFirstFnction(){

	document.getElementById("demo").innerHTML = "Hello World!";
}

function getJSON(){
	var data = {
		"name" : "Kurs Java",
		"price" : 60,
		"category" : "Internet"
	};

	document.getElementById("name").innerHTML = data.name;
	document.getElementById("price").innerHTML = data.price;
	document.getElementById("name").innerHTML = data.category;
}

/*Zapis JSON w postaci tablicy*/

function getJSONArray(){
	var data = {products : [
		{
			"name" : "Kurs PHP",
			"price" : 70,
			"category" : "Back"
		},
		{
			"name" : "Kurs Angular",
			"price" : 90,
			"category" : "Front"
		}

		]};

document.getElementById("name1").innerHTML = data.products[0].name;
document.getElementById("price1").innerHTML = data.products[0].price;
document.getElementById("category1").innerHTML = data.products[0].category;

document.getElementById("name1").innerHTML = data.products[1].name;
document.getElementById("price1").innerHTML = data.products[1].price;
document.getElementById("category1").innerHTML = data.products[1].category;

}


/*Zapis JSON w postaci tablicy za pomocą pętli*/
function getJSONLoop(){

var data = {products : [
		{
			"name" : "Kurs PHP",
			"price" : 70,
			"category" : "Back"
		},
		{
			"name" : "Kurs Angular",
			"price" : 90,
			"category" : "Front"
		}

		]};

var output = "<ul>";
for (var i in data.products) {
	output += "<li>" + data.products[i].name + "</li>";
	output += "<li>" + data.products[i].price + "</li>";
	output += "<li>" + data.products[i].category + "</li>";
}
output += "</ul>";
document.getElementById("content").innerHTML = output;

}













window.onload = myFirstFnction();
window.onload = getJSON();
window.onload = getJSONArray();
window.onload = getJSONLoop();

/*Zapis JSON z zewnętrznego pliku*/

$( document ).ready(function() {
  $.getJSON('data.json', function(data){
	var output = "<ul>";
	for (var i in data.products){
		output += "<li>" + data.products[i].name + "</li>";
		output += "<li>" + data.products[i].price + "</li>";
		output += "<li>" + data.products[i].category + "</li>";
	}
	output += "</ul>";
	document.getElementById('content-external').innerHTML = output;
});
});


/*Walidacja formularzy*/

function checkLength(field, min_l, max_l){
	var userText = field.value;
	if(userText.length >= min_l && userText.length <= max_l){
		return true;
	}
	else{

		document.getElementById("message").innerHTML = "Długość musi wynościć od " + min_l + " do " + max_l + " !";
		return false;
	}
}

/*Metode indexOF*/




document.user_form1.user_url.onchange = function(){
	var theUrl = document.user_form1.user_url.value;
	
	if(theUrl.indexOf('http://')){
		document.getElementById('message2').innerHTML = "Adres musi się rozpoczynać od http://";
	}
}

/*Zdarzenia onFocus, onBlur*/


	var userfield1 = document.getElementById('username3');
	userfield1.onfocus = function activeAfterFocus(){
		userfield1.value = "Od 6 do 12 znaków";
	}
	userfield1.onblur = function activeAfterBlur(){
		userfield1.value = "";
	}


