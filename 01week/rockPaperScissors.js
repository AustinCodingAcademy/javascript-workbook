'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//hand1 enters move, hands2 enters move
//check to see if move is valid
//if ove is invalid prompt user 

function rockPaperScissors(hand1, hand2) {

  // Write code here
 //Ask the user for a choice rock, paper, or scissor.


// playerChoice = prompt("Make a selection: rock, paper, or scissors: ");

// user choice 
// computer choice
// compare choice
// if its a tie
// compare if rocks,papers, scissors
var userchoice = prompt('do you choose rock,paper,or scissors?')
var computerChoice = Math.random()

if (computerChoice < 0.34) {
  computerChoice = 'paper'
  
} else if (computerChoice <= 0.67) {
  computerChoice = 'scissors'
  
} else if (computerChoice <= 1) {
  computerChoice = 'rock'
}

  const compare = function(choice1 ,choice2){
  // if tie
  if(choice1 === choice2){
    return  "It is a tie!"
  }
  
  // if user is rock
  if(choice1 === 'rock') {
    if(choice2 === 'scissors') {
      return 'rock wins'
    } else {
      return 'paper wins'
    }
  }
  
  // if user is paper
  if(choice1 === 'paper') {
    if(choice2 === 'rock') {
      return 'paper wins '
    } else {
      console.log('here')
      return 'scissors win'
    }
  }
  
  // if user is scissors
  if(choice1 === 'scissors') {
    if(choice2 === 'paper') {
      console.log('he')
      return 'scissors win'
    } else {
      return 'rock wins'
    }
  }
}

compare(userchoice,computerChoice)





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

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  getPrompt();

}
