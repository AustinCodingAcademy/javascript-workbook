'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function rockPaperScissors(hand1, hand2) {
  //this is to correct the user input of Capitalization to Lower Case so it's still a valid input. 
  hand1 = hand1.toLowerCase();
  hand2 = hand2.toLowerCase();
 

  // Write code here, the hand1, hand2, and hand 3 will already have the value, rock, paper, scissor.
  
  //check to see if both hands equal each other else move on!
  if (hand1 === hand2){
    return "It's a tie!";
  }

    //if the first player puts in rock then check the hands of the second player to see who wins.
  if (hand1 === 'rock') {
    //then check to see if...
   else if (hand2 === 'scissors') {
    //if so...
      return "Hand One wins!"
    }
    //if not then go to check if...
   else if (hand2 === 'paper') {
    //if so...
      return "Hand Two Wins!" 
    }
      
   }
   //if not rock then go to see if its paper
  if (hand1 === 'paper') {
   //if so is hand2 scissors? 
    if (hand2 === 'scissors') { 
   //if so...
      return "Hand Two Wins!"
    }
    if (hand2 === 'rock') {
      return "Hand One Wins!!"
    } 
  } 
//same for the above to circumstances
  if (hand1 === 'scissors') {
    if (hand2 === 'rock') {
      return "Hand Two Wins"
    }
    if (hand2 === 'paper') {
      return "Hand One Wins!"
    }
    
   }
//if a player types in something that isn't one of the three words they will be prompted to try again.
  if (hand1 !== 'rock' && hand1 !== 'paper' && hand1 !== 'scissors') {
    return "Invalid Entry, Player 1, Put useable input!"
  }

  if (hand2 !== 'rock' && hand1 !== 'paper' && hand1 !== 'scissors') {
    return "Invalid Entry, Player 2, Put useable input!"
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
