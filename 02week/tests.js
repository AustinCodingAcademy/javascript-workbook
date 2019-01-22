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
    console.log('User1 wins.')
  };
  
  //If User1 input is 'rock' and User2 input is 'paper', User2 wins.
   if (userOne === 'rock' && userTwo === 'paper'){
     console.log('User2 wins.')
   };
   
   //If User1 input is 'rock' and User2 input is 'rock', it's a tie.
   if (userOne === 'rock' && userTwo === 'rock'){
     console.log("it's a tie")
   }; 
   
   //If User1 input is 'paper' and User2 input is 'rock', User1 wins.
   if (userOne === 'paper' && userTwo === 'rock'){
     console.log('User1 wins.')
   }; 
   
   //If User1 input is 'paper' and User2 input is 'scissors', User2 wins.
   if (userOne === 'paper' && userTwo === 'scissors'){
     console.log('User2 wins.')
   }; 
   
   //If User1 input is 'paper' and User2 input is 'paper', it's a tie.
   if (userOne === 'paper' && userTwo === 'paper'){
     console.log("It's a tie.")
   }; 
   
   //If User1 input is 'scissors' and User2 input is 'paper', User1 wins.
   if (userOne === 'scissors' && userTwo === 'paper'){
     console.log('User1 wins.')
   }; 
   
   //If User1 input is 'scissors' and User2 input is 'rock', User2 wins.
   if (userOne === 'scissors' && userTwo === 'rock'){
     console.log('User 2 wins')
   };
   
   //If User1 input is 'scissors' and User2 input is 'scissors', it's a tie.
   if (userOne === 'scissors' && userTwo === 'scissors'){
     console.log("It's a tie.")
   };
};

determineWinner(userOne,userTwo);

}

//TESTS
describe('Rock Paper Scissors', function() {
    it('Should detect userOne won', function() {
        assert.equal(rockPaperScissors('rock','scissors'),'User1 wins!');
        assert.equal(rockPaperScissors('paper','rock'),'User1 wins!');
        assert.equal(rockPaperScissors('scissors','paper'),'User1 wins!')
    });
    it('Should detect userTwo won', function() {
        assert.equal(rockPaperScissors('scissors', 'rock'),'User2 wins!');
        assert.equal(rockPaperScissors('rock','paper'),'User2 wins!');
        assert.equal(rockPaperScissors('paper','scissors'),'User2 wins!');
    });
    it('Should detect a tie', function () {
        assert.equal(rockPaperScissors('rock','rock'),'It is a tie.');
        assert.equal(rockPaperScissors('paper','paper'),'Iti is a tie');
        assert.equal(rockPaperScissors('scissors','scissors'),'It is a tie.');
    });
    it('should display the input' function () {
        assert.equal(userOneChoice('PAPER'),'User 1 threw paper');
        assert.equal(userOneChoice('SCissorS'),'User 1 threw scissors');
        assert.equal(userOneChoice('rock'),'User 1 threw rock');
        assert.equal(userTwoChoice('ROCk'),'User 2 threw rock');
        assert.equal(userTwoChoice('PaPeR'),'User 2 threw paper');
        assert.equal(userTwoChoice('scissorS'),'User 2 threw scissors');
    });
    it('should be invalid input' function() {
        assert.equal(userOneChoice('pAPERS'),'This is not an acceptable Value!');
        assert.equal(userTwoChoice('reck'),'This is not an acceptable value!');
    });
    it('Should display the winner' function() {
        assert.equal(determineWinner('rock','paper'),'User2 wins!');
        assert.equal(determineWinner('scissors','paper'),'User 1 wins!');
        assert.equal(determineWinner('rock','scissors'),'User1 wins!');
    });
})