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
        assert.equal(rockPaperScissors('scissors', 'rock'), "Hand two wins!");
        assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
        assert.equal(rockPaperScissors('scissors','paper'), "Hand one wins!");
        assert.equal(rockPaperScissors('paper', 'rock'), "Hand one wins!");
      });
      it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
        assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
        assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
        assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
      });
      
      it('should detect if input is valid', () =>{
        assert.equal(rockPaperScissors('cat', ' 3 '), "Invalid Entry");
        assert.equal(rockPaperScissors('rock', ' Cat '), "Invalid Entry");
        assert.equal(rockPaperScissors('', ''), "Invalid Entry");
        assert.equal(rockPaperScissors('#', 'rock'), "Invalid Entry");
        assert.equal(rockPaperScissors('=', 'paper!'), "Invalid Entry");
        assert.equal(rockPaperScissors('rock2', 'rock?'), "Invalid Entry");


      })
    });
  } else {
  
    getPrompt();
  
  }


  