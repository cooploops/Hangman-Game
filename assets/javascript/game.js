//wait to run game script till everything is loaded and in place on screen
window.onload = function () {
// create object to store different properties I need to display
var game = {
	lettGuessed:[],
	counter: 0,
	string:"Hello"
};
// record key pressed
	document.onkeypress = function(event) {
		var press = event.key;
		if (game.lettGuessed.includes(press)) {
			alert("you've already guessed that")
		} else {
			game.lettGuessed.push(press);
			game.counter++;
			console.log(game.lettGuessed);
		};	
		// display letters guessed within HTML 
		document.querySelector("#lettersGuessed").innerHTML = game.lettGuessed;	
	};
};