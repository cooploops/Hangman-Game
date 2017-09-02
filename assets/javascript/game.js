//wait to run game script till everything is loaded and in place on screen
window.onload = function() {
    // create audio files
    var canDoAudio = document.createElement("audio");
    canDoAudio.setAttribute("src","assets/sounds/canDo.mp3")

    var meeSeeksAudio = document.createElement("audio");
    meeSeeksAudio.setAttribute("src","assets/sounds/mr_meeseeks.mp3")

    meeSeeksAudio.play();
    // create object to store different properties and functions I need
    var game = {
        state: true,
        lettGuessed: [],
        correctGuesses: 0,
        guessesLeft: 10,
        wordBank: ["PickleRick", "MrPoopyButtHole", "Morty", "Summer", "Beth", "BirdPerson","MeeSeeks","snowball","Jerry","BlitznChitz"],
        currentWord: "",
        press: "",
        wins: 0,

        // Randomly pick word from wordBank and store it in currentWord property of game object; remove this word from the array after so as to not repeat
        wordPicked: function() {
            var index = Math.floor(Math.random() * this.wordBank.length);
            this.currentWord = this.wordBank[index].toLowerCase();
            console.log(this.currentWord);
            this.wordBank.splice(index,1);
        },
        // talley up correct and incorrect guesses to display guesses left; condition for loss stated here.
        tallyGuesses: function () {
            if(this.state === true && this.guessesLeft > 0){
                // count correct guesses
                if(this.currentWord.indexOf(this.press) !== -1) {
                    this.correctGuesses++;
                    document.querySelector("#guessesLeft").innerHTML = this.guessesLeft;
                } else {
                    this.guessesLeft--;
                    document.querySelector("#guessesLeft").innerHTML = this.guessesLeft;
                }
            } else if (this.state === true && this.guessesLeft <= 0){
                alert("you lose, try again");
                this.state = false;
                this.reset();
            }
        },
        // generate word dynamically through looping and also display condition for winning.
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
                this.wins++;
                alert("you win!");
                this.reset();
            }
            console.log(wordSpace);
            document.querySelector("#currWord").innerHTML = wordSpace;
            document.querySelector("#wins").innerHTML = this.wins;
        },
        // reset game stats so that player can play again.
        reset: function() {
            this.state = true;
            this.guessesLeft = 10;
            this.lettGuessed = [];
            this.currentWord = "";
            this.press = "";
            this.correctGuesses = 0;
            this.wordPicked();
            this.wordRender();
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
    };

    // click the meeseeks box to execute a reset to play another round and play audio
    $(".meBox").click(function(){
        canDoAudio.play();
        game.reset();
    })
}

