'use strict';

const assert = require('assert');
const colors = require('colors/safe');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let board = [];
let solution = '';
let hint = '';
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

function split(string) {
  return string.split('');
}

function generateHint(guess) {
  // this is taking the guess and splitting it up into individual letters
    let guessArr = split(guess);
    // this is taking the solution and splitting it up into individual letters
    let solutionArr = split(solution);
    // using this array to check for duplicates
    let duplicate = [];
    // exact is when the guess and solution index are the same letter and in the same spot
    let exact = 0;
    // correct is when the guess and solution have the same letter but they are not in the same spot
    let correct = 0;

    for (let i = 0; i < solutionArr.length; i++) {
      // this is creating the hint for exact, if solution = exact and are in the same index spot, add one to exact
        if (solutionArr[i] === guessArr[i]) {
            duplicate.push(guessArr[i]);
            exact++;
        }
        // if the guessArr includes a letter in the solutionArr but they are not in the same spot, add one to correct, but also check to make sure it is not a duplicate
        else if (solutionArr.includes(guessArr[i]) && (duplicate.includes(guessArr[i]) === false)) {
            duplicate.push(guessArr[i]);
            correct++;
        }
    }
    // this is creating the hint score to display numbers with a dash inbetween them
    hint = `${exact}-${correct}`;
    return hint;
}

function mastermind(guess) {
    generateHint(guess);
    // this is checking for a win
    if (guess === solution) {
        return 'You guessed it!';
    }
    // if your guess does not equal the solution the show your guess with the hint next to it
    else {
        board.push(guess + ': ' + hint);
        return 'KEEP GUESSING!';
        printBoard();
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
            //to pass the test you have to display the exact words 'You guessed it!'
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
