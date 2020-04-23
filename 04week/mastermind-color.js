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
let hint;
let colors = require('colors');
colors.enable();

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
  let guessArray = guess.toUpperCase().trim().split('');
  let solutionArray = solution.toUpperCase().split('');
  let correctLetterLocations= 0;
  let correctLetters = 0;
  let turnCount = board.length+1;

// find correct letters that are also in the correct location and store them in correctLetterLocations
  for (let i=0; i < solutionArray.length; i++) {
    if (solutionArray[i] == guessArray[i]) {
      correctLetterLocations++
      solutionArray[i] = null
      //console.log("correct letter and location") 
    } //else { //lines 47-49 used for testing
      //console.log("no letter + location match found")
    //}
  }

// find correct letters that are NOT in the correct location and store them in correctLetters
  for (let i=0; i < solutionArray.length; i++) {
    let targetIndex = solutionArray.indexOf(guessArray[i]); 
    if (targetIndex > -1) {
      correctLetters++
      solutionArray[targetIndex] = null
    } //else { //lines 58-60 used for testing
      //console.log("no letter match found")
    //}
  };
  // uncomment lines 63-67 for colorful fancy game play****
  hint = `
                                  \n`.blue.underline+
`|******Turn Count: ${turnCount}             |\n`.america.underline+
`|********Your Guess: ${guess}        |\n`.red.underline +
`|**********Correct Letter: ${correctLetters}     |\n`.white.underline+
`|************Correct Location: ${correctLetterLocations} |`.blue.underline
  

  // comment out lines 70-71 for colorful fancy game play (use to pass tests)
  //hint = `${correctLetterLocations}-${correctLetters}`; 
  //return hint; 
}

function mastermind(guess) {
  //solution = 'abcd'; // Comment this out to generate a random solution
  
  //check to see if the player has guessed the solution
  //if the player won, they receive a notification, and the game board is reset for a new game to begin;
  //if the player did not guess correctly a hint is generated
  //the players incorrect guess + the hint are displayed on the "board"
  if (guess == solution) {
    console.log("You cracked the code!".america) // altered text will not pass the unit test
    console.log("***Let's play again!***".rainbow)
    board = [];
   // return `You guessed it!`; // this is needed to pass the unit test
  } else if (board.length <=8 ) {
    generateHint(guess);
    //board.push(`${hint} ${guess}`); // comment this out for colorful fancy game play
    console.log(hint); // uncomment this for colorful fancy game play
    return console.log("Guess again.");
  } else {
    board = [];
    return console.log("You ran out of turns! ╚(ಠ_ಠ)=┐".america + "\nThe solution was: ".zebra + solution.zebra + "\n***Let's play again!***".america);
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
