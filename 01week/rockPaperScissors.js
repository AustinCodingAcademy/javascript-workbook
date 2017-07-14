"use strict";

//2 players
//three options; rock, paper, scissors
//matching options equal tie
//paper beats rock
//scissors beats paper
//rock beats scissors

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function rockPaperScissors(hand1, hand2) {
  const rock = "Rock";
  const paper = "Paper";
  const scissors = "Scissors";

  if (hand1 === hand2) {
    console.log("TIE");
  }
  if (hand1 === rock){
    if (hand2 === paper){
      console.log("PLAYER 2 WINS");
    }
    else{
      console.log("PLAYER 1 WINS");
        }
      }
    }
  if (hand1 === paper){
    if (hand2 === scissors){
      console.log("PLAYER 2 WINS");
    }
    else{
      console.log("PLAYER 1 WINS");
        }
      }
  if (hand1 === scissors){
    if (hand2 === rock){
      console.log("PLAYER 2 WINS");
    }
    else{
    console.log("PLAYER 1 WINS");
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
