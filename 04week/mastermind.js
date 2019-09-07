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

//Call or pass in guess, which would be the users input.
//let variables which that split the string into an array

//let a variable correctLetterLocations equal 0 by default, so you it will increment when the user guesses a correct letter in the correct location.
//(for loop)
//Compare solution to the users guess by checking each index. 
//Increment correct letter location when guess index matches solution index.
//Set the rest of the solution to null.

function generateHint(guess) {

  let solutionArray = solution.split("");
  let guessArray = guess.split("");

  let correctLetterLocations = 0;

  for(let i=0; i<solutionArray.length; i++){
    if(solutionArray[i] === guessArray[i]){
     correctLetterLocations++;
     solutionArray[i] = null 
    }
  }

//let a variable correctLetters equal 0 by default, so it will increment when the user guesses a correct letter.
//(for loop)
//Compare solution to the users guess by running through and checking each index.
//let targetIndex 
//Compare the indexes of guessArray to the solutionArray, if greater than -1, in other words if any indexes match, increment correct letter by 1
//what doesnt equal set to null.

//return the number of correct locations dash correct letters

  let correctLetters = 0;

  for(let i=0; i<solutionArray.length; i++){
   let targetIndex = solutionArray.indexOf(guessArray[i]);
   if(targetIndex > -1){
    //  console.log(targetIndex)
     correctLetters++;
     solutionArray[targetIndex] = null 
   }
  }
  return `${correctLetterLocations}-${correctLetters}`
}

//Create function to check and make sure every users input is valid by removing extra  spaces and turning to lowercase.
//Guess has to be equal to 4.

  function isValid(guess)  { console.log(guess)
   if(guess.length === 4){
     return true
   } else {
     return false
   }
 }

//Create counter function to allow user to input 10 tries max.

 function maxTries(guesses) {
   if (guesses.length <= 10) {
     return true 
   } else {
     return false
   }
 }

//Play Game
//Keep track of users guesses maxTries().

//Check to make sure users input isValis()

//If users guess equals solution, console.log YOU WIN!
//If not generateHint().
//let variable hint equal generateHint() pass in the users guess
//Pass in the guess and hint and push it to the board, print.

//When users guess does not equal solution console log try again!
//console log # of try user is on. 

//if input is not valid console log enter valid  guess

//if users inputs are greater than 10 console log you lost the game!

function mastermind(guess) {
  // Comment this out to generate a random solution
  guess.toLowerCase().trim()

  if (maxTries(board)) {

  if(isValid(guess)){

  if(guess === solution){
  console.log("You guessed it!")
  return "You guessed it!"
}   else{
  let hint = generateHint(guess);
  board.push(`${guess} ${hint}`)
  console.log("Try Again")
  console.log(board.length) 
}
  } else  {
    console.log("Please Enter Valid Guess")
  }
} else {
  console.log("You Ran Out Of Turns!")
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
