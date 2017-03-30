'use strict';

var $block = null;
$(document).ready(function () {
  // Put app logic here
  var movesCount = 0;
  $('[data-stack]').click(
    function () {

      if ($block === null) {
        //datastck that was clicked has its last child detached
        $block = $(this).children().last().detach();
      } else {
        //putting the down the detached block if it's a legal move
        var $legalMove = $block.data('block') < $(this).children().last().data('block') || $(this).children().length === 0;
        if ($legalMove) {
          $(this).append($block);
          $block = null;
          //Track the number of moves made
          movesCount++;
          $('#moves-made').text('Moves: ' + movesCount);
          $('div#announce-game-won').empty();
        } else {

          $('#announce-game-won').text("Illegal Move");
        }
      }
      checkForWin();
    });
  var perfectScore = 15;

  function checkForWin() {
    // checking legnth of data-stack's 2 and 3 for a win
    if ($('[data-stack="2"]').children().length === 4 || $('[data-stack="3"]').children().length === 4) {
      $('#announce-game-won').text("You Won!");
      //diabling clicks and movement of pieces after a win by removing the game screen
      $('[data-stack]').css('display', 'none');
      // displaying what a perfect score would be
      if (movesCount == perfectScore) {
        $('#perfect-score').text(`You got a perfect score!`);
      } else {
        $('#perfect-score').text(`A perfect score would of been ${perfectScore} moves.`);
        return false;
      }
    }
  } // reset the game
  $('#reset-button').click(function () {
    location.reload(true);
  });
});
