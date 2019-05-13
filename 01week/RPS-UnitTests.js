if (typeof describe === 'function') {

    describe('#rockPaperScissors()', () => {
      it('should detect a tie', () => {
        assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
        assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
        assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
      });
      it('should detect which hand won', () => {
        assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
        assert.equal(rockPaperScissors('scissors', 'rock'), "Hand two wins!");
        assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
        assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
        assert.equal(rockPaperScissors('scissors', 'paper'), "Hand one wins!");
        assert.equal(rockPaperScissors('paper', 'rock'), "Hand one wins!");
      });
      it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
        assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
        assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
        assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
      });
      it('should not allow anything except for characters', () => {
        assert.equal(rockPaperScissors('rock', 'very large paper'), "invalid!!!!");
        assert.equal(rockPaperScissors('$%(hh)', 'scissors'), "invalid!!!");
        assert.equal(rockPaperScissors('555', 'rock'), "invalid!!!");
        assert.equal(rockPaperScissors('scissors', '677'), "invalid!!!");
        assert.equal(rockPaperScissors('rock', '%4^*'), "invalid!!!");
        assert.equal(rockPaperScissors('paper', 'massive paper'), "invalid!!!");
      });
    });
  } else {

    getPrompt();

  } 
