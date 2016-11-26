'use strict';

$(document).on('ready', function()

    {


        //Player turn identified via string, initialized to 'x'
        var playerTurn = 'x';
        //saved values for current cell
        var currentCell = $(this);
        //check for clicked items with attribute [data-cell]
        $("[data-cell]").click(function()
        {
          console.log("TEST FOR VALUE OF [data-cell]" +
          $(this).data('cell'));
            //log the click
            console.log("Click has registered on data-cell");

            //assign the clicked item the text of the current value of playerTurn


            //if the clicked item does not have the class "immutable" change the turn
            if(! $(this).hasClass("immutable") ){

                console.log("The clicked item does not have class immutable");
                $(this).text(playerTurn);

                console.log("The turn letter has been logged to the board");
                //toggle the playerTurn to its alternate value
                playerTurn = (playerTurn == 'x') ? 'o' : 'x';

            }

            //secure the div square with class "immutable" so that it cannot be changed
            $(this).addClass("immutable");

            //Check for with
            checkForWin();

        })


        function checkForWin(){
          //Find the value of the [data-cell] attribute

          //determine win conditions here

        }

        function resetBoard(){
          $(".immutable").removeClass("immutable");
          $("[data-cell]").text("");
          //remove all instances of attribute "immutable"
          //remove all text from the board
        }

        //RESETS THE BOARD
        $("#clear").click( function() {resetBoard()} );

        function debug(){
          console.log('debug enabled, logging values of cells using methods')
          console.log( 'data cell selector data cell' + $('[data-cell]') );
          console.log('data cell selector for data cell plus' + $(this).attr("[data-cell]"));
        }








});
