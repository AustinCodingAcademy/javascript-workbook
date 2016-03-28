'use strict';

$(document).on('ready', function() {
    
  // Setup empty board
  var board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ];

  // Set player turn to X
  var playerTurn = 'X';

  // Set board array to blank and start with player X again
  // Null > Null
  function resetBoard(){
    
    // Grab all data cells and set to empty string
    $('div[data-cell]').text('');
    // Grab #warn-player and set it to an empty string
    $('#warn-player').text('');
    // Grab #announce-winner and set it to an empty string
    $('#announce-winner').text('');
    // Reset continuePlay back to true
    continuePlay = true

    board = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' ']
    ];

    playerTurn = 'X';
  }

  // jQuery - Reset the Board and Clear out HTML content
  $('#resetButton').click(function(){
    resetBoard();
  });

  // Check for horizontal win
  // Null > Boolean
  function horizontalWin() {
    if ((board[0][0] === playerTurn && board[0][1] === playerTurn) && board[0][2] === playerTurn || 
        (board[1][0] === playerTurn && board[1][1] === playerTurn) && board[1][2] === playerTurn || 
        (board[2][0] === playerTurn && board[2][1] === playerTurn) && board[2][2] === playerTurn) {
      return true;
    }
      return false;
  }

  // Check for vertical win
  // Null > Boolean
  function verticalWin() {
    if ((board[0][0] === playerTurn && board[1][0] === playerTurn) && board[2][0] === playerTurn || 
        (board[0][1] === playerTurn && board[1][1] === playerTurn) && board[2][1] === playerTurn || 
        (board[0][2] === playerTurn && board[1][2] === playerTurn) && board[2][2] === playerTurn) {
      return true;
    }
      return false;
  }

  // Check for diagonal win
  // Null > Boolean
  function diagonalWin() {
    if ((board[0][0] === playerTurn && board[1][1] === playerTurn) && board[2][2] === playerTurn || 
        (board[0][2] === playerTurn && board[1][1] === playerTurn) && board[2][0] === playerTurn) {
      return true;
    }
      return false;
  }

  var continuePlay = true;

  // Compare all varieties of win, if true modify #announce-winner div
  // Null > Boolean
  function checkForWin() {
    if (horizontalWin() || verticalWin() || diagonalWin()) {
      $('#announce-winner').text("Player " + playerTurn + " Wins!");
      continuePlay = false;
      return true;
    } else {
      return false;
    }
  }

  // Loop through spaces, for every empty space decrement. 
  // If emptySpots equals zero and checkForWin() is false, reset the board.
  // Null > Boolean
  function checkForDraw() {
    var emptySpots = 9;
    
    // Loop through the array of arrays
    for (var i = 0; i < board.length; i++){
      // Loop through the array of arrays
      for (var j = 0; j < board[i].length; j++){
        if (board[i][j] != " "){
            emptySpots --;
        }
      }
    }    

    if (emptySpots === 0 && !checkForWin()) {
      console.log("\nCat's Game! Let's Reset...\n");
      resetBoard();
      return true;
    }
    return false;
  }

  // Play the game of ticTacToe!
  // Integer, Integer > String
  function ticTacToe(row, column) {
    
    // Check to make sure chose spot is open
    if (board[row][column] == ' '){

      //  FIRST ROW  ===========================

      if (row == 0 && column == 0){
        board[0][0] = playerTurn;
      } else if (row == 0 && column == 1){
        board[0][1] = playerTurn;
      } else if (row == 0 && column == 2){
        board[0][2] = playerTurn;
      }
      
      //  SECOND ROW  ===========================
      
      if (row == 1 && column == 0){
        board[1][0] = playerTurn;
      } else if (row == 1 && column == 1){
        board[1][1] = playerTurn;
      } else if (row == 1 && column == 2){
        board[1][2] = playerTurn;
      }

      //  THIRD ROW  ===========================

      if (row == 2 && column == 0){
        board[2][0] = playerTurn;
      } else if (row == 2 && column == 1){
        board[2][1] = playerTurn;
      } else if (row == 2 && column == 2){
        board[2][2] = playerTurn;
      }

      // Determine if there's a winner
      checkForWin();
      // Determine if there's a draw
      checkForDraw();

      // Alternate team
      playerTurn = (playerTurn === 'X') ? 'O':'X';
      
      return true;

    } else {
      console.log("Try again.");
      return false;
    }
  }

  // BEGIN JQUERY ===========================

  // jQuery click event handler.
  // On click, grab data-cell attribute. Equate to position on board and set to playerTurn.
  $('div[data-cell]').click(function(){
    
    // Grab text within the selected cell
    var $divText = $(this).text();

    // Place mark only if div is blank
    if ($divText === '' && continuePlay === true){
      // Remove player warning
      $('#warn-player').text('');
      // Insert player team
      $(this).text(playerTurn);
      
    } else if (continuePlay === false){
      $('#warn-player').text('GAME OVER');
    } else {
      // Tell player they've chosen an incorrect spot
      $('#warn-player').text('Try again. Player ' + $divText + ' has already played there...');
    }

    // Grab div with specified data attribute
    var $divDataCell = $(this).data('cell');
    console.log("Player Turn: " + playerTurn);

    // Decipher positioning on board
    if ($divDataCell === 0){
      ticTacToe(0,0);
    } else if ($divDataCell === 1){
      ticTacToe(0,1);
    } else if ($divDataCell === 2){
      ticTacToe(0,2);
    } else if ($divDataCell === 3){
      ticTacToe(1,0);
    } else if ($divDataCell === 4){
      ticTacToe(1,1);
    } else if ($divDataCell === 5){
      ticTacToe(1,2);
    } else if ($divDataCell === 6){
      ticTacToe(2,0);
    } else if ($divDataCell === 7){
      ticTacToe(2,1);
    } else if ($divDataCell === 8){
      ticTacToe(2,2);
    }

  });

});
