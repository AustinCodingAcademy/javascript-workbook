'use strict';

$(document).ready(function() {
    // Put app logic here

    $('[data-stack]').click(
        function() {
            var block = $(this).children().last().detach()
                //where should i be defining this variable?
            console.log(block)
            if (block.length > 0) {
                $(this).append(block)
            } else {
                console.log('hi');
            }
        }
    );
});
