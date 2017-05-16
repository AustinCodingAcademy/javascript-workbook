'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// ifthisistrue ? dothis : otherwise this ;


function rockPaperScissors(hand1, hand2) {

  const h1 = hand1;
  const h2 = hand2;
  if (!h1 || !h2) {return "Bad input";}
  const h1w = "Hand one wins!";
  const h2w = "Hand two wins!";

  if (h1 === h2) {return "It's a tie!";}
  else {
    switch (h1) {
    case 'rock':
      return (h2==='scissors'?h1w:h2w);
    case 'paper':
      return (h2==='rock'?h1w:h2w);
    case 'scissors':
      return (h2==='paper'?h1w:h2w);
    default:
      console.log('something broke');
      break;
    }
  }

}

function getPrompt() {
  rl.question('\nhand1: ', (answer1) => {
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
  });
} else {

  getPrompt();

}
