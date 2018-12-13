//Create an array that list all letters
var letterChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n","o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var randomChoice = letterChoices[Math.floor(Math.random() * letterChoices.length)];

console.log(randomChoice);
//Create variables for content being displayed

var wins = 0;
var losses = 0;
var guessesLeft = 9;

//Create variables that hold references to the HTML

var winsText = document.getElementById("wins-text");
var lossesText = document. getElementById("losses-text");
var yourGuessesLeft = document.getElementById("yourGuesses-left");
var yourGuessesText = document. getElementById("yourGuesses-text");

document.onkeyup = function(event) {
    var userChoice = event.key;
    
    if(userChoice === randomChoice) {
    wins++;
    } 
    if(userChoice !== randomChoice) {
    guessesLeft--;
    }
    if(guessesLeft === 0){
    losses++;
    }

    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    yourGuessesLeft.textContent = "Guesses Left: " + guessesLeft;
    

    
}

