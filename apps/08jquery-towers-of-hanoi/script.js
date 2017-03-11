'use strict';
// These variable have to be global for all of the functions to access
var block = null;
var counter = 0;

// this function listens for a call back when all scripts have loaded. Once it get called, and only once, the functions inside can run.
$(document).ready(function() {
  // Calls the pushCounter to display 0 amount of moves
  pushCounter();
  // listens for the click on a [data-stack] then runs the function to deal with that click
  $("[data-stack]").click(handleWhatWasClicked);
  // listens for the click on the clear button then runs the function to deal with that click
  $('#clear').click( clearTowers);
});

// This function takes current var as arguments to decide what to do with the information.
function handleWhatWasClicked(){
  // If there are no pieced picked up we should pick one up with this click
  if(block === null){
    // if the stack we clicked on has something in it pick it up. We don't want the user to pick up falsey data
    if($(this).children().length > 0){
      // pick one up.
      block = $(this).children().last().detach(); //instead of .detach() just set he block to be there then detach when we click on the second tower. 
         $("#moving-div").append(block);
      // but if there isn't anything in the stack tell them to choose a different stack 
    } else if($(this).children().length === 0){
        alert("Please choose a stack with pieces to play.");
      } 
    // But if block is already full (there is a piece in their hand) then evaluate if the piece is smaller or bigger. 
  } else {
      // create a container for the value of the top piece on the second clicked stack 
      var topPieceValue = $(this).children().last().length;
      // creates a container to determine how big the top piece of the second clicked stack is. 
      var widthOfTopPiece = $(this).children().last().data("block");
      // creates a container to determine how big the piece being moved is. 
      var widthOfMovingPiece = block.data("block");

      // evalutes if the move is legal  
      if(widthOfTopPiece > widthOfMovingPiece ||  topPieceValue === 0 ){
        // puts the block down
        $(this).append(block);
        // resets the block var to null
        block = null;
        // adds mark to the move tally
        counter++;
        // but if none of that is true: tell them to try again.
      } else {
          alert("Invalid move. Try again");
          // add in logic here to place the piece back on the stack it came from 
        } 
    }
  // this refreshes the move counter so that the new current number is always displayed
  pushCounter();
  // always checks for a win after the counter so that it reports the correct number
  checkForWIn(); 
} //<-- last } in handleWhatWasClicked

// Built separately to easily change
function checkForWIn() {
  // Creates vars to measure the amount of data in the arrays.
  var lengthOfLastStack = $('[data-stack = "3"]').children().length;
  var lengthOfSecondStack = $('[data-stack = "2"]').children().length;

  // compares the values of the arrays to 4 because we have 4 game pieces.
  if (lengthOfLastStack === 4 || lengthOfSecondStack === 4) {
    // if either are true we congratulate the winner.
    $('#announce-game-won').text("You Won!");
  }
}

 // needs to be global so it can be used at anytime. 
 function clearTowers() {
    // Must clear the counter
    counter = 0;
    // Must replace all stacks to their original state.
    $('[data-stack = "1"]').append($('[data-block = "100"]'));
    $('[data-stack= "1"]').append($('[data-block = "75"]'));
    $('[data-stack= "1"]').append($('[data-block = "50"]'));
    $('[data-stack= "1"]').append($('[data-block = "25"]'));
    // refresh the Move Counter
    pushCounter();
    // Must clear the current piece
    block = null;
    // Clear the winner banner
    $("#announce-game-won").empty();
 } 

 //  Must be global because its used by multiple functions to display the current move count.
 function pushCounter(){
   $('#move-count').text("Total moves " + counter);
 }

 $(document).on('mousemove', function(e){
    $('#moving-div').offset({
      left:  e.pageX,
      top:   e.pageY 
     });
  });