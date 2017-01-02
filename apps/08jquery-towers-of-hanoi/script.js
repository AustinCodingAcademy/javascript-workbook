'use strict';

$(document).ready(function() {
    var $dataStack = $('[data-stack]');
    var $dataBlock = $('[data-block]');
    var $currentBlock = null;
    var $moveCounter = 1;
    var $winMessage = 'You Won!';

    function checkForWin() {
        if ((($('[data-stack="2"]').children().length === 4)) || ($('[data-stack="3"]').children().length === 4)) {
            // Winning Text
            $('#announce-game-won').text($winMessage);
            // Obligatory Rick Roll on a win
            $('#rick').css('display', '-webkit-flex');
            $('#ytplayer').attr('src', $('#ytplayer').attr("src").replace("autoplay=0", "autoplay=1")).addClass("animated flipInY");
            // Troll Bars
            $($dataStack).addClass('trollGifBg');
        }
    }


    $dataStack.click(function() {
        // This targets the last number of the data-block in 'this' clicked stack
        var $lastBlockNumber = $(this).children().last().data('block');

        if ($currentBlock === null) {
            $currentBlock = $(this).children().last().detach();
        } else if (($currentBlock.data('block') < $lastBlockNumber) || ($(this).children().length === 0)) {
            $(this).append($currentBlock);
            $('#counter').text('Move Counter: ' + $moveCounter);
            $moveCounter++;
            $currentBlock = null;
        }
        checkForWin();
    });

});
