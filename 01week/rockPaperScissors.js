'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
 
  // ROCK scissors PAPER
 // 2 player game where each player's input is compared to one another and the value of their input determines who wins
 //in the game rock is > then scissors but < paper
 //paper is > rock but, sciccors
//   sciccors is > paper but <rock
// User1 input of ['rock', 'paper' , 'scissors'.]
// User2 input of ['rock', 'paper', or 'scissors'.]
// Compare User1 input to User2 input.

let User1 = prompt ("Player numero1 rock, paper, scissors");
let User2 = prompt ("Player numero2 rock, paper, scissors");

const rockPaperMaster =()=>{
  if ( User1 === 'rock' && User2 === 'scissors'|| User1 === 'paper' && User2 === 'rock'|| User1=== 'scissors'&& User2=== 'paper'){
 return "player 1wins"
 } else if(User1 === 'rock' && User2 === 'paper'|| User1 ==='paper' && User2 === 'scissors'|| User1 ==='scissors' && User2 === 'rock'){ 
return "player 2 wins"
  } else if( User1 === User2) {
return "It's a Tie"
}else{
 console.log("Please use rock, scissors or paper")
}
} 
rockPaperMaster();

// Write code here



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
