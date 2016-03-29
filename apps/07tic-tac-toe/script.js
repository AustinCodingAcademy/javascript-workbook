'use strict';
$(document).on('ready', function () {
    // Put app logic in here
    var playerTurn = 'X';
    $('div[data-cell]').click(function () {
        $(this).text(playerTurn);
        checkForWin();
        playerTurn = (playerTurn === "X") ? "O" : "X";
        $(this).off('click');
    });

    function checkForWin() {
        if (horizontalWin() || verticalWin() || diagonalWin()) {
            $('#announce-winner').text('Player ' + playerTurn + ' Wins!')
        }
    }

    function horizontalWin() {
        //horizontal win
        if (($('div[data-cell="0"]').text() == playerTurn) && ($('div[data-cell="1"]').text() == playerTurn) && ($('div[data-cell="2"]').text() == playerTurn)) {
            $('#announce-winner').text('Player ' + playerTurn + ' Wins!')
        }
        if (($('div[data-cell="3"]').text() == playerTurn) && ($('div[data-cell="4"]').text() == playerTurn) && ($('div[data-cell="5"]').text() == playerTurn)) {
            $('#announce-winner').text('Player ' + playerTurn + ' Wins!')
        }
        if (($('div[data-cell="6"]').text() == playerTurn) && ($('div[data-cell="7"]').text() == playerTurn) && ($('div[data-cell="8"]').text() == playerTurn)) {
            $('#announce-winner').text('Player ' + playerTurn + ' Wins!')
        }
    }

    function verticalWin() {
        //vertical win
        if (($('div[data-cell="0"]').text() == playerTurn) && ($('div[data-cell="3"]').text() == playerTurn) && ($('div[data-cell="6"]').text() == playerTurn)) {
            $('#announce-winner').text('Player ' + playerTurn + ' Wins!')
        }
        if (($('div[data-cell="1"]').text() == playerTurn) && ($('div[data-cell="4"]').text() == playerTurn) && ($('div[data-cell="7"]').text() == playerTurn)) {
            $('#announce-winner').text('Player ' + playerTurn + ' Wins!')
        }
        if (($('div[data-cell="2"]').text() == playerTurn) && ($('div[data-cell="5"]').text() == playerTurn) && ($('div[data-cell="8"]').text() == playerTurn)) {
            $('#announce-winner').text('Player ' + playerTurn + ' Wins!')
        }
    }

    function diagonalWin() {
        //diagonal win
        console.log("tictactoe");
        if (($('div[data-cell="0"]').text() == playerTurn) && ($('div[data-cell="4"]').text() == playerTurn) && ($('div[data-cell="8"]').text() == playerTurn)) {
            $('#announce-winner').text('Player ' + playerTurn + ' Wins!')
        }
        if (($('div[data-cell="2"]').text() == playerTurn) && ($('div[data-cell="4"]').text() == playerTurn) && ($('div[data-cell="6"]').text() == playerTurn)) {
            $('#announce-winner').text('Player ' + playerTurn + ' Wins!')
        }
    }
});