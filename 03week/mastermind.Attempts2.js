'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const board = [];
const solution = 'abcc';
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

function generateHint(guessArr, solutionIndex) {
  return guessArr + solutionIndex;
  // your code here
}

function mastermind(guess) {
  let guessArr = guess.split("");
  let solutionArr = solution.split("");
  let fullArr = solutionArr.concat(guessArr);
  let match = {};
  for (var i = 0; i < fullArr.length; i++)
    var matchLetter = fullArr[i];
  match[matchLetter] = match[matchLetter] ? match[matchLetter] + 1 : 1;


  var targetIndex = solutionArr.indexOf(matchLetter);
  var guessStr = guessArr.join('');
  var realMatch = solutionArr.includes(matchLetter);
  var matchKey = fullArr.indexOf(matchLetter);
  var solutionStr = solutionArr.join(guessArr);
  var count = (guessStr.match(solutionArr) || []).length;

  if (realMatch === true) {
    console.log(count + ' - 0');
  } else {
    console.log(count + ' - 0');
  }
  if (guess === solution) {
    return ('You guessed it!');
  }
};



function getPrompt() {
  rl.question('guess: ', (guess) => {
    console.log(mastermind(guess));
    generateHint();
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

  //  generateSolution();
  getPrompt();
}
