'use strict';

$(document).on('ready', function () {
  // Put app logic in here
  var playerTurn = 'X';
  $('div[data-cell]').on('click', function () {
    if (isSpaceAvailable(this)) {
      $(this).text(playerTurn);
      playerTurn = (playerTurn === 'X') ? 'O' : 'X'
    }
  });
  // $('div[data-cell]').on('mousemove', function () {
  //   checkForWin();
  // });

  function checkForWin() {
    //get the text for 0 1 2
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
      $('#announce-winner').text('Player ' + playerTurn + ' Wins!')
    };
  }
  //clear and remove the message
  $('#clear').on('click', function clearBoard() {
    $('div[data-cell]').text('');
    $('#announce-winner').text('');
  })

  function isSpaceAvailable(target) {
    if ($(target).text() === '') {
      $('#announce-winner').text(' ')
      return true;
    } else {
      $('#announce-winner').text('That space is taken!')
      return false;
    }
  }
  //$('div[data-cell]').on('click', () => {console.log($(this))})

});
