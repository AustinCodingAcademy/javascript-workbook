'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function rockPaperScissors(hand1, hand2) {

//first up, write a method for each player to remove spaces and upercase letters from their input.  
// this will prevent spaces and uppercase from confusing the program by keeping everything consistant. 
const user1 = hand1.toLowerCase().trim();
const user2 = hand2.toLowerCase().trim();

//check if both users entered the same value.  If so, return that it's a tie.
  if (user1 == user2) {
    return "It is a Tie";

    //Otherwise, give the ways in which player 1 could win
  } else if((user1 == "Rock" && user2 == "Scissors") || (user1 == "Paper" && user2 == "Rock") || (user1 == "Scissors" && user2 == "Paper")) {
    return "User1 Wins!";

    //write a code that says anything else would have player 2 win because if it's not a tie, and 
    //player 1 didn't win, then player 2 must win by defult.  
    } else {
      return "User2 Wins!"
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
