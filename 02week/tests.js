let detect = require('../01week/rockPaperScissors.js')
let assert = require('assert');

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(detect.rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(detect.rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(detect.rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(detect.rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(detect.rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(detect.rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(detect.rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(detect.rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(detect.rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {
  
  getPrompt();
  
}