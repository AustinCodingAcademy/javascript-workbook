'use strict';

$(document).on('ready', function() {
    // Put app logic in here
    var playerTurn = 'X';

    $('[data-cell]').click(function() {
      $(this).text(playerTurn);
      checkForWin();
      switchPlayer();
      clearBoard();
    });

      function horizontalWin() {
        return ($('[data-cell="0"]').text() === playerTurn &&
        $('[data-cell="1"]').text() === playerTurn &&
        $('[data-cell="2"]').text() === playerTurn) ||
        ($('[data-cell="3"]').text() === playerTurn &&
        $('[data-cell="4"]').text() === playerTurn &&
        $('[data-cell="5"]').text() === playerTurn) ||
        ($('[data-cell="6"]').text() === playerTurn &&
        $('[data-cell="7"]').text() === playerTurn &&
        $('[data-cell="8"]').text() === playerTurn);
        };


      function verticalWin() {
          return ($('[data-cell="0"]').text() === playerTurn &&
          $('[data-cell="3"]').text() === playerTurn &&
          $('[data-cell="6"]').text() === playerTurn) ||
          ($('[data-cell="1"]').text() === playerTurn &&
          $('[data-cell="4"]').text() === playerTurn &&
          $('[data-cell="7"]').text() === playerTurn) ||
          ($('[data-cell="2"]').text() === playerTurn &&
          $('[data-cell="5"]').text() === playerTurn &&
          $('[data-cell="8"]').text() === playerTurn);
        };


      function diagonalWin() {
          return (($('[data-cell="0"]').text() === playerTurn &&
          $('[data-cell="4"]').text() === playerTurn &&
          $('[data-cell="8"]').text() === playerTurn) ||
          ($('[data-cell="2"]').text() === playerTurn &&
          $('[data-cell="4"]').text() === playerTurn &&
          $('[data-cell="6"]').text() === playerTurn));
        };


function checkForWin() {
  if(horizontalWin() || verticalWin() || diagonalWin()) {
    $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
  };
};

function switchPlayer() {
      playerTurn = (playerTurn === 'X') ? 'O':'X';
    };

function noWrite() {
  
};

function clearBoard() {
  $('#clear').click(function() {
    $('[data-cell]').text('');
    $('#announce-winner').text('');
    playerTurn = 'X';
  });
}

});
