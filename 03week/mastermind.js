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
  let dub = [];
  let yes = 0 ;
  let almost = 0 ;
  for(let i=0; i<s.length; i++){
    //identifies correct letter and index
    if(s[i]===g[i]){
      dub.push(g[i]);
      yes++;
    }
    //identifies only correct letter
    else if(s.includes(g[i]) && (dub.includes(g[i]) === false)){
      dub.push(g[i]);
      almost++;
    }
  }
  hint = `${yes}-${almost}`;
  return hint;
}

function mastermind(guess) {
  generateHint(guess);
  //check for win
  if(guess===solution){
    return 'You guessed it!';
  }
  //return board with guess and hint
  else {
    board.push(guess+': '+hint);
    printBoard();
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
      solution = 'abcd';
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      solution = 'abcd';
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}
