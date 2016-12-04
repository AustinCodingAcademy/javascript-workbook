'use strict';

$(document).ready(function() {
    var $dataStack = $('[data-stack]');
    var $dataBlock = $('[data-block]');
    var $currentBlock = null;
    var $winMessage = 'You Won!';

    function checkForWin() {
      if ((($('[data-stack="2"]').children().length === 4)) || ($('[data-stack="3"]').children().length === 4)) {
        $('#announce-game-won').text($winMessage);
        // Obligatory Rick Roll on a win
        $('#ytplayer').attr('src', $('#ytplayer').attr("src").replace("autoplay=0", "autoplay=1"));
        $('#rick').css('display', '-webkit-flex');
        // Troll Bars
        $($dataStack).css({'background-image':'url("troll.gif")', 'background-repeat': 'repeat-x', 'background-size' : 'contain', 'background-color': 'none'})
      }
    }

    $dataStack.click(function() {
      // This targets the number of the data-block in 'this' clicked stack
      var $lastBlockNumber = $(this).children().last().data('block');

      if ($currentBlock === null) {
        $currentBlock = $(this).children().last().detach();
      } else if (($currentBlock.data('block') < $lastBlockNumber) || ($(this).children().length === 0)) {
        $(this).append($currentBlock);
        $currentBlock = null;
      }
      checkForWin();
    });

});
