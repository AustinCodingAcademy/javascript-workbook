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
