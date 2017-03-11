'use strict';
var block = null;
var counter = 0;

$(document).ready(function() {
  pushCounter();
  $("[data-stack]").click(handleWhatWasClicked);
  $('#clear').click( clearTowers);
});

function handleWhatWasClicked(){
  if(block === null){
    if($(this).children().length > 0){
      block = $(this).children().last().detach();
    } else if($(this).children().length === 0){
        alert("Please choose a stack with pieces to play.");
        // block = null; ???
      } 
  } else {
      var topPieceValue = $(this).children().last().length;
      var widthOfTopPiece = $(this).children().last().data("block");
      var widthOfMovingPiece = block.data("block");
        
      if(widthOfTopPiece > widthOfMovingPiece ||  topPieceValue === 0 ){
        $(this).append(block);
        block = null;
        counter++;
      } else {
          alert("Invalid move. Try again");
          // add in logic here to place the piece back on the stack it came from 
        } 
    }
    pushCounter();
    checkForWIn(); 
// Display counter
} //<-- last } in handleWhatWasClicked

function checkForWIn() {
  var lengthOfLastStack = $('[data-stack = "3"]').children().length;
  var lengthOfSecondStack = $('[data-stack = "2"]').children().length;

  if (lengthOfLastStack === 4 || lengthOfSecondStack === 4) {
    $('#announce-game-won').text("You Won!");
  }
}

 function clearTowers() {
    block = null;
    counter = 0;
    $('[data-stack = "1"]').append($('[data-block = "100"]'));
    $('[data-stack= "1"]').append($('[data-block = "75"]'));
    $('[data-stack= "1"]').append($('[data-block = "50"]'));
    $('[data-stack= "1"]').append($('[data-block = "25"]'));
    pushCounter();
 } 

 function pushCounter(){
   $('#move-count').text("Total moves " + counter);
 }
