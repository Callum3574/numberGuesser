"use strict";

//Intro to the game

let userName = prompt(`Please enter your name to play Number Guesser`);

let welcomeMessage = alert(
  `Welcome ${userName}! The aim of this game is to guess the correct number that the computer has generated! Good luck`
);

let userGuess = prompt(`${userName}, please enter your guess`);
let secretNumber = Math.floor(Math.random() * 10).toString();
let amountOfGuesses = 0;
let amountOfLives = 9;
let highScore = 1;

// when the while loop is true, it will continue itterating until false
while (userGuess != secretNumber) {
  amountOfGuesses = amountOfGuesses + 1;
  amountOfLives = amountOfLives - 1;

  // userGuess is reassigned with next userGuess

  // alerting either higher or lower depending on input

  let guessIs = "Higher";
  if (userGuess > secretNumber) {
    guessIs = `lower`;
  }
  userGuess = prompt(
    `incorrect, please try again. Guess: ${amountOfGuesses}. The number is ${guessIs}`
  );

  // alerting the user that the game is over
  if (amountOfLives == 0) {
    alert(`${userName}, you have 0 lives remaining, GAME OVER`);
    break;
  }
}

// alerting the user that they have won
if (userGuess == secretNumber) {
  alert(
    `congrautlations, it took you ${
      amountOfGuesses + 1
    } guesses to get the correct answer. You had ${amountOfLives} lives remaining, well done. Current Highscore: ${highScore}`
  );
}

if (amountOfGuesses < highScore) {
  highScore = amountOfGuesses;
  alert(`you have a new highscore! ${highScore} attempts. `);
}

let array = [1, 2, 3, 4, 5];

let newArray = array.slice(1);

console.log(newArray);
