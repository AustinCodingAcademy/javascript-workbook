'use strict';

$(document).ready(function() {
    // Put app logic here
    var $block = '';
    var $startStack = '';
    var $endStack = '';
    var $gameReady = true;
    var $moves = 0;

    function movePiece(start, end) {
        if (isLegal(start, end)) {
            console.log("move is legal");
            $("[data-stack='" + end + "']").append($block);
            $("[data-stack='" + start + "']").css("background-color", "aliceblue");
            $startStack = '';
            $endStack = '';
            $moves++;
            checkForWin();
        } else {
          console.log("move is not legal");
        }
    }

    function isLegal(start, end) {
        var $startValue = 0;
        var $endValue = 0;
        $startValue = $block.data('block');
        $endValue = $("[data-stack='" + end + "']").children().last().data('block');
        console.log("$startValue is " + $startValue);
        console.log("$endValue is " + $endValue)

        if ($endValue === undefined ||
            $startValue < $endValue) {
            $("#announce-game-won").empty();
            return true;
        } else {
            $("#announce-game-won").text("Invalid Move");
            //$block = '';
            return false;
        }
    }

    function checkForWin() {
        var $twoCount = $("[data-stack='2']").children().length;
        var $threeCount = $("[data-stack='3']").children().length;
        console.log($twoCount);
        console.log($threeCount);
        if ($twoCount == 4 || $threeCount == 4) {
            $("#announce-game-won").text("You Won!");
            $("#move-count").text($moves + " Moves");
            $gameReady = false;
            return true;
        }
        return false;
    }

    $("[data-stack]").click(function() {
        if ($gameReady) {
            if ($startStack === '') {
                $startStack = $(this).data('stack');
                $block = $(this).children().last().detach();
                $(this).css("background-color", "rgb(255, 230, 128)");
                console.log("startStack is " + $startStack);
                return
            } else {
                $endStack = $(this).data('stack');
                if ($startStack == $endStack) {
                    $(this).append($block);
                    console.log("endStack is " + $endStack);
                    $("#announce-game-won").text("Move Cancelled");
                    $startStack = '';
                    $endStack = '';
                    $block = '';
                    $(this).css("background-color", "aliceblue");
                    return;
                }
                movePiece($startStack, $endStack);
            }
        }
    })


    $("#reset-game").click(function() {
      location.reload();
    })
});
