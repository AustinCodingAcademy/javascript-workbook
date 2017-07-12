'use strict';
// Rock Paper Scissors.
// global variables go here
var player;
var computer;
// Player 1 is the user

function playerChoice() {
  player = prompt('Rock, Paper or Scissors?');
  player = player.toLowerCase();
}

playerChoice();

// Player 2 is the computer

function computerChoice() {
  var choice = Math.floor((Math.random() * 3) + 1);
  if (choice === 1) {
    computer = 'rock';
  } else if (choice === 2) {
    computer = 'paper';
  } else {
    computer = 'scissors';
  }
}

computerChoice();

function checkForWin() {
  if (player === 'rock') {
    if (computer === 'scissors') {
      console.log('You Win');
    } else if (computer === 'paper') {
      console.log('Computer wins');
    } else {
      checkForTie();
    }
  } else if (player === 'paper') {
    if (computer === 'rock') {
      console.log('You Win');
    } else if (computer === 'scissors') {
      console.log('Computer Wins');
    } else {
      checkForTie();
    }
  } else if (player === 'scissors') {
    if (computer === 'paper') {
      console.log('You win');
    } else if (computer === 'rock') {
      console.log('Computer Wins');
    } else {
      checkForTie();
    }
  }
}

checkForWin();

// Tyring out a ternary operator. this works.
function checkForTie() {
  player === computer ? console.log('Tie') : console.log('You didn\'t spell something right');
}

function printChoices() {
  console.log('You chose ' + player + '. The Computer chose ' + computer + '.') ;
}

printChoices();
//
// function logWin() {
//
// }

// There are 6 win combinations
// There are 3 Tie combinations
// A win/tie message is printed to the console
