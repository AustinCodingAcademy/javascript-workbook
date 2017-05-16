'use strict';

const assert = require('assert');
//const colors = require('colors/safe');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let hint = '';
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];


function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

/*function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
  return solution;
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}*/

function generateHint(guess){

    let solutionArray = solution.split('');
    let guessArray = guess.split('');
    let correctLetters = 0;
    let wrongLocations = 0;


    for(let i = 0; i < 4; i++){

      if (guessArray[i]===solutionArray[i]){
       board.push(guessArray[i]);
         correctLetters++;

      }
      else if (solutionArray.includes(guessArray[i]) && (board.includes(guessArray[i]) === false)){
        board.push(guessArray[i]);
          wrongLocations++;
      }
    }
    hint = `${correctLetters}-${wrongLocations}`;

    return hint;
    }


function mastermind(guess) {
  generateHint(guess);

  if (guess === solution){
    return 'You guessed it!';
  }
  else {
    board.push(guess+ ': ' + hint);
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
      assert.equal(board.length, 3);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      solution = 'abcd';
      assert.equal(generateHint('abdc'), '2-0');
    });
    it('should generate hints if solution has duplicates', () => {
      solution = 'abcd';
      assert.equal(generateHint('aabb'), '1-0');
    });

  });

} else {

  generateSolution();
  getPrompt();
}
