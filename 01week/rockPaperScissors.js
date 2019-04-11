'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function rockPaperScissors(hand1, hand2) {

  var one = String(hand1).trim().toLowerCase();
  var two = String(hand2).trim().toLowerCase();

  //Invalid entry scenarios 
  if (one !== "rock" && one !== "paper" && one !== "scissors") {
    return "Require valid entry, please try again!"
  }
  else if (two !== "rock" && two !== "paper" && two !== "scissors") {
    return "Require valid entry, please try again!"
  }

  //User1 wins 
  else if ((one == "rock" && two == "scissors") || (one == "paper" && two == "rock") || (one == "scissors" && two == "paper")) {
    return "Hand one wins!"
  }
  //User1, User2 ties scenario
  else if (one == two) {
    return "It's a tie!";
  }
  //User2 wins
  else if ((one == "rock" && two == "paper") || (one == "paper" && two == "scissors") || (one == "scissors" && two == "rock")) {
    return "Hand two wins!"
  }

}

function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      //console.log(rockPaperScissors(answer1, answer2));
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
      //Hand one wins
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
      assert.equal(rockPaperScissors('paper', 'rock'), "Hand one wins!");
      assert.equal(rockPaperScissors('scissors', 'paper'), "Hand one wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");

      //Hand two wins
      assert.equal(rockPaperScissors('scissors', 'rock'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
    it('should input valid value', () => {
      assert.equal(rockPaperScissors('rcK', ' paper '), "Require valid entry, please try again!");
      assert.equal(rockPaperScissors('Paper', 'SCS'), "Require valid entry, please try again!");
      assert.equal(rockPaperScissors('rok ', 'sCsOrs'), "Require valid entry, please try again!");
    });
  });
} else {

  getPrompt();

}
