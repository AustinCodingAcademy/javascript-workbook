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

function generateHint(solution, guess) {
  // your code here {
  function split(string) {
    return string.split('');
  }
  let splitSolution = split(solution);
  let splitGuess = split(guess);

  let rightLetterWrongPlace = 0;
  let rightLetterRightPlace = 0;
  //
  for (let i = 0; i < splitSolution.length; i++) {
    // console.log(`solution: ${splitSolution}`)
    // console.log(`guess: ${splitGuess}`)
    if (splitSolution[i] === splitGuess[i]) {
      splitSolution[i] = null;
      // return(splitSolution);
      rightLetterRightPlace++;
    }
  }

  for (let i = 0; i< solution.length; i++ ){
    console.log(`solution: ${splitSolution}`);
    console.log(`guess: ${splitGuess}`);
    let found = splitSolution.indexOf(splitGuess[i])
    if (found > -1) {
    splitSolution[found] = null;
    // console.log(splitSolution);
        rightLetterWrongPlace++;
    }
  }

  var returnString = rightLetterRightPlace + '-' +rightLetterWrongPlace;
  return(returnString);

  // console.log(`(loop is finished)`)
  // console.log(`(Right letter, right place: ${rightLetterWrongPlace}`)
  // console.log(`(Right letter, wrong place: ${rightLetterRightPlace}`)
}

function mastermind(guess) {
  (board.push(guess));

  //add a your guess to the board each time (use board.push)
  //add the hint in the format of '1-1'
  if (rightLetterRightPlace = 4) {
    return('You guessed it!');
  } else {
    generateHint(solution, guess);
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
