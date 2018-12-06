'use strict';

const colors = require('colors');
const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = 'abcd';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function isValid(guess) {
  if (guess.length === 4) {
    return true;
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
let correctLetters = 0;
let correctLetterLocations = 0;

function generateHint(solution, guess) {
  correctLetterLocations = 0;
  correctLetters = 0;
  let solutionArray = solution.split("");
  let guessArray = guess.split("");


  for (let i = 0; i < solutionArray.length; i++) {
    const letter = solutionArray[i];
    const guess = guessArray[i];
    if (letter === guess) {
      correctLetterLocations++;
      solutionArray[i] = null;
    }

  }
  for (let j = 0; j < solutionArray.length; j++) {
    const letter = solutionArray[j];
    let targetIndex = guessArray.indexOf(letter);
    if (targetIndex > -1) {
      correctLetters++;
      solutionArray[j] = null;
    }

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
  if (board.length === 10) {
    return outOfTurns;
  } else {
    return guessAgain;
  }
  // define a var called hint that collects the returned valued of generateHint(solution, guess) . .push the guess and the hint (as a combined string)
  // into the board

}

function mastermind(guess) {
  solution = 'abcd'; // Comment this out to generate a random solution
  if (isValid(guess)) {
    let win = "You guessed it";
    const outOfTurns = "You ran out of turns! The solution was " + solution;
    const guessAgain = "Guess again";
  };
  if (guess === solution) {
    return win;
  } else {
    let hint = generateHint(solution, guess);
    let guessAndHint = guess + " " + hint;
    board.push(guessAndHint);
    console.log(win);
    return win;
  };
  // your code here
  // if guess is equal to solution return win condition
}


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