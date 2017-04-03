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
var userGuess = "";
var guessesLeft = 10;
var guessesSoFar = userGuess;

// records the key press of user into lowercase.
document.onkeyup = function()
{
  userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  if (guessesLeft < 2) 
  {
    win = false;
    alert("you lose");
  }

  else if (setChallenge == userGuess) 
  {
    win = true;
    alert("you win");
  }

  else if (userGuess != setChallenge) 
  {
    guessesLeft = guessesLeft - 1;
  }
}

// holds all text we want displayed once user starts pressing keys
var html = "<h1>The Psychic Game</h1>" +
"<p>wins: " + wins + "</p>" + 
"<p>losses: " + losses + "</p>" +
"<p>Guesses left: " + guessesLeft + "</p>" +
"<p>Your guesses so far: " + guessesSoFar + "</p>";


document.querySelector("#game").innerHTML = html;




