'use strict';

$(document).on('ready', function () {
  // Put app logic in here
  var playerTurn = 'X';
  var $dataCell = $('[data-cell]');
  $('[data-cell]').click(function () {
    //if (validateMove() === false) {
    $(this).text(playerTurn);
    checkForWin();
    playerTurn = (playerTurn === 'X') ? 'O' : 'X';
    //}
    //   function validateMove() {
    //   var $dataCell = $('[data-cell]');
    //   if ($(this).text() == 'X' || $(this).text() == 'Y') {
    //     console.log($(this).text());
    //     return true;
    //   } else {
    //     return false;
    //   }
    // }
  })

  function checkForWin() {
    var $cell0 = $('[data-cell="0"]').text();
    var $cell1 = $('[data-cell="1"]').text();
    var $cell2 = $('[data-cell="2"]').text();
    var $cell3 = $('[data-cell="3"]').text();
    var $cell4 = $('[data-cell="4"]').text();
    var $cell5 = $('[data-cell="5"]').text();
    var $cell6 = $('[data-cell="6"]').text();
    var $cell7 = $('[data-cell="7"]').text();
    var $cell8 = $('[data-cell="8"]').text();
    //horizontal win
    if ($cell0 === playerTurn && $cell1 === playerTurn && $cell2 === playerTurn) {
      $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
    }
    if ($cell3 === playerTurn && $cell4 === playerTurn && $cell5 === playerTurn) {
      $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
    }
    if ($cell6 === playerTurn && $cell7 === playerTurn && $cell8 === playerTurn) {
      $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
    }
    //vertical win
    if ($cell0 === playerTurn && $cell3 === playerTurn && $cell6 === playerTurn) {
      $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
    }
    if ($cell1 === playerTurn && $cell4 === playerTurn && $cell7 === playerTurn) {
      $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
    }
    if ($cell2 === playerTurn && $cell5 === playerTurn && $cell8 === playerTurn) {
      $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
    }
    //diagonal win
    if ($cell0 === playerTurn && $cell4 === playerTurn && $cell8 === playerTurn) {
      $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
    }
    if ($cell2 === playerTurn && $cell4 === playerTurn && $cell6 === playerTurn) {
      $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
    }

  }


  $('#clear').click(function () {
    $('[data-cell]').text('');
    playerTurn = 'X';
    $('#announce-winner').text('');
  })
});