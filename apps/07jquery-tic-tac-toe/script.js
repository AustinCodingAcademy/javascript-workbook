'use strict';

$(document).on('ready', function() {
    // Put app logic in here
    var playerTurn = 'X';
    $('[data-cell]').click(function(){
      $(this).text(playerTurn);

    checkForWin();

     function horizontalWin () {
       if (($('div[data-cell="0"]').text() === playerTurn && $('div[data-cell="1"]').text() === playerTurn && $('div[data-cell="2"]').text() === playerTurn) ||
       ($('div[data-cell="3"]').text() === playerTurn && $('div[data-cell="4"]').text() === playerTurn && $('div[data-cell="5"]').text() === playerTurn) ||
       ($('div[data-cell="6"]').text() === playerTurn && $('div[data-cell="7"]').text() === playerTurn && $('div[data-cell="8"]').text() === playerTurn))
       {
         return true;
       }
     }
     function verticalWin () {
       if (($('div[data-cell="0"]').text() === playerTurn && $('div[data-cell="3"]').text() === playerTurn && $('div[data-cell="6"]').text() === playerTurn) ||
       ($('div[data-cell="1"]').text() === playerTurn && $('div[data-cell="4"]').text() === playerTurn && $('div[data-cell="7"]').text() === playerTurn) ||
       ($('div[data-cell="2"]').text() === playerTurn && $('div[data-cell="5"]').text() === playerTurn && $('div[data-cell="8"]').text() === playerTurn))
       {
         return true;
       }
     }
     function diagonalWin () {
       if (($('div[data-cell="0"]').text() === playerTurn && $('div[data-cell="4"]').text() === playerTurn && $('div[data-cell="8"]').text() === playerTurn) ||
       ($('div[data-cell="2"]').text() === playerTurn && $('div[data-cell="4"]').text() === playerTurn && $('div[data-cell="6"]').text() === playerTurn))
       {
         return true;
       }
     }
     function checkForWin () {
       if ((horizontalWin() === true) || (verticalWin() === true) || (diagonalWin() === true)) {
         $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
         return true;
       }
         else {return false;}
       }
     playerTurn = (playerTurn === 'X') ? 'O' : 'X';
    })

    $('#clear').click(function(){
      $('[data-cell]').text('');
      playerTurn = 'X';
    })

});
