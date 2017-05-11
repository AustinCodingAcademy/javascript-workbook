// 'use strict';

const assert = require('assert');
// const colors = require('colors/safe');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = 'adaa';
let guess = 'adaa';
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

//end of stuff

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
  // your code here {
  function split(string) {
    return string.split('');
  }
  solution = split(solution);
  guess = split(guess);

  let rightLetterWrongPlace = 0;
  let rightLetterRightPlace = 0;
//
for (let i = 0; i < solution.length; i++) {
  console.log(`solution: ${solution}`)
  console.log(`guess: ${guess}`)
  if (solution[i] === guess[i]) {
    solution[i] = null;
    return(solution);
    rightLetterRightPlace++;
  }
}

  for (let i = 0; i< solution.length; i++ ){
    return(`solution: ${solution}`);
    return(`solution: ${guess}`);
    if (solution.includes(guess[i])) {
    solution[i] = null;
    return(solution);
        rightLetterWrongPlace++;
    }
  }

var returnString = rightLetterRightPlace + '-' +rightLetterWrongPlace;
return(returnString);

console.log(`(loop is finished)`)
console.log(`(Right letter, right place: ${rightLetterWrongPlace}`)
console.log(`(Right letter, wrong place: ${rightLetterRightPlace}`)
}

function mastermind(guess) {
  (board.push(guess));

  //add a your guess to the board each time (use board.push)
  //add the hint in the format of '1-1'
  if (rightLetterRightPlace = 4) {
    return('You guessed it!');
  } else {
    generateHint(guess, solution);
    // getPrompt();
    // printBoard();
  };
};


function getPrompt() {
  rl.question('guess: ', (guess) => {
    console.log( mastermind(guess) );
    printBoard();
    getPrompt();
  });
};




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

  generateSolution();
  getPrompt();
}
