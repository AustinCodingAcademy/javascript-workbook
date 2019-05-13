//rockPaperScissors tests

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





  //ticTacToe Tests
  
  if (typeof describe === 'function') {

    describe('#ticTacToe()', () => {
      it('should place mark on the board', () => {
        ticTacToe(1, 1);
        assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
      });
      it('should alternate between players', () => {
        ticTacToe(0, 0);
        assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
      });
      it('should check for vertical wins', () => {
        board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
        assert.equal(verticalWin(), true);
      });
      it('should check for horizontal wins', () => {
        board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
        assert.equal(horizontalWin(), true);
      });
      it('should check for diagonal wins', () => {
        board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
        assert.equal(diagonalWin(), true);
      });
      it('should detect a win', () => {
        assert.equal(checkForWin(), true);
      });
    });
  } else {
  
    getPrompt();
  
  }
  