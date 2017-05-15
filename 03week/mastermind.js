'use strict';

const assert = require('assert');
// const colors = require('colors/safe');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const board = [];
let solution = '';
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

function generateHint(solution,guess) {
  // your code here

  let rightSpot = 0; //declare a variable to store the sum of right spots
  let rightLetter = 0;  //declare a variable to store the sum of right letters,wrong spots
  let hint = []; // declare an array to place number of guesses

  for (var i=0; i<solution.length; i++) { //check each array item
    if (guess.includes(solution[i])) { //if my guess includes any of the letters of solution
      if(guess[i] === solution[i]) { //check if they are at the same spot
        rightSpot++; //if same spot, add 1
      } else { //if I guess the right letter at wrong spot
        rightLetter++; //add 1 for wrong spot
      }
    }
  }

  hint.push(rightSpot,rightLetter); //add total num of right spots and right letter/wrong spots into an array
  return hint.join('-'); //combine it with my guess and assign to the array hint: e.g. 0-2

}

function mastermind(guess) {
  // your code here
  
  if (solution === guess) { //if I guess it right
    return 'You guessed it!'; //return the string
  } else { //if I don't guess it right
    board.push(guess + ' ' + generateHint(solution, guess)) //add my gues to board along with the hint
    return "Try again!"; //return the string
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
