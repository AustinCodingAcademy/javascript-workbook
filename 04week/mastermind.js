"use strict";

// const solution = 'abcd';
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
  console.log(board)
  // for (let i = 0; i < board.length; i++) {
  //   console.log(board[i]);
  // }
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

const generateHint = (guess) => {
  // your code here
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
        // guessArray[index] = "";
      }
    }
  });
  // console.log(correctLetterLocations + '-' + correctLetters)
  return `${correctLetterLocations} - ${correctLetters}`;
}

function mastermind(guess) {
  checkForWin(guess, solution);
  let hint = generateHint(guess);
  let hintGuess = `${hint} - ${guess}`;
  board.push(hintGuess);
}

function checkForWin(guess) {
  if (guess === solution){
    console.log("You guessed it!")
    return "You guessed it!";
  }
    else if (board.length == 9){
    console.log("You Lose, the correct answer was " + solution)
  } else {
    console.log("Guess again")
  }
}

function getPrompt() {
  rl.question("guess: ", guess => {
    generateSolution();
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// getPrompt();
// Tests
// check for win or not
//return value, increase hint to board
if (typeof describe === "function") {
  solution = "abcd";
  describe("#mastermind()", () => {
    it("should register a guess and generate hints", () => {
      mastermind("aabb");
      assert.equal(board.length, 1);
    });
    it("should be able to detect a win", () => {
      assert.equal(mastermind(solution), "You guessed it!");
    });
  });

  describe("#generateHint()", () => {
    it("should generate hints", () => {
      assert.equal(generateHint("abdc"), "2 - 2");
    });
    it("should generate hints if solution has duplicates", () => {
      assert.equal(generateHint("aabb"), "1 - 1");
    });
  });
} else {
  generateSolution();
  getPrompt();
};
