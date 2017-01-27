'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



function rockPaperScissors(hand1, hand2) {
  //converts word to lower case
  var p1 = hand1.toLowerCase();
  var p2 = hand2.toLowerCase();
  //was attempting to make a score counter, but nothing seems to be working. 
  var p1Wins = 0;
  var p2Wins = 0;
  var tie = 0;
  var score = 'Current score-   p1: ' + p1Wins + '    p2: ' + p2Wins + '    tie: ' + tie;

  //checks to see if the person at least got the first letter correct. just in the event of a typo. also allows the use to just type r,p, or s
  if (p1.slice(0, 1) === 'r') {
    p1 = 'rock';
  }
  if (p1.slice(0, 1) === 'p') {
    p1 = 'paper';
  }
  if (p1.slice(0, 1) === 's') {
    p1 = 'scissors';
  }

  if (p2.slice(0, 1) === 'r') {
    p2 = 'rock';
  }
  if (p2.slice(0, 1) === 'p') {
    p2 = 'paper';
  }
  if (p2.slice(0, 1) === 's') {
    p2 = 'scissors';
  }

  //filters any answers that arent rock paper or scissors out and anything spelt incorrectly
  if (p1 !== 'rock' && p1 !== 'paper' && p1 !== 'scissors') {
    return 'Invalid entry player 1, please try again.';
  }
  if (p2 !== 'rock' && p2 !== 'paper' && p2 !== 'scissors') {
    return 'Invalid entry player 2, please try again.';
  }
  //checks for tie
  if (p1 === p2) {
    tie++;
    console.log(score);
    return "It's a tie!";
  }

  //checks all three options for p1 vs p2
  if (p1 === 'rock' && p2 === 'paper') {
    p1F();
    return 'Hand two wins!';
  } else {
    p2F();
    return 'Hand one wins!';
  }
  if (p1 === 'paper' && p2 === 'rock') {
    p1F();
    return 'Hand one wins!';
  } else {
    p2F();
    return 'Hand two wins!';
  }
  if (p1 === 'scissors' && p2 === 'paper') {
    p1F();
    return 'Hand one wins!';
  } else {
    p2F();
    return 'Hand two wins!';
  }

  function checkForWin(play1, play2) {
    if (play1 === 2) {
      console.log('Hand 1 wins 2 out of 3! Reseting...');
      p1Wins = 0;
      p2Wins = 0;
      tie = 0;
      getPrompt();
    }
    if (play2 === 2) {
      console.log('Hand 2 wins 2 out of 3! Reseting...');
      p1Wins = 0;
      p2Wins = 0;
      tie = 0;
      getPrompt();
    }
  }
  function p1F (){
    p1Wins++;
    console.log(score);
    //checkForWin(p1Wins, p2Wins);
  }
  function p2F (){
    p1Wins++;
    console.log(score);
    //checkForWin(p1Wins, p2Wins);
  }
}



function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log(rockPaperScissors(answer1, answer2));
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', function () {
    it('should detect a tie', function () {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', function () {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
  });
} else {

  getPrompt();

}