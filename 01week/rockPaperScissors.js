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

//console.log('Hand 1 is: ' + h1 + ' '  + 'and Hand 2 is: ' + h2);

  //if h1 or h2 is blank ask player to input hand
  if(h1===""||h2===""){
    return "Please input your hand(s) in the terminal."
  }
  //if h1 is the same as hand 2 state that it is a tie.
  else if (h1===h2){
    return "It's a tie!"
  }
  
  //h1 victory conditions
  if(h1==="scissors" && h2==="paper"|| h1==="paper" && h2==="rock"|| h1==="rock" && h2==="scissors"){
    return "Hand one wins!"
  }
  
  //h2 victory conditions
  else if (h1==="paper" && h2==="scissors"||h1==="rock" && h2==="paper" || h1==="scissors" && h2==="rock"){
    return "Hand two wins!"
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
