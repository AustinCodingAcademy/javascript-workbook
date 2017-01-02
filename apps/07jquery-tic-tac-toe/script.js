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
    //Write a function checkForWin() that checks each combination of winning data-cells and see if they all contain the current playerTurn
    //Remember to use .text() to GET the the text content of any data-cell.
    //If so, select '#announce-winner' and SET its .text() to say 'Player ' + playerTurn + 'Wins!'
    //Run this function every time a player make a mark, but before the the playerTurn switches
    //if datacell-0, datacell-1, and data-cell2 are all equal to playeter turn = you win!;
    // <div data-cell="0"></div>
    function checkForWin() {

        //horizontal check for win
        if ($cell0.text() === playerTurn && $cell1.text() === playerTurn && $cell2.text() === playerTurn) {
            $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
        }

        if ($cell3.text() === playerTurn && $cell4.text() === playerTurn && $cell5.text() === playerTurn) {
            $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
        }

        if ($cell6.text() === playerTurn && $cell7.text() === playerTurn && $cell8.text() === playerTurn) {
            $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
        }


        //verticle check for win
        if ($cell0.text() === playerTurn && $cell3.text() === playerTurn && $cell6.text() === playerTurn) {
            $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
        }

        if ($cell1.text() === playerTurn && $cell4.text() === playerTurn && $cell7.text() === playerTurn) {
            $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
        }

        if ($cell2.text() === playerTurn && $cell5.text() === playerTurn && $cell8.text() === playerTurn) {
            $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
        }

        //diagonal downward check for win
        if ($cell0.text() === playerTurn && $cell4.text() === playerTurn && $cell8.text() === playerTurn) {
            $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
        }

        //diagonal upward check for win
        if ($cell6.text() === playerTurn && $cell4.text() === playerTurn && $cell2.text() === playerTurn) {
            $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
        }


    }

});
