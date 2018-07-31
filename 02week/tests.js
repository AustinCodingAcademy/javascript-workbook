
if (typeof describe === 'function') {

    describe('#rockPaperScissors()', () => {
      it('should detect a tie', () => {
          assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");            
          assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");            
          assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");    });
      it('should detect which hand won', () => {
        assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
        assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
        assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
        assert.equal(rockPaperScissors('paper', 'rock'), "Hand one wins!");
        assert.equal(rockPaperScissors('scissors', 'paper'), "Hand one wins!");
        assert.equal(rockPaperScissors('scissors', 'rock'), "Hand two wins!");
      });
      it('ensures all variations of the input work as expected', () => {
        assert.equal(rockPaperScissors('rocK', ' paper '), "Hand two wins!");
        assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
        assert.equal(rockPaperScissors('rock ', 'scissors'), "Hand one wins!");
      });
      it('should detect if the inputs are valid', () => {
          assert.equal(rockPaperScissors('7', 'HELLO'), "Try again!");
          assert.equal(rockPaperScissors('dljfsdk', 'paper'), "Try again!");
          assert.equal(rockPaperScissors('*', 8986), "Try again!");
          assert.equal(rockPaperScissors([dklsjf], "Bonjour"), "Try again!");
        });
    });
  } else {
  
    getPrompt();
  
  }
  