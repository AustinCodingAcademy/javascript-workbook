'use strict';

$(document).ready(function() {
  // Put app logic here
  var $stacks = $('[data-stack]');
  var $block = {};
  var gameover = false;

  $stacks.click(move);

  function move(){
    if (gameover === false) {
      if ($.isEmptyObject($block)) {
        if(!($(this).children().length === 0 )) {
          $block = $(this).children().last().detach();
        }
      } else {
        if (dropBlock($(this), $block)) {
          $block = {};
        }
      }
      checkForWin();
    } else {
      reset();
    }
  }

  function dropBlock($stack, $block) {
    if (legalMove($stack, $block)) {
      $stack.append($block);
      return true;
    } else {
      return false;
    }
  }

  function legalMove($stack, $block) {
    var $last_block = $stack.children().last();
    if ($block.data('block') < $last_block.data('block') || $stack.children().length === 0) {
      return true;
    } else {
      return false;
    }
  }

  function checkForWin() {
    if ($('[data-stack="2"]').children().length === 4 || $('[data-stack="3"]').children().length === 4) {
      $('#announce-game-won').html("you won!");
      gameover = true;
    }
  }

  function reset() {
    $('[data-stack="1"]').html('<div data-block="100"></div><div data-block="75"></div><div data-block="50"></div><div data-block="25"></div>');
    $('[data-stack="2"]').empty();
    $('[data-stack="3"]').empty();
    $('#announce-winner').empty();
    $block = {};
    gameover = false;

  }
});
