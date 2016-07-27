'use strict';
var $block=0;
function checkForWin() {
    if ($('[data-stack = "2"]').children('[data-block]').length === 4 || $('[data-stack = "3"]').children('[data-block]').length === 4) {
        $('#announce-game-won').text('You Win!');
        return true;
    } else {
        return false;
    }
}

$(document).ready(function() {
    // Put app logic here
    $('[data-stack]').click(function() {
        if ($block === 0) {
            $block = $(this).children().last().detach();
        } else {
            if (parseInt($(this).children().last().attr('data-block')) > parseInt($block.attr('data-block')) || $(this).children().length === 0) {
                $(this).append($block);
                $block = 0;
            }
        }
        checkForWin();
    });
});
