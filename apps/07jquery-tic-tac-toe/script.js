'use strict';

$(document).on('ready', function() {
    // Put app logic in here

    var playerTurn = 'X';
    var numberOfTurns = 0;
    var isWinner = false;

    $("[data-cell]").click(function() {


        if (isWinner === false) {

            if ($(this).text() === '') {

                $('#error').text('');

                $(this).text(playerTurn);

                var cellContents0 = $("[data-cell='0']").text();
                var cellContents1 = $("[data-cell='1']").text();
                var cellContents2 = $("[data-cell='2']").text();
                var cellContents3 = $("[data-cell='3']").text();
                var cellContents4 = $("[data-cell='4']").text();
                var cellContents5 = $("[data-cell='5']").text();
                var cellContents6 = $("[data-cell='6']").text();
                var cellContents7 = $("[data-cell='7']").text();
                var cellContents8 = $("[data-cell='8']").text();

                checkForWin(cellContents0, cellContents1, cellContents2, cellContents3, cellContents4, cellContents5, cellContents6, cellContents7, cellContents8);

                if (checkForWin(cellContents0, cellContents1, cellContents2, cellContents3, cellContents4, cellContents5, cellContents6, cellContents7, cellContents8) === false) {

                    numberOfTurns++;

                    if (numberOfTurns > 8) {
                        $('#announce-winner').text("It's a tie!");
                        isWinner = true;
                    }
                }

                // then change the playerTurn
                playerTurn = (playerTurn === 'X') ? 'O' : 'X';

            } else {

                $('#error').text('Please select an empty cell.');
            }

        }


    });


    function horizontalWin(cellContents0, cellContents1, cellContents2, cellContents3, cellContents4, cellContents5, cellContents6, cellContents7, cellContents8) {


        function row(marker) {

            //it's a horizontal win when 0,1,2 are the same, 3,4,5 are the same, or 6,7,8 are the same

            if ((cellContents0 === marker && cellContents1 === marker && cellContents2 === marker) || (cellContents3 === marker && cellContents4 === marker && cellContents5 === marker) || (cellContents6 === marker && cellContents7 === marker && cellContents8 === marker)) {

                return true;
            }

        }

        //check each row with the values

        if (row('X') === true || row('O') === true) {
            return true;
        } else {
            return false;
        }

    }


    function verticalWin(cellContents0, cellContents1, cellContents2, cellContents3, cellContents4, cellContents5, cellContents6, cellContents7, cellContents8) {


        function column(marker) {

            //it's a vertical win when 0,3,6 are the same, 1,4,7 are the same, or 2,5,8 are the same

            if ((cellContents0 === marker && cellContents3 === marker && cellContents6 === marker) || (cellContents1 === marker && cellContents4 === marker && cellContents7 === marker) || (cellContents2 === marker && cellContents5 === marker && cellContents8 === marker)) {

                return true;
            }

        }

        //check each column with the values

        if (column('X') === true || column('O') === true) {
            return true;
        } else {
            return false;
        }

    }


    function diagonalWin(cellContents0, cellContents1, cellContents2, cellContents3, cellContents4, cellContents5, cellContents6, cellContents7, cellContents8) {


        function diagonal(marker) {

            //it's a diagnomal win when 0,4,8 are the same or 6,4,2 are the same

            if ((cellContents0 === marker && cellContents4 === marker && cellContents8 === marker) || (cellContents6 === marker && cellContents4 === marker && cellContents2 === marker)) {

                return true;
            }

        }

        //check each diagonal with the values

        if (diagonal('X') === true || diagonal('O') === true) {
            return true;
        } else {
            return false;
        }

    }



    function checkForWin(cellContents0, cellContents1, cellContents2, cellContents3, cellContents4, cellContents5, cellContents6, cellContents7, cellContents8) {

        //run the horizontal, vertical, diagonal functions
        horizontalWin(cellContents0, cellContents1, cellContents2, cellContents3, cellContents4, cellContents5, cellContents6, cellContents7, cellContents8);
        verticalWin(cellContents0, cellContents1, cellContents2, cellContents3, cellContents4, cellContents5, cellContents6, cellContents7, cellContents8);
        diagonalWin(cellContents0, cellContents1, cellContents2, cellContents3, cellContents4, cellContents5, cellContents6, cellContents7, cellContents8);

        //if any are true, then there is a win!
        //if not continue playing the game
        if (horizontalWin(cellContents0, cellContents1, cellContents2, cellContents3, cellContents4, cellContents5, cellContents6, cellContents7, cellContents8) === true || verticalWin(cellContents0, cellContents1, cellContents2, cellContents3, cellContents4, cellContents5, cellContents6, cellContents7, cellContents8) === true || diagonalWin(cellContents0, cellContents1, cellContents2, cellContents3, cellContents4, cellContents5, cellContents6, cellContents7, cellContents8) === true) {

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

    });
});
