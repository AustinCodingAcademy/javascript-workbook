'use strict';

$(document).on('ready', function() {
    // Put app logic in here

    var playerTurn = 'X';
    var play = true;
    var acceptableanswers = [0, 1, 2];
    var turnCounter = 1;
    //that SETs playerturn as .text() on $(this)
    //by $9(this) .text(playerTurn).


    function stopGame() {
        $('div[data-cell]:empty').html('<span></span>');
        play = false;
    }

    function checkForWin() {
        // horizontal win
        if (($("div[data-cell='0']").text() === playerTurn && $("div[data-cell='1']").text() === playerTurn && $("div[data-cell='2']").text() === playerTurn) || ($("div[data-cell='3']").text() === playerTurn && $("div[data-cell='4']").text() === playerTurn && $("div[data-cell='5']").text() === playerTurn) || ($("div[data-cell='6']").text() === playerTurn && $("div[data-cell='7']").text() === playerTurn && $("div[data-cell='8']").text() === playerTurn)) {
            stopGame();
            return true;
        }
        //vertical win
        if (($("div[data-cell='0']").text() === playerTurn && $("div[data-cell='3']").text() === playerTurn && $("div[data-cell='6']").text() === playerTurn) || ($("div[data-cell='1']").text() === playerTurn && $("div[data-cell='4']").text() === playerTurn && $("div[data-cell='7']").text() === playerTurn) || ($("div[data-cell='2']").text() === playerTurn && $("div[data-cell='5']").text() === playerTurn && $("div[data-cell='8']").text() === playerTurn)) {
            stopGame();
            return true;
        }
        //diagonal win
        if (($("div[data-cell='0']").text() === playerTurn && $("div[data-cell='4']").text() === playerTurn && $("div[data-cell='8']").text() === playerTurn) || ($("div[data-cell='2']").text() === playerTurn && $("div[data-cell='4']").text() === playerTurn && $("div[data-cell='6']").text() === playerTurn)) {
            stopGame();
            return true;
        }
        return false;
    }

    function checkForTie() {
        if (turnCounter === 9) {
            console.log('It is a tie!');
            stopGame = true;
            return true;
        }
    }

    $('div[data-cell]').click(function() {
        if ($(this).text() === '' && play) {
            $(this).text(playerTurn);
            if (checkForWin()) {
                $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
            }
            playerTurn = (playerTurn === 'X') ? 'O' : 'X';
        }
    })

    $('#clear').click(function() {
        $('div[data-cell]').text('');
        playerTurn = 'X';
        $('#announce-winner').text('');
        play = true;
    })

});

//using jQuery , set a lcick listener on all o f the [data-cell]s
