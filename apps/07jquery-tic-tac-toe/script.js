'use strict';

$(document).ready(function() {

    var $button = $("#clear")
    var $datacell = $('[data-cell]');
    var playerTurn = "X";
    var $cell0 = $('[data-cell="0"]');
    var $cell1 = $('[data-cell="1"]');
    var $cell2 = $('[data-cell="2"]');
    var $cell3 = $('[data-cell="3"]');
    var $cell4 = $('[data-cell="4"]');
    var $cell5 = $('[data-cell="5"]');
    var $cell6 = $('[data-cell="6"]');
    var $cell7 = $('[data-cell="7"]');
    var $cell8 = $('[data-cell="8"]');

    $datacell.click(function() {
        $(this).text(playerTurn);
        checkForWin();
        playerTurn = (playerTurn == 'X') ? 'O' : 'X';
    });

    $button.click(function() {
        $cell0 = $('[data-cell="0"]').text("");
        $cell1 = $('[data-cell="1"]').text("");
        $cell2 = $('[data-cell="2"]').text("");
        $cell3 = $('[data-cell="3"]').text("");
        $cell4 = $('[data-cell="4"]').text("");
        $cell5 = $('[data-cell="5"]').text("");
        $cell6 = $('[data-cell="6"]').text("");
        $cell7 = $('[data-cell="7"]').text("");
        $cell8 = $('[data-cell="8"]').text("");
        playerTurn = "X";
        $('#announce-winner').text("");
    });
    function checkForWin() {

        //Horizontal Win
        if ($cell0.text() === playerTurn && $cell1.text() === playerTurn && $cell2.text() === playerTurn) {
            $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
        }
        if ($cell3.text() === playerTurn && $cell4.text() === playerTurn && $cell5.text() === playerTurn) {
            $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
        }
        if ($cell6.text() === playerTurn && $cell7.text() === playerTurn && $cell8.text() === playerTurn) {
            $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
        }


        //Verticle Win
        if ($cell0.text() === playerTurn && $cell3.text() === playerTurn && $cell6.text() === playerTurn) {
            $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
        }
        if ($cell1.text() === playerTurn && $cell4.text() === playerTurn && $cell7.text() === playerTurn) {
            $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
        }
        if ($cell2.text() === playerTurn && $cell5.text() === playerTurn && $cell8.text() === playerTurn) {
            $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
        }


        //Diagonal Win
        if ($cell0.text() === playerTurn && $cell4.text() === playerTurn && $cell8.text() === playerTurn) {
            $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
        }
        if ($cell6.text() === playerTurn && $cell4.text() === playerTurn && $cell2.text() === playerTurn) {
            $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
        }


    }

});
