'use strict';

$(document).ready(function() {
    // Put app logic here
    var $sendingStackTopBlock = null;

    function checkForWin() {
        return ($('[data-stack=2]').children().length === 4) || ($('[data-stack=3]').children().length === 4)
    }

    $('[data-stack]').click(function() {
        if (!$sendingStackTopBlock) {
            $sendingStackTopBlock = $(this).children().last().detach();
        } else {
            if ($(this).children().last().data('block') > $sendingStackTopBlock.data('block') || $(this).children().last().data('block') == undefined) {
                $(this).append($sendingStackTopBlock);
                $sendingStackTopBlock = null;
            }
        } if (checkForWin()) {
            $('#announce-game-won').text('you won!');
        }
    })
})
