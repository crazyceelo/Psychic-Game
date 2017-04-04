// array of letters.
var letters = ["a","b","c","d","e","f","g","h","i","j","h","i","j",
                "k","l","m","n","o","p","q","r","s","t","u","v", "w", "y", "z"];

// finds and sets one letter from the array and sets the new challenge.

var findLetter = Math.floor(Math.random()*letters.length);
var setChallenge = letters[findLetter];


console.log(setChallenge);

// set of initial variables.
var win = false;
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = [];

for (var i = 0; i < guessesLeft; i++)
{
  document.onkeyup = function()
  { 
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var setNewChallenge;

    if (guessesLeft == 0) 
    {
    win = false;
    losses++;
    alert("you lose");
    guessesLeft = 10
    guessesSoFar = [];
    }

    else if (setChallenge == userGuess) 
    {
    win = true;
    wins++;
    alert("you win");
    guessesLeft = 10
    guessesSoFar = [];
    }

    else
    {
    guessesLeft = guessesLeft - 1;
    guessesSoFar.push(userGuess);
    guessesSoFar.join(",");
    }

    var html = "<h1>The Psychic Game</h1>" +
    "<p>wins: " + wins + "</p>" + 
    "<p>losses: " + losses + "</p>" +
    "<p>Guesses left: " + guessesLeft + "</p>" +
    "<p>Your guesses so far: " + guessesSoFar + "</p>";


    document.querySelector("#game").innerHTML = html;
  }
}





