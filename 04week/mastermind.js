"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = "";
let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
  console.log(solution);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(solution, guess) {
  // your code here

  let solutionArray = solution.split("");
  let guessArray = guess.split("");

  let correctLetterLocations = 0;

  for (let i = 0; i < solutionArray.length; i++) {
    if (solutionArray[i] === guessArray[i]) {
      console.log("Congrats! You guessed it!");
      correctLetterLocations++;
      solutionArray[i] = null;
    }
  }

  let correctLetters = 0;
  for (let j = 0; j < solutionArray.length; j++) {
    let targetIndex = solutionArray.indexOf(guessArray[j]);
    if (targetIndex > -1) {
      correctLetters++;
      solutionArray[targetIndex] = null;
    } else {
      console.log("it is null");
    }
  }
  let retString = correctLetterLocations + "-" + correctLetters;
  return retString;
}

function mastermind(guess) {
  //solution = 'abcd'; // Comment this out to generate a random solution
  // your code here
  let win = "You guessed it!";
  let outOfTurns = "You ran out of turns! The solution was " + solution;
  let hint;
  if (guess === solution) return win;
  else {
    hint = generateHint(solution, guess);
    let toBePushed = guess + hint;
    board.push(toBePushed);
    if (board.length >= 10) {
      console.log(outOfTurns);
      return outOfTurns;
    } else {
      console.log("Guess again.");
      return hint;
    }
  }
}

function getPrompt() {
  rl.question("guess: ", guess => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

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
      assert.equal(generateHint("abdc"), "2-2");
    });
    it("should generate hints if solution has duplicates", () => {
      assert.equal(generateHint("aabb"), "1-1");
    });
  });
} else {
  generateSolution();
  getPrompt();
}
