'use strict';

$(document).on('ready', function() {
  // Put app logic in here
    var getElements = $;
    var playerTurn = 'X'; //starts the player's turn at X
     

     $('[data-cell]').click(function() { //calls the data cells and creates a function when they're clicked
         $(this).text(playerTurn); //when this data cell is clicked, the text of playerTurn is added
        if (!checkForWin()) {
           playerTurn = (playerTurn === 'X') ? 'O' : 'X';
         }
      });
 
     $('#clear').click(function() { //when ID #clear is clicked, a function runs to replace the text of data-cell with an empty string
         $('[data-cell]').text('');
        playerTurn = 'X'; //playerTurn is reset to X
         $('#announce-winner').text(''); //announce-winner is reset to empty string
     });

// solve for Horizontal win using the GetElements cariable created above

     function horizontalWin() {
        if (
             (getElements('[data-cell="0"]').text() === playerTurn && getElements('[data-cell="1"]').text() === playerTurn && getElements('[data-cell="2"]').text() === playerTurn) ||
             (getElements('[data-cell="3"]').text() === playerTurn && getElements('[data-cell="4"]').text() === playerTurn && getElements('[data-cell="5"]').text() === playerTurn) ||
             (getElements('[data-cell="6"]').text() === playerTurn && getElements('[data-cell="7"]').text() === playerTurn && getElements('[data-cell="8"]').text() === playerTurn)
         ) {
             return true;
        } else {
             return false;
         }
     }
 
//Solve for diaginal win using the div and data cell directly, 

     function diagonalWin() {
         if (
             ($('div[data-cell="0"]').text() === playerTurn && $('div[data-cell="4"]').text() === playerTurn && $('div[data-cell="8"]').text() === playerTurn) ||
             ($('div[data-cell="2"]').text() === playerTurn && $('div[data-cell="4"]').text() === playerTurn && $('div[data-cell="6"]').text() === playerTurn)
         ) {
             return true;
         } else {
             return false;
         }
     }
 
     function verticalWin() {
         if (
             ($('div[data-cell="0"]').text() === playerTurn && $('div[data-cell="3"]').text() === playerTurn && $('div[data-cell="6"]').text() === playerTurn) ||
             ($('div[data-cell="1"]').text() === playerTurn && $('div[data-cell="4"]').text() === playerTurn && $('div[data-cell="7"]').text() === playerTurn) ||
             ($('div[data-cell="2"]').text() === playerTurn && $('div[data-cell="5"]').text() === playerTurn && $('div[data-cell="8"]').text() === playerTurn)
        ) {
             return true;
         } else {
             return false;
         }
     }
 
//call check for win and search all types of wins, return true if a win is detected

     function checkForWin(){
       if (horizontalWin() || verticalWin() || diagonalWin()) {
         $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
         return true;
      }
     }
 

 
     
 
  });   


