'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function rockPaperScissors(a, b) {

    // Write code here
    var hand1 = a.toLowerCase().trim();
    var hand2 = b.toLowerCase().trim();

//Code for tie
if (hand1 === hand2 && !(hand1==="" || hand2===""))
return "It's a tie!"


else if ((hand1 == "rock" && hand2 =="scissors") || (hand1 == "scissors" && hand2 == "rock")){
  if(hand1=="rock")
  return "Hand one wins!"
  else 
  return "Hand two wins!"
}

else if ((hand1 == "rock" && hand2 =="paper") || (hand1 == "paper" && hand2 == "rock")){
  if(hand1=="paper")
  return "Hand one wins!"
  else 
  return "Hand two wins!"
  }

  else if ((hand1 == "paper" && hand2 =="scissors") || (hand1 == "scissors" && hand2 == "paper")){
    if(hand1=="scissors")
    return "Hand one wins!"
    else 
    return "Hand two wins!"
  }

  //Check for numbers
  else if (!(isNaN(parseInt(hand1))) || !(isNaN(parseInt(hand2)))){
    return "Numbers not allowed";
  }

   //Check for numbers
   else if (hand1==="" || hand2===""){
    return "Empty input";
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

    //Test to check for numbers added..
    it('should not allow numbers', () => {
      assert.equal(rockPaperScissors('12', '16'), "Numbers not allowed");
      assert.equal(rockPaperScissors('15', '18'), "Numbers not allowed");
      assert.equal(rockPaperScissors('12 ', '15'), "Numbers not allowed");
    });

 //Test to check for empty string
 it('check for empty', () => {
  assert.equal(rockPaperScissors('', ''), "Empty input");
});

  });
} else {

  getPrompt();

}
