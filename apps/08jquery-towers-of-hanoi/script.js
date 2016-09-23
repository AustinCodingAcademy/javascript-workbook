'use strict';

$(document).ready(function() {

var block = null;

$("[data-stack]").on("click", function() {
  if (block === null) {
    block = $(this).children().last().detach();
    console.log("1st Down!");
  }
  else {

var blockValue = Number(block.attr("data-block"));
var move2Value = Number($(this).children().last().attr("data-block"));
      if (blockValue < move2Value || !move2Value) {
        $(this).append(block);
        block = null;
        console.log("2nd Down!");
      }
      else {
        alert("Not so fast! Can't put bigger blocks on top of smaller ones.");
      };
      checkForWin();
      console.log("3rd Down!");
  };


});

function checkForWin() {
  if ($('[data-stack="2"]').children().length === 4 || $('[data-stack="3"]').children().length === 4)
  {
    $("div#announce-game-won").text("You Won!");
  }
};


}); /*Don't Delete Me* *Closing tags for the whole app.*/
