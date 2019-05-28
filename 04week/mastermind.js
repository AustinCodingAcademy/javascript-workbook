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
let correctLetterLocations=0, correctLetters=0;
let solutionArray=solution.split('');
let guessArray= guess.split('');
// search letter same position
guessArray.forEach((item,index) =>
{
if (item === solutionArray[index])
{
correctLetterLocations +=1;
solutionArray[index]='';
guessArray[index]='';
}
});

guessArray.forEach((item,index) =>
{ if ( item !==''){
let findIndex =solutionArray.indexOf(item);
if (findIndex >-1 )
{
correctLetters+=1;
solutionArray[findIndex]='';
guessArray[index]='';
}
}
});

return `${correctLetterLocations}-${correctLetters}`;

// your code here
}

 function mastermind(guess) {
solution = 'abcd'; // Comment this out to generate a random solution
// // your code here
 let hint=generateHint(guess);
 board.push[`${guess} ${hint}`];

 }
function mastermind(guess) {
solution = 'abcd'; // Comment this out to generate a random solution
let hint = generateHint(guess);
console.log(hint)
board[board.length]=`${guess} ${hint}`;

//check if guess is equal to solution after converting to string.
let solutionArray1 = solution.split('');
console.log(solutionArray1)
let guessArray1 = guess.split('');
console.log(guessArray1)
return arraysMatch(solutionArray1, guessArray1);
}

var arraysMatch = function (solutionArray, guessArray) {

// Check if the arrays are the same length
if (solutionArray.length !== guessArray.length) 
return "Try again";

// Check if all items exist and are in the same order
for (var i = 0; i<solutionArray.length; i++) {
if (solutionArray[i] !== guessArray[i]) 
return "Try again";
}
return 'You guessed it!'
}

function getPrompt() {
rl.question('guess: ', (guess) => {
let k = mastermind(guess)
if ( k === 'You guessed it!' ){
console.log(k)
process.exit(0);
}
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






