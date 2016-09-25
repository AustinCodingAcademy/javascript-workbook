'use strict';

$(document).ready(function() {
  // Put app logic here
  var block = null;
  $('[data-stack]').click(function() {
      if(!block) {
        block= $(this).children().last().detach();
      }
      else {
        var lastStackedBlock = $(this).children().last().data('block');
        if ($(block).data('block') < lastStackedBlock || !lastStackedBlock) {
          $(this).append(block);
          block = null;
          checkForWin();
        };
      };
  });
});
function checkForWin() {
  if ($('[data-stack="2"]').children().length === 4 ||
  $('[data-stack="3"]').children().length === 4) {
   $('#announce-game-won').text('You Won!');
 };
};
