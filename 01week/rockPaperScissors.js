'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function rockPaperScissors(hand1, hand2) {

  // Write code here
  // Create code for paper() to execute win, loss, or tie.
  function paper(hand1) {
    if (hand1.toLowerCase() === "paper") {
      if (hand2 === "rock") {
          // console.log("paper wins");
          return hand1;
      } else {
          if (hand2.toLowerCase() === "scissors") {
              // console.log("scissors wins");
              return "Hand two wins!";
          } else if(hand1 === hand1){
            return "It's a tie!";
          }
       }
     }
  }

   // Create code for scissors to execute win, loss, or tie.
   if (hand1 === "scissors") {
       if (hand2 === "rock") {
           // console.log("rock wins");
           return hand2;
       } else {
           if (hand2 === "paper") {
               // console.log( "scissors wins");
               return hand1;
           } else if (hand1 === hand1){
             return "It's a tie!";
           }
       }
   }

   // Determine the winner and add the toLowerCase()
   // and trim() methods to pass the tests.
   if (hand1.toLowerCase().trim() === "rock") {
      if (hand2.toLowerCase() === "scissors") {
          return "Hand one wins!";
      } else {
          if (hand2.trim() === "paper") {
              return "Hand two wins!";
          } else if (hand1 === hand1){
            return "It's a tie!";
          }
      }
  }

  switch(hand1) {
    case 'paper':
      paper('paper');
      break;
    case hand1:
      scissors(hand1);
      break;
    case hand1:
      rock(hand1);
      break;
    default:
      "That is not an option!!!";
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
