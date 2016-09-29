'use strict';

$(document).on('ready', function() {
    // Put app logic in here

    var playerTurn = 'X';
    var numberOfTurns = 0;
    var isWinner = false;

    var board = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
    ];

    var row = null;
    var column = null;

    $("[data-cell]").click(function() {

        if (isWinner === false) {

          // first checking to make sure the cell is blank.  If there is already a value, we cannot use that cell.
            if ($(this).text() === '') {

                $('#error').text('');

                $(this).text(playerTurn);

                // we could loop through and store values in an array with rows and columns
                var cellNumber = $(this).data('cell');

                // Based on the data cell number, assign a row and column.  And yes this is ugly but running multiple loops seemed just as silly.

                if (cellNumber === 0) {
                    row = 0;
                    column = 0;
                }
                if (cellNumber === 1) {
                    row = 0;
                    column = 1;
                }
                if (cellNumber === 2) {
                    row = 0;
                    column = 2;
                }
                if (cellNumber === 3) {
                    row = 1;
                    column = 0;
                }
                if (cellNumber === 4) {
                    row = 1;
                    column = 1;
                }
                if (cellNumber === 5) {
                    row = 1;
                    column = 2;
                }
                if (cellNumber === 6) {
                    row = 2;
                    column = 0;
                }
                if (cellNumber === 7) {
                    row = 2;
                    column = 1;
                }
                if (cellNumber === 8) {
                    row = 2;
                    column = 2;
                }

                //need to print the X or Y to the board depending on coordinates
                board[row][column] = (playerTurn === 'X') ? 'X' : 'O';

                checkForWin();

                // if there is not a win, check the number of turns - if the board is full, checkforwin is false, and number of turns is 9, then there is a tie
                if (checkForWin() === false) {

                    numberOfTurns++;

                    if (numberOfTurns > 8) {
                        $('#announce-winner').text("It's a tie!");
                        isWinner = true;
                    }
                }

                // change the playerTurn
                playerTurn = (playerTurn === 'X') ? 'O' : 'X';

            } else {
              // don't allow users to select a cell that already has a value
                $('#error').text('Please select an empty cell.');
            }

        }


    });


    function horizontalWin() {

        //loop through to check each row
        function row(marker) {

            var i = 0;
            for (i = 0; i < 3; i++) {

                var boardArray = [];

                boardArray.push(board[i][0]);
                boardArray.push(board[i][1]);
                boardArray.push(board[i][2]);

                if (boardArray[0] === marker && boardArray[1] === marker && boardArray[2] === marker) {
                    return true;
                }
            }
        }

        //check each row with the values

        if (row('X') === true || row('O') === true) {
            return true;
        } else {
            return false;
        }

    }


    function verticalWin() {

        //loop through to check each column
        function column(marker) {

            var i = 0;
            for (i = 0; i < 3; i++) {

                var boardArray = [];

                boardArray.push(board[0][i]);
                boardArray.push(board[1][i]);
                boardArray.push(board[2][i]);

                if (boardArray[0] === marker && boardArray[1] === marker && boardArray[2] === marker) {
                    return true;
                }
            }
        }

        //check each column with the values

        if (column('X') === true || column('O') === true) {
            return true;
        } else {
            return false;
        }

    }



    function diagonalWin() {

        function diagonal(marker) {

            if ((board[0][0] === marker && board[1][1] === marker && board[2][2] === marker) || (board[0][2] === marker && board[1][1] === marker && board[2][0] === marker)) {
                return true;

            }
        }

        if (diagonal('X') === true || diagonal('O') === true) {
            return true;
        } else {
            return false;
        }


    }


    function checkForWin() {


        //if any of the functions are true, then there is a win!
        //if not continue playing the game

        if (horizontalWin() === true || verticalWin() === true || diagonalWin() === true) {

            isWinner = true;
            var winnerText = "Player " + playerTurn + " wins!";

            $('#announce-winner').text(winnerText);


        } else {
            return false;
        }

    }

    //clear the board
    var button = $('#clear');

    $('#clear').click(function() {

        $("[data-cell='0']").text('');
        $("[data-cell='1']").text('');
        $("[data-cell='2']").text('');
        $("[data-cell='3']").text('');
        $("[data-cell='4']").text('');
        $("[data-cell='5']").text('');
        $("[data-cell='6']").text('');
        $("[data-cell='7']").text('');
        $("[data-cell='8']").text('');

        $('#announce-winner').text('');

        playerTurn = 'X';
        numberOfTurns = 0;
        isWinner = false;

        board = [
            [' ', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' ']
        ];

    });
});
