'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// 1. create function that determins if user 1 wins, user 2 wins or it's a tie
//2. Create fucntion that parses user inputs and formats it correctly
//2. create a long if/ else/if  test for a tie first, then test for user1 win, ELSE user2 wins
//3. return the result of the game

// const possibleHands = ['rock', 'paper', 'scissors']



const rockPaperScissors=(hand1, hand2)=> {
  // Write code here
  const possibleHands = ["rock", "paper", "scissors"];

  let newHand1 = hand1.toLowerCase().trim();//remove caps and white space
  let newHand2 = hand2.toLowerCase().trim();//remove caps and white space

  if(possibleHands.includes(newHand1) == true && possibleHands.includes(newHand2) === true) {
  // if (hand1 === 'rock' || hand1 === 'paper' || hand1 === 'scissors' && //FIXME
  // hand2 === 'rock' || hand1 === 'paper' || hand1 === 'scissors')
  // {

    if (newHand1 === newHand2) {
      return 'It`s a tie!!'
    } else if (newHand1 === 'rock' && newHand2 === 'scissors' ||
    newHand1 === 'scissors' && newHand2 === 'paper' ||
    newHand1 === 'paper' && newHand2 ==='rock'){
      return 'Hand 1 wins!!'
    }else{
      return 'Hand 2 wins!!'
    }

  }else{
    return 'Inavlid entry!! Please type rock, paper or scissors.'
  }
}

function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log(rockPaperScissors(answer1, answer2));
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

//score


// const scoreAnalyzer=(score)=> {
//   if (score >= 80) {
//     return 'High'
//   }else if (score < 80 && score >= 60 ){
//     return 'Average'
//   }else{
//     return 'Low'
//   }
// }

// scoreAnalyzer(59);
//
//
// //swith
//
// const analyzeDataType=(input)=> {
//   const inputType = typeof input;
//   switch (inputType) {
//   case 'number':
//   case 'boolean':
//     return 'go ahead'
//     break;
//   case 'string':
//     return false
//     break;
//   default:
//     return 'no'
//
//   }
// }
// analyzeDataType(false);
