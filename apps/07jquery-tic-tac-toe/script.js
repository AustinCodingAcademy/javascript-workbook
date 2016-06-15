'use strict';
var playerTurn = 'X';

function horizontalWin() {
    return ($('[data-cell="0"]').text() === playerTurn && $('[data-cell="1"]').text() === playerTurn && $('[data-cell="2"]').text() === playerTurn) ||
        ($('[data-cell="3"]').text() === playerTurn && $('[data-cell="4"]').text() === playerTurn && $('[data-cell="5"]').text() === playerTurn) ||
        ($('[data-cell="6"]').text() === playerTurn && $('[data-cell="7"]').text() === playerTurn && $('[data-cell="8"]').text() === playerTurn);
}

function verticalWin() {
    return ($('[data-cell="0"]').text() === playerTurn && $('[data-cell="3"]').text() === playerTurn && $('[data-cell="6"]').text() === playerTurn) ||
        ($('[data-cell="1"]').text() === playerTurn && $('[data-cell="4"]').text() === playerTurn && $('[data-cell="7"]').text() === playerTurn) ||
        ($('[data-cell="2"]').text() === playerTurn && $('[data-cell="5"]').text() === playerTurn && $('[data-cell="8"]').text() === playerTurn);
}

function diagonalWin() {
    return ($('[data-cell="0"]').text() === playerTurn && $('[data-cell="4"]').text() === playerTurn && $('[data-cell="8"]').text() === playerTurn) ||
        ($('[data-cell="2"]').text() === playerTurn && $('[data-cell="4"]').text() === playerTurn && $('[data-cell="6"]').text() === playerTurn);
}

function checkForWin() {
    if (horizontalWin() === true || verticalWin() === true || diagonalWin() === true) {

        $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
        return true;
    }
}

function togglePlayer() {
    playerTurn = (playerTurn = (playerTurn === 'X') ? 'O' : 'X');
}

$(document).on('ready', function() {
    // Put app logic in here

    $('[data-cell]').click(function() {
        //var playerTurn = 'X';
        
        $(this).text(playerTurn);
        checkForWin()
        togglePlayer();
    });
});
