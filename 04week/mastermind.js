"use strict";

const assert = require("assert");
const readline = require("readline");
const colors = require("colors");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = "";
let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
let currentTurn = 0;

// custom strings
const win = "You guessed it!";
const guessAgain = "Guess again.";

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

function mastermind(guess) {
  // your code here
  let hint = "";
  currentTurn++;

  //   Spec 1 - Detect a correct solution
  // In mastermind(), if the guess you passed in equals the solution, return 'You guessed it!';
  if (guess === solution) return win;
  else hint = generateHint(solution, guess);

  // Spec 3 - Add guess and hint to the board
  // Define a var called hint that collects the returned value of generateHint(solution, guess). .push the guess and the hint (as a combined string) into the board.
  let boardState = currentTurn + ". " + guess + " " + hint;
  board.push(boardState);
}

// Spec 2 - Generate a hint
function generateHint(solution, guess) {
  // your code here
  // Spec 2.1 - Split up the solution and guess
  // In generateHint(), create variables solutionArray and guessArray that each split up passed in arguments, .splitting on ''(empty string).
  let solutionArray = solution.split("");
  let guessArray = guess.split("");

  // Spec 2.2 - Determine correct "letter-locations"
  // Create a variable correctLetterLocations that will record how many correct "letter-locations" were guessed.
  // For instance, a guess of aabc against a solution of deba would yield one correct "letter-location" (b).
  // Set correctLetterLocations equal to 0. In a for loop, iterate over the solutionArray,
  // comparing each index of solutionArray against the same index of guessArray. If the item matches, increment correctLetterLocations,
  // and set that index in solutionArray to null.
  let correctLetterLocations = 0;
  for (let i = 0; i < solutionArray.length; i++) {
    if (solutionArray[i] === guessArray[i]) {
      correctLetterLocations++;
      solutionArray[i] = null;
    }
  }

  // Spec 2.3 - Determine correct "letters"
  // Now that we have nulled the already counted correctLetterLocations, we can see if the guessArray contains any correctLetters that were not in the correct location.
  // Set a variable correctLetters equal to 0, and in a for loop, again iterate over the solutionArray.
  // Using .indexOf, determine if the item at the current index in guessArray appears inside of solutionArray.
  // Save that index in a variable called targetIndex. Now, if targetIndex is greater that -1, increment correctLetters
  // and set the item in solutionArray at that index equal to null.
  let correctLetters = 0;
  for (let j = 0; j < solutionArray.length; j++) {
    let targetIndex = solutionArray.indexOf(guessArray[j]);
    if (targetIndex > -1) {
      correctLetters++;
      solutionArray[targetIndex] = null;
    }
  }

  // Spec 2.4 - return hint string
  // Using the colors package, return a string that prints out the hints you generated,
  // with correctLetterLocations being red, correctLetters being white, and separated by a hyphen.
  return (
    colors.red(correctLetterLocations) + "-" + colors.white(correctLetters)
  );
}

function getPrompt() {
  rl.question("guess: ", guess => {
    let result = mastermind(guess);
    if (result === win) {
      console.log(win);
      return;
    }
    if (board.length < 10) {
      printBoard();
      getPrompt();
    } else
      console.log("You ran out of turns. The solution was " + solution + ".");
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
      assert.equal(generateHint("abcd", "abdc"), "2".red + "-" + "2".white);
    });
    it("should generate hints if solution has duplicates", () => {
      assert.equal(generateHint("abcd", "aabb"), "1".red + "-" + "1".white);
    });
  });
} else {
  generateSolution();
  getPrompt();
}
