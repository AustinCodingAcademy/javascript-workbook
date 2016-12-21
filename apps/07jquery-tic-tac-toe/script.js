'use strict';

$(document).on('ready', function() {
    // Put app logic in here
    var playerTurn = 'X';
    var $mark = $('[data-cell]');
    var $button = $('#clear');
    var turn = 9;
    var wins = [
        [0, 1, 2],[3, 4, 5],[6, 7, 8], //horizontal
        [0, 3, 6],[1, 4, 7],[2, 5, 8], //vertical
        [0, 4, 8],[2, 4, 6] //diagonal
    ];
    $mark.click(function() {
        $('#announce-winner').empty();
        turn--;
        var $selected = $(this);
        var Draw = checkDraw(turn);
        if (!Draw) {
            var Played = checkPlayed($selected);
            if (!Played) {
                $selected.text(playerTurn);
                if (checkForWin()) {
                    $('#announce-winner').text('player ' + playerTurn + ' wins!');
                    $mark.css('pointer-events', 'none');
                } else {
                    playerTurn = (playerTurn === 'X') ? 'O' : 'X';
                };
            } else {
                $('#announce-winner').text('Box has already been played. Select again!')
            }
        } else {
            $selected.text(playerTurn);
            $('#announce-winner').text("It's a Draw!");
        }
    });

    function checkForWin() {
        for (var i = 0; i < wins.length; i++) {
            var $checkedCell = $('[data-cell="' + wins[i][0] + '"]');
            if ($('[data-cell="' + wins[i][0] + '"]').text() === playerTurn &&
                $('[data-cell="' + wins[i][1] + '"]').text() === playerTurn &&
                $('[data-cell="' + wins[i][2] + '"]').text() === playerTurn) {
                return true;
            }
        }
        return false;
    };
    $button.click(function() {
        $mark.empty();
        $mark.css('pointer-events', 'auto');
        $('#announce-winner').empty();
        playerTurn = 'X';
        turn = 9;
    });

    function checkPlayed($selected) {
        if ($selected.text() === 'X' || $selected.text() === 'O') {
            return 1;
        } else {
            return 0;
        }
    }

    function checkDraw(turn) {
        if (turn != 0) {
            return 0;
        } else {
            return 1;
        }
    }
});
