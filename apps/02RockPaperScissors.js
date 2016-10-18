'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// function rockPaperScissors(hand1, hand2) {
//   if (hand1.toLowerCase() === hand2.toLowerCase()){
//     return "It's a tie!";
//   } else if (hand1.toLowerCase() === "rock" && hand2.toLowerCase() === "paper"){
//     return "Hand two wins!";
//   } else if (hand1.toLowerCase() === "paper" && hand2.toLowerCase() === "scissors"){
//     return "Hand two wins!";
//   } else if (hand1.toLowerCase() === "scissors" && hand2.toLowerCase() === "rock"){
//     return "Hand two wins!";
//   } else if (hand1.toLowerCase() === "rock" && hand2.toLowerCase() === "scissors"){
//     return "Hand one wins!";
//   } else if (hand1.toLowerCase() === "paper" && hand2.toLowerCase() === "rock"){
//     return "Hand one wins!";
//   } else if (hand1.toLowerCase() === "scissors" && hand2.toLowerCase() === "paper"){
//     return "Hand one wins!";
//   } else {
//     return "invalid entry, please try again";
//     rockPaperScissors();
//   }
// }

function rockPaperScissors(hand1, hand2) {
  var answer1 = hand1.toLowerCase();
  var answer2 = hand2.toLowerCase();

  if (answer1 === "rock"){
    var valid1 = answer1;
  } else if (answer1 === "scissors"){
    var valid1 = answer1;
  } else if (answer1 === "paper"){
    var valid1 = answer1;
  } else {
    return "invalid entry, pleae try again";
    rockPaperScissors();
  }

  if (answer2 === "rock"){
    var valid2 = answer2;
  } else if (answer2 === "scissors"){
    var valid2 = answer2;
  } else if (answer2 === "paper"){
    var valid2 = answer2;
  } else {
    return "invalid entry, pleae try again";
    rockPaperScissors();
  }

  if (valid1 === valid2){
    return "It's a tie!";
  }
  else if (valid1 === "rock"){
    if (valid2 === "paper"){
      return "Hand two wins!";
    } else if (valid2 === "scissors"){
      return "Hand one wins!";
    } else {
      return "Invalid entry, please try again";
      rockPaperScissors();
    }
  }
  else if (valid1 === "paper"){
    if (valid2 === "scissors"){
      return "Hand two wins!";
    } else if (valid2 === "rock"){
      return "Hand one wins!";
    } else {
      return "Invalid entry, please try again";
      rockPaperScissors();
    }
  }
  else if (valid1 === "scissors"){
    if (valid2 === "rock"){
      return "Hand two wins!";
    } else if (valid2 === "paper"){
      return "Hand one wins!";
    } else {
      return "Invalid entry, please try again";
      rockPaperScissors();
    }
  }
  else {
    return "Invalid entry, please try again";
    rockPaperScissors();
  }
}

function getPrompt() {
  rl.question('answer1: ', (answer1) => {
    rl.question('answer2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', function () {
    it('should detect a tie', function () {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', function () {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
  });
} else {

  getPrompt();

}
