'use strict';

$(document).on('ready', function() {
    // Put app logic in here

    var playerTurn = 'X';

    function horizontalWin() {
        // Your code here
        return ( $('[data-cell="0"]').text() === playerTurn && $('[data-cell="1"]').text()  === playerTurn && $('[data-cell="2"]').text()  === playerTurn) ||
        ($('[data-cell="3]').text()  === playerTurn && $('[data-cell="4"]').text()  === playerTurn && $('[data-cell="5"]').text()  === playerTurn) ||
        ($('[data-cell="6"]').text()  === playerTurn && $('[data-cell="7"]').text()  === playerTurn && $('[data-cell="8"]').text()  === playerTurn);
    }

    function verticalWin() {
        // Your code here
        return ($('[data-cell="0"]').text() === playerTurn && $('[data-cell="3"]').text() === playerTurn && $('[data-cell="6"]').text() === playerTurn) ||
        ($('[data-cell="1"]').text() === playerTurn && $('[data-cell="4"]').text() === playerTurn && $('[data-cell="7"]').text() === playerTurn) ||
        ($('[data-cell="2"]').text() === playerTurn && $('[data-cell="5"]').text() === playerTurn && $('[data-cell="8"]').text() === playerTurn);
    }

    function diagonalWin() {
        // Your code here
        return ($('[data-cell="0"]').text()  === playerTurn && $('[data-cell="4"]').text() === playerTurn && $('[data-cell="8"]').text() === playerTurn) ||
        ($('[data-cell="2"]').text() === playerTurn && $('[data-cell="4"]').text() === playerTurn && $('[data-cell="6"]').text() === playerTurn);
    }

    function checkForWin() {
        // Your code here
        if ( (horizontalWin()) || (verticalWin()) || (diagonalWin ()) ) {
            console.log($('#announce-winner').text("Player "+ playerTurn + " Won!"));
            return true;
          }
        else {
          return false;
        }
    }

    //Change Player Turn
    function changePlayer() {
      if (playerTurn === 'X'){
            playerTurn = 'O';
          }
          else {
            playerTurn = 'X';
          }
    }

    //Click Functions
    $('[data-cell]').click(function() {
      $(this).text(playerTurn);

      changePlayer();
      checkForWin();

    });

  });
