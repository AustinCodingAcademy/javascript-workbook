'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = []; //emmpty array for the board to be built inside
let solution = ''; //empty string to hold auto generated solution
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']; //letter choices

function printBoard() { //function to keep board printing to concole as long as game keeps going
  for (let i = 0; i < board.length; i++) //starting iterator
    console.log(board[i]); //prints out the board with new play to the console
}

function generateSolution() { //function to randomely generate solution string
  for (let i = 0; i < 4; i++) { //starting iterator to run through the length of the string we are building
    const randomIndex = getRandomInt(0, letters.length); //setting const to hold the index returned from the getRandomInt function after being passed 0 as min and letters.length as max
    solution += letters[randomIndex]; //putting the letters randomely generated into the previously empty solution string
    //gets a random number index and puts whats there inside solution variable
  }
}

function getRandomInt(min, max) { //function that generates random number for generateSolution to use as index reference
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(guess) { //function that will take the guess from the user and test it against solution to return clues to the user
  let solutionArr = solution.split(""); //takes solution string and converts to array
  let guessArr = guess.split(""); //takes guess string and converts to array
  let red = 0; //sets 'red peg' variable beginning at 0
  let white = 0; //sets 'white peg' variable beginning at 0
  for (var i = 0; i < 4; i++) { //starts iterator
    var match = guessArr.indexOf(solutionArr[i]); //sets var match for when there are matches of solution array characters inside guess array
    if (solutionArr[i] === guessArr[i]) { //looking for exact matches between both character and index
      red++; //if exact match is found red is increased by one for each that is found
    }
    if (match > -1) { //if the match as defined above exists at all inside the guess array (not index specific)
      white++; //for each instance of a match(regardless of index) white is increased by one
      guessArr[match] = null; //this strikes characters that have already been matched so they aren't counted multiple times
    }
  }

  white = white - red; //because reds would also be counted as whites(ie counted twice) they need to be taken back out prior to returning results

  return (red + '-' + white); //returning results of generateHint as two values combined by '-'
}



function mastermind(guess) { //function that takes guess from user and tests it to see if it is a winning match
  if (guess === solution) { //if they match in every way

    return ('You guessed it!'); //user wins and return out
  }

  board.push(guess + ' ' + generateHint(guess)); //adding current guess(which is obvi not a winner) and the result of generateHint to the board letting user see the progression of the game and hints
}


function getPrompt() { //function for prompting user for input
  rl.question('guess: ', (guess) => { //presenting prompt 'guess' and capturing response as guess}
    console.log(mastermind(guess)); //logging what will run once mastermind function is inititated which is the entire game basically
    printBoard(); //after guess and solution are compared this prints the running board to the console for the user
    getPrompt(); //back for another guess
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
