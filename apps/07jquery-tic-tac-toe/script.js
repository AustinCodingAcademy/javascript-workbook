'use strict';

$(document).on('ready', function() {
    // Put app logic in here
    var playerTurn = 'X';
    var $dataCell = $("[data-cell]");
    var $announceWinner = $("#announce-winner");
    var $clearBoard = $("#clear");
    var winningPositions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];



    $dataCell.click(function() {

        if ($(this).text() === '') {
            $(this).text(playerTurn);
            if (checkForWin()) {
                $announceWinner.text('Player ' + playerTurn + ' wins!');
            }
            playerTurn = (playerTurn === 'X') ? 'O' : 'X';
        }
    });


    $clearBoard.click(function() {
        $dataCell.text('');
        playerTurn = 'X';
        $announceWinner.text('');
    });


    function checkForWin() {

        for (var i = 0; i < winningPositions.length; i++) {

            if ($('[data-cell="' + winningPositions[i][0] +
                    '"]').text() === playerTurn &&
                $('[data-cell="' + winningPositions[i][1] +
                    '"]').text() === playerTurn &&
                $('[data-cell="' + winningPositions[i][2] +
                    '"]').text() === playerTurn) {
                return true;
            }
        }
    };
});
