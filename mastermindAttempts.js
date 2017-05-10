'use strict';

const assert = require('assert');
//const colors = require('colors/safe');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const board = [];
let solution = 'abcd';
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

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

function generateHint() {
  // your code here
}

function mastermind(guess) {
  let guessArr = guess.split("");
  let solutionArr = solution.split("");
  let comparator = guessArr.join(solutionArr, "")
  let result = solution.test(comparator);
  console.log(result);
}


//for each instance of solutionArr[i][n] === guessArr[i][n] return or log something
/* else if (solutionArr[1] === guessArr[1]) {
    console.log('red2', solutionArr[1], guessArr[1]);
  } else if (solutionArr[2] === guessArr[2]) {
    console.log('red3');
  } else if (solutionArr[3] === guessArr[3]) {
    console.log('red4');
    return true;
  }
  /*else if (solutionArr[i] === guessArr[i]) {
         console.log(solutionArr[i], guessArr[i], '0-1');

         break;
       } else if (solutionArr[i] !== guessArr[i]) {
         console.log(solutionArr[i], guessArr[i], '0-0');
         break;
       }*/




function getPrompt() {
  rl.question('guess: ', (guess) => {
    console.log(mastermind(guess));
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      solution = 'abcd';
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abcd', 'abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('abcd', 'aabb'), '1-1');
    });

  });

} else {

  //  generateSolution();
  getPrompt();
}
