'use strict';

$(document).ready(function() {
    // Put app logic here

    //SPEC 1: An on click method that takes the last child of a DOM stack and holds it in a var "block"
    var block = null;

    var gameStats = {
        clicks: 0,
        turns: 0,
        errors: 0,
    }

    $('div[data-stack]').click(function() {

        //Store block data if any
        if ($(this).children().last().data('block')) {
            var $lastChildValue = $(this).children().last().data('block');
        } else {
            $lastChildValue = null;
        }
        gameStats.clicks++;

        //IS THE BLOCKSPACE NOT FILLED? YOU CAN FILL IT.
        if (block == null) {
            block = $(this).children().last().detach();
            console.log("block value was null, filling, last child value is now: " + $(this).children().last().data('block'));
        }
        //VERIFY MOVE AND PLACE
        else if ($lastChildValue > block.data('block') || $lastChildValue == null) {
            console.log("VALIDATED!");
            $(this).append(block);
            block = null;

            console.log("Running Check For Win");
            checkForWin();
            gameStats.turns++;
        }
    })

    function checkForWin() {
        $('div[data-stack]').each( function() {
          console.log("inside " + $(this).data('stack'));
          console.log("length: " + $(this).children().length);
            if ($(this).children().length == 4 && $(this).data('stack') != 1) {
                $('#announce-game-won').text('You Won!');
            }
        })
    }


})
