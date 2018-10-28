'use strict';

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
      


    //   New Code Written By Me.
const pick = ['rock' , 'paper' , 'scissors'];

      it('should only let you enter "rock", "paper" , or "scissors"', () => {
          if(!pick()) {
            assert.equal(rockPaperScissors('rock', 'paper' , 'scissors'), "Enter Valid Input! (rock, paper, scissors)");
        }
      });

      it('should start the game with winner each time', () => {
        assert.equal(rockPaperScissors('rock', ' paper '), "Player two is the winner! They may start the next game at anytime.");
        assert.equal(rockPaperScissors('paper', 'scissors'), "Player two is the winner! They may start the next game at anytime.");
        assert.equal(rockPaperScissors('rock ', 'scissors'), "Player one is the winner! They may start the next game at anytime.");
      });

      it('should detect detect more possible wins', () => {
        assert.equal(rockPaperScissors('paper', 'rock'), "Player one wins!");
        assert.equal(rockPaperScissors('scissors', 'paper'), "Player one wins!");
        assert.equal(rockPaperScissors('scissors', 'rock'), "Player two wins!");
      });

    });
  } else {
  
    getPrompt();
  
  }
  // nothing