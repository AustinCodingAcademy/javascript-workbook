'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// ifthisistrue ? dothis : otherwise this ;


function rockPaperScissors(hand1, hand2) {

  const h2w = "Computer wins!\n";
  const com = "Computer pics "
  switch (hand1) {
  case 'rock':
    console.log(com + 'paper!');
    return h2w;
  case 'paper':
    console.log(com + 'scissors!');
    return h2w;
  case 'scissors':
    console.log(com + 'rock!');
    return h2w;
  default:
    console.log('something broke');
    break;
  }

  // const h1 = hand1;
  // const h2 = hand2;
  // if (!h1 || !h2) {console.log('Invalid input, yo');}
  // const h1w = "Hand one wins!";
  // const h2w = "Hand two wins!";
  //
  //
  // if (h1 === h2) {
  //   return "It's a tie!";
  // } else {
  //   switch (h1) {
  //   case 'rock':
  //     return (h2==='scissors'?h1w:h2w);
  //   case 'paper':
  //     return (h2==='rock'?h1w:h2w);
  //   case 'scissors':
  //     return (h2==='paper'?h1w:h2w);
  //   default:
  //     console.log('something broke');
  //     break;
  //   }
  // }

}

function getPrompt() {
  rl.question('\nhand1: ', (answer1) => {
    console.log( rockPaperScissors(answer1, 0) );
    getPrompt();
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
