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
      function checkForWin() {
        if ($( "[data-stack]").each([2]).length === 4 || $( "[data-stack]").each([3]).length === 4 )  {
          $( "div#announce-game-won" ).text('You Won!')
        }
      }
      }

});
//($("[data-stack]= 2").length === 4 || $("[data-stack]= 3").length === 4 )


});
