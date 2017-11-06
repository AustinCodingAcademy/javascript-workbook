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

function generateHint(solution, guess) {
  // your code here
  let solutionArray = solution.split('');
  let guessArray = guess.split('');
  let correctLetterLocations = 0;
  let correctLetters = 0;

for (var i = 0; i < solutionArray.length; i++) {
  if (solutionArray[i] === guessArray[i]) {
       correctLetterLocations++;
       solutionArray[i] = null;
     }
   }

for (var y = 0; y < solutionArray.length; y++) {
  let targetIndex = solutionArray.indexOf(guessArray[y]);

 if (targetIndex > -1) {
      correctLetters++;
      solutionArray[y] = null;
    }
  }
  return colors.red(correctLetterLocations) + '-' + colors.white(correctLetters);
}


function mastermind(guess) {
  solution = 'abcd'; // Comment this out to generate a random solution
  // your code here
  if (guess == solution){
    return "You guessed it!"
  }

  let hint = generateHint(solution, guess);
  board.push(hint + ': ' + guess);

  if (board.length == 10){
    return ('You ran out of turns! The solution was ' + solution)
  } else {
    return 'Guess again!'
  }
}


function getPrompt() {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#generateHint()', () => {
    it('should generate hints', () => {
      let expected = ('2'.red)+"-"+('2'.white);
      assert.equal(generateHint('abdc'), expected);
    });
    it('should generate hints if solution has duplicates', () => {
      let expected = ('1'.red)+"-"+('1'.white);
      assert.equal(generateHint('aabb'), expected);
    });

  });

} else {

  generateSolution();
  getPrompt();
}
