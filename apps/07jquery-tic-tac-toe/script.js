'use strict';

$(document).on('ready', function () {
  // Put app logic in here

  var moves = 0;

  function gameOn(x) {
    var $this = x;
    if (isSpaceAvailable($this)) {
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

  // if (isSpaceAvailable(this)) {
  //   $(this).text(playerTurn);
  //   //checks for win each time there is a click
  //   checkForWin();
  //   playerTurn = (playerTurn === 'X') ? 'O' : 'X'
  // }
  // });
  // //trying to enable clicks after the board is cleared
  function enableClicks() {
    $('div[data-cell]').off('click');
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
    };
  }

  /*

    $("#someElement").click(function(){
    $(this).unbind('click');
    $('#anotherElement').show();
  });

  $('#anotherElement').click(function(){
    $("#someElement").bind('click');
  });
    */
  // returns who won and stops the game from playing
  function winMessage() {
    $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
    $('div[data-cell]').unbind('click');
    moves = 0;
  }
  //clear and remove the message
  $('#clear').on('click', function clearBoard() {
    $('div[data-cell]').text('');
    $('#announce-winner').text(' ');
    moves = 0;
    $('div[data-cell]').on('click', function () {
      gameOn($(this));
    });
  })
  //checking to see if the space is available
  function isSpaceAvailable(target) {
    console.log($(target).text());
    if ($(target).text() === '') {
      $('#announce-winner').text(' ');
      return true;
    } else {
      $('#announce-winner').text('That space is taken!');
      return false;
    }
  }
  // check to see if the board is full
  function checkForFullBoard() {
    console.log($(moves));
    if (moves === 8) {
      $('#announce-winner').text("It's a tie");
    }
  }

});
