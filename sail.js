var SAIL = document.getElementById("SAIL"),

TWENTY = document.getElementById("TWENTY"),

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
		if (COUNTSAIL == 10) {
			BACKGROUND.CHANGE("ocean.jpg");
			ACHIVE.MENT(" SAIL SO HARD");
		}
		if (COUNTSAIL == 20){
			TWENTY = new Audio("fullsail.mp3");
			TWENTY.play();
			ACHIVE.MENT(" FULLSAIL AHEAD");
		}
		if (COUNTSAIL == 30){
			TWENTY.pause();
			ACHIVE.MENT(" WOW SUCH SAIL");
			BACKGROUND.CHANGE(" ");
		}
		if (COUNTSAIL == 50){
			ACHIVE.MENT(" YOU ARE STILL SAIL?");
		}
		if (COUNTSAIL == 100) {
			ACHIVE.MENT(" SAIL SAIL SAIL SAIL SAIL SAIL SAIL SAIL SAIL SAIL SAIL SAIL SAIL SAIL SAIL SAIL");
		}
	}
},

BACKGROUND = {
	CHANGE: function(file){
		document.body.style.background = '#fff url('+file+')';
	}
},

ACHIVE = {
	MENT: function(GET){
		function HIDE(){
			document.getElementById("ACHIVE").classList.add('HIDE');
		}
		document.getElementById("CHIVE").textContent = GET;
		document.getElementById("ACHIVE").classList.remove('HIDE');
		setTimeout(HIDE, 1500);
	} 
};

