'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*Whiteboard plan:
Rules-
Scissors beats paper | paper beats rock | rock beats scissors | both hands equal is a tie

1. Create a function that makes inputs all lower case and removes whitespace (and store them in variables) PLUS checks that user inputs are valid. If everything passes, move on to #2 ELSE display "invalid entry"

-use toLowerCase() and trim() to force inputs to lower case and to remove whitespace
-use includes() to verify that both inputs exactly match the valid options which are stored in an array
-if both inputs are valid, move onto the next function, if both are not valid, display "invalid input"

2. Create function that determines if user1 wins, user2 wins or it's a tie. Inside this function, create an if else/if else conditional for a tie first, then test for user1 win, ELSE user2 wins

-a tie can be detrmined if both inputs are equal
-a hand1 win can be detrmined by comparing both inputs and accounting for 3 separate ways hand1 could win.
-a hand2 win does not need to be directly determined, since if a tie or hand1 win has not occured, it's the only other possible outcome.
3. return the result of the game (hand1 win, hand2 win, tie)

*/

let newHand1
let newHand2

const isItValid=(newHand1, newHand2)=> {//check to see if answers are valid before comparing
  const possibleHands = ["rock", "paper", "scissors"];//array of valid inputs
  if (possibleHands.indexOf(newHand1) !== -1 && possibleHands.indexOf(newHand2) !== -1){
    return true
  }
}


const rockPaperScissors=(hand1, hand2)=> {

  newHand1 = hand1.toLowerCase().trim();//remove caps and white space
  newHand2 = hand2.toLowerCase().trim();//remove caps and white space
  if(isItValid(newHand1, newHand2) !==true){
    return "Inavlid entry!! Please type rock, paper or scissors."
  } else if (newHand1 === newHand2) {//first check for a tie
    return 'It`s a tie!'//if true, it's a tie, if false move on
  } else if (newHand1 === 'rock' && newHand2 === 'scissors' ||//if no tie, check if hand1 is a winner
      newHand1 === 'scissors' && newHand2 === 'paper' ||
      newHand1 === 'paper' && newHand2 ==='rock'){
    return 'Hand 1 wins!'//if true, hand1 wins
  }else{
    return 'Hand 2 wins!'//else hand2 wins (no need to set conditions here)
  }
}

const getPrompt=()=> {//change to ES6 syntax
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log(rockPaperScissors(answer1, answer2));
      getPrompt();
    });
  });
}



// Tests  mocha

if (typeof describe === 'function') {
  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It`s a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It`s a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It`s a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand 2 wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand 2 wins!");
      assert.equal(rockPaperScissors('scissors', 'rock'), "Hand 2 wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand 1 wins!");
      assert.equal(rockPaperScissors('scissors', 'paper'), "Hand 1 wins!");
      assert.equal(rockPaperScissors('paper', 'rock'), "Hand 1 wins!");
    });

  });
  describe('#rockPaperScissors()', () => {
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand 2 wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand 2 wins!");
      assert.equal(rockPaperScissors('rock  ', '    sCiSsOrs'), "Hand 1 wins!");
    });
    it('should report invalid entries', () => {
      assert.equal(rockPaperScissors('blue', 'red'), "Inavlid entry!! Please type rock, paper or scissors.");
      assert.equal(rockPaperScissors('paper', 'yellow'), "Inavlid entry!! Please type rock, paper or scissors.");
      assert.equal(rockPaperScissors('"rock"', '12345'), "Inavlid entry!! Please type rock, paper or scissors.");
      assert.equal(rockPaperScissors('%@$%#', 'rock'), "Inavlid entry!! Please type rock, paper or scissors.");
      assert.equal(rockPaperScissors('   ', 'pa per'), "Inavlid entry!! Please type rock, paper or scissors.");
    });
  });
} else {

  getPrompt();
}
