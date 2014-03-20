var SAIL = document.getElementById("SAIL"),

TWENTY = document.getElementById("TWENTY"),

COUNTSAIL = 0,

sync = false,

SYNCSAIL = 0,

HOWSAIL = document.getElementById("COUNTSAIL"),

ACHIVES = { '10': 'BACKGROUND.CHANGE("ocean.jpg"); ACHIVE.MENT(" SAIL SO HARD");',
			'20': 'TWENTY = new Audio("fullsail.mp3"); TWENTY.play(); ACHIVE.MENT(" FULLSAIL AHEAD"); sync = true;BACKGROUND.CHANGE(" ");',
			'30': 'TWENTY.pause(); ACHIVE.MENT(" WOW SUCH SAIL");',
			'50': 'ACHIVE.MENT(" YOU ARE STILL SAIL?");',
			'80': 'ACHIVE.MENT(" BLAME IT ON MY ADD"); BACKGROUND.CHANGE("boat.jpg");',
			'90': 'BACKGROUND.CHANGE(" ");',
			'99': 'ACHIVE.MENT(" I GOT 99 SAILS");',
			'100': 'ACHIVE.MENT(" SAIL SAIL SAIL SAIL SAIL SAIL SAIL SAIL SAIL SAIL SAIL SAIL SAIL SAIL SAIL SAIL");',
			'150': 'ACHIVE.MENT(" APPLE, CAUSE WHY NOT?"); BACKGROUND.CHANGE("http://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg");',
			'160': 'BACKGROUND.CHANGE(" ");',
			'200': 'ACHIVE.MENT(" WOW");',
			'205': 'ACHIVE.MENT(" SUCH CLICK);',
			'210': 'ACHIVE.MENT(" MUCH SAIL");',
			'300': 'ACHIVE.MENT(" YOU REALLY LIKE SAILS, DONTCHA?");',
			'420': 'ACHIVE.MENT(" Snoop Dogg...Lion? Zilla?");BACKGROUND.CHANGE("snoop.gif");',
			'430': 'BACKGROUND.CHANGE(" ");',
			'1000': 'BACKGROUND.SWITCH(true); ACHIVE.MENT(" SUUUUUUUUUPER CHHHHHHIIIIIIIIIIVVVVEEEEEEEEEEEEEE v3!"); ACHIVE.SUPER(true);',
			'NaN': 'ACHIVE.MENT(" NaNNaNNaNNaNNaN");'
},

CONSAIL = { //LETS RENAME console.log SHALL WE?
	LOG: function(stuff){
		console.log(stuff);
	},
	DEV: function(){
		ACHIVE.MENT(" A WINNER IS YOU");
		COUNTSAIL = 99999999;
		SAILING.AUDIO();
		TWENTY = new Audio("fullsail.mp3"); 
		document.getElementById("LAWLAWLAWL").innerHTML = '<button id="GOSAIL" onclick="CONSAIL.WIN()">PLAYING ></button>';
		TWENTY.play();
	},
	WIN: function(){
		if(!TWENTY.paused){
			TWENTY.pause();
			document.getElementById("GOSAIL").textContent = "PAUSED =";
		} else if (TWENTY.paused){
			TWENTY.play();
			document.getElementById("GOSAIL").textContent = "PLAYING >";
		}
	}
},

SAILING = {
		AUDIO: function(){
		SAIL = new Audio("sail.mp3");
		SAIL.play();
		COUNTSAIL ++;
		HOWSAIL.textContent = COUNTSAIL;
		if (ACHIVES[COUNTSAIL]){
			eval(ACHIVES[COUNTSAIL]);
		}
		if (COUNTSAIL == Math.floor(Math.random() * (200 - 50)) + 50){
			ACHIVE.SUPER(true);
			ACHIVE.MENT(" SUUUUUUUUUPER CHHHHHHIIIIIIIIIIVVVVEEEEEEEEEEEEEE v2!");
		}
		if (sync){
			var current = TWENTY.currentTime;
			if (current > 81 && current < 83 || current > 85 && current < 87 || current > 89 && current < 91 || current > 93 && current < 95 || current > 97 && current < 99){
				SYNCSAIL += 1;
			}
			if (SYNCSAIL == 3){
				ACHIVE.SUPER(true);
				ACHIVE.MENT(" SUUUUUUUUUPER CHHHHHHIIIIIIIIIIVVVVEEEEEEEEEEEEEE");
				sync = false;
			}
		}
	}
},

BACKGROUND = {
	CHANGE: function(file){
		document.body.style.background = '#fff url('+file+')';
	},
	SWITCH: function(STATE){//deprecated
		if (STATE) {
			document.getElementById("SAIL").classList.add('SAILDOWN');
			document.getElementById("SUPER").classList.add('SUPERDOWN');
		} else {
			document.getElementById("SAIL").classList.remove('SAILDOWN');
			document.getElementById("SUPER").classList.remove('SUPERDOWN');
		}
	}
},

ACHIVE = {
	MENT: function(GET){
		function HIDE(){
			document.getElementById("ACHIVE").classList.remove('GET');
		}
		document.getElementById("CHIVE").textContent = GET;
		document.getElementById("ACHIVE").classList.add('GET');
		setTimeout(HIDE, 1500);
	},
	SUPER: function(STATE) {
		if (STATE) {
			document.getElementById("SAIL").classList.add('SAILDOWN');
			document.getElementById("SUPER").classList.add('SUPERDOWN');
			
			function bounce(ryanno){
				var sailtop = Math.floor(Math.random() * (document.body.clientHeight - 200));
				var sailleft = Math.floor(Math.random() * (document.body.clientWidth - 200));
				var test = document.getElementById(ryanno);
				test.style["top"] = sailtop;
				test.style["left"] = sailleft;
			}
			var i = 0;
			var intervals = {};
			while(i < 10){
				bounce("test"+i);
				var delay = 1000 + i;
				setInterval(bounce, delay,"test"+i);
				i++
			}
		} else {
			document.getElementById("SAIL").classList.remove('SAILDOWN');
			document.getElementById("SUPER").classList.remove('SUPERDOWN');
			var i = 0
			var interval = setInterval(";");
			while(i < interval){
				clearInterval(i)
				i++
			}
		}
	},
	SNOOP: function(STATE){
		if (STATE){

		} else{
			
		}
	}
};