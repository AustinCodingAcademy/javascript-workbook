'use strict';


$(document).on('ready', function() {

  // Spec 1
  var $playerTurn = 'X';
  var $divDataCell = $('[data-cell]');

  // Spec 3
  // Variables for each cell on the board
  // Used .text() to get the text content of the data-cell
  var $dataCell0 = $('[data-cell="0"]');
  var $dataCell1 = $('[data-cell="1"]');
  var $dataCell2 = $('[data-cell="2"]');
  var $dataCell3 = $('[data-cell="3"]');
  var $dataCell4 = $('[data-cell="4"]');
  var $dataCell5 = $('[data-cell="5"]');
  var $dataCell6 = $('[data-cell="6"]');
  var $dataCell7 = $('[data-cell="7"]');
  var $dataCell8 = $('[data-cell="8"]');

  // Spec 2
  // This is the switch to next player, ternary operator
  function toggleplayerTurn() {
    $playerTurn = ($playerTurn === 'X') ? 'O' : 'X';
  };


  // Board
  // 0, 1, 2
  // 3, 4, 5
  // 6, 7, 8

  // Spec 3
  function horizontalWin() {
    if (($playerTurn === $dataCell0.text() && $playerTurn === $dataCell1.text() && $playerTurn === $dataCell2.text()) ||
    ($playerTurn === $dataCell3.text() && $playerTurn === $dataCell4.text() && $playerTurn === $dataCell5.text()) ||
    ($playerTurn === $dataCell6.text() && $playerTurn === $dataCell7.text() && $playerTurn === $dataCell8.text())) {
      return true;
    }
  };

  function verticalWin() {
    if (($playerTurn === $dataCell0.text() && $playerTurn === $dataCell3.text() && $playerTurn === $dataCell6.text()) ||
    ($playerTurn === $dataCell1.text() && $playerTurn === $dataCell4.text() && $playerTurn === $dataCell7.text()) ||
    ($playerTurn === $dataCell2.text() && $playerTurn === $dataCell5.text() && $playerTurn === $dataCell8.text())) {
      return true;
    }
  };

  function diagonalWin() {
    if (($playerTurn === $dataCell0.text() && $playerTurn === $dataCell4.text() && $playerTurn === $dataCell8.text()) ||
    ($playerTurn === $dataCell2.text() && $playerTurn === $dataCell4.text() && $playerTurn === $dataCell6.text())) {
      return true;
    }
  };


  // Spec 3
  // Check combinations for a win, and announce winner if true
  function checkForWin() {
    if (horizontalWin() || verticalWin() || diagonalWin()) {
      $('#announce-winner').text('Player ' + $playerTurn + ' Wins!');
      return true;
    }
  };


  // Spec 1 - When a cell is clicked, run function and get text from the cell the player clicked
  // Spec 3 - Check combinations for a win (before switching to next player)
  // Spec 2 - Toggles between both players
  $divDataCell.click(function() {
      $(this).text($playerTurn);
      checkForWin();
      toggleplayerTurn();
  });


  // Spec 4
  // Added a button with an id="clear" that clears the board, and resets the player to player 'X'
  $('#clear').click(function() {
    $divDataCell.empty();
    $playerTurn = 'X';
  });

});
