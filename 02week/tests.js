'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


//Creating an array of choices
const rpsArray = ['rock', 'paper', 'scissors'];
const rock = rpsArray[0];
const paper = rpsArray[1];
const scissors = rpsArray[2];

//Checking if 
const isInputValid = (hand1, hand2) =>{

  const isHandOneValid = hand1.match('rock') || hand1.match('paper') || hand1.match('scissors');
  
  const isHandTwoValid = hand2.match('rock') || hand2.match('paper') || hand2.match('scissors');

  console.log(isHandOneValid)
  console.log(isHandTwoValid)

  if (isHandOneValid !== null && isHandTwoValid !== null) {
    return true
  }

  // if (isHandOneValid && isHandTwoValid === null){
  //   return 'please enter a valid word'
  // } 

 
}


//function for player typing a word wrong
//use charAt(0) to grab the first letter of the word
// const spellCheck = (hand1, hand2) => {
//   //return the word by the first key
//   // const words = rpsArray;
//   // const firstLetterRock = words[0].charCodeAt(0);
//   // const firstLetterPaper = words[1].charCodeAt(0);
//   // const firstLetterScissors = words[2].charCodeAt(0);
//   // const userInput = [firstLetterRock, firstLetterPaper, firstLetterScissors];
//   // return userInput
//   //userInput = [114, 112, 115]
// }

function rockPaperScissors(hand1, hand2) {
  
  hand1 = hand1.toLowerCase().trim();
  hand2 = hand2.toLowerCase().trim();

  if(isInputValid(hand1, hand2)){
    return true
  } else {
    return false
  }

  // f(hand1 === hand2){
  //   return 'Its a tie!'
  // }

  // if(hand1 === rpsArray[0] && hand2 === rpsArray[2]){
  //   return 'Hand one wins!'
  // }

  // if(hand1 === rpsArray[1] && hand2 === rpsArray[0]) {
  //   return 'Hand one wins!'
  // }

  // if(hand1 === rpsArray[2] && hand2 === rpsArray[1]) {
  //   return 'Hand one wins!'
  // } else {
  //   return 'Hand two wins!'
  // }
  //if statement for a tie
  // if (isInputValid(hand1, hand2)){
  //   if (hand1 === rpsArray[0] && hand2 === rpsArray[2])
  //     return 'Hand one wins!';
  //   } 

  //   if (hand1 === rpsArray[1] && hand2 === rpsArray[0]){
  //     return 'Hand one wins!';
  //   }

  //   if (hand1 === rpsArray[2] && hand2 === rpsArray[1]){
  //     return 'Hand one wins!';
  //   } else {
  //     return 'Hand two wins!'
  //   }
    
  }
  

//need an else if statement for all of these 
//also need an else statement at the bottom for invalid answer
//need to combine all the if statements below into on else if statement

  //if statement for if hand1 = 'rock' and hand2 = 'scissors'
  
  //if statement for if hand1 = 'paper' and hand2 = 'rock'

  //if statement for if hand1 = 'scissors' and hand2 = 'paper'
  


//dont do anything to getPrompt function
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
