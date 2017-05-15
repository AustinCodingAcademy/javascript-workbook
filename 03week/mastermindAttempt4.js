'use strict';

const assert = require('assert');
//const colors = require('colors/safe');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const board = [];
let solution = 'abcd';
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

function generateHint(solution, guess) {


  function mastermind(guess) {
    function mastermind(guess) {
      let guessArr = guess.split(""); //taking guess from user and turning it into an array
      let solutionArr = solution.split(""); //taking solution string and turning it into an array
      if (guess.length !== solution.length) {
        console.log('try again, pick four: ' + letters);
      }

      var matches = [];
      var solutionTest = {};
      for (var i = 0; i < solutionArr.length; i++) {
        if (solutionTest[guessArr[0]] = true) {
          console.log('1');
        }
        if (solutionTest[guessArr[1]] = true)
          console.log('2');
        return;

        for (var j = 0; j < guessArr.length; j++) {
          if (solutionTest[guessArr[j]])
            matches.push(guessArr[j]);
        }
        console.log(solutionTest);
        return matches;
      }
    }

    function getPrompt() {
      rl.question('guess: ', (guess) => {
        console.log(mastermind(guess));
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

      //  generateSolution();
      getPrompt();
    }
