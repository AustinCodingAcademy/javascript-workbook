'use strict';

/**************************************************
*** This program simulates a game of Mastermind ***
**************************************************/

//  letterChoices are used to represent the possible color choices.
//  This array can not use numbers or the global consts:
//  nonSolutionChar or nonGuessChar (see below).
const letterChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

//  nonSolutionChar and nonGuessChar are used in generateHint.
//  They must be different from letterChoices and each other.
//  Should not be global, but created here for simplicity
const nonSolutionChar = 'X';
const nonGuessChar = 'Y';

//  arrayTemplate is used with .map() to avoid for-next loops
//  It needs to have as many elements as the solutionLength, but
//  the values of those elements are irrelevant
const arrayTemplate = [1, 2, 3, 4];
const solutionLength = 4;

//  board represents all guesses and their cooresponding hints
let board = [];

//  solutionArr and solution had to be global to facilitate testing
let solutionArr = [];
let solution = '';

//  If the solution has not already been selected by a player (or testing)
//  a randomized one is created.
function generateSolution (predeterminedSolution) {
  if (predeterminedSolution === false) {
    solutionArr = arrayTemplate.map(function () {
      return letterChoices[Math.floor(Math.random() * letterChoices.length)];
    });
    solution = solutionArr.toString().replace(/,/g, '');
  } else {
    solution = predeterminedSolution;
    solutionArr = Array.from(solution);
  }
}

function printBoard () {
  for (let value of board) {
    console.log(value);
  }
}

function generateHint (guess) {
  let guessArr = Array.from(guess);
  let guessAndSolutionArr = guessArr.concat(solutionArr);
  let countInPosition = findInPosition();
  let countOutOfPosition = findOutOfPosition();
  return countInPosition + '-' + countOutOfPosition;

  // Determines number of letters in the guess that are in the correct position.
  // To avoid loo
  function findInPosition () {
    // callback
    function compareSamePositions (element, index, array) {
      if (index < solutionLength) {
        if (element === array[index + solutionLength]) {
          matchesFound++;
          array[index] = nonGuessChar;
          array[index + solutionLength] = nonSolutionChar;
        }
      }
    }

    let matchesFound = 0;
    guessAndSolutionArr.forEach(compareSamePositions);
    return matchesFound;
  }

  function findOutOfPosition () {
    // callback
    function compareDifferentPositions (element, index, array) {
      if (index < solutionLength) {
        if (element !== nonGuessChar) {
          const matchIndex = array.indexOf(element, solutionLength);
          if (matchIndex > 0) {
            matchesFound++;
            array[index] = nonGuessChar;
            array[matchIndex] = nonSolutionChar;
          }
        }
      }
    }

    let matchesFound = 0;
    guessAndSolutionArr.forEach(compareDifferentPositions);
    return matchesFound;
  }
}

function validateGuess (guessInput) {
  guessInput = guessInput.trim().toLowerCase();
  if (guessInput.length !== solutionLength) {
    guessInput = false;
  }
  return guessInput;
}
/*
--------- NOT WORKING ---------------
// Ensure that every character in Guess appears in Letters. Returns T/F
function isValid (guess) {
  const guessArr = Array.from(guess);
  if (guessArr.every(letterIsValid) && guess.length === solutionLength) {
    return true;
  }
  return false;
  // callback function
  function letterIsValid (element) {
    element.isArray(letters);
  }
}
*/

function mastermind (guessInput) {
  let guess = validateGuess(guessInput);
  if (guess !== false) {
    if (guess !== solution) {
      board.push(guess + '  ::  ' + generateHint(guess));
    } else {
      return 'You guessed it!';
    }
  }
}

/*  MY TESTS  ***********************************
generateSolution(false);
console.log(solution);
console.log(solutionArr);

generateSolution('abcd');

mastermind('aabb');
console.log('Should be: 1 ||| Is: ' + board.length);

let response = mastermind(solution);
console.log('Should be: You guessed it! ||| ' + response);

response = generateHint('abdc');
console.log('Should be: 2-2 ||| ' + response);

response = generateHint('aabb');
console.log('Should be: 1-1 ||| ' + response);
************************************************/

// Tests

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getPrompt () {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

if (typeof describe === 'function') {
  generateSolution('abcd');
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
  generateSolution(false);
  getPrompt();
}
