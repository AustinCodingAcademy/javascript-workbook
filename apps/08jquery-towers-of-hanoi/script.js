'use strict';

$(document).ready(function() {
    // Put app logic here
    var block = null;
    $('[data-stack]').click(function() {
        if (block === null) {
            //finds last child of whatever stack you're clicking on
            var lastchild = $(this).children().last();
            //this makes the block variable be that last child and save it
            block = lastchild.detach();
            return true;
        } else {
            var $lastBlock = $(this).children().last().data('block');
            var $blockToPlace = block.data('block');
            if (Number($lastBlock) < Number($blockToPlace)) {
                return false;
            }
        }
        $(this).append(block);
        checkForWin();
        block = null;
    });

    function checkForWin() {
    if ($('[data-stack="2"]').children().length === 4 || $('[data-stack="3"]').children().length === 4) {
        $('#announce-game-won').text('You won!');
        return true;
    }
}
});
