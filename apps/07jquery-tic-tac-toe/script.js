'use strict';

$(document).on('ready', function() {

    //I played, unnecessarily, with data structures cause I could have just written some or statements with selectors, and I learned a valuable lesson in redunancy and paid the price of time, but I learned other things and it was fun.
    //Player turn identified via string, initialized to 'x'
    var playerTurn = 'x';
    //saved values for current cell
    var currentCell = $(this);

    //2 arrays with all marked values
    var xList = [];
    var yList = [];

    //Inject win conditions here
    var winConditions = {
            horizontalTop: [0, 1, 2],
            horizontalMiddle: [3, 4, 5],
            horizontalBottom: [6, 7, 8],
            verticalLeft: [0, 3, 6],
            verticalCenter: [1, 4, 7],
            verticalRight: [2, 5, 8],
            diagonalTopLeft: [0, 4, 8],
            diagonalTopRight: [6, 4, 2]
                //if any of these cell numbers reside in the array and match all x or all y then the x or y player wins.
        }
        //check for clicked items with attribute [data-cell]
    $("[data-cell]").click(function() {

        //log the click
        console.log("Click has registered on data-cell");

        //assign the clicked item the text of the current value of playerTurn


        //if the clicked item does not have the class "immutable" change the turn
        if ( ! $(this).hasClass("immutable")) {

            console.log("The clicked item does not have class immutable");
            $(this).text(playerTurn.toUpperCase());

            if (playerTurn == "x") {
                xList.push($(this).data('cell'));
            } else {
                yList.push($(this).data('cell'));
            }

            console.log("The turn letter has been logged to the board");
            //checking for player win

            console.log("this is the cell number : " + $(this).data('cell'));
            console.log("this is the turn value : " + $(this).text());



            //We know by verified logs that both of these objects are indeed created into Cell
            //How do we get info from CellObjects?

            //How do we push the cell value into an array?
            if(checkForWin()){
              console.log("win detected")
              $('div[data-cell]').addClass("immutable");
              playerTurn = "x";
            }
            else{
              console.log("player turn is: " + playerTurn);
            //toggle the playerTurn to its alternate value
            playerTurn = (playerTurn == 'x') ? 'o' : 'x';

            //secure the div square with class "immutable" so that it cannot be changed
            $(this).addClass("immutable");
            }


            //Check for with

        }



    })



    function checkForWin() {
        //An object literal with win conditions.

        for (var condition in winConditions) {
            var correctX = 0;
            var correctY = 0;

            for (var cell in xList) {

                for (var rule in winConditions[condition]) {
                    if (xList[cell] == winConditions[condition][rule]) {
                        console.log("cell value " + xList[cell] + " rule value " + winConditions[condition][rule]);
                        correctX++;
                    }
                }

                console.log("comparing item: " + xList[cell] + " with conditions: " + condition + " " + winConditions[condition] + " correct items: " + correctX);


                if (correctX == winConditions[condition].length) {
                    console.log("X WINS!");
                    $('#announce-winner').text('Player ' + playerTurn.toUpperCase()  + ' Wins!');
                    return 1;
                }
            }

            for (var cell in yList) {

                for (var rule in winConditions[condition]) {
                    if (yList[cell] == winConditions[condition][rule]) {
                        console.log("cell value " + yList[cell] + " rule value " + winConditions[condition][rule]);
                        correctY++;
                    }
                }

                console.log("comparing item: " + yList[cell] + " with conditions: " + condition + " " + winConditions[condition] + " correct items: " + correctY);


                if (correctY == winConditions[condition].length) {
                    console.log("O WINS!");
                    $('#announce-winner').text('Player ' + playerTurn.toUpperCase() + ' Wins!');

                    return 1;
                }
            }
        }

    }









    //determine win conditions here



    function resetBoard() {
        //restore mutability, clear text, clear active cell objects
        $(".immutable").removeClass("immutable");
        $("[data-cell]").text("");
        $('#announce-winner').empty();
        xList = [];
        yList = [];
        playerTurn = 'x';
        //remove all instances of attribute "immutable"
        //remove all text from the board
    }

    //RESETS THE BOARD
    $("#clear").click(function() {
        resetBoard()
    });










});
