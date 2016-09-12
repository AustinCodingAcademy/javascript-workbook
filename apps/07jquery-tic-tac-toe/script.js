'use strict';


$(document).on('ready', function() {
  var playerTurn = 'X';
  $('[data-cell]').click(function() {
    $(this).text(playerTurn);
    checkForWin();
    playerTurn = (playerTurn === 'X') ? 'O' : 'X';
    // occupiedSpace();
    $('#clear').click(function() {
      $('[data-cell]').empty();
      $('#announce-winner').empty();
    });

  });

  function horizontalWin() {
    return $('[data-cell="0"]').text() === playerTurn && $('[data-cell="1"]').text() === playerTurn && $('[data-cell="2"]').text() === playerTurn ||
    $('[data-cell="3"]').text() === playerTurn && $('[data-cell="4"]').text() === playerTurn && $('[data-cell="5"]').text() === playerTurn ||
    $('[data-cell="6"]').text() === playerTurn && $('[data-cell="7"]').text() === playerTurn && $('[data-cell="8"]').text() === playerTurn;

  };

  function verticalWin() {
    return $('[data-cell="0"]').text() === playerTurn && $('[data-cell="3"]').text() === playerTurn && $('[data-cell="6"]').text() === playerTurn ||
    $('[data-cell="1"]').text() === playerTurn && $('[data-cell="4"]').text() === playerTurn && $('[data-cell="7"]').text() === playerTurn ||
    $('[data-cell="2"]').text() === playerTurn && $('[data-cell="5"]').text() === playerTurn && $('[data-cell="8"]').text()=== playerTurn;
  };

  function diagonalWin() {
    return $('[data-cell="0"]').text() === playerTurn && $('[data-cell="4"]').text() === playerTurn && $('[data-cell="8"]').text() === playerTurn ||
    $('[data-cell="2"]').text() === playerTurn && $('[data-cell="4"]').text() === playerTurn && $('[data-cell="6"]').text() === playerTurn;

  };

  function checkForWin() {
    if (horizontalWin() || verticalWin() || diagonalWin()) {
      $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
    }
  };
  // Attempt at the bonus spec: making an occupied space unclickable. Set the 'taken' class to have css that would make it unclickable (pointer-events: none). Still figuring out.

  // function occupiedSpace() {
  //   $('[data-cell]').click(function() {
  //   if ($(this) === 'X' || 'O') {
  //     $(this).addClass('taken');
  //   }
  // });
  //   $('.taken').click(function() {
  //     $('#occupied-space').text('You must select an empty space!');
  //   })
  // };



});
