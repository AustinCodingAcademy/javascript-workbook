if (typeof describe === 'function') {

    describe('#rockPaperScissors()', () => {
      it('should detect every possibility for a Hand one win', () => {
        assert.equal(rockPaperScissors('paper', 'rock'), "Hand one wins!");
        assert.equal(rockPaperScissors('scissors', 'Paper'), "Hand one wins!");
        assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
      });
      it('should detect every possibility for a Hand two win', () => {
        assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
        assert.equal(rockPaperScissors('scissors', 'rock'), "Hand two wins!");
        assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      });
      it('should detect valid entry', () => {
        assert.equal(rockPaperScissors('pig', 'paper'), "Hand two wins!");
        assert.equal(rockPaperScissors('dog', 'rock'), "Hand two wins!");
        assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      });

        // =================================================================================================
        //  One more.... Test to make sure user must input a valid entry (e.g. 'rock', 'paper', or 'scissors')
        // ====================================================================================================

    });
  } else {
  
    getPrompt();
  
  }