//Adding variables to store our data

//The first variable — randomNumber — is assigned a random number between 1 and 100, calculated using a mathematical algorithm.
let randomNumber = Math.floor(Math.random() * 100) + 1;

/*The first three constants are each made to store a reference to the results paragraphs in our HTML,
and are used to insert values into the paragraphs later on in the code 
(note how they are inside a <div> element, which is itself used to select all three later on for resetting,
 when we restart the game): */
const guesses = document.querySelector (".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector (".lowOrHigh");

//The next two constants store references to the form text input and submit button and are used to control submitting the guess later on.
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

//Our final two variables store a guess count of 1 (used to keep track of how many guesses the player has had), and a reference to a reset button that doesn't exist yet (but will later).
let guessCount = 1;
let resetButton;

