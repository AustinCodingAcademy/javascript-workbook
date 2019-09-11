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

function generateHint() {
  // your code here
  console.log(`${rightLetter()} letters correct - ${rightPosition()} are in the right spot.`);
}

// Check that input is valid

function inLetters(input){
  // Checks to see that all letters in board are in the letters array.
  let adivino = input.split('');
  let found;
  for (let i = 0; i < adivino.length; i++){
    if (letters.includes(adivino[i])){
      found = true;
    }
    else {
      found = false;
    }
  }
  return found;
}
function isValid(input){
  // Checks that input is less than 4 characters long
  //   and runs the inLetters func.
  if (input.length === 4 && inLetters(input)) {
    return true;
  } else {
    return false;
  }
}

function rightLetter(){
  // Checks to see if a letter in board is part of the solution.
  //    Returns a number.
  let solucion = solution.split('');
  let correctLetters = 0;

  for (let i = 0; i < board.length; i++){
    for (let j = 0; j < solucion.length; j++){
      if (board[i] === solucion[j]){
        correctLetters = correctLetters + 1;
      }
    }
  }
  return correctLetters;
}
function rightPosition() {
  // Checks to see if the letter is in the right position.
  //    Returns a number
  let solucion = solution.split('');
  let correctPositions = 0;
  for (let i = 0; i < solucion.length; i++) {
    if (board.indexOf(board[i]) === solucion.indexOf(solucion[i])){
      correctPositions = correctPositions + 1;
    }
  }
  return correctPositions;
}
function assignBoard(guess){
  // assigns the user's guess to the board
  board = guess.split('');
}

function detectWin(guess){
  if (guess === solution){
    return true;
  }else {
    return false;
  }
}

function mastermind(guess) {
  // clean up the guess
  let adivino = guess.toLowerCase().trim();
  solution = 'abcd'; // Comment this out to generate a random solution
  let chances = 10; // Number of chances to guess the solution

  // Do this while chances are above 0
  do {
    //Checks to see that guess is valid
    if (isValid(adivino)){
      // If there is a win.
      if (detectWin(adivino)){
        console.log("You guessed it!");
        break;
      } else {
        // Store guess in board
        assignBoard(adivino);
        // console.log(`${adivino} was assigned to the board that now looks like ${board} which is a ${typeof board}.`);
        // Generate a hint.
        generateHint();
        chances = chances - 1;
        break;
      }
    }else {
      console.log(`>> ${adivino.length}`);
      console.log("Your guess is not valid.");
      break;
    }
  }while(chances > 0);

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
