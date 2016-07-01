'use strict';

$(document).ready(function() {
  // Put app logic here
  var $block = null;
  var $turnCounter = 0;
  var $bestTurn = 0;
  $('[data-stack]').click(function(){
    $('#announce-game-won').text('');
    var $children = $(this).children();
    if ($block === null) {
      if ($children.length > 0) {
        $block = $children.last();
        $block.detach();
      }
    } else {
      var $topBlock = $children.last();
      if ($children.length > 0) {
        if (parseInt($block.data('block')) < parseInt($topBlock.data('block'))) {
          $(this).append($block);
          $turnCounter ++;
          $block = null;
        } else {
          $('#announce-game-won').text('Fuck off!');
        }
       } else {
         $(this).append($block);
         $turnCounter ++;
         $block = null;
       }
    }
    playFeedback();
    checkForWin();
      $('.turnCounter').text($turnCounter);
  });
  function checkForWin() {
    $('[data-stack]').each(function() {
      if (($(this).data('stack') > 1) && ($(this).children().length > 3))
      {
        $('#announce-game-won').text('You Won!');
        $bestTurn = $turnCounter;
        $('#best-score').text($bestTurn);
        $turnCounter = 0;
        var $feedback = $('#play-feedback').text();
        $('#best-score').append(' ' + $feedback);
      }
    });
  };
// Not finished yet, don't judge me
  function playFeedback() {
    if ($turnCounter > 20) {
      $('#play-feedback').text('Taking your sweet ass time!');
    } else if ($turnCounter < 10) {
      $('#play-feedback').text("Boss level");
    } else if ($turnCounter < 15) {
      $('#play-feedback').text("You're doing OK...");
    } else {
      $('#play-feedback').text('Game on! (Basic bitch)');
    }

    }




});
