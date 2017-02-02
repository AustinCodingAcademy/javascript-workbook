'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function rockPaperScissors(hand1, hand2) { // rock paper and scissors are hard coded

// use a random number to allow a a psuedo like AI
function AI(){
 var computer = (Math.random());
var result;
  switch(computer){
    case computer <= .33:
       result = "scissors";
       break;
    case computer > .33 || computer <= .66:
       result = 'paper';
       break;
    case computer > .66:
       result = 'rock';
      break;
  }
}

  // Write code here
if(hand1 === 'paper' && hand2 === 'rock'){
  return "Hand1 Wins";
  }
if(hand1 === 'scissors' && hand2 === 'paper'){
  return "Hand1 wins!";
    }
if(hand1 === 'rock' && hand2 === 'scissors'){
  return "Hand one wins!";
    }
if(hand1 === hand2){
  return "It's a tie!";
}

else{
  return "Hand two wins!";
} 

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
