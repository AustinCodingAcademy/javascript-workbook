var assert = require('assert');
var session;

module.exports = {
  'Check for empty board with 9 cells' : function (browser) {
    session = browser;
    session
    .url('http://127.0.0.1:8080/apps/07jquery-tic-tac-toe/')
    .waitForElementVisible('body', 1000)
    .elements('css selector', '[data-cell]', function(cells) {
      assert.equal(cells.value.length, 9);
      cells.value.forEach(function(el, idx) {
        session.expect.element('[data-cell="' + idx + '"]').text.to.equal('');
      });
    });
    session.expect.element('#announce-winner').text.to.equal('');
  },
  'Check for alternating players starting with X' : function () {
    session.click('[data-cell="0"]');
    session.expect.element('[data-cell="0"]').text.to.equal('X');
    session.click('[data-cell="1"]');
    session.expect.element('[data-cell="1"]').text.to.equal('O');
    session.expect.element('#announce-winner').text.to.equal('');
  },
  'Check for first diagonal X win' : function () {
    [4, 2, 8].forEach(function (cell) {
      session.click('[data-cell="' + cell + '"]');
    });
    session.expect.element('#announce-winner').text.to.equal('Player X Won!');
  },
  'Check for clear board': function() {
    session.click('#clear');
    session.expect.element('#announce-winner').text.to.equal('');
    session.elements('css selector', '[data-cell]', function(cells) {
      assert.equal(cells.value.length, 9);
      cells.value.forEach(function(el, idx) {
        session.expect.element('[data-cell="' + idx + '"]').text.to.equal('');
      });
    });
  },
  'Check for second diagonal X win' : function () {
    session.click('#clear');
    [2, 1, 4, 5, 6].forEach(function (cell) {
      session.click('[data-cell="' + cell + '"]');
    });
    session.expect.element('#announce-winner').text.to.equal('Player X Won!')
    session.end();
  }
};
