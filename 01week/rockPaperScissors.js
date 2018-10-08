'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function rockPaperScissors(player1, player2) {

  // Write code here

  // return a message to inform the user the results
}

// terminal game
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
      assert.equal(rockPaperScissors('rock', 'paper'), "Player two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Player two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Player one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Player two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Player two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Player one wins!");
    });
  });
} else {

  getPrompt();

}
