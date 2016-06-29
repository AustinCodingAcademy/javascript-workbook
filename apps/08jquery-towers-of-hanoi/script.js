'use strict';

$(document).ready(function() {
  // Put app logic here
  var $block = null;
  var blockSize1 = 0;
  var blockSize2 = 0;
  $('[data-stack]').click(function(){
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
          $block = null;
        }
       } else {
         $(this).append($block);
         $block = null;
       }
    }
    checkForWin();
  });

<<<<<<< HEAD
  function checkForWin() {
    $('[data-stack]').each(function() {
      if (($(this).data('stack') > 1) && ($(this).children().length > 3))
=======
  function checkForWin(){
    $('[data-stack]').each(function(index, '[data-block]') {
      // how do I define what I am looking for??
      if (index === 3 && (($(this).data("stack") === "2") || ($(this).data("stack") === "3")))
>>>>>>> 2d5ae993bef8c1ccf036f0d0ec9f681e4eaaad4f
      {
        $('#announce-game-won').text('You Won!');
      } else {
        console.log("Eat my nuts!");
      }
    });
  };

  // window.checkForWin = checkForWin;

  function fuckYou() {
    console.log("Fuck you!");
  }

});
