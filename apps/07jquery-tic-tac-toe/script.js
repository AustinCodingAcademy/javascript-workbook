'use strict';

$(document).on('ready', function() {
  // Put app logic in here
  // Spec1 create a var that is set to X

  // Makes the first move an X
  var playerTurn = "X";

  // this function is listening for a .click on one of the '[data-cell]' then runs the function inside of it if one is clicked
  $('[data-cell]').click(function() {
    // this if statement extracts the text of the '[data-cell]' that was clicked and compares it to "X" or "O"
    // if it equals either on you will get an .alert that says "Choos another spot"
    if($(this).text() === "X" || $(this).text() === "O" ) {
      // prevent move
      alert("Choose another spot!");
    }
    // if the spot is :empty go ahead and run this part fo the function
      else {
        // will use the .text() method to put the value of playerTurn into .this instance of data-cell 
        $(this).text(playerTurn); 
        //  after making a move this if statment runs the three functions inside to get a true/false value
        if (horizontalWin() || verticalWin() || diagonalWin() === true){
          // if any of them are true then we will announce the winner in the #announce-winner div
          $('#announce-winner').text('Player ' + playerTurn + ' Wins!') 
        } else{
            // changes the player's mark after each move.
            //  if its and X turn it to an 0 or if its an O turn it to an X
            playerTurn = (playerTurn === 'X') ? 'O' : 'X';
          } 
      } 
  });  //<-- this is the last } in data-cell .click

    // Don't need to build this function because .empty() is a method in jquery
    // function emptyBoard (){
    //  var blankSpace = "";
    //  $(this).text(blankSpace);
    //  playerTurn = "X"; }

    // the $ says we're going to do a jquery thing here. then names the element on the the html doc, then does a .method( 
    // and inside that method we can call another function or we can create a new function(){ and call other jquery things $$$
    // }) but close it with a ; to make sure we know the difference btw each function and method. 

  // this .click() method is watching the #clear div and if there is a click it will run this function 
  $('#clear').click( function(){
     // sets all the '[data-cells]' to empty with the .empty() method 
     $('[data-cell]').empty();
     // sets #announce-winner to empty with the .empty() method
     $('#announce-winner').empty();
      // resets the var to X no matter what
      playerTurn = "X";
  });

  //  all of these function are pulled and modified from the first TicTacToe game we built. 
  // Modifications include '[data-cells = "?"]' and the .text() method to pull out the text value of the div
  // These are all the same just comparing divs to a var and seeing if they match
  // but this must run each time because each instance the function data-cell.click runs the var is toggled btw "X" and "O"
  function horizontalWin() {
  // This chunk checks to see if there is a win on any of the rows. 
  // Since this statement has a true/false if/else statement it doesn't need to be restated again. 
    if (  
          ($('[data-cell = "0"]').text() === playerTurn && $('[data-cell = "1"]').text() === playerTurn && $('[data-cell = "2"]').text() === playerTurn) ||
          ($('[data-cell = "3"]').text() === playerTurn && $('[data-cell = "4"]').text() === playerTurn && $('[data-cell = "5"]').text() === playerTurn) ||
          ($('[data-cell = "6"]').text() === playerTurn && $('[data-cell = "7"]').text() === playerTurn && $('[data-cell = "8"]').text() === playerTurn)  )
    {
      return true;
    } else {
          return false;
      }
  } //<-- last } in horizontalWin

  // $("div[data-cell=3]") <-- the way Scott's friends said to write it. 
  function verticalWin() {
    if (
        ($('[data-cell = "0"]').text() === playerTurn && $('[data-cell = "3"]').text() === playerTurn && $('[data-cell = "6"]').text() === playerTurn) ||
        ($('[data-cell = "1"]').text() === playerTurn && $('[data-cell = "4"]').text() === playerTurn && $('[data-cell = "7"]').text() === playerTurn) ||
        ($('[data-cell = "2"]').text() === playerTurn && $('[data-cell = "5"]').text() === playerTurn && $('[data-cell = "8"]').text() === playerTurn) )
    {
      return true;
    } else {
      return false;
    }
  } //<-- last } in verticalWin

  function diagonalWin() {
    if (
     ($('[data-cell = "2"]').text() === playerTurn && $('[data-cell = "4"]').text() === playerTurn && $('[data-cell = "6"]').text() === playerTurn) ||
     ($('[data-cell = "0"]').text() === playerTurn && $('[data-cell = "4"]').text() === playerTurn && $('[data-cell = "8"]').text() === playerTurn) )
    {
      return true;
    } else {
      return false;
    }

  }// } <-- last } in diagonalWin





}); //< last bracket and ) in document.on
