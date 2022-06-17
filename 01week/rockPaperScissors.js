// uses strict mode so strings are not coerced, variables are not hoisted, etc... 
'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

// the function that will be called by the unit test below
const rockPaperScissors = (hand1, hand2) => {

  // Write code here
  // Use the unit test to see what is expected
	hand1 = hand1.trim().toLowerCase();
	hand2 = hand2.trim().toLowerCase();

	let win = "Hand one wins!";
	let lose = "Hand two wins!";
	let tie = "It's a tie!";

	switch(hand1) {
		case 'rock':
			switch(hand2) {
				case 'scissors':
					return win;
				case 'paper':
					return lose;
				default:
					return tie;
			}
		case 'paper':
			switch(hand2) {
				case 'rock':
					return win;
				case 'scissors':
					return lose;
				default:
					return tie;
			}
		case 'scissors':
			switch(hand2) {
				case 'paper':
					return win;
				case 'rock':
					return lose;
				default:
					return tie;
			}
		default:
			return "That is not a valid choice.";
	}
}

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
function getPrompt() {
	rl.question('hand1: ', (answer1) => {
		rl.question('hand2: ', (answer2) => {
			console.log( rockPaperScissors(answer1, answer2) );
			getPrompt();
		});
	});
}

// Unit Tests
// You use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {
  // most are notes for human eyes to read, but essentially passes in inputs then compares if the function you built return the expected output.
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
