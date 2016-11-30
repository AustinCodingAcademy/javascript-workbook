'use strict';

$(document).on('ready', function() {
    // Put app logic in here
    var $playerTurn = 'X';
    var $gameReady = true;

    function isLegal(space) {
        if ($(space).text() != 'X' && $(space).text() != 'O') {
            console.log("move " + $playerTurn + " is legal");
            return true;
        }
    }

    function verticalWin() {
        if (($("div[data-cell='0']").text() === $playerTurn &&
                $("div[data-cell='3']").text() === $playerTurn &&
                $("div[data-cell='6']").text() === $playerTurn) ||
            ($("div[data-cell='1']").text() === $playerTurn &&
                $("div[data-cell='4']").text() === $playerTurn &&
                $("div[data-cell='7']").text() === $playerTurn) ||
            ($("div[data-cell='2']").text() === $playerTurn &&
                $("div[data-cell='5']").text() === $playerTurn &&
                $("div[data-cell='8']").text() === $playerTurn)) {
            return true;
        }
    }

    function horizontalWin() {
        if (($("div[data-cell='0']").text() === $playerTurn &&
                $("div[data-cell='1']").text() === $playerTurn &&
                $("div[data-cell='2']").text() === $playerTurn) ||
            ($("div[data-cell='3']").text() === $playerTurn &&
                $("div[data-cell='4']").text() === $playerTurn &&
                $("div[data-cell='5']").text() === $playerTurn) ||
            ($("div[data-cell='6']").text() === $playerTurn &&
                $("div[data-cell='7']").text() === $playerTurn &&
                $("div[data-cell='8']").text() === $playerTurn)) {
            return true;
        }
    }

    function diagonalWin() {
        if (($("div[data-cell='0']").text() === $playerTurn &&
                $("div[data-cell='4']").text() === $playerTurn &&
                $("div[data-cell='8']").text() === $playerTurn) ||
            ($("div[data-cell='2']").text() === $playerTurn &&
                $("div[data-cell='4']").text() === $playerTurn &&
                $("div[data-cell='6']").text() === $playerTurn)) {
            return true;
        }
    }

    function checkForTie() {
        if ($(".position").is(':empty')) {
            return true;
        }
        console.log("game resulted in a tie");
        $("#announce-winner").text("It's a Tie!");
        $gameReady = false;
        return;
    }

    function checkForWin() {
        if (verticalWin() || horizontalWin() || diagonalWin()) {
            $("#announce-winner").text("Player " + $playerTurn + " Wins!");
            $gameReady = false;
            console.log("win detected");
            return true;
        }
        checkForTie();
        return false;
    }

    $(".position").click(function() {
        if ($gameReady) {
            if (isLegal(this)) {
                $("#announce-winner").empty();
                $(this).text($playerTurn);
                checkForWin();
                $playerTurn = ($playerTurn === 'X') ? 'O' : 'X';
                return;
            }
            $("#announce-winner").text("Invalid move.");
            return;
        }
        return;
    })

    $("#clear").click(function() {
        $(".position").empty();
        $("#announce-winner").empty();
        $playerTurn = 'x';
        $gameReady = true;
    })
});
