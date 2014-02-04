var SAIL = document.getElementById("SAIL"),

COUNTSAIL = 0,

HOWSAIL = document.getElementById("COUNTSAIL"),

CONSAIL = { //LETS RENAME console.log SHALL WE?
	LOG: function(stuff){
		console.log(stuff);
	}
},

SAILING = {
		AUDIO: function(){
		SAIL = new Audio("sail.mp3");
		SAIL.play();
		COUNTSAIL ++;
		HOWSAIL.textContent = COUNTSAIL;
		CONSAIL.LOG(COUNTSAIL);
	}
},

BACKGROUND = {
	CHANGE: function(file){
		//css.setbackground(file);
	}
};

if (COUNTSAIL = 10) {
	BACKGROUND.CHANGE("ocean.jpg");
}

