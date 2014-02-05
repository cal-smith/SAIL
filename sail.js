var SAIL = document.getElementById("SAIL"),

TWENTY = document.getElementById("TWENTY"),

COUNTSAIL = 0,

HOWSAIL = document.getElementById("COUNTSAIL"),

CONSAIL = { //LETS RENAME console.log SHALL WE?
	LOG: function(stuff){
		console.log(stuff);
	}
},

ACHIVES = { '10': 'BACKGROUND.CHANGE("ocean.jpg"); ACHIVE.MENT(" SAIL SO HARD");',
			'20': 'TWENTY = new Audio("fullsail.mp3"); TWENTY.play(); ACHIVE.MENT(" FULLSAIL AHEAD");',
			'30': 'TWENTY.pause(); ACHIVE.MENT(" WOW SUCH SAIL"); BACKGROUND.CHANGE(" ");',
			'50': 'ACHIVE.MENT(" YOU ARE STILL SAIL?");',
			'80': 'ACHIVE.MENT(" BLAME IT ON MY ADD"); BACKGROUND.CHANGE("boat.jpg");',
			'90': 'BACKGROUND.CHANGE(" ");',
			'99': 'ACHIVE.MENT(" I GOT 99 SAILS");',
			'100': 'ACHIVE.MENT(" SAIL SAIL SAIL SAIL SAIL SAIL SAIL SAIL SAIL SAIL SAIL SAIL SAIL SAIL SAIL SAIL");'
			'300': 'ACHIVE.MENT("YOU REALLY LIKE SAILS, DONTCHA?");'
},

SAILING = {
		AUDIO: function(){
		SAIL = new Audio("sail.mp3");
		SAIL.play();
		COUNTSAIL ++;
		HOWSAIL.textContent = COUNTSAIL;
		CONSAIL.LOG(COUNTSAIL);
		if (ACHIVES[COUNTSAIL]){
			eval(ACHIVES[COUNTSAIL]);
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

