'use strict';

$(document).on('ready', function() {
  var playerTurn = 'X';

$('[data-cell]').click(function() {
    $(this).text(playerTurn);
    if (!checkForWin()){
      playerTurn = (playerTurn === 'X') ? 'O' : 'X';
    }
});

$('#clear').click(function() {
    $('[data-cell]').text('');
    $('#announce-winner').text('');
    playerTurn = "X";
});


    function horizontalWin() {
        if (( $('div[data-cell="0"]').text()  === playerTurn && $('div[data-cell="1"]').text() === playerTurn && $('div[data-cell="2"]').text() === playerTurn) || ( $('div[data-cell="3"]').text() === playerTurn && $('div[data-cell="4"]').text() === playerTurn && $('div[data-cell="5"]').text() === playerTurn) || ($('div[data-cell="6"]').text() === playerTurn && $('div[data-cell="7"]').text() === playerTurn && $('div[data-cell="8"]').text() === playerTurn)) {
            return true;
        } else {
            return false;
        }

    };


    function verticalWin() {
        if (($('[data-cell="0"]').text() === playerTurn && $('div[data-cell="3"]').text() === playerTurn && $('div[data-cell="6"]').text() === playerTurn) || ( $('div[data-cell="1"]').text() === playerTurn && $('div[data-cell="4"]').text() === playerTurn && $('div[data-cell="7"]').text() === playerTurn) || ( $('div[data-cell="2"]').text() === playerTurn && $('div[data-cell="5"]').text() === playerTurn && $('div[data-cell="8"]').text() === playerTurn)) {
            return true;
        } else {
            return false;
        }
    };


    function diagonalWin() {
        if (( $('div[data-cell="0"]').text() === playerTurn && $('div[data-cell="4"]').text() === playerTurn && $('div[data-cell="8"]').text() === playerTurn) || ($('div[data-cell="2"]').text() === playerTurn && $('div[data-cell="4"]').text() === playerTurn && $('div[data-cell="6"]').text() === playerTurn)) {
          return true;
        } else {
          return false;
        }

    };

    function checkForWin(){
     if (horizontalWin() || verticalWin() || diagonalWin()) {
       $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
       return true;
     }
     else {
       return false;
     }
   }

});
