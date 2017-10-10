// Student: Jon Gorman
// Class: 211 JavaScript Tue/Thur
// Instructor: Renee Dudley
// Date: 10/10/17
//
//Make a function for rock paper scissors game
//function should include a way to check for a tie
//function should include a way to check for player one win
//function should include a way to check for player two win
//function should have a way to check that game is played correctly i.e.(no use of words other tha those needed for game
'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var Player1 = "Hand1 Wins!!";
var Plaer2 = "Hand2 Wins!!";
var result = Player1.fontcolor("green");
var result1 = Plaer2.fontcolor("orange");
function rockPaperScissors(hand1, hand2) {
//check for a tie
 if(hand1 === hand2){
  return '\x1b[5m\x1b[31mIts a Tie\nYou need to redo the turn! \x1b[0m';
  // Write code here
 }else if(hand1 === 'rock' && hand2 === 'scissors' || hand1 === 'paper' && hand2 === 'rock' || hand1 === 'scissors' && hand2 === 'paper'){
     return '\x1b[32m\x1b[32mHand1 Wins! \x1b[0m'
 }else if (hand1 === 'rock' && hand2 === 'paper' || hand1 === 'paper' && hand2 === 'scissors' || hand1 === 'scissors' && hand2 === 'rock'){
     return '\x1b[34mHand2 Wins!\x1b[0m'
 }else if (hand1 && hand2 !== 'rock', 'paper', 'scissors'){
     return '\x1b[4mYour tryig to play a different game!\x1b[0m'
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
