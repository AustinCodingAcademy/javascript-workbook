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
        session.assert.containsText('[data-cell="' + idx + '"]','');
      });
    })
    .assert.containsText('#announce-winner', '');
  },
  'Check for alternating players starting with X' : function () {
    session
    .click('[data-cell="0"]')
    .assert.containsText('[data-cell="0"]', 'X')
    .click('[data-cell="1"]')
    .assert.containsText('[data-cell="1"]', 'O')
    .assert.containsText('#announce-winner', '');
  },
  'Check for first diagonal X win' : function () {
    [4, 2, 8].forEach(function (cell) {
      session.click('[data-cell="' + cell + '"]');
    })
    session.assert.containsText('#announce-winner', 'Player X Won!');
  },
  'Check for clear board': function() {
    session
    .click('#clear')
    .elements('css selector', '[data-cell]', function(cells) {
      assert.equal(cells.value.length, 9);
      cells.value.forEach(function(el, idx) {
        session.assert.containsText('[data-cell="' + idx + '"]','');
      });
    })
    .assert.containsText('#announce-winner', '');
  },
  'Check for second diagonal X win' : function () {
    session
    .click('#clear');
    [2, 1, 4, 5, 6].forEach(function (cell) {
      session.click('[data-cell="' + cell + '"]');
    });
    session.assert.containsText('#announce-winner', 'Player X Won!')
    .end();
  }
};
