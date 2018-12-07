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

function generateHint(solution, guess) {
  // should take two args solution and guess
  //split solution and guess into an array for comparison
  let solutionArray = solution.split("");
  let guessArray = guess.split("");
  /*create a variable correctLetterLocations that will record how many corect " letter-locations"
  were guessed. For instance, a guess of aabc against a solution would yield one correct "letter-locations" */
  //(b). Set correctLetterLocations equal to 0.
  let correctLetterLocations = 0;

// in a for loop, iterate over the solutionArray
for (let i = 0; i < solutionArray.length; i++) {
  const letter = soutionArray[i];
  
  const guess = guessArray[i];
   if (letter === guess) {
    
    correctLetterLocations++;
    solutionArray[i] = null

   }
}

let correctLetters = 0;
for (let j = 0; j < solutionArray.length; j++) {
  const letter = solutionArray[j];
  let targetIndex = guessArray.indexOf(letter);
  
  if (targetIndex > -1) {
    correctLetters++;
    solutionArray[j] = null;

}
  
}

 // Using the colors package, return a string that prints out the hints you generated, with correctLetterLocations being red, correctLetters being white, and separated by a hyphen.
 return (
  colors.red(correctLetterLocations) + "-" + colors.white(correctLetters)
);
// your code here
}


function mastermind(guess) {
  solution = 'abcd'; // Comment this out to generate a random solution
  // your code her
  let win ="You guessed it!";
  let outOfTurns = "You ran out of turns! The solution was" + solution;
  let guessAgain = "Guess again";

  console.log(guess);

  // if guess === solution return win condition

  if (guess === solution) {
    return win
  } else {
  //if guess !== solution run the generate hint funtion with guess and solution as parameters
  //define a var called hint that collects the returned value of generateHint(solution, guess) and the hint (as a combined string) into the board
    let hint = generateHint(solution, guess);
    let guessAndHint = guess + " " + hint;
    board.push(guessAndHint);
  }
// If the board length equals 10, return 'You ran out of turns! The solution was ' and the solution. Otherwise, return 'Guess again.'.

console.log(board.length);

if (board.length === 10) {
  
  console.log(outOfTurns);
  
} else {

  console.log(guessAgain);

}
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
