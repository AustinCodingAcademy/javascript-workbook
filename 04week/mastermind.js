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
  console.log("LOG: In mastermind(): ");

  // your code here
  const win = "You guessed it!";
  const outOfTurns = "You ran out of turns! The solution was " + solution + ".";
  const guessAgain = "Guess again.";

  // if guess = solution return win
  if (guess === solution) {
    return win;
    // else run the gernerate hint function with guess and solution as parameters
  } else {
    let hint = generateHint(solution, guess);
    let guessAndHint = guess + " " + hint;
    board.push(guessAndHint);
  }

  // If the board length equals 10, return 'You ran out of turns! The solution was ' and the solution. Otherwise, return 'Guess again.'.
  if (board.length === 10) {
    console.log(outOfTurns);
  } else console.log(guessAgain);
}

function generateHint(solution, guess) {
  // your code here
  let solutionArr = solution.split("");
  let guessArr = guess.split("");

  // Create a variable correctLetterLocations that will record how many correct "letter-locations" were guessed.
  // Set correctLetterLocations equal to 0.
  let correctLetterLocations = 0;

  // In a for loop, iterate over the solutionArray
  for (let i = 0; i < solutionArr.length; i++) {
    const letter = solutionArr[i];
    const guess = guessArr[i];

    // Comparing each index of solutionArray against the same index of guessArray.
    // if the item matches, increment correctLetterLocations, and set that index in solutionArray to null.
    if (letter === guess) {
      correctLetterLocations++;
      solutionArr[i] = null;
    }
  }
  // Now that we have nulled the already counted correctLetterLocations, we can see if the guessArray contains any correctLetters that were not in the correct location.
  // Set a variable correctLetters equal to 0, and in a for loop, again iterate over the solutionArray.
  let correctLetters = 0;
  for (let j = 0; j < solutionArr.length; j++) {
    // Using .indexOf, determine if the item at the current index in guessArray appears inside of solutionArray. Save that index in a variable called targetIndex.
    const letter = solutionArr[j];
    let targetIndex = guessArr.indexOf(letter);

    // Now, if targetIndex is greater that -1, increment correctLetters and set the item in solutionArray at that index equal to null.
    if (targetIndex > -1) {
      correctLetters++;
      solutionArr[j] = null;
    }
  }

  // Using the colors package, return a string that prints out the hints you generated, with correctLetterLocations being red, correctLetters being white, and separated by a hyphen.
  return (
    colors.red(correctLetterLocations) + "-" + colors.white(correctLetters)
  );
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
