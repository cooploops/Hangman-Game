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
        },

        wordRender: function() {
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
    };

    /*Calling Functions and event listeners below this line*/

    // call this function to generate random word
    game.wordPicked();
    // call this function to generate empty spaces for the word selected
    game.wordRender();

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
        // call this function again after onkeypress to see if keys match the word
        game.wordRender();
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