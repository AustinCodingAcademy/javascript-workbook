
$(document).ready(function() {
  // Put app logic here
  var $dataStack = $("[data-stack]");
  var $clickedStack;
  var $block = null;

  $dataStack.click(function(e){

    $clickedStack = $(this);
    console.log($block)
    console.log(!$block)
    // check to see if block is clicked and isn't null and if so detach the last child of the stack.
    if (!$block) {
      $block = $clickedStack.children().last().detach();
    } else if (isLegal($block, $clickedStack.children().last())){
      /*console.log($block.get(0));
      console.log($clickedStack.children().last().get(0));*/
       $clickedStack.append($block);
       $block = null;
       checkForWin();
     }
  });

  function isLegal($start, $end) {

    console.log('start', $start.attr('data-block'));
    console.log('end',  $end.attr('data-block'));
    console.log($start.attr('data-block') < $end.attr('data-block'))
    
    if ($start.attr('data-block') < $end.attr('data-block')) {
      return true;
    } else if ($clickedStack.children().length === 0 ) {
        return true;
    } else {
        return false;
    }
  }

  function checkForWin(){
    console.log("Check for win");
    /*$dataStack.each(function(e) {
      console.log(e.get(0));
    })*/
    if ($('[data-stack="2"]').children().length === 4 || $('[data-stack="3"]').children().length === 4) {
     return $('#announce-game-won').text('You Won!');
    }
  }

});


/*'use strict';

$(document).ready(function() {
  // Put app logic here
  var $block = null;
  var play = true;

  function isLegal($blockToMove, $destinationBlock) {
    return !($blockToMove.data('block') > $destinationBlock.data('block'));
  }

  function checkForWin() {
    if ($('[data-stack="2"]').children().length === 4 || $('[data-stack="3"]').children().length === 4) {
      $('#announce-game-won').text('You Won!');
      play = false;
    }
  }
  $('div[data-stack]').click(function () {
    if (!$block && play) {
      $block = $(this).children().last().detach();
    } else if (isLegal($block, $(this).children().last()) && play) {
      $(this).append($block);
      $block = null;
      checkForWin();
    }

  })


});*/
