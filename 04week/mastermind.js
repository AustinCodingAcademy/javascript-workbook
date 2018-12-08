'use strict';
var colors = require('colors/safe');
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
  let solutionArray= solution.split("");
  let guessArray   = guess.split("");

  let correctLetterLocations = 0;
  for(let i=0;i<solutionArray.length;i++){
    if(solutionArray[i] === guessArray[i]){
      correctLetterLocations++;
      solutionArray[i] = null;
    }
  }
  let correctLetters = 0;
  let targetIndex = -1;
  for(let j=0;j<solutionArray.length;j++){
    if(guessArray[j] !== null)
    {
      targetIndex = solutionArray.indexOf(guessArray[j]);
      if(targetIndex > -1)
      {
        correctLetters++;
        solutionArray[targetIndex] = null;
      }
    }
    else{
      console.log('it is null');
    }
  }
  let retString = correctLetterLocations+'-'+correctLetters;
  console.log (colors.red(correctLetterLocations),'-',colors.white(correctLetters));
  return retString;

// Now that we have nulled the already counted correctLetterLocations, we can see if the guessArray contains any correctLetters that were not in the correct location. Set a variable correctLetters equal to 0, and in a for loop, again iterate over the solutionArray. Using .indexOf, determine if the item at the current index in guessArray appears inside of solutionArray. Save that index in a variable called targetIndex. Now, if targetIndex is greater that -1, increment correctLetters and set the item in solutionArray at that index equal to null.

// Using the colors package, return a string that prints out the hints you generated, with correctLetterLocations being red, correctLetters being white, and separated by a hyphen.
  // your code here
}

function mastermind(guess) {
//  solution = 'abcd'; // Comment this out to generate a random solution
  let win = "You guessed it!";
  let outOfTurns = "You ran out of turns! The solution was " + solution;

  //if guess === solution return win condition
  //if guess !=== solution run generate hint funtion with guess and solution as parameter
  let hint;
  if(guess === solution)
    return win;
  else
  {
    hint = generateHint(solution,guess);
    let toBePushed = guess+hint;
    board.push(guess+hint);
    if(board.length >= 10)
    {
      console.log(outOfTurns);
      return outOfTurns;
    }
    else
    { 
      console.log('Guess again.');
      return hint;
    }
  }
}


function getPrompt() {
  rl.question('guess: ', (guess) => {
    let retStr = mastermind(guess);
    console.log(retStr);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
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
      assert.equal(generateHint(solution,'abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint(solution,'aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}
