'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let guess= ' ';
let solution= 'abcd';
let correctLetterLocations = 0;
let correctLetters = 0;
let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
var guessArray = guess.split('');
var solutionArray = solution.split('');


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

function validInput(guessArray){
  if(!guessArray.includes(letters)){
    console.log('choose another letter a-h')
  } else { 
    return true
}
}

//dinh code starting here

function correctLetter(guessArray, solutionArray) {
for (let i = 0; i < solutionArray.length; i++) {
  if (solutionArray[i].includes(guessArray[i])) {
    correctLetterLocations += 1;
    correctLetterLocations[i] = null;
  }
}
}

function exactLetterLocation(guessArray, solutionArray) {
for (j = 0; j < solutionArray.length; j++) {
  let targetIndex = solutionArray[j].includes(guessArray
    [j]);
  console.log(targetIndex);
  if (targetIndex > -1) {
    console.log("test")
    correctLetters += 1;
    correctLetterLocations[j] = null;
  }
}
}

console.log(`Amount of correct letter locations is ${correctLetterLocations}`);
console.log(`Amount of correct letters is ${correctLetters}`);




function generateHint(guess) {
  // your code here
  const guessArr = guess.split('');
  let correctLetter = 0;
  let correctPosition = 0;
  guessArr.forEach((letter, index)=>{
    if(solution.indexOf(letter) !== -1){
      correctLetter++;
      if(solution[index] === letter){
        correctPosition++;
      }
    }
  })
  return `${correctLetter} are correct, ${correctPosition} are in the right place`
}

// function checkForWin()  {
//   let (guessArray === solutionArray) {
//     console.log ("You guessed it!");
//   }
//}
function mastermind(guess) {
  // Comment this out to generate a random solution
  // your code here
  validInput(guess)
}


function getPrompt() {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
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
