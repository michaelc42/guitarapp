window.onload = function() {
	var guitarappaudio = document.getElementById('guitarappaudio');
	//var chords = ["dylan", "dylan2"];
	var chords = ["C", "Dm", "Em", "F", "G", "Am"];
	var guess;
	var score = 0;
	
	function populateChordButtons() {
		for(var i=0; i<chords.length; i++) {
			var elem = document.createElement("button");
			elem.setAttribute("class", "guess");
			elem.setAttribute("value", chords[i]);
			elem.innerHTML = chords[i];
			
			document.getElementById("answers").appendChild(elem);
		}
	}
	
	function setGuessEvents() {
		var guesses = document.getElementsByClassName("guess");
		var guessTimeout;
				
		for(var i=0; i<guesses.length; i++) {
			guesses[i].onclick = function() {
				//alert(this.value);
				var indicator = document.getElementById("indicator");
				if(this.value==chord && gameInPlay){
					clearTimeout(guessTimeout);
					//correct so set indicator to green
					indicator.style.color = "#9ed836";
					changeScore(100);
					getNextChord();
					guessTimeout = setTimeout(function() {
						indicator.style.color = "#d4d4d4";
					}, 4000);
				} else if(this.value!=chord && gameInPlay) {
					clearTimeout(guessTimeout);
					//set indicator to red
					indicator.style.color = "red";
					changeScore(-20);
					guessTimeout = setTimeout(function() {
						indicator.style.color = "#d4d4d4";
					}, 4000);
				}
			};
		}
	}
	
	function getRandomChord() {
		/*
		var chords = ["C", "Dm", "Em", "F", "G", "Am"];
		*/
		
		var chord = chords[ Math.floor((Math.random()*chords.length)) ];
		
		return chord;
	}
	
	function changeScore(points) {
		score += points;
		if(score<0){
			score = 0;
		}
		
		document.getElementById("score").innerHTML = "Score: "+score;
	}
	
	function nextChord() {
		setChord(getRandomChord());
	}
	
	function getNextChord() {
		chord = getRandomChord();
		
		setChord(chord);
		guitarappaudio.play();
		gameInPlay = true;
	}
	
	function setChord(chord) {
		guitarappaudio.src = "assets/sounds/"+chord+".ogg";
	}
	
	var chord;
	var gameInPlay = false;
	
	
	populateChordButtons();
	setGuessEvents();
	
	document.getElementById('play').onclick = function() {
		changeScore(0);
		getNextChord();
	};
	
	document.getElementById("skip").onclick = function() {
		if(gameInPlay) {
			getNextChord();
		}
	}
	
	document.getElementById('stop').onclick = function() {
		guitarappaudio.pause();
	};
};
