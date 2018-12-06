"use strict";

const colors = require("colors");
const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = "";
let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
let winMessage = "You guessed it!";
let outOfTurns = "You ran out of turns! The solution was ";

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

function generateHint(guess, solution) {
  //split guess and solution letters into arrays
  // if (solutionArray.length <= 0) {
  //   solutionArray = solution.split("");
  // }
  let solutionArray = solution.split("");
  let guessArray = guess.split("");

  let correctLetterLocations = 0;

  //loop though array and check if same letter exists at same index
  for (let i = 0; i < solutionArray.length; i++) {
    let guessLetter = guessArray[i];
    let solutionLetter = solutionArray[i];
    if (guessLetter === solutionLetter) {
      console.log("1 correct letter in correct space");
      correctLetterLocations++;
      solutionArray[i] = null;
    } else {
    }
  }
  let correctLetters = 0;
  for (let j = 0; j < solutionArray.length; j++) {
    let letter = solutionArray[j];
    let targetIndex = guessArray.indexOf(letter);
    if (targetIndex > -1) {
      console.log("1 correct letter but, not in correct space");
      correctLetters++;
      solutionArray[j] = null;
    }
  }

  //Return hints
  return (
    colors.red(correctLetterLocations) + "-" + colors.white(correctLetters)
  );
}

function isValid(guess) {
  if (guess.length === 4) {
    return true;
  } else {
    return false;
  }
}

function mastermind(guess) {
  if (isValid(guess)) {
    //solution = "abcd"; // Comment this out to generate a random solution
    if (guess === solution) {
      console.log(winMessage);
      return winMessage;
    } else {
      let hint = generateHint(guess, solution);

      let guessAndHint = guess + " " + hint;
      board.push(guessAndHint);
    }
    // If the board length equals 10, return 'You ran out of turns! The solution was ' and the solution. Otherwise, return 'Guess again.'.
    if (board.length === 10) {
      console.log(outOfTurns + solution);
      return outOfTurns + solution;
    } else {
      console.log("Guess again.");
    }
  } else {
    console.log(colors.red("You must enter a valid guess(Four letters only)!"));
    return false;
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
      assert.equal(
        generateHint("abdc", "abcd"),
        colors.red("2") + "-" + colors.white("2")
      );
    });
    it("should generate hints if solution has duplicates", () => {
      assert.equal(
        generateHint("aabb", "abcd"),
        colors.red("1") + "-" + colors.white("1")
      );
    });
  });
} else {
  generateSolution();
  getPrompt();
}
