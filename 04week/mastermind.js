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

    if (board.length === 10) {
      console.log(`You ran out of turns! The solution was ${solution}`);
    } else {
      console.log(`Guess again.`);
    }
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
  // Create Arrays of Guesses and Solution
  let guessArray = uInput.split("");
  let solutionArray = solution.split("");

  // Correct Guess Counters
  let correctLetterLocations = 0;
  let correctLetters = 0;

  // Compare Guess / Solution Array - Count Correct Letter Locations & Declare this location index Null.
  for (let i = 0; i < solutionArray.length; i++) {
    if (solutionArray[i] === guessArray[i]) {
      // console.log(solutionArray[i], guessArray[i]);
      correctLetterLocations += 1;
      // console.log('hint correctLocation" ', correctLetterLocations);
      solutionArray[i] = null;
      // console.log(solutionArray)
    }
  }
  // Compare Guess / Solution Array - Count Correct Letter & Declare this location index Null.
  for (let i = 0; i < solutionArray.length; i++) {
    let targetIndex = solutionArray.indexOf(guessArray[i]);
    if (targetIndex > -1) {
      correctLetters += 1;
      solutionArray[targetIndex] = null;
    }
    // console.log(correctLetters);
  }
  return `${correctLetterLocations}-${correctLetters}`;

  // console.log("hint - guessArray: ", guessArray);
  // console.log("hint - solutionArray: ", solutionArray);
}

function mastermind(guess) {
  // Board Solution
  solution = "abcd"; // Comment this out to generate a random solution
  // generateSolution();

  // Simple Sanitize Input
  const uInput = guess.trim().toLowerCase();

  // Run Generate Hint. Capture and Print Results to Board
  let hint = generateHint(uInput);
  board.push(`Attempt 1: [${guess}] ${hint}`);

  // Win Logic
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
