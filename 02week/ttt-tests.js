'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function getPrompt() {
    rl.question('word ', (answer) => {
      const ttt = ticTacToe(answer);
      console.log('Log: ', ttt);
      getPrompt();
    });
}

if (typeof describe === 'function') {

    describe('#ticTacToe()', () => {
      it('should start with an x', () => {
        assert.equal(ticTacToe('x'), "x");
      });
      it('should detect winner', () => {
        assert.equal(rockPaperScissors('x'), "X Wins!");
        assert.equal(rockPaperScissors('o'), "O Wins!");
      });
    });
  } else {
  
    getPrompt();
  
  }