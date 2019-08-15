'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function rockPaperScissors(hand1, hand2) {

//Type Code Here...

let h1 = hand1.toLowerCase().trim();
let h2 = hand2.toLowerCase().trim();

console.log('Hand 1 is: ' + h1 + ' '  + 'and Hand 2 is: ' + h2);

  if (h1===h2) {
    console.log("It is a tie!")
  }
  else if (h1==="rock"&&h2==="paper"){
    console.log("Hand 2 wins!")
  }
  else if (h1==="rock"&&h2==="scissors"){
    console.log("Hand 1 wins!")
  }
  else if (h1==="paper"&&h2==="rock"){
    console.log("Hand 1 wins!")
  }
  else if (h1==="paper"&&h2==="scissors"){
    console.log("Hand 2 wins!")
  }
  else if (h1==="scissors"&&h2==="paper"){
    console.log("Hand 1 wins!")
  }
  else if (h1==="scissors"&&h2==="rock"){
    console.log("Hand 2 wins!")
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
