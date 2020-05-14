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
    //guess.push();
    //hint.push();
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
  // your code here
  let correctLetters = 0;
  let correctLetterLocations = 0;
  let solutionArray = solution.split('');
  let guessArray = guess.split('');
  //splitting on empting string for solution and guess
  
  //console.log(solutionArray);
  //for(let i = 0; i < solutionArray.length; i++){
    guessArray.forEach((item, index) => {
      if(item === solutionArray[index]){
        correctLetterLocations += 1;
        solutionArray[index] = null;
        guessArray[index] = null;
      }
    });
    //if(solutionArray[i] === guessArray[i]){
      //if solutionArray index is equal to guessArray index  
      //correctLetterLocations +=1;
      //incremenet correctLetterLocations (comparing solution against guess)
      //solutionArray[i] = null;
      //guessArray[i] = null; 
      //set solutionArray index to null (if solution and guess match set to "null")
    
  
  //console.log(solutionArray)

  //for(let i = 0; i < solutionArray.length; i++){
    guessArray.forEach((item, index) => {
   // if(solutionArray[i] === null){
     if(item === null){
      //if null returns -1
      let targetIndex = solutionArray.indexOf(item);
     
    //let targetIndex = guessArray.indexOf(solutionArray[i]);
    //deteremine if current index in guessArray appears inside of solutionArray
    //if you dont find correctLetter "if(targetIndex > -1)"
    //console.log(targetIndex);
    if(targetIndex > -1){
      correctLetters += 1;
      solutionArray[targetIndex] = null;
      guessArray[index]= null;
    }
  }
  });
console.log(`${correctLetterLocations} - ${correctLetters}`)
return `${correctLetterLocations}-${correctLetters}`;
    }


function mastermind(guess) {
  solution = 'abcd'; // Comment this out to generate a random solution
  // your code here
   let hint = generateHint(guess);
   board.push(guess);
 
  //console.log(`${board.push(guess)}  ${board.push(hint)}`);
if(guess === solution){
  //if guess is equal to solution
  console.log('You guessed it!');
  return 'You guessed it!';
}
  if(board.length >= 10){
  console.log('You ran out of turns! The solution was ' + solution);
}else{
  console.log('Guess again.');
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
