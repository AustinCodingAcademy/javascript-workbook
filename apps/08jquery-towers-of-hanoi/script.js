'use strict';

$(document).ready(function() {
	var $block = null;
	
	
	$('[data-stack]').click(function () {
		//$(this) // clicked stack
	
		//Select a stack.
		var $children = $(this).children();

		//Check if there's anything there. If yes, select block & detach. 
		if ($block === null){

            if ($children.length !== 0){
                $block = $children.last();
                $block.detach();
            }

			
		}

        else {
            var $topBlock = $children.last();

            if ($children.length === 0){
                $(this).append($block);
                $block = null;
            }
            else if ( parseInt($topBlock.data('block')) > parseInt($block.data('block')) ){
                $(this).append($block);
                $block = null;
            }

        }
        checkForWin();
		
	});

        function checkForWin(){
            $('[data-stack]').each(function() {
                var $children = $(this).children();
                if( $(this).data('stack') !== "1" && $children.length === 4 ){
                    $('#announce-game-won').text('You win!! OMG OMG OMG!!');
                }
            })
        }

        window.checkForWin = checkForWin;
});
