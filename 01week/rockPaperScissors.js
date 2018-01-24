'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Whiteboard plan:
//1. Create a function that makes inputs all lower case and removes whitespace (and store them in variables) PLUS checks that user inputs are valid. If everything passes, move on to #2 ELSE display "invalid entry"
//2. Create function that determines if user1 wins, user2 wins or it's a tie. Inside this function, create an if else/if else conditional for a tie first, then test for user1 win, ELSE user2 wins
//3. return the result of the game (hand1 win, hand2 win, tie)

const isItValid=(hand1, hand2)=> {//check to see if answers are valid before comparing
  const possibleHands = ["rock", "paper", "scissors"];//array of valid inputs
  const newHand1 = hand1.toLowerCase().trim();//remove caps and white space
  const newHand2 = hand2.toLowerCase().trim();//remove caps and white space

  if(possibleHands.includes(newHand1) === true && possibleHands.includes(newHand2) === true) {
    return rockPaperScissors(newHand1, newHand2);//run rockPaperScissors() only if both entries are valid
  }else{
    return 'Inavlid entry!! Please type rock, paper or scissors.'//else tell user of invalid entry(ies)
  }
}


const rockPaperScissors=(newHand1, newHand2)=> {//this runs ONLY if isItValid() passes
  if (newHand1 === newHand2) {//first check for a tie
    return 'It`s a tie!!'//if true, it's a tie, if false move on
  } else if (newHand1 === 'rock' && newHand2 === 'scissors' ||//if no tie, check if hand1 is a winner
    newHand1 === 'scissors' && newHand2 === 'paper' ||
    newHand1 === 'paper' && newHand2 ==='rock'){
    return 'Hand 1 wins!!'//if true, hand1 wins
  }else{
    return 'Hand 2 wins!!'//else hand2 wins (no need to set conditions here)
  }
}

const getPrompt=()=> {//change to ES6 syntax
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log(isItValid(answer1, answer2));//changed this to call the new validation function
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
