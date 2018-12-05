"use strict";

const assert = require("assert");
const colors = require("colors");
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
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(solution, guess) {
  // split solution and guess into an array for comparison
  let solutionArray = solution.split("");
  let guessArray = guess.split("");

  // Create a variable correctLetterLocations that will record how many correct "letter-locations" were guessed. For instance, a guess of aabc against a solution of deba would yield one correct "letter-location" (b). Set correctLetterLocations equal to 0.
  let correctLetterLocations = 0;

  //In a for loop, iterate over the solutionArray,
  for (let i = 0; i < solutionArray.length; i++) {
    const letter = solutionArray[i];
    const guess = guessArray[i];
    if (letter === guess) {
      correctLetterLocations++;
      solutionArray[i] = null;
    }
  }

  let correctLetters = 0;

  // Now that we have nulled the already counted correctLetterLocations, we can see if the guessArray contains any correctLetters that were not in the correct location. Set a variable correctLetters equal to 0, and in a for loop, again iterate over the solutionArray. Using .indexOf, determine if the item at the current index in guessArray appears inside of solutionArray. Save that index in a variable called targetIndex. Now, if targetIndex is greater that -1, increment correctLetters and set the item in solutionArray at that index equal to null.
  for (let j = 0; j < solutionArray.length; j++) {
    const letter = solutionArray[j];
    let targetIndex = guessArray.indexOf(letter);
    if (targetIndex > -1) {
      correctLetters++;
      solutionArray[j] = null;
    }
  }

  // Using the colors package, return a string that prints out the hints you generated, with correctLetterLocations being red, correctLetters being white, and separated by a hyphen.
  return (
    colors.red(correctLetterLocations) + "-" + colors.white(correctLetters)
  );
}

function mastermind(guess) {
  //let solution = "abcd";
  const win = "You guessed it!";
  const outOfTurns = "You ran out of turns! The solution was " + solution;
  const guessAgain = "Guess again.";
  //console.log(guess);

  // if guess === solution return 'You guessed it!'
  if (guess === solution) {
    console.log(win);
  } else {
    // Define a var called hint that collects the returned value of generateHint(solution, guess). .push the guess and the hint (as a combined string) into the board.
    let hint = generateHint(solution, guess);
    let guessAndHint = guess + " " + hint;
    board.push(guessAndHint);
  }

  // If the board length equals 10, return 'You ran out of turns! The solution was ' and the solution. Otherwise, return 'Guess again.'.
  if (board.length === 10) {
    console.log(outOfTurns);
  } else {
    console.log(guessAgain);
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
