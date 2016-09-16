'use strict';

$(document).ready(function() {

  var $block = null;
  var maxBlock =4;

  $('[data-stack]').click( function(){
    // Get the children and lastBlock of active stack
    var $children = $(this).children();
    var $lastBlock = $children.last();

    if ($block === null) {
      // Remove the last block on active stack and keep in memory
      $block = $lastBlock.detach();
    } else {
      // Verify the move.. with the last block of active stack and the block picked up
      if ( $lastBlock.data('block') <= $block.data('block') ) {
        alert('Invalid move');
      } else {
        // Insert the detach block into the active stack
        $(this).append($block);
        $block = null;
      }

      if (checkForWin()) {
        $('#announce-game-won').text('You Won!');
      }

    }

  } );

  function checkForWin() {
    return ( $('[data-stack="2"]').children().length >= maxBlock || $('[data-stack="3"]').children().length >= maxBlock) ;
  }

} );
