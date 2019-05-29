"use strict";

var colors = require('colors');
const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = "";
let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

//generates game bord for terminal game
function printBoard() {
  
}
//generates a random code to be solved for
function generateSolution() {
  if (solution == ""){
    for (let i = 0; i < 4; i++) {
      const randomIndex = getRandomInt(0, letters.length);
      solution += letters[randomIndex];
    }
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// this function makes sure it letters a-h only but allows caps
function lettersOnly(input){
  var regEx = /^[a-h]+$/gi;
  if (input.match(regEx))
  return true
}

// this function makes sure you put in 4 letters
function atLeast4(input){
  if (input.length === 4){
  return true}
}

const generateHint = (guess) => {
  // My code here
  let correctLetterLocations = 0;
  let correctLetters = 0;
  let solutionArray = solution.split("");
  let guessArray = guess.split("");
  // search letter same position
  guessArray.forEach((item, index) => {
    if (item === solutionArray[index]) {
      correctLetterLocations += 1;
      solutionArray[index] = null;
      guessArray[index] = "";
    }
  });
  guessArray.forEach((item, index) => {
    if (item !== "") {
      let targetIndex = solutionArray.indexOf(item);
      if (targetIndex > -1) {
        correctLetters += 1;
        solutionArray[targetIndex] = null;
        guessArray[index] = "";
      }
    }
  });
  console.log(colors.red (correctLetterLocations) + " - " + colors.white (correctLetters));
  // return line is not needed since I used colored outputs
  // return `${correctLetterLocations} - ${correctLetters}`;
}

function mastermind(guess) {
  checkForWin(guess, solution);
  let hint = generateHint(guess);
  let hintGuess = `${hint} - ${guess}`;
  board.push(hintGuess);
}

function checkForWin(guess) {
  if (guess === solution){
    console.log("You guessed it!");
    // resets the board when guessed correctly
    board = [];
    solution = "";
  } else if (board.length == 9){
    console.log("You lose, the correct answer was " + colors.red (solution) + " ,please play again!");
    // resets the board if not guesses correctly after 10 moves
    board = [];
    solution = "";
    } else {
    console.log("Guess again...");
    }
}

function getPrompt() {
  rl.question("Your Guess: ", guess => {
    if ((lettersOnly(guess)) && (atLeast4(guess))){
      generateSolution();
      mastermind(guess);
      getPrompt();
    } else {
      console.log("Please chose 4 letters from a-h!");
      getPrompt();
    }
  });
}
console.log('Mastermind the game!'.america);

// Tests

if (typeof describe === "function") {
  solution = "abcd";
  describe("#mastermind()", () => {
    it("should register a guess and generate hints", () => {
      mastermind("aabb");
      assert.equal(board.length, 1);
    });
    it("should be able to detect a win", () => {
      assert.equal(mastermind(solution));
    });
  });

  describe("#generateHint()", () => {
    it("should generate hints", () => {
      assert.equal(generateHint("abdc"));
    });
    it("should generate hints if solution has duplicates", () => {
      assert.equal(generateHint("aabb"));
    });
  });
} else {
  generateSolution();
  getPrompt();
};
