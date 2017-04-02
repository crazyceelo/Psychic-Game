// array of letters.
var letters = ["a","b","c","d","e","f","g","h","i","j","h","i","j",
                "k","l","m","n","o","p","q","r","s","t","u","v", "w", "y", "z"];

// finds and sets one letter for the new challenge.
var findLetter = Math.floor(Math.random()*letters.length);
var setChallenge = letters[findLetter];

console.log(setChallenge);

// set of initial variables.
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = "";




