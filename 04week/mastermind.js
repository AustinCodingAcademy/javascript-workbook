'use strict';

const colors = require('colors');
const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout

});
let board = [];
let solution = " ";
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function isValid(guess) {
  let firstLetterTrue = false;
  let secondLetterTrue = false;
  let thirdLetterTrue = false;
  let fourthLetterTrue = false;
  if (guess.length === 4) {
    for (let i = 0; i < guess.length; i++) {
      for (let j = 0; j < letters.length; j++) {
        if (guess[i] === letters[j]) {
          if (i === 0) {
            firstLetterTrue = true;
          }
          if (i === 1) {
            secondLetterTrue = true;
          }
          if (i === 2) {
            thirdLetterTrue = true;
          }
          if (i === 3) {
            fourthLetterTrue = true;
          }
        }
      }
    }
    if (firstLetterTrue && secondLetterTrue && thirdLetterTrue && fourthLetterTrue) {
      return true;
    }
    console.log("These are valid " + letters);
    return false;
  }
  return false;
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
  let correctLetterLocations = 0;
  let correctLetters = 0;
  let solutionArray = solution.split("");
  let guessArray = guess.split("");

  for (let i = 0; i < solutionArray.length; i++) {
    let letter = solutionArray[i];
    let guess = guessArray[i];
    if (letter === guess) {
      correctLetterLocations++;
      solutionArray[i] = null;
      console.log("letters");

    }

  }
  for (let j = 0; j < solutionArray.length; j++) {
    let letter = solutionArray[j];
    let targetIndex = guessArray.indexOf(letter);
    if (targetIndex > -1) {
      correctLetters++;
      solutionArray[j] = null;
    }
  }
  return (colors.red(correctLetterLocations) + "-" + colors.white(correctLetters));
}


function mastermind(guess) {
  //solution = 'abcd'; // Comment this out to generate a random solution
  if (isValid(guess)) {
    console.log(guess, " Guess");
    console.log(solution, " Solution");
    let win = "You guessed it";
    let outOfTurns = "You ran out of turns! The solution was " + solution;
    let guessAgain = "guess again";
    if (guess === solution) {
      let hint = generateHint(solution, guess);
      let guessAndHint = guess + " " + hint;
      board.push(guessAndHint);
      console.log(win, " win");
    } else {
      let hint = generateHint(solution, guess);
      let guessAndHint = guess + "-" + hint;
      board.push(guessAndHint);
      console.log(hint, " Hint");
    }
    if (board.length === 10) {
      console.log(outOfTurns, " Out of Turns");
      return outOfTurns;
    } else {
      console.log(guessAgain);
      return guessAgain;
    }
  } else {
    console.log(colors.red("please enter a valid guess"));
  }
}
// if guess is equal to solution return win condition
// your code here


function getPrompt() {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}
// //solutionArray.forEach(letter, i) => {
//   if (letter === guessArray[i) {
//     correctLetterLocations++;
//     solutionArray[i] = null;
//   } 
// })
// // your code here
// split solution 

// Create a variable correctLetterLocations that will record how many correct "letter-locations" were guessed. For instance, a guess of aabc against a solution of deba would yield one correct "letter-location" (b). Set correctLetterLocations equal to 0. In a for loop, iterate over the solutionArray, comparing each index of solutionArray against the same index of guessArray. If the item matches, increment correctLetterLocations, and set that index in solutionArray to null.
// Now that we have nulled the already counted correctLetterLocations, we can see if the guessArray contains any correctLetters that were not in the correct location. Set a variable correctLetters equal to 0, and in a for loop, again iterate over the solutionArray. Using .indexOf, determine if the item at the current index in guessArray appears inside of solutionArray. Save that index in a variable called targetIndex. Now, if targetIndex is greater that -1, increment correctLetters and set the item in solutionArray at that index equal to null

// Using the colors package, return a string that prints out the hints you generated, with correctLetterLocations being red, correctLetters being white, and separated by a hyphen.

// Define a var called hint that collects the returned value of generateHint(solution, guess). .push the guess and the hint (as a combined string) into the board.

// if guess !=== solution run the generate hint function with guess and solution as pararmeters and set to variable

// If the board length equals 10, return 'You ran out of turns! The solution was ' and the solution. Otherwise, return 'Guess again.'
// define a var called hint that collects the returned valued of generateHint(solution, guess) . .push the guess and the hint (as a combined string)
// into the board