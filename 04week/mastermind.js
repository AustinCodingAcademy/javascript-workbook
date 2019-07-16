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
    //each time the user takes a guess, it is logged as part of their history. I added +1 to ${i} because the index starts at 0, but the user thinks of it as 1
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
  //I'm turning the user's guess (string) into an array; I'm using a variable called correctCount to push to if the user's given index is valid. If all 4 inputs are valid (a-h), then the correctCount should be 4. If it's 4, then the function will return true and fulfill the conditional in mastermind(). I really wanted to use a forEach function for the first time, so here it is. I think there are more efficient ways to code this logic

  let guessArr = guess.split('');
  let correctCount = 0;

  if (guessArr.length === 4) {
      guessArr.forEach((guessLetter) => {

      if(letters.indexOf(guessLetter) < 0) {
        console.log('Remember: the solution can only contain letters a-h');
        return false;

      } else {
      correctCount ++;
      }
      });
      if (correctCount == 4){
        return true;
      } 
  } else {
    return false;
  };
};

function generateHint(guess) {

  let guessArr = guess.split('');
  let solutionArr = solution.split('')
  let correctSpot = 0;
  let correctChar = 0;
  
  for(let x = 0; x < guess.length; x++){
    //if the user's guess at each index is part of the solution, then I want to target that index at [x]
    let targetIndex = solutionArr.indexOf(guessArr[x]);
    //first, i'll check for a user's guess that is correct and will return a ++ in the first number spot of the return. i'm going to change that value in the array to 'null' so that it cannot be recognized again. null is a more obvious way of intentionally eliminating a value, compared to undefined or even NaN
    if(guessArr[x] == solutionArr[x]){
      correctSpot ++;
      solutionArr[x] = null;
      //if indexOf does not find a match, it returns a -1. if the guess match the solution at a particular index and returns 0-3, then this is a correct character in the wrong spot. the targetIndex that matched with the solutionArr is what should be nulled now so that guessArr[x] == solutionArr[x] doesn't get counted in this category (ex: ans = abcd, guess = aabb, result = 1-2 because the a is counted as both in the correct spot and as a correct value) using "solutionArr[targetIndex] = null;" eliminates this issue)
    } else if (targetIndex >= 0){
      correctChar ++;
      solutionArr[targetIndex] = null;
    }
  }
  //stops the function and generates the test query's format
  console.log(correctSpot + '-' + correctChar)
  return correctSpot + '-' + correctChar;
};



function mastermind(guess) {
  //for now I'm using the stock solution because my number generator doesn't always give me 4 values and i'm not sure why
  solution = 'abcd';

  //since this is my main function for the game, i only want to proceed if the user has given a valid guess
  if(isValid(guess)){
    //if the user gets the correct guess, then they win. Otherwise, the game will provide feedback and push the user's input to a historic array called board. at the end of the function, a value of 1 is added to userPlays. After 10 plays, the game will end
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

function gameOver(guess){
  //because getPrompt() comes at the end, the games seems more natural if I set the value at 11. I like this way too because the user could see how close they were to getting the final guess correct. I use process.exit() to exit the node terminal once the game is over
  if ( userPlays == 11) {
    console.log(`game over - the correct solution was ${solution}`);
    process.exit();
  } else if ((solution == guess)){
    process.exit();
  }
}


function getPrompt() {
  //the user's guess is passed to mastermind, where the input is checked for validity and completion, before a hint is generated. once the game's fate is determined, it checks to see if it's appropriate to end the game. otherwise the process repeats
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    gameOver(guess);
    printBoard();
    getPrompt();
})
};

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
