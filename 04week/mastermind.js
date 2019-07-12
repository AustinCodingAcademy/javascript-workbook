'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];



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

function isValid (guess) {
  let guessArr = guess.split('');

  // if(!letters.includes(guessArr)){
  //   console.log('Remember: the solution can only contain letters a-h');
  //   return false;
  if(guessArr.every(function (val){
    letters.indexOf(val) >= 0;
  })){
      console.log('Remember: the solution can only contain letters a-h');
      return false;
  } else if (guessArr.length > 4) {
    return false;
  }
};

function generateHint() {
  // your code here
}

function mastermind(guessArr) {
  solution = 'abcd'; // Comment this out to generate a random solution
  if(isValid(guessArr)){

  };

}


function getPrompt() {
  rl.question('guess: ', (guess) => {
    console.log(guess);
    isValid(guess);
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
