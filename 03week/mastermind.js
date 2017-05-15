// 'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = 'abcd';
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

function generateHint(guess) {
  // Splitting a string on an array, when there is nothing there. Split by nothing. ("")

  // var solution = "abcd"
  // var guess = "bace"
  let redHint = 0 //I will need to define the red and white pegs at some point
  let whiteHint = 0

  let splitSol = solution.split('')
  let splitGuess = guess.split('')

  for (let i = 0; i < 4; i++) {
    if (splitSol[i] === splitGuess[i])
      redHint++;


    // Do I need to call solution.split here and guess.split, after splitting them?

    // if (splitSol.includes(splitGuess[i]))
    //   whiteHint++;

    let found = splitSol.indexOf(splitGuess[i]);
    // How do I make i null, how do I continue to cycle through?
    if (found > -1) {
      splitSol[found] = null;
      whiteHint++;
    }
  }

  whiteHint = whiteHint - redHint;

  console.log('redHint', redHint)
  console.log('whiteHint', whiteHint)
  return (`${redHint}-${whiteHint}`)
}


function mastermind(guess) {
  solution = 'abcd'; // uncomment this when developing
  // If it is a total win, say that.
  if (solution === guess) {
    // console.log("You guessed it!");
    return ("You guessed it!");
  }

  board.push(guess+ " " + generateHint(guess))
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

  // generateSolution();
  getPrompt();
}
