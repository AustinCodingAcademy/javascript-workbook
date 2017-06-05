'use strict';

document.addEventListener('DOMContentLoaded', () => {
  $(document).ready(function () {


     let $block = null;

    $('[data-stack]').click(function () {
      let stack = this;
      //var $children = $(this).childre();
      //var $last = $children.last();
      if ($block === null) {
        $block = $(stack).children().last().detach();
      } else if (isLegal() || isEmpty()){
        $(stack).append($block); //maybe push?
        $block = null;
        if (checkForWin()){
          $('annouce-game-won').text('You Won!');
        };
      }

      });
    function isLegal(stack){
      return ($block.data('block') < $(stack).children().last().data('block'))
    }
    function isEmpty(stack){
      return $(stack).children().length === 0;
    }

    function checkForWin(){
      return $('[data-stack="2"]').children().length===4||
        $('[data-stack="3"]').children().length===4;
    }
  });

});
