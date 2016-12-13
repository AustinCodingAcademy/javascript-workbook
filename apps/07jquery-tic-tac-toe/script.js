'use strict';

$(document).on('ready', function() {

    var $dataCellDiv = $('[data-cell]');
    var $playerTurn = 'X';
    var $button = $('#clear');

    var $dc0 = $('[data-cell="0"]').text();
    var $dc1 = $('[data-cell="1"]').text();
    var $dc2 = $('[data-cell="2"]').text();
    var $dc3 = $('[data-cell="3"]').text();
    var $dc4 = $('[data-cell="4"]').text();
    var $dc5 = $('[data-cell="5"]').text();
    var $dc6 = $('[data-cell="6"]').text();
    var $dc7 = $('[data-cell="7"]').text();
    var $dc8 = $('[data-cell="8"]').text();

    // Toggles between player turns.
    function togglePlayer() {
        $playerTurn = ($playerTurn === 'X') ? 'O' : 'X';
    };

    // HTML Board layout:
    // 0 1 2
    // 3 4 5
    // 6 7 8

    function horizontalWin() {
        if (
            (($playerTurn === $dc0) && ($playerTurn === $dc1) && ($playerTurn === $dc2)) ||
            (($playerTurn === $dc3) && ($playerTurn === $dc4) && ($playerTurn === $dc5)) ||
            (($playerTurn === $dc6) && ($playerTurn === $dc7) && ($playerTurn === $dc8))
        ) {
            return true;
        }
    };

    function verticalWin() {
        if (
            (($playerTurn === $dc0) && ($playerTurn === $dc3) && ($playerTurn === $dc6)) ||
            (($playerTurn === $dc1) && ($playerTurn === $dc4) && ($playerTurn === $dc7)) ||
            (($playerTurn === $dc2) && ($playerTurn === $dc5) && ($playerTurn === $dc8))
        ) {
            return true;
        }
    };

    function diagonalWin() {
        if (
            (($playerTurn === $dc0) && ($playerTurn === $dc4) && ($playerTurn === $dc8)) ||
            (($playerTurn === $dc2) && ($playerTurn === $dc4) && ($playerTurn === $dc6))
        ) {
            return true;
        }
    };

    function checkForWin() {

        $dc0 = $('[data-cell="0"]').text();
        $dc1 = $('[data-cell="1"]').text();
        $dc2 = $('[data-cell="2"]').text();
        $dc3 = $('[data-cell="3"]').text();
        $dc4 = $('[data-cell="4"]').text();
        $dc5 = $('[data-cell="5"]').text();
        $dc6 = $('[data-cell="6"]').text();
        $dc7 = $('[data-cell="7"]').text();
        $dc8 = $('[data-cell="8"]').text();

        function announceWinner(){
          $('#announce-winner').text('Player ' + $playerTurn + ' Wins!');
        }

        function highlightWinMoves(){
            if (($playerTurn === $dc0) && ($playerTurn === $dc1) && ($playerTurn === $dc2)) {
              $('[data-cell="0"]').css('background-color', '#ffff99');
              $('[data-cell="1"]').css('background-color', '#ffff99');
              $('[data-cell="2"]').css('background-color', '#ffff99');
            } else if (($playerTurn === $dc3) && ($playerTurn === $dc4) && ($playerTurn === $dc5)){
              $('[data-cell="3"]').css('background-color', '#ffff99');
              $('[data-cell="4"]').css('background-color', '#ffff99');
              $('[data-cell="5"]').css('background-color', '#ffff99');
            } else if (($playerTurn === $dc6) && ($playerTurn === $dc7) && ($playerTurn === $dc8)) {
              $('[data-cell="6"]').css('background-color', '#ffff99');
              $('[data-cell="7"]').css('background-color', '#ffff99');
              $('[data-cell="8"]').css('background-color', '#ffff99');
            } else if (($playerTurn === $dc0) && ($playerTurn === $dc3) && ($playerTurn === $dc6)){
              $('[data-cell="0"]').css('background-color', '#ffff99');
              $('[data-cell="3"]').css('background-color', '#ffff99');
              $('[data-cell="6"]').css('background-color', '#ffff99');
            } else if (($playerTurn === $dc1) && ($playerTurn === $dc4) && ($playerTurn === $dc7)){
              $('[data-cell="1"]').css('background-color', '#ffff99');
              $('[data-cell="4"]').css('background-color', '#ffff99');
              $('[data-cell="7"]').css('background-color', '#ffff99');
            } else if (($playerTurn === $dc2) && ($playerTurn === $dc5) && ($playerTurn === $dc8)){
              $('[data-cell="2"]').css('background-color', '#ffff99');
              $('[data-cell="5"]').css('background-color', '#ffff99');
              $('[data-cell="8"]').css('background-color', '#ffff99');
            } else if (($playerTurn === $dc0) && ($playerTurn === $dc4) && ($playerTurn === $dc8)) {
              $('[data-cell="0"]').css('background-color', '#ffff99');
              $('[data-cell="4"]').css('background-color', '#ffff99');
              $('[data-cell="8"]').css('background-color', '#ffff99');
            } else if(($playerTurn === $dc2) && ($playerTurn === $dc4) && ($playerTurn === $dc6)){
              $('[data-cell="2"]').css('background-color', '#ffff99');
              $('[data-cell="4"]').css('background-color', '#ffff99');
              $('[data-cell="6"]').css('background-color', '#ffff99');
            }
        }

        if (horizontalWin() || verticalWin() || diagonalWin()) {
            announceWinner();
            highlightWinMoves();
            return true;
        }
    };

    // Targets div by it's data-cell value.
    // Marks it with player turn if empty.
    // Checks for a win.
    // Toggles to the next player.
    $dataCellDiv.click(function() {
        if (($(this).text() === '') && (!checkForWin())) {
            $(this).text($playerTurn);
        };
        checkForWin();
        if (!checkForWin()) {
            togglePlayer();
        }
    });

    // Clears board and winner.
    $button.click(function() {
        // Clears the text from between the tags of every div with a data-cell attribute
        $dataCellDiv.empty().css({'background-image': 'none', 'background-color': 'white'});
        // Empties the text from between the tags of the #announce-winner div
        $('#announce-winner').empty();
        $playerTurn = 'X';
    });


});
