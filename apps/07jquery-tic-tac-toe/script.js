'use strict';

$(document).on('ready', function () {
  // Put app logic in here

  var playerTurn = 'X';
  $('div[data-cell]').on('click', function () {
    if (isSpaceAvailable(this)) {
      $(this).text(playerTurn);
      //checks for win each time there is a click
      checkForWin();
      playerTurn = (playerTurn === 'X') ? 'O' : 'X'
    }
  });
  //trying to prevent more clicks after a win
  $('div[data-cell]').on('click', function () {
    if (checkForWin()) {
      $('div[onclick]').each(function () {
        $(this).data('onclick', this.onclick);

        this.onclick = function (event) {
          if ($(this).attr('disabled')) { // HERE
            return false;
          };

          $(this).data('onclick').call(this, event || window.event);
        };
      });
    }
  });

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
      $('#announce-winner').text('Player ' + playerTurn + ' Wins!')
    };
  }
  //clear and remove the message
  $('#clear').on('click', function clearBoard() {
    $('div[data-cell]').text('');
    $('#announce-winner').text('');
  })
  //checking to see if the space is available
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
