"use strict";
var colors = require("colors");

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

let board = [];
let solution = "";
let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

function printBoard() {
for (let i = 0; i < board.length; i++) {
console.log(board[i]);
}
}

function generateSolution() {
for (let i = 0; i < 4; i++) {
const randomIndex = getRandomInt(0, letters.length);
solution += letters[randomIndex];
console.log(solution);
}
}

function getRandomInt(min, max) {
return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(guess) {
// your code here
let solutionArray = solution.split("");
let guessArray = guess.split("");
let correctLetterLocations = 0;
for (let i = 0; i < 4; i++) {
if (solutionArray[i] === guessArray[i]) {
correctLetterLocations++;
solutionArray[i] = null;
}
}
let correctLetters = 0;
for (let i = 0; i < 4; i++) {
let targetIndex = solutionArray.indexOf(guessArray[i]);
if (targetIndex > -1) {
correctLetters = correctLetters +1;
solutionArray[targetIndex] = null;
}
}
console.log(correctLetterLocations + "-" + correctLetters + "-" + board.length);

}
function guessHint(guess) {
board.push(hint);
// console.log(hint);
}

function mastermind(guess) {
// const solutionArr = "abcd"; // Comment this out to generate a random solution
// your code here
if(guess.length === 4 && guess !== solution) {
generateHint(guess);
} 
else if(solution === guess) {
console.log('You guessed it!');
} 
else if (board.length === 10){
console.log('Ran out of Guesses');
}
else {
guessHint(guess);
console.log("Guess again.")
}
}

function getPrompt() {
rl.question("guess: ", guess => {
mastermind(guess);
printBoard();
getPrompt();
});
}

// Tests

if (typeof describe === "function") {
solution = "abcd";
describe("#mastermind()", () => {
it("should register a guess and generate hints", () => {
mastermind("aabb");
assert.equal(board.length, 1);
});
it("should be able to detect a win", () => {
assert.equal(mastermind(solution), "You guessed it!");
});
});

describe("#generateHint()", () => {
it("should generate hints", () => {
assert.equal(generateHint("abdc"), "2-2");
});
it("should generate hints if solution has duplicates", () => {
assert.equal(generateHint("aabb"), "1-1");
});
});
} else {
generateSolution();
getPrompt();
}