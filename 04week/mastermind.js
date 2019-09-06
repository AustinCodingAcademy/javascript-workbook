"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = "abcd";
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
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(uInput) {
  let guessArray = uInput.split("");
  let solutionArray = solution.split("");
  let correctLetterLocations = 0;
  let correctLetters = 0;

  for (let i = 0; i < solutionArray.length; i++) {
    if (solutionArray[i] === guessArray[i]) {
      console.log(solutionArray[i], guessArray[i]);
      correctLetterLocations = +1;
      console.log('hint correctLocation" ', correctLetterLocations);
      solutionArray[i] = null;
      // console.log(solutionArray)
    }
  }

  for (let i = 0; i < solutionArray.length; i++) {
    let targetIndex = solutionArray.indexOf(guessArray[i]);
    if (targetIndex > -1) {
      correctLetters = +1;
      solutionArray[i] = null;
    }
  }

  console.log(
    `You have this many correct letters in the wrong location: ${correctLetters}. You have this many correct letters in the correct location: ${correctLetterLocations}`
  );

  console.log("hint - guessArray: ", guessArray);
  console.log("hint - solutionArray: ", solutionArray);
}

function mastermind(guess) {
  solution = "abcd"; // Comment this out to generate a random solution
  // your code her
  const uInput = guess.trim().toLowerCase();

  // generateSolution();
  generateHint(uInput);

  if (solution === guess) {
    console.log("You guessed it!");
    return `You guessed it!`;
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
