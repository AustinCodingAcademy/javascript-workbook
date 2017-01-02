'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function rockPaperScissors(hand1, hand2) {

  // Write code here
  hand1 = hand1.toLowerCase();
  hand2 = hand2.toLowerCase();

  if (hand1 === hand2) {
    return "It's a tie!";
  }
  if (hand1 === 'rock' && hand2 === 'scissors') {
  return "Hand one wins!";
  }
  else if (hand1 === 'paper' && hand2 === 'rock') {
  return "Hand one wins!";
  }
  else if (hand1 === 'scissors' && hand2 === 'paper') {
  return "Hand one wins!";
  }
  else {
  return "Hand two wins!";
  }
}
//   if (hand1 ==='rock' && hand2 === 'scissors') ||
//      (hand1 === 'paper' && hand2 === 'rock') ||
//      (hand1 === 'scissors' && hand2 === 'paper') {
//       return "hand one wins!";
//     }
//     return "hand two wins!";
// }
//   if (hand1 === hand2) {
//   return "It's a tie!";
// }
//
// if (hand1 === 'rock') {
//   if (hand2 === 'scissors') {
//     return 'Hand one wins!';
//   }
// }
//
//   if (hand1 === 'rock'){
//     if (hand2 === 'paper'){
//   return 'Hand two wins!';
// }
// }
//
// if (hand1 === 'paper') {
// if (hand2 === 'rock'){
// return 'hand one wins!';
// }
// }
//
// if (hand1 === 'paper') {
// if (hand2 === 'scissors') {
//   return 'hand one wins!';
//   }
// }
// if (hand1 === 'scissors') {
// if (hand2 === 'rock') {
//   return 'hand two wins!';
//   }
// }
// if (hand1 === 'scissors') {
// if (hand2 === 'paper') {
//   return 'hand one wins!';
//   }
// }
// if (hand2 === 'paper') {
// if (hand1 === 'scissors') {
//   return 'hand one wins!';
//   }
// }
// if (hand2 === 'paper') {
// if (hand1 === 'rock') {
//   return 'hand two wins!';
//   }
// }
// if (hand2 === 'scissors') {
// if (hand1 === 'rock') {
//   return 'hand one wins!';
//   }
// }
// if (hand2 === 'scissors') {
// if (hand1 === 'paper') {
//   return 'hand two wins!';
//   }
// }

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
