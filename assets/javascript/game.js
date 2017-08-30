//wait to run game script till everything is loaded and in place on screen
window.onload = function() {
    // create object to store different properties and functions I need
    var game = {
        state: true,
        lettGuessed: [],
        correctGuesses: 0,
        guessesLeft: 10,
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

        tallyGuesses: function () {
            if(this.state && this.guessesLeft > 0){
                // count correct guesses
                if(this.currentWord.indexOf(this.press) !== -1) {
                    this.correctGuesses++;
                    document.querySelector("#guessesLeft").innerHTML = this.guessesLeft;
                } else {
                    this.guessesLeft--;
                    document.querySelector("#guessesLeft").innerHTML = this.guessesLeft;
                }
            } else if (this.state && this.guessesLeft === 0){
                alert("you lose, try again");
                this.state = false;
            }
        },

        wordRender: function() {
            var wordSpace = "";
            for (i = 0; i < this.currentWord.length; i++) {
                if (this.lettGuessed.indexOf(this.currentWord[i]) !== -1) {
                    wordSpace += this.currentWord[i];
                } else {
                    wordSpace += " _";
                }
            }
            if(wordSpace!==this.currentWord){
                this.state = true;
                this.tallyGuesses();
            } else if (wordSpace === this.currentWord) {
                this.state = false;
                alert("you win!");
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

    // wait for user to presss a key and push that letter to an array of guesses

    document.onkeypress = function(event) {
        game.press = event.key;
        var chosenLetter = game.press;
        if (game.lettGuessed.includes(chosenLetter)) {
            alert("you've already guessed that")
        } else {
            game.lettGuessed.push(chosenLetter);
        };
        // display letters guessed within HTML 
        document.querySelector("#lettersGuessed").innerHTML = game.lettGuessed;
        console.log(game.press);
        // see if keys match the word
        game.wordRender();
    }


}
