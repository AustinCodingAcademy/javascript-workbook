'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function rockPaperScissors(hand1, hand2, shortMode) {

	//this is a quick fix to pass the tests, since they dont enter the answer for short mode
     if (typeof shortMode === "undefined"){
	shortMode = "n";}

	hand1 = hand1.toLowerCase();
	hand2 = hand2.toLowerCase();
	//this scrubs the shortmode
	shortMode = shortMode.toLowerCase();

	//changes the variables to their long forms if shortMode is enabled
	if (shortMode === "y") {
	switch (hand1){
		case "r":
		hand1 = "rock";
		break;
		case "p":
		hand1 = "paper";
		break;
		case "s":
		hand1 = "scissors";
		break;
	}
	switch (hand2){
		case "r":
		hand2 = "rock";
		break;
		case "p":
		hand2 = "paper";
		break;
		case "s":
		hand2 = "scissors";
		break;
	}
	}

	if(!(hand1 === "rock" || hand1 === "paper" || hand1 === "scissors")){
		return "Please enter a valid type for hand1";
		getPrompt();
	}
	if(!(hand2 === "rock" || hand2 === 'paper' || hand2 === "scissors")){
		return "PLease enter a valid type for hand2";
		getPrompt();
	}

	
	//scrub the variables 
	hand1 = hand1.toLowerCase();
	hand2 = hand2.toLowerCase();

if (hand1 === hand2) {
	  return "It's a tie!";
}

if (hand1 === 'rock' && hand2 === "scissors") {
		      return 'Hand one wins!';
		        }
	   

if (hand1 === 'paper' && hand2 === "rock") {
			return 'Hand one wins!';
		}

if (hand1 === 'scissors' && hand2 === 'paper') {
		       return 'Hand one wins!';
	           }
//if hand1 doesnt win at the end of the day, hand 2 does
return "Hand two wins!";
}
function getPrompt() {
//Chris challenged me to ninja out, and add a short mode, there it is
	//    rl.question("do you want to use abbreviated mode? (y/n)", (shortMode) =>{
     rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2, shortMode) );
      getPrompt();
    });
  });
  //  });
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
