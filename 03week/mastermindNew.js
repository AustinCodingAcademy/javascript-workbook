'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
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

function generateHint(guess) {
  // your code here
  let solutionArr = solution.split(""); //taking solution string and turning it into an array
  let guessArr = guess.split(""); //taking guess from user and turning it into an array
  let red = 0;
  let white = 0;
  for (var i = 0; i < 4; i++); {
    if (solutionArr[i] === guessArr[i])
      red++;
    var match = guessArr.indexOf(solutionArr[i]);
    if (match > -1) {
      white++;
      guessArr[match] = null;

    }

  }

  white = white - red;
  console.log('hello', red, white, match)
  return (red + '' + white);

}


function mastermind(guess) {
  //if (guess.length !== solution.length) {
  //console.log('try again, pick four: ' + letters);


  // for (var j = 0; j < guessArr.length; j++) {
  //   if (guessArr.indexOf(letters[j]) === solutionArr.indexOf(letters[i])) {
  //     console.log('ok');
  //   }
  //
  //   console.log();
  //   return;
  // }

  generateHint(guess);
}








/*for (var g = 0; g < guessArr.length; g++) {
    for (var s = 0; s < solutionArr.length; s++) {
      if (solutionArr[s]  guessArr[g]) matches.push(guessArr[g]);
    }
  }
  console.log('HI', matches, guess, solution);

  return matches;

}*/



function getPrompt() {
  rl.question('guess: ', (guess) => {
    console.log(mastermind(guess));
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

  //generateSolution();
  getPrompt();
}
