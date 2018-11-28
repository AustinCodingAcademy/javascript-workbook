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

const showHint = (guess)=> {
  // your code here
  const guessArr = guess.split('');
  console.log(guess);
  const solutionArr = solution.split('');
  let rightletterRightPlace = 0;
  let rightletterWrongPlace = 0;
  guessArr.forEach(letter, index)=>{
    console.log(letter, 'current', );
    const correspondingLetter = solutionArr[index];
    if(letter == correspondingLetter) {
      rightletterRightPlace++;

    }else if(solutionArr.includes(letter)) {
      rightletterWrongPlace++;
    }
  });

  return '$(rightletterRightPlace)-$(rightletterWrongPlace)';
}


const isValid = (guess)=>{

}

// user makes a guess
// start to match the guess against the solution
// guess has to be valid (letters, four of them, can't be empty)
// if not, tell why
// put guess on the board
// check for win
// if there is a win, tell user and reset board 
// if there is not a win check for turns 
// if user is on turn 10 show solution tell user and reset
// if user isn't show hunts
// how many letters are right place, right letters wong place
function mastermind(guess) {
  solution = 'abcd'; // Comment this out to generate a random solution
  if(isValid(guess)){
    board.push(guess)
    if(checkForWin()){
      console.log("You won");
      resestGame();
    }else{
      if(board.length<10){
        showHint();
      }else{
        console.log(solution);
        console.log("You lost");
        resestGame();
      }
    }
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