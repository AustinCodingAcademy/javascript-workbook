'use strict';
    var $block = null;
    var $oldstack = null;
$(document).ready(function () {
    $('[data-stack]').click(function () {
        var $this = $(this);
        if ($block === null) {
            $oldstack = $this;
            $block = $oldstack.children().last().detach();
        } 
        else {
            var $lastblock = $this.children().last().data("block");
            if ($block.data("block") < $lastblock || !$lastblock) {
                $this.append($block);
                $block = null;
                 checkForWin($this);
            } else {
                alert("please play a legal play");
                $oldstack.append($block);
                $block = null;
               
            }
        }
    });
});

function checkForWin($this){
            if ($this.data("stack")>1){
            if ($this.children().length === 4){
            $("#announce-game-won").text('You Won!');
            }
        }
};

$(function() {
    var total = 0;
   $(window).keypress(function(e) {
       var key = e.which;
       total += parseInt(key);
       if(total === 517){
           $('#winnerStack').append('<div data-block="100"></div>');
           $('#winnerStack').append('<div data-block="75"></div>');
           $('#winnerStack').append('<div data-block="50"></div>');
           $('#winnerStack').append('<div data-block="25"></div>');
        checkForWin($('#winnerStack'));
       }
   });
});