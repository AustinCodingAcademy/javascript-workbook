'use strict';



var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var comp;
//initialize comp globally for both functions to use

function rockPaperScissors(hand1) {

  sophi();
   
  
  // Write code here
  if (hand1.toLowerCase() === comp){
    return('It\'s a tie!')
  }
  //
  if (hand1.toLowerCase() === 'rock' ){
    if (comp === 'scissors'){
      return 'Hand one wins!';
    }
    //specify so someone cant just win without typing an answer
    if (comp === 'paper'){
      return 'Hand two wins!';
    }
  }
  //
  if (hand1.toLowerCase() === 'paper'){
    if (comp === 'rock'){
      return 'Hand one wins!';
    }
    if (comp === 'scissors'){
      return 'Hand two wins!';
    }
  }
  //
  if (hand1.toLowerCase() === 'scissors'){
    if (comp === 'paper'){
      return 'Hand one wins!';
    }
    if (comp === 'rock'){
      return 'Hand two wins!';
    }
  }

}

function sophi() {
  
  var soph = Math.random();

//keep variable local, otherwise will not reset when main function *getPromt* resets
//will keep same variable from intial intialization
 
  if (soph >= 0 && soph <= 0.333333333333333) {
	comp = "rock";
  } 
  else if (soph >= 0.333333333333334 && soph <= 0.666666666666666) {
	comp = "scissors";
  } 
  else if (soph >= 0.666666666666667 && soph <= 1) {
	comp = "paper";
  } 
// console.log(soph);
// ^-- prints the generated computer number
  console.log("Computer: " + comp);
}  


function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    console.log( rockPaperScissors(answer1) );
    getPrompt();
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
