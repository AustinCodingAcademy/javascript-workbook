'use strict';

const assert = require('assert');
const colors = require('colors/safe');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const board = [];
let solution = '';
let guess = '';
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];


//* solution = 'adaa'
//let guess = 'adcb'
//function split(string){
//  return string.split('')
//}
//solution = split(solution)
//guess = split(guess)
//console.log(guess)
//make two for loops one for guesses not right and one for remainder of guesses that will be in the right place
// for (let i = 0; i <solution.length; i++){
//console.log(solution[i].indexOf(guess[i]))
//}
//console.log('solution:
//${split(solution).indexOf('b')}')
//console.log('guess: ${split(guess)}')

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

    function split(string){
      return string.split('');
    }
    solution = split(solution);
    guess = split(guess);

    let numberRight = 0;
    let numberClose = 0;
    let returnString = 0;

    for(let i = 0; i < solution.length; i++){
      console.log('solution: ${solution}')
      console.log('guess: ${guess}')
      if (solution[i]===guess[i]){ /*identifies letter and index correct*/
        solution[i]= null;
        console.log(solution);
        numberRight += 1;
      }
      else if (solution.includes(guess[i])){ /*this identifies close matches*/
        numberClose += 1;
      }
      let returnString = numberRight + '' + numberClose;
      return returnString;
    }
}

function mastermind(guess, solution) {
  // your code here
  function generateHint(guess, solution){
  }
  (board.push(guess));

  if (guess === solution){
    console.log('You guessed it!');
    //win condition
    //game stops
  }
  else {
    board.push(guess+': '+hint);
    printBoard();
    numberRight = 0;
    numberClose = 0;
    generateHint(guess, solution);
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
