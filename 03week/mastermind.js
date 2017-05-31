// function generateHint(solution, guess) {
//     // split guess and solution into arrays
//     // let solutionArray = solution.split("");
//     // let guessArray = guess.split("");
//     // console.log(guessArray);

//     //defining position to check against
//     //    //iterating thru 
// let position = 0;
// let letter = 0;
//     // for (var i = 0; i < 4; i++) {
//     //     if (guessArray[i] === solutionArray[i]) {

//     //         // i++;

//     //         solutionArray[i] = null;
//     //     }
//     // }

//     // for (var letter = 0; letter < 4; letter++) {
//     //     let solutionIndex = solutionArray.indexOf(guessArray[letter]);
//     //     if (letter > -1) {

//     //         // letter++;

//     //         solutionArray[solutionIndex] = null;

//     //     }

//     // }
//     // console.log(position + "-" + letter);
//     return true
// }

// function mastermind(guess) {
//     // CHECK FOR win!!!!

//     // if (solution === guess) {
//     //     return "You guessed it!"
//     // }
//     // // run generateHint if not correct
//     // else {
//     //     let hint = generateHint(solution, guess);
//     //     board.push(hint + ": " + guess);
//     //     printBoard();
//     //     return "Try again Loser!"
//     // }
// }
// // COMPARE ARRAY VALUES


// // if (guessArray[0] === solutionArray[0]) {
// //     console.log(solutionArray[0]);
// // } else {
// //     console.log(guessArray[0]);
// // }

// // if (guessArray[1] === solutionArray[1]) {
// //     console.log(solutionArray[1]);
// // } else {
// //     console.log(guessArray[1]);
// // }
// // if (guessArray[2] === solutionArray[2]) {
// //     console.log(solutionArray[2]);
// // } else {
// //     console.log(guessArray[2]);
// // }

// // if (guessArray[3] === solutionArray[3]) {
// //     console.log(solutionArray[3]);
// // } else {
// //     console.log(guessArray[3]);
// // }



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




function generateHint(guess) {
    // splint guess string and solution into arrays
    let solutionArray = solution.split("");
    let guessArray = guess.split("");

    // iteratate thru both arrays and compare index values
    // add one point to position variable if equal
    let position = 0;
    let letter = 0;

    for (var i = 0; i < 4; i++) {
        if (guessArray[i] === solutionArray[i]) {
            position++;
            solutionArray[i] = null;
        }
    }
    // add one point to correct letter variable if
    // guess array indx values are in solutionArray
    for (var j = 0; j < 4; j++) {
        let found = solutionArray.indexOf(guess[j]);
        if (found > -1)
        // (solutionArray.includes(guessArray[j]))
        {
            letter++;
            solutionArray[found] = null;

        }
    }

    return letter + "-" + position;
}




function mastermind(guess) {
    // checkForWin
    if (solution === guess) {
        return "You guessed it!"
    }
    // run generateHint if not correct
    // push hint funtion to board
    // print board
    else {
        let hint = generateHint(solution, guess);
        board.push(hint + ": " + guess);
        printBoard();
        return "Try again Loser!"
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
