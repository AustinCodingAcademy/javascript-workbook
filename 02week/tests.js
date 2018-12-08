'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//hand1 enters a move, hand2 enters move
//If both the moves are valid(call a function myFunction to validate)
//  If hand1 is rock
//   if hand2 is paper then print hand two wins
//   if hand2 is scissor then print hand two wins
//   else print it is a tie
//  Else if hand1 is paper
//   if hand2 is paper then print it is tie
//   if hand2 is scissor then print hand two wins
//   else print hand one wins
//  Else
//   if hand2 is paper then print hand one wins
//   if hand2 is scissor then print it is a tie
//   else print hand two wins 
//   End if
//Else
//   print invalid input
//End if 
// New function myFunction()
//   If hand1 or hand2 both should be either rock, paper or scissor
//      return ture
//   Else
//      return false
// End of method

function rockPaperScissors(Hand1, Hand2) {
  const temp1 = Hand1.replace(/\s+/g, '');
  const temp2 = Hand2.replace(/\s+/g, '');
  const hand1 = temp1.toLowerCase();
  const hand2 = temp2.toLowerCase();

  const isValidMove = validateMove(hand1,hand2);

  if(!isValidMove)
  {
    console.log('Invalid move. Try with correct ones.');
  }
  else{
    if(hand1 == 'rock'){
      if(hand2 == 'paper')
        console.log('Hand two wins!');
      else if(hand2 == 'scissor')
        console.log('Hand one wins!');
      else
        console.log("It's a tie!");
    }
    else if(hand1 == 'paper'){
      if(hand2 == 'rock')
        console.log('Hand one wins!');
      else if(hand2 == 'scissor')
        console.log('Hand two wins!');
      else
        console.log("It's a tie!");
    }
    if(hand1 == 'scissor'){
      if(hand2 == 'paper')
        console.log('Hand one wins!');
      else if(hand2 == 'rock')
        console.log('Hand two wins!');
      else
        console.log("It's a tie!");
    }
  }

}

function validateMove(hand1,hand2){
  switch(hand1){
    case 'rock':
    case 'paper':
    case 'scissor':
      break;
    default:
      return false;
  }

  switch(hand2){
    case 'rock':
    case 'paper':
    case 'scissor':
      return true;
    default:
      return false;
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
      assert.equal(rockPaperScissors('scissors', 'paper'), "Hand one wins!");
      assert.equal(rockPaperScissors('scissors', 'rock'), "Hand two wins!");
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