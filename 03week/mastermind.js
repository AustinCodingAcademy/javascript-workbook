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
    let guessArr = split(guess);
    let solutionArr = split(solution);
    let duplicate = [];
    let exact = 0;
    let correct = 0;
    for (let i = 0; i < solutionArr.length; i++) {
        if (solutionArr[i] === guessArr[i]) {
            duplicate.push(guessArr[i]);
            exact++;
        }
        else if (solutionArr.includes(guessArr[i]) && (duplicate.includes(guessArr[i]) === false)) {
            duplicate.push(guessArr[i]);
            correct++;
        }
    }
    hint = `${exact}-${correct}`;
    return hint;
}

function mastermind(guess) {
    generateHint(guess);
    if (guess === solution) {
        return 'You guessed it!';
    }
    else {
        board.push(guess + ': ' + hint);
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
            solution = 'abcd';
            assert.equal(generateHint('abdc'), '2-2');
        });
        it('should generate hints if solution has duplicates', () => {
            solution = 'abcd';
            assert.equal(generateHint('aabb'), '1-1');
        });

    });

} else {

    generateSolution();
    getPrompt();
}
