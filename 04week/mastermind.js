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

function generateHint(prediction) {
  // your code here

  // set up an array of the guess 
  let guessArray = prediction.split("");
  // set up an array of the solution
  let solutionArray = solution.split("");
  // counter for letters in the solution
  let answer = 0;
  // counter for correct placement AND letter
  let position = 0;


  // this for each loop will check if there is a letter in the right place
  guessArray.forEach((letter, index) =>{

    if(letter === solutionArray[index]){
      solutionArray[index] = null;
      position++;

    }
  })
  // this for each loop will check if there are any letters in the right place
  guessArray.forEach((letter, index) =>{
    let piece = solutionArray.indexOf(letter);
    if (piece !== -1){
      solutionArray[piece] = null;
      answer++;

    }

  })

  // print statements
  if(position == 4){
    console.log("You Guessed It!")
  }
  else {
    console.log(position + " letters are in the right spot")
    console.log(answer + " are in the solution")

  }
}

function mastermind(guess) {
  solution = 'abcd'; // Comment this out to generate a random solution
  // your code here

  //pass the guess to generateHint
  generateHint(guess);



  



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
