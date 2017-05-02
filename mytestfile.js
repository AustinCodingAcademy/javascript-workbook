'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function rockPaperScissors(hand1, hand2) {

  // Write code here

  hand1 = hand1.prompt("Player1: Please enter either 'rock', 'paper' or 'scissors'").toLowerCase();
  hand2 = hand2.prompt("Player2: Please enter either 'rock', 'paper' or 'scissors'").toLowerCase();

  if((hand1!== 'rock') || (hand1 !== 'paper') || (hand1 !== 'scissors') ||
     (hand2!== 'rock') || (hand2 !== 'paper') || (hand2 !== 'scissors')){
    return false;
  }

  if(hand1 === hand2){
    return "It's a tie!";
  }else if((hand1 === 'rock' && hand2 === 'scissors') || (hand1 === 'scissors' && hand2 === 'paper') || (hand1 === 'paper' && hand2 === 'rock')){
    return 'Player1 wins!';
  }else{
    return 'Player2 wins!'
  }

function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
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
