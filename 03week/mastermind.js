'use strict';

const assert = require('assert');
//const colors = require('colors/safe');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const board = [];
let solution = '';
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
let guessNumber = 0;


function printBoard() {
  console.log("\nGuess Number: " + guessNumber);
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
  // your code here 1-1 2-0
  var hint = '';
  var guessArray = guess.split('');
  var solutionArray = solution.split('');
  var redFlags=0;
  var whiteFlags = 0;
  var alreadyChecked = [];

  //console.log("guess array: " , guessArray);
  //check for red
  for (let i = 0; i < guessArray.length; i++){
    if (guessArray[i]===solutionArray[i]){
      alreadyChecked.push(guessArray[i]);
      //guessArray[i] = 'x';

      redFlags++;
    }
  }
  //console.log("guess array after reds: ", guessArray);
  //add redFlags and hyphen to hint
  hint+= redFlags;

  hint+= '-';

  //check for white
  for (let i = 0; i < guessArray.length; i++){
    //console.log(alreadyChecked);
    if (solutionArray.includes(guessArray[i]) && !alreadyChecked.includes(guessArray[i])){
      //console.log(i);
      whiteFlags++;
      alreadyChecked.push(guessArray[i]);

    }
  }

  // for (let i = 0; i < guessArray.length; i++){
  //   for (let h = 0; h < guessArray.length; h++){
  //     console.log('h !== i ', h !== i, ' h', h, 'i ', i );
  //     if (h !== i){
  //       console.log("alreadycheckd includes: ", guessArray[i], " ", alreadyChecked.includes(guessArray[i]));
  //       if ((guessArray[i] === solutionArray[h]) && !alreadyChecked.includes(guessArray[i]) ){
  //         whiteFlags++;
  //         alreadyChecked.push(guessArray[i]);
  //         console.log(alreadyChecked);
  //         //break;
  //
  //       }
  //     }
  //   }
  // }
  hint+= whiteFlags;
  console.log('hint ', hint);

  return hint;
}

function mastermind(guess) {
  guessNumber++;
  //solution = 'abcd';
  //generateHint(guess);

  //add to board with hints
  board.unshift( guess + ' ' + generateHint(solution, guess) );


  // end game if true
  if (guess === solution){
    return 'You guessed it!';
    //process.exit();
  } else {
    return 'Keep guessing!';
  }


}


function getPrompt() {
  rl.question('guess: ', (guess) => {
    console.log( mastermind(guess) );

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
