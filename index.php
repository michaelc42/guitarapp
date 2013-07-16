<!DOCTYPE html>
<html>
<head>
<title>Michael Casey - Web Portfolio </title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- Bootstrap -->
<link href="../css/bootstrap.min.css" rel="stylesheet" media="screen">
<link href="guitarapp.css" rel="stylesheet" media="screen">

</head>

<body>
<div class="container">
	
    <div class="navbar">
		<div class="navbar-inner">
			<a class="brand" href="../index.html">Michael Casey</a>
			<ul class="nav">
				<li><a href="../index.html">Home</a></li>
				<li><a href="#bio">Bio</a></li>
				<li><a href="#skills">Skills</a></li>
				<li><a href="#projects">Projects</a></li>
			</ul>
		</div>
    </div>
    
    <div class="row">
		
    <div class="span5" id="guitarapp">
		<div class="row"><span id="guitarapptitle" class="offset1 span12">Ear Trainer /w Chords!</span></div>
		<div class="row">	
			<div class="span12"><span id="indicator">&#8226;</span></div>
		</div>
		<div class="row">	
			<div class="span12"><span class="offset1" id="score">Score: 0</span></div>
		</div>
		<div class="row">
			<div class="span12">
				<p>Options</p>
					<div id="answers">
					</div>
			</div>
		</div>
		
		<div id="playButtons" class="row">
			<div class="span12">
		
				<audio id="guitarappaudio" src="" loop>
					Your browser does not support the audio element.
				</audio>
				<button id="play">Get Chord</button>
				<button id="skip">Skip</button>
				<button id="stop">Stop</button>
				<!--
				<select id="soundoptions">
					<option value="" selected="selected"></option>
					<option value="dylan">Goin' To Acapulco</option>
					<option value="dylan2">All I Really Want To Do</option>
				</select> 
				-->
			</div>
		</div>
    </div><!-- close guitarapp div -->
    </div><!-- close row div -->
    
    <div class="row" id="instructions">
		<div class="span12">
		<label>Instructions:</label>
		<ul>
			<li>Press Get Chord!</li>
			<li>Guess Chord!</li>
			<li>Get a high score!</li>
		</ul>
		</div>
    </div>
    
</div><!--Close container class-->


<script src="assets/scripts/guitarapp.js"></script>
<script src="http://code.jquery.com/jquery.js"></script>
<script src="../js/bootstrap.min.js"></script>

</body>
</html>

