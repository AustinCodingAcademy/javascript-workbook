'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const isValid = str =>{
  const valid =['rock','scissors','paper'];
  for (let i=0 ;i < valid.length ; i++){
    if (str != valid[i]) {
      console.log('invalid input')
    } else{
      return str;
    }
  }
}
isValid();

const scrubbingFunc=str=>{
  return str.trim().toLowerCase();
}

function rockPaperScissors(hand1, hand2) { 
  hand1=scrubbingFunc(hand1);
  hand2=scrubbingFunc(hand2);
  
  hand1=isValid(hand1);
  hand2=isValid(hand2);

  if (hand1==hand2) {
    
    console.log ("It's a tie!");
    return "It's a tie!";
  } else if (hand1==='rock' && hand2==='paper') {
    console.log("Hand two wins!");  
    return "Hand two wins!"
  } else if (hand1==='paper' && hand2==='rock') {
    console.log("hand one wins!");
    return "Hand one wins!"
  } else if (hand1==='rock' && hand2==='scissors') {
    console.log("Hand one wins!");
    return "Hand one wins!"
  } else if (hand1==='scissors' && hand2==='rock') {
    console.log("Hand two wins!");
    return "Hand two wins!"
  } else if (hand1==='paper' && hand2==='scissors') {
    console.log("Hand two wins!");
    return "Hand two wins!"
  } else {
    (hand1==='scissors' && hand2==='paper');
    console.log("Hand one wins!");
    return "Hand one wins!"
  };
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
      assert.equal(rockPaperScissors('rocK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsors'), "Hand one wins!");
    });
  });
} else {

  getPrompt();

}
