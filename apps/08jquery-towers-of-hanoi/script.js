'use strict';
// These variable have to be global for all of the functions to access
var block = null;
var counter = 0;
var toWinValue = 3;
var blocksToCount = 3;//tried using this to hold the value of what was in the stack before the user tried to change the number of pieces

// this function listens for a call back when all scripts have loaded. Once it get called, and only once, the functions inside can run.
$(document).ready(function() {
  // Calls the pushCounter to display 0 amount of moves
  pushCounter();
  pushMinimum(toWinValue);
  // listens for the click on a [data-stack] then runs the function to deal with that click
  $("[data-stack]").click(handleWhatWasClicked);
  $("[data-stack]").click(playSound);
  $("#input-Submit").click( function () {
    var j = 1;
    do{
      $('#token' + j).remove();
      j++;
    }
    while (j <= 5){
      j++;
    }
    generateBlocks();  
  });  
  
  // listens for the click on the clear button then runs the function to deal with that click
  $('#clear').click(clearTowers); 
});

// This function takes current vars as arguments to decide what to do with the information.
function handleWhatWasClicked(){
  // If there are no piece picked up we should pick one up with this click( var block = the user's hand)
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

function checkForWIn() {
  // Creates vars to measure the amount of data in the arrays.
  var lengthOfLastStack = $('[data-stack = "3"]').children().length;
  var lengthOfSecondStack = $('[data-stack = "2"]').children().length;

  // compares the values of the arrays to the number of game pieces.
  if (lengthOfLastStack === toWinValue || lengthOfSecondStack === toWinValue) {
    // if either are true we congratulate the winner.
    $('#announce-game-won').height(90);
    $('#announce-game-won').text("You Won!");
  }
//****Need to end the game and reset after a certain time or find a way to jump out of the loop.**** 
}

function clearTowers() {
  toWinValue = 3;
  // Must clear the counter
  counter = 0;
  // Must replace all stacks to their original states
  $('[data-stack= "1"]').append($(div.attr("data-block", 75)));
  $('[data-stack= "1"]').append($(div.attr("data-block", 50)));
  $('[data-stack= "1"]').append($(div.attr("data-block", 25)));
  // refresh the Move Counter
  pushCounter();
  // Must clear the current piece
  block = null;
  // Clear the winner banner
  $("#announce-game-won").empty();
  pushMinimum();
} 

//  Must be global because its used by multiple functions to display the current move count.
function pushCounter(){
  $('#move-count').text("Total moves " + counter);
}

// This function handles the moving piece(floating piece). The #moving-div is a stationary div used to placehold the value of what was picked up
// this function changes the position of that stationary div using the (x,y) coordinates of the cursor as its placement.
$(document).on('mousemove', function(e){
  $('#moving-div').offset({
    left:  e.pageX,
    top:   e.pageY 
    });
});

// This function gets the value of sound held in HTML and plays it.
function playSound() {
  var sound = document.getElementById("audio");
  sound.play()
}

// creates new blocks based on the user's input
function generateBlocks() {
    var numberOfBlocks = ($("#number-Value").val());
    blocksToCount = numberOfBlocks;
      // Keeps the blocks within legal limits of the game 
      if (numberOfBlocks > 3 && numberOfBlocks <= 8){
        // counts through the numbers and runs for the length of the number the user put in
        var numberToAdd = (numberOfBlocks - 3);
        for (var i = 1; i <= numberToAdd; i++){
          // creates a var that creates a new element on the DOM
          var newDiv = document.createElement('div');
          // sets the ID of that new element to token + the current number in the loop
          newDiv.id = "token" + i;
          // .appends the new element to the first stack. 
          $('[data-stack = "1"]').prepend($(newDiv));
          $('#token' + i).attr("data-block", 100 + i);
          toWinValue++;
          pushMinimum($('[data-stack = "1"]').children().length);
        }
       } else{
            // tells the user their number is outside the legal limits of the game
            alert("Please input a number between 4 and 8."); 
          }
}  // <--- last } in generateBlocks  

// returns the value of the number needed to win and pushes the value to a div.
function pushMinimum(discs) {
  $("#block-Counter").text("Min # of moves " + (Math.pow(2, discs) - 1));
}
  // john@digitaldownbeat.com