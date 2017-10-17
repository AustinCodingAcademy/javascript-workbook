'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function rockPaperScissors(hand1, hand2) {
  let h1lc= hand1.toLowerCase().trim();
  let h2lc= hand2.toLowerCase().trim();
  // Write code here

    if (h1lc===h2lc) {
      return "It's a tie!";
    } else if (h1lc=== 'rock' && h2lc==='scissors'){
      return 'Hand one wins!';
    }
    else if (h1lc==="rock" && h2lc==='paper'){
      return 'Hand two wins!'
    } else if (h1lc==="paper" && h2lc==='rock'){
      return 'Hand one wins!'
    } else if (h1lc==='paper' && h2lc==='scissors'){
      return 'Hand two wins!'
    } else if (h1lc==='scissors' && h2lc==='paper'){
      return 'Hand one wins!'
    } else if (h1lc==='scissors' && h2lc==='rock'){
      return 'Hand two wins!'
    } else {
      return 'invalid input'
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
      assert.equal(rockPaperScissors('paper', 'rock'), "Hand one wins!");
      assert.equal(rockPaperScissors('scissors', 'rock'), "Hand two wins!");
      assert.equal(rockPaperScissors('scissors', 'paper'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
    it ('should test for NaN', () => {
      assert.notEqual(rockPaperScissors('NaN','NaN'), "Hand one wins");
      assert.notEqual(rockPaperScissors('NaN','NaN'), "Hand two wins");
      assert.notEqual(rockPaperScissors('NaN','NaN'), "It's a tie!");
      assert.notEqual(rockPaperScissors('rock','NaN'), "Hand one wins");
      assert.notEqual(rockPaperScissors('paper','NaN'), "Hand two wins");
      assert.notEqual(rockPaperScissors('scissor','NaN'), "It's a tie!");
      assert.notEqual(rockPaperScissors('NaN','rock'), "Hand one wins");
      assert.notEqual(rockPaperScissors('NaN','paper'), "Hand two wins");
      assert.notEqual(rockPaperScissors('NaN','scissors'), "It's a tie!");
    });
    it ('should test for a blank or undefined entry', () => {
      assert.notEqual(rockPaperScissors('',''), "Hand one wins");
      assert.notEqual(rockPaperScissors('',''), "Hand two wins");
      assert.notEqual(rockPaperScissors('',''), "It's a tie");
      assert.notEqual(rockPaperScissors('',''), "Hand one wins");
      assert.notEqual(rockPaperScissors('',''), "Hand two wins");
      assert.notEqual(rockPaperScissors('',''), "It's a tie");
      assert.notEqual(rockPaperScissors('',''), "Hand one wins");
      assert.notEqual(rockPaperScissors('',''), "Hand two wins");
      assert.notEqual(rockPaperScissors('',''), "It's a tie");
    });
    it ('should test for a  number or zero', () => {
      assert.notEqual(rockPaperScissors('1','2'), "Hand one wins");
      assert.notEqual(rockPaperScissors('1','2'), "Hand two wins");
      assert.notEqual(rockPaperScissors('1','2'), "It's a tie");
      assert.notEqual(rockPaperScissors('0','0'), "Hand one wins");
      assert.notEqual(rockPaperScissors('0','0'), "Hand two wins");
      assert.notEqual(rockPaperScissors('0','0'), "It's a tie");
    });
    it ('should test for a  boolean', () => {
      assert.notEqual(rockPaperScissors('true','false'), "Hand one wins");
      assert.notEqual(rockPaperScissors('true','false'), "Hand two wins");
      assert.notEqual(rockPaperScissors('true','false'), "It's a tie");
    });
    it ('should test for a null', () => {
      assert.notEqual(rockPaperScissors('null','null'), "Hand one wins");
      assert.notEqual(rockPaperScissors('null','null'), "Hand two wins");
      assert.notEqual(rockPaperScissors('null','null'), "It's a tie");
    });
  });

} else {

  getPrompt();

}
