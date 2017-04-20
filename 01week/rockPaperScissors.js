'use strict';

const assert = require('assert');
const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

function rockPaperScissors(hand1, hand2) {

  if ((hand1.toUpperCase() != "ROCK") &&
  (hand1.toUpperCase() != "PAPER") &&
  (hand1.toUpperCase() != "SCISSORS")){
    return "Hands weren't entered properly";
  } else if ((hand2.toUpperCase() != "ROCK") &&
  (hand2.toUpperCase() != "PAPER") &&
  (hand2.toUpperCase() != "SCISSORS")){
    return "Hands weren't entered properly";
  } else if (hand1.toUpperCase() === hand2.toUpperCase() ) {
    return "It's a tie!";
  } else if (hand1.toUpperCase() === "ROCK"){
    if (hand2.toUpperCase() === "PAPER"){
      return "Hand two wins!";
    } else {
      return "Hand one wins!";
    }
  } else if (hand1.toUpperCase() === "PAPER"){
    if (hand2.toUpperCase() === "SCISSORS"){
      return "Hand two wins!";
    } else {
      return "Hand one wins!";
    }
  } else if (hand1.toUpperCase() === "SCISSORS"){
    if (hand2.toUpperCase() === "ROCK"){
      return "Hand two wins!";
    } else {
      return "Hand one wins!";
    }
  }
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function computerGame(){
  const choices = ['ROCK', 'PAPER', 'SCISSORS'];
  var scoreComp1 = 0;
  for (var i = 0; i <= 100; i++ ){
    let computerHand1 = choices[getRandomIntInclusive(0,2)];
    let computerHand2 = choices[getRandomIntInclusive(0,2)];
    //let computerHand1 = 'SCISSORS';
    //let computerHand2 = 'ROCK';
    console.log(computerHand1);
    //console.log(computerHand2);
    if (rockPaperScissors(computerHand1, computerHand2) == "Hand one wins!"){
      scoreComp1++;
    }
  }
  return "Computer 1's score out of 100 games: " + scoreComp1;
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
  });
} else {
  console.log("computerGame called");
  console.log(computerGame());
  //getPrompt();

}
