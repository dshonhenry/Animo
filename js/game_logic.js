function startGame(){
	var divCount = 2; //Set this to the amount of divs there are (levels)
	var Users = getUsers();
	for(i = 0; i<3; i++)
		document.getElementById(`Name${i}`).innerHTML = Users[i].Name;
	autoplay(); // start music
	hideAll(divCount); //Clear all from screen
	var myVar;
	myVar = setTimeout(showPage, 0000);	//Set delay to show loader about 3000 = 3secs
	
}

//Returns an array of users in json
function getUsers(){
	//Http Request HERE
	//=============================================================
	url = `https://test-project-3d104.firebaseio.com/Users.json`;
	var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false ); 
	xmlHttp.send( null );
	//--------------------------------------------------------------	

	console.log(JSON.parse(xmlHttp.responseText));
	return JSON.parse (xmlHttp.responseText);
}

//hides everything in game area
function hideAll(divCount){
	//hides start and home page
	document.getElementById("home_page").style.display = "none";	
	
	//Hides all other levels using increment
	for (i = 1; i <= divCount; i++) {
		hide(i);
	}
}

//function hides based on element id
function hide(id){
	document.getElementById(id).style.display = "none";
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("start_page").style.display = "block";
}

	
function continueGame(){
	//If music isnt playing already, play music
	var audio = document.getElementById("background_music");
	audio.play();
	
	document.getElementById("start_page").style.display = "none";
	document.getElementById("home_page").style.display = "block";	
}

//Functions to load before HTML loads
window.onload = function() {
	
}