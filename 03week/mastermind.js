'use strict';

const assert = require('assert');
const colors = require('colors/safe');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
let hint = '';
let yes = 0 ;
let almost = 0 ;

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

function generateHint(guess) {
  let g = guess.split('');
  let s = solution.split('');
  for(i=0; i<s.length; i++){
    //identifies correct letter and index
    if(s[i]===g[i]){
      yes += 1;
    }
    //identifies only correct letter
    else if(s.includes(g[i])){
      almost += 1;
    }
  }
  hint = yes + '-' + almost;
}

function mastermind(guess) {
  generateHint(guess);
  //check for win
  if(yes===4){
    console.log('You guessed it!');
  }
  //return board with guess and hint
  else {
    board.push(guess+': '+hint);
    printBoard();
    yes = 0;
    almost = 0;
  }
}


function getPrompt() {
  rl.question('guess: ', (guess) => {
    console.log( mastermind(guess) );
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

  generateSolution();
  getPrompt();
}
