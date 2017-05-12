'use strict';

const assert = require('assert');
//const colors = require('colors/safe');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let board = [];
let solution = '';
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

function generateHint(guess, solution) {
    function split(string) {
        return string.split('');
    }
    solution = split(solution);
    guess = split(guess);

    let sameLetterWrongPlace = 0;
    let sameLetterRightPlace = 0;
    for (let i = 0; i < solution.length; i++) {
        console.log(`solution: ${solution}`);
        console.log(`guess: ${guess}`);
        if (solution[i] === guess[i]) {
            solution[i] = null;
            console.log(solution);
            sameLetterRightPlace++;
        } else if (solution.includes(guess[i])) {
            sameLetterWrongPlace++;
        }
        console.log(`_____________`)
    }
    let returnString = sameLetterRightPlace + '-' + sameLetterWrongPlace;
    return returnString;

}

function mastermind(guess) {
    (board.push(guess));
    if (guess === solution) {
        return ("You guessed it!");
    } else {
        return generateHint(guess, solution);
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

    generateSolution();
    getPrompt();
}
