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
let userPlays = 0;



function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(`${i+1}: ${board[i]}`);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    
    if( !solution.split('').includes(letters[randomIndex]) ){
      solution += letters[randomIndex];
    }
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function isValid (guess) {
  let guessArr = guess.split('');
  let correctCount = 0;

  if (guessArr.length === 4) {
      guessArr.forEach((guessLetter) => {
      //console.log(guessLetter)
      //this gives me values that I'm looking for, but guess.indexOf(letters) does not. Why?
      if(letters.indexOf(guessLetter) < 0) {
        console.log('Remember: the solution can only contain letters a-h');
        return false;
    } else {
      correctCount ++;
    }
  }); if (correctCount == 4){
    return true;
      } 
  } else {
    return false;
  };
};


//what do I need to pass to generateHint(??)
function generateHint(guess) {

  let guessArr = guess.split('');
  let solutionArr = solution.split('')
  let correctSpot = 0;
  let correctChar = 0;
  
  for(let x = 0; x < guess.length; x++){
    let targetIndex = solutionArr.indexOf(guessArr[x]);
    //if guessArr at x is equal to solution at x, then return a red piece. else if guessArr at x has an indexOf >= 0, return white, else return keep trying
    if(guessArr[x] == solutionArr[x]){
      correctSpot ++;
      solutionArr[x] = null;
      console.log('1')
      //another if statement that checks for a duplicate within the guessArr
    } else if (targetIndex >= 0){
      correctChar ++;
      solutionArr[targetIndex] = null;
      console.log('2');
    }
    console.log(solutionArr, x)
  }
  console.log(correctSpot + '-' + correctChar)
  return correctSpot + '-' + correctChar;
};



function mastermind(guess) {
  solution = 'abcd'; // Comment this out to generate a random solution

  console.log(isValid(guess));

  if(isValid(guess)){

    if(guess == solution) {
      console.log('You guessed it!')
      return 'You guessed it!';
    } else {
      generateHint(guess);
      board.push(guess);
    }
    userPlays ++
  }
};

function gameOver(){
  if (userPlays == 11){
    console.log(`game over - the correct solution was ${solution}`);
    process.exit();
  }
}


function getPrompt() {
  rl.question('guess: ', (guess) => {
    // if (userPlays < 10) {
      mastermind(guess);
      gameOver();
      printBoard();
      getPrompt();
  // } else if (userPlays == 10) {
  //   console.log(`game over - the correct solution was ${solution}`);
  //   process.exit();
  // }
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
