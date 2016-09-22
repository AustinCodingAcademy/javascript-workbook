'use strict';

$(document).ready(function() {
  // Put app logic here
  var block = null
  $( "[data-stack]" ).click(function() {

      if ( !block ) {
        block = $(this).children().last().detach();
      }
      else {
          if ($(this).children().length === 0 || block.data("block") < $(this).children().last().data("block") ) {
            $(this).append(block);
            block = null;
          }
    checkForWin();
// Don't forget to call checkForWin() somewhere... :)
      function checkForWin() {
        if ($( '[data-stack= "2"]').children().length === 4 || $( '[data-stack= "3"]').children().length === 4  )  {
          $( "div#announce-game-won" ).text('You Won!')
        }
          }
      }
})
});
