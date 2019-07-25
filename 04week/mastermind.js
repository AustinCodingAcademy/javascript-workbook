'use strict';
var colors = require('colors');

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

//prints board
function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

//generates random solution
function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

//gets random integer
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(solution, guess) {
  if (board.length < 19){
    let solutionArray = solution.split("");
    let guessArray = guess.split("");
    let correctLetterLoc = 0;
    let correctLetters = 0;
    for (let i=0; i<4; i++){
      if (solutionArray[i] === guessArray[i]){
        correctLetterLoc = correctLetterLoc + 1;
        solutionArray[i] = null;
      }
    }
    //loops through solution array to see if there is a correct letter at another index in guess array
    for (let i=0; i<4; i++){
      let targetIndex = solutionArray.indexOf(guessArray[i])
      //if letter is found in guess array
      if(targetIndex > -1){
        //adds 1 to counter
        correctLetters = correctLetters + 1;
        //sets correct letter to null in soution array
        solutionArray[targetIndex] = null;
      }
    }
    //returns correct location and correct letter count
    return correctLetterLoc + "-" + correctLetters;
  }
  else{
    console.log("You ran out of turns.  The solution was " + solution);
  }
}


function mastermind(guess) {
  //checks if correct solution was guessed
  if(guess === solution){
    console.log("You guessed it!");
    return "You guessed it!";
  }
  //if incorrect guess generate hint
  else if(guess != solution){
    let hint = generateHint(solution, guess);
    board.push(guess, hint);
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
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 2);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abcd', 'abdc' ), '2-2');

    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('abcd', 'aedf'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}
