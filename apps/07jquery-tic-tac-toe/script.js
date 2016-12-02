'use strict';

$(document).on('ready', function() {
    //Spec 1
    var $datacell = $('[data-cell]');
    var playerTurn = "X";
    var $button = $('#clear');
    //Spec 3
    var datacells0 = $('[data-cell="0"]').text();
    var datacells1 = $('[data-cell="1"]').text();
    var datacells2 = $('[data-cell="2"]').text();
    var datacells3 = $('[data-cell="3"]').text();
    var datacells4 = $('[data-cell="4"]').text();
    var datacells5 = $('[data-cell="5"]').text();
    var datacells6 = $('[data-cell="6"]').text();
    var datacells7 = $('[data-cell="7"]').text();
    var datacells8 = $('[data-cell="8"]').text();
    //Spec 1
    $('[data-cell]').click(function() {
        $(this).text(playerTurn);

        //Spec 3
        checkForWin();

        //Spec 2
        playerTurn = (playerTurn === 'X') ? 'O' : 'X';
    })

    //Spec 4
    //Add a button with an id="clear" that will not only clear the board, but reset the player to player 'X'
    $button.click(function() {
        $datacell.empty();
        $("#announce-winner").empty();
        playerTurn = "X";
    });
   //Spec 3
    function horizontalWin() {

        if (datacells0 === playerTurn && datacells1 === playerTurn && datacells2 === playerTurn ||
            datacells3 === playerTurn && datacells4 === playerTurn && datacells5 === playerTurn ||
            datacells6 === playerTurn && datacells7 === playerTurn && datacells8 === playerTurn) {

            return true;
        }
    }
    function verticalWin() {
        if (datacells0 === playerTurn && datacells3 === playerTurn && datacells6 === playerTurn ||
            datacells1 === playerTurn && datacells4 === playerTurn && datacells7 === playerTurn ||
            datacells2 === playerTurn && datacells5 === playerTurn && datacells8 === playerTurn) {

            return true;
        }
    }

    function diagonalWin() {
        console.log('test2: ' + datacells8);
        if (datacells0 === playerTurn && datacells4 === playerTurn && datacells8 === playerTurn ||
            datacells2 === playerTurn && datacells4 === playerTurn && datacells6 === playerTurn) {

            return true;
        }

    }

    function checkForWin() {

        datacells0 = $('[data-cell="0"]').text();
        datacells1 = $('[data-cell="1"]').text();
        datacells2 = $('[data-cell="2"]').text();
        datacells3 = $('[data-cell="3"]').text();
        datacells4 = $('[data-cell="4"]').text();
        datacells5 = $('[data-cell="5"]').text();
        datacells6 = $('[data-cell="6"]').text();
        datacells7 = $('[data-cell="7"]').text();
        datacells8 = $('[data-cell="8"]').text();
    //Spec 3
        if (horizontalWin() || verticalWin() || diagonalWin()) {

          $('#announce-winner').text('Player ' + playerTurn + ' Wins!');

            return true;
          }
    }
});
