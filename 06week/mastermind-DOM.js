'use strict';

//Initial global variables:

$('[data-stack]').click(function() {
  let currentStack = $(this).children();
  let lastBlock = currentStack.last();
  let block = $(this).children().detach();
})

//Get input from '<form>' using jQuery 'submit()'

$('form#mastermind').submit(function(data)) {
  console.log(data)
})

//Set that ^^ into a variable and pass into a function:

var guess = '';
var solution = 'bcad';
$('form#mastermind').submit(function(data)) {
  console.log(data)
  guess = data;
  checkForWin(guess);
})

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

//Generating a Solution
function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//Generating a Hint
function generateHint() {

  var guess = guess.split('');
  var solution = solution.split('');
    console.log(guess);
    console.log(solution);
  }

//Entering a Guess
function mastermind(guess) {
  if (guess [''] ===solution ['']) {
   return "You guessed it!";
 }
  if (guess [''] !=solution ['']) {
    return generateHint(guess, solution);
}
 var solution = 'adbc';
 var guess = 'bcda';
}

//Prompt whether Guess matches Solution's color, number or both
function getPrompt() {
  rl.question('guess: ', (guess) => {
    console.log( mastermind(guess) );
    printBoard();
    getPrompt();
  });
}

//Check Win

function checkForWin(guess, solution) {
  if (data.length !== solution.length) {
    return "Not a valid guess";
  }
  else {
    return "You win!";
  }
}

//Tests:
