'use strict';

$(document).on('ready', function() {
  // Put app logic in here

  //sets playerTurn to X
  var playerTurn = 'X';


  //click datacell to run all the info in this function
   $('[data-cell]').click(function() {
        //ensuring the spot is open
        if ($(this).text === 'X' || $(this).text() === 'O') {
          alert('This spot is taken!');
        } 
        //
        else {
          //allowing the player to make a move
          $(this).text(playerTurn);
          // Checking for win
          if (horizontalWin() || verticalWin() || diagonalWin() === true) {
            $('#announce-winner').text('Player ' + playerTurn + ' Wins!')
          }
           else {
             //toggle the playerTurn
            playerTurn = (playerTurn === 'X') ? 'O' : 'X';
           }
        }
    });//datacell.click function
      //clear the board with the button
     $('#clear').click( function() {
          $('[data-cell]').empty();
          $('#announce-winner').empty();
          playerTurn = 'X';
        }); // clearclick function
    

   // various ways to check for a win
       function horizontalWin() {
    if ($("div[data-cell=0]").text() === playerTurn && $("div[data-cell=1]").text() === playerTurn && $("div[data-cell=2]").text() === playerTurn ||
       $("div[data-cell=3]").text() === playerTurn && $("div[data-cell=4]").text() === playerTurn && $("div[data-cell=5]").text() === playerTurn ||
       $("div[data-cell=6]").text() === playerTurn && $("div[data-cell=7]").text() === playerTurn && $("div[data-cell=8]").text() === playerTurn) {
         return true;
       }
       else {
         return false;
       }
    } // horizontalWin

  function verticalWin() {
     if ($("div[data-cell=0]").text() === playerTurn && $("div[data-cell=3]").text() === playerTurn && $("div[data-cell=6]").text() ||
       $("div[data-cell=1]").text() === playerTurn && $("div[data-cell=4]").text() === playerTurn && $("div[data-cell=7]").text() ||
       $("div[data-cell=2]").text() === playerTurn && $("div[data-cell=5]").text() === playerTurn && $("div[data-cell=8]").text()) {
         return true;
       }
       else {
         return false;
       }
  } //verticalWin 

  function diagonalWin() {
     if ($("div[data-cell=0]").text() === playerTurn && $("div[data-cell=4]").text() === playerTurn && $("div[data-cell=8]").text() ||
        $("div[data-cell=2]").text() === playerTurn && $("div[data-cell=4]").text() === playerTurn && $("div[data-cell=6]").text()) {
         return true;
       }
       else {
         return false;
       }
    } //diagonalWin
    

 });//<-- last } in document()

