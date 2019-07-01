'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});


function rockPaperScissors(hand1, hand2) {

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
