console.log('hello');
console.log('yo');
'use strict';

$(document).on('ready', function() {
  // $('#announce-winner').html('won');
    // Put app logic in here
    var playerTurn = 'X';
    $('[data-cell]').click(function(){
      console.log(playerTurn);
      // if(playerTurn === 'X'){
        $(this).text(playerTurn);
      //   playerTurn = 'O';
        // console.log($(this).text());
      // }
      // else{
      //   $(this).text(playerTurn);
      //   playerTurn = 'X';
      //   console.log($(this).text());
      //   // console.log( $('[data-cell="0"]').text() === 'X');
      // }
      if(checkForWin()){
        $('#announce-winner').html(playerTurn + ' is the winner!');
      }
      playerTurn = (playerTurn === 'X')?  'O': 'X';
    });


    function checkForWin() {
      return(horizontalWin() || verticalWin() || diagonalWin());
      // return(horizontalWin() || verticalWin() || diagonalWin());
    }

    function horizontalWin() {
      return($('[data-cell="0"]').text() === playerTurn && $('[data-cell="1"]').text() === playerTurn && $('[data-cell="2"]').text() === playerTurn || $('[data-cell="3"]').text() === playerTurn && $('[data-cell="4"]').text() === playerTurn && $('[data-cell="5"]').text() === playerTurn || $('[data-cell="6"]').text() === playerTurn && $('[data-cell="7"]').text() === playerTurn && $('[data-cell="8"]').text() === playerTurn);
    }

    function verticalWin() {
      return($('[data-cell="0"]').text() === playerTurn && $('[data-cell="3"]').text() === playerTurn && $('[data-cell="6"]').text() === playerTurn || $('[data-cell="1"]').text() === playerTurn && $('[data-cell="4"]').text() === playerTurn && $('[data-cell="7"]').text() === playerTurn || $('[data-cell="2"]').text() === playerTurn && $('[data-cell="5"]').text() === playerTurn && $('[data-cell="8"]').text() === playerTurn);
    }

    function diagonalWin() {
      return($('[data-cell="0"]').text() === playerTurn && $('[data-cell="4"]').text() === playerTurn && $('[data-cell="8"]').text() === playerTurn || $('[data-cell="2"]').text() === playerTurn && $('[data-cell="4"]').text() === playerTurn && $('[data-cell="6"]').text() === playerTurn);
    }


});
