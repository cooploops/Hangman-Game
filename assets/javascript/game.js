//wait to run game script till everything is loaded and in place on screen
window.onload = function() {
    // create object to store different properties and functions I need
    var game = {
        lettGuessed: [],
        counter: 0,
        wordBank: ["PickleRick", "MrPoopyButtHole", "Morty", "Summer", "Beth", "BirdPerson"],
        currentWord: "",
        press: "",
        // Randomly pick word from wordBank and store it in currentWord property of game object
        wordPicked: function() {
            var index = Math.floor(Math.random() * this.wordBank.length);
            this.currentWord = this.wordBank[index].toLowerCase();
            console.log(this.currentWord);
            return this.currentWord;
        }
    };

    /*Calling Functions and event listeners below this line*/


    game.wordPicked();
    check();
    // add check function to object
    function check() {
        var wordSpace = "";
        for (i = 0; i < game.currentWord.length; i++) {
            if (game.lettGuessed.indexOf(game.currentWord[i]) !== -1) {
                wordSpace += game.currentWord[i];
            } else {
                wordSpace += " _";
            }
        }
        console.log(wordSpace);
        document.querySelector("#currWord").innerHTML = wordSpace;
    }

    document.onkeypress = function(event) {
        game.press = event.key;
        var chosenLetter = game.press;
        if (game.lettGuessed.includes(chosenLetter)) {
            alert("you've already guessed that")
        } else {
            game.lettGuessed.push(chosenLetter);
            game.counter++;
        };
        // display letters guessed within HTML 
        document.querySelector("#lettersGuessed").innerHTML = game.lettGuessed;
        console.log(game.press);
        check();
    }


}


// var wordSpace = "";
//     for (i = 0; i < game.currentWord.length; i++) {
//         if (game.press.indexOf(game.currentWord[i]) !== -1) {
//             wordSpace = game.currentWord[i];
//         } else {
//             wordSpace = wordSpace + " _";
//         }
//     }
//     document.querySelector("#currWord").innerHTML = wordSpace;


// record key pressed and store in property press of game object
// document.onkeypress = function(event) {
// 	game.press = event.key;