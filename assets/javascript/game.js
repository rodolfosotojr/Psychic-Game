//Create an array that list all letters
var letterChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n","o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var randomChoice = letterChoices[Math.floor(Math.random() * letterChoices.length)];

console.log(randomChoice);
//Create variables for content being displayed

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guess = [];

//Create variables that hold references to the HTML

var winsText = document.getElementById("wins-text");
var lossesText = document. getElementById("losses-text");
var yourGuessesLeft = document.getElementById("guessesLeft-text");
var yourGuessesText = document. getElementById("yourGuesses-text");

//Begin game with onkeyup 

document.onkeyup = function(event) {
    var userChoice = event.key;
    
    if(guessesLeft < 1) {
        losses++;
        guessesLeft = 9;
        guess = [];
    }

    else if(userChoice === randomChoice) {
    wins++;
    guessesLeft = 9;
    guess = [];
    } 

    else {
    guessesLeft--;
    guess.push(userChoice);
    }

    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    yourGuessesText.textContent = "Your Guess:" + guess ;
    yourGuessesLeft.textContent = "Guesses Left: " + guessesLeft;

    console.log(yourGuessesText);
}



