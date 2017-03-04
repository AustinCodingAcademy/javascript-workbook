'use strict';

$(document).on('ready', function () {
  // Put app logic in here

  var moves = 0;

  function gameOn(x) {
    var $this = x;
    if (!isSpaceAvailable($this)) {
      $this.text(playerTurn);
      //checks for win/tie each time there is a click
      checkForFullBoard();
      checkForWin();
      playerTurn = (playerTurn === 'X') ? 'O' : 'X'
      moves++;
    }
  }

  var playerTurn = 'X';
  $('div[data-cell]').on('click', function () {
    gameOn($(this));
  });
  // //trying to enable clicks after the board is cleared
  function enableClicks() {
    $('div[data-cell]').on('click');
  };

  function checkForWin() {
    //checking for that win
    if (
      $('div[data-cell=0]').text() === playerTurn &&
      $('div[data-cell=1]').text() === playerTurn &&
      $('div[data-cell=2]').text() === playerTurn ||
      $('div[data-cell=3]').text() === playerTurn &&
      $('div[data-cell=4]').text() === playerTurn &&
      $('div[data-cell=5]').text() === playerTurn ||
      $('div[data-cell=6]').text() === playerTurn &&
      $('div[data-cell=7]').text() === playerTurn &&
      $('div[data-cell=8]').text() === playerTurn ||
      $('div[data-cell=0]').text() === playerTurn &&
      $('div[data-cell=3]').text() === playerTurn &&
      $('div[data-cell=6]').text() === playerTurn ||
      $('div[data-cell=1]').text() === playerTurn &&
      $('div[data-cell=4]').text() === playerTurn &&
      $('div[data-cell=7]').text() === playerTurn ||
      $('div[data-cell=2]').text() === playerTurn &&
      $('div[data-cell=5]').text() === playerTurn &&
      $('div[data-cell=8]').text() === playerTurn ||
      $('div[data-cell=0]').text() === playerTurn &&
      $('div[data-cell=4]').text() === playerTurn &&
      $('div[data-cell=8]').text() === playerTurn ||
      $('div[data-cell=2]').text() === playerTurn &&
      $('div[data-cell=4]').text() === playerTurn &&
      $('div[data-cell=6]').text() === playerTurn
    ) {
      winMessage();
    }
  }
  // returns who won and stops the game from playing
  function winMessage() {
    moves = 0;
    $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
  }
  //clear and remove the message/cell data
  $('button#clear').on('click', function () {
    $('div#announce-winner').empty();
    $('div[data-cell]').empty();
    moves = 0;
  })
  //checking to see if the space is available
  function isSpaceAvailable(target) {
    if ($(target).text() !== '') {
      return $('#announce-winner').text('That space is taken!')
    }
    return false
  }
  // check to see if the board is full
  function checkForFullBoard() {
    if (moves === 8) {
      $('#announce-winner').text("It's a tie");
    }
  }

});
