'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function rockPaperScissors(userOne, userTwo) {


  //User1 input of rock, paper, or scissors.
let userOne = "paper"
function userOneChoice(userOne) {
  userOne.toLocaleLowerCase();
  if (userOne === 'rock' || userOne === 'paper' || userOne === 'scissors'){
    console.log('User 1 threw ' + userOne)
  } else {
    console.log('This is not an acceptable value!')
  }
}; 
userOneChoice(userOne);


//User2 input of rock, paper, or scissors.
let userTwo = "rock"
function userTwoChoice(userTwo) {
  userOne.toLocaleLowerCase();
  if (userTwo === 'rock' || userTwo === 'paper' || userTwo === 'scissors'){
    console.log('User 2 threw ' + userTwo)
  } else {
    console.log('This is not an acceptable value!')
  }
};
userTwoChoice(userTwo);


//Compare User1 input to User2 input.
function determineWinner (userOne,userTwo){

  
  //If User1 input is 'rock' and User2 input is 'scissor', User1 wins.
  if(userOne === 'rock' && userTwo === 'scissors'){
    console.log('User1 wins!')
  };
  
  //If User1 input is 'rock' and User2 input is 'paper', User2 wins.
   if (userOne === 'rock' && userTwo === 'paper'){
     console.log('User2 wins!')
   };
   
   //If User1 input is 'rock' and User2 input is 'rock', it's a tie.
   if (userOne === 'rock' && userTwo === 'rock'){
     console.log("It's a tie.")
   }; 
   
   //If User1 input is 'paper' and User2 input is 'rock', User1 wins.
   if (userOne === 'paper' && userTwo === 'rock'){
     console.log('User1 wins!')
   }; 
   
   //If User1 input is 'paper' and User2 input is 'scissors', User2 wins.
   if (userOne === 'paper' && userTwo === 'scissors'){
     console.log('User2 wins!')
   }; 
   
   //If User1 input is 'paper' and User2 input is 'paper', it's a tie.
   if (userOne === 'paper' && userTwo === 'paper'){
     console.log("It's a tie.")
   }; 
   
   //If User1 input is 'scissors' and User2 input is 'paper', User1 wins.
   if (userOne === 'scissors' && userTwo === 'paper'){
     console.log('User1 wins!')
   }; 
   
   //If User1 input is 'scissors' and User2 input is 'rock', User2 wins.
   if (userOne === 'scissors' && userTwo === 'rock'){
     console.log('User 2 wins!')
   };
   
   //If User1 input is 'scissors' and User2 input is 'scissors', it's a tie.
   if (userOne === 'scissors' && userTwo === 'scissors'){
     console.log("It's a tie.")
   };
};

determineWinner(userOne,userTwo);

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
