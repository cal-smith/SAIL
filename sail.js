var SAIL = document.getElementById("SAIL"),
COUNTSAIL = 0,
HOWSAIL = document.getElementById("COUNTSAIL");
function SAILING(){
	SAIL = new Audio("sail.mp3");
	SAIL.play();
	COUNTSAIL ++;
	HOWSAIL.textContent = COUNTSAIL;
}