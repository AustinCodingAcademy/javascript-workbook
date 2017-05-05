'use strict';

const assert = require('assert');
// const colors = require('colors/safe');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const board = [];
let solution;
solution = generateSolution();

// arrsolution = solution.split('');

// let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
// let leg = letters.length;

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

  function generateSolution(letters){
    letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
      for(let i = 0; i < 4; i++){
    board.push(letters[getRandomInt(0 - letters.length)]);
    console.log(board);
  }
}

function getRandomInt(min, max) {
  return (Math.floor(Math.random() * (max - min)) + min);
}

function generateHint(guess) {
  let exact = 0;
  let close = 0;
  for(let letter in guess){
    if(guess[letter] === solution[letter]){
      exact ++;
      }
      else if (solution.includes(guess[letter])) {
        close ++;
        console.log('exact '+ exact +'-'+close + ' close ');
      }
    }
  if(exact === 4){
    console.log('You guessed it!');
    return true;
  }
  console.log(guess.join('|'), close + '-' + exact);
    // if(guess[letter] === solution[letter]){
    //   exact ++;
    //   }
      // else if (solution.includes(letter)) {
      //   close ++;
      //
      // }
    }
// to check for repeats ==results = arr.filter(function(elem, pos) { return arr.indexOf(elem) == pos; })
  // console.log(close +'-'+ exact);
// if
  //   // for(let letter in guess){
  //   //   if(solution.includes(letter){
  //   //     close ++;
  //   //     console.log(close);
  //
  //     }
  //   }
  //   console.log(close + '-' + exact);


function mastermind(guess) {
  guess = guess.split('');
  console.log(guess);// your code here
  generateHint(guess, solution);
}


function getPrompt() {
console.log(solution);
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

  // generateSolution();
  getPrompt();
}
