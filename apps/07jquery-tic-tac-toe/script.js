'use strict';


$(document).on('ready', function() {

  // Spec 1
  var $playerTurn = $('X');
  var $divDataCell = $('[data-cell]');

  // Spec 3
  // Variables for each cell on the board
  // Used .text() to get the text content of the data-cell
  var dataCell0 = $('[data-cell="0"]').text();
  var dataCell1 = $('[data-cell="1"]').text();
  var dataCell2 = $('[data-cell="2"]').text();
  var dataCell3 = $('[data-cell="3"]').text();
  var dataCell4 = $('[data-cell="4"]').text();
  var dataCell5 = $('[data-cell="5"]').text();
  var dataCell6 = $('[data-cell="6"]').text();
  var dataCell7 = $('[data-cell="7"]').text();
  var dataCell8 = $('[data-cell="8"]').text();

  // Spec 2
  // Toggles between both players
  function $toggleplayerTurn() {
    $playerTurn = ($playerTurn === 'X') ? 'O' : 'X';
  }


  // Board
  // 0, 1, 2
  // 3, 4, 5
  // 6, 7, 8

  // Spec 3
  function $horizontalWin() {
    if (($playerTurn === dataCell0 && $playerTurn === dataCell1 && $playerTurn === dataCell2) ||
    ($playerTurn === dataCell3 && $playerTurn === dataCell4 && $playerTurn === dataCell5) ||
    ($playerTurn === dataCell6 && $playerTurn === dataCell7 && $playerTurn === dataCell8)) {
      return true;
    }
  }

  function $verticalWin() {
    if (($playerTurn === dataCell0 && $playerTurn === dataCell3 && $playerTurn === dataCell6) ||
    ($playerTurn === dataCell1 && $playerTurn === dataCell4 && $playerTurn === dataCell7) ||
    ($playerTurn === dataCell2 && $playerTurn === dataCell5 && $playerTurn === dataCell8)) {
      return true;
    }
  }

  function $diagonalWin() {
    if (($playerTurn === dataCell0 && $playerTurn === dataCell4 && $playerTurn === dataCell8) ||
    ($playerTurn === dataCell2 && $playerTurn === dataCell4 && $playerTurn === dataCell6)) {
      return true;
    }
  }


  // Spec 1 - When a cell is clicked, run function and get text from the cell the player clicked
  // Spec 3 - Check combinations for a win (before switching to next player)
  // Spec 2 - Toggle: This is the switch to next player, ternary operator
  $divDataCell.click(function() {
    $('this').text($playerTurn);
    $checkForWin();
    $toggleplayerTurn();
  })


  // Spec 3
  // Check combinations for a win, and announce winner if true
  function $checkForWin() {

    var dataCell0 = $('[data-cell="0"]').text();
    var dataCell1 = $('[data-cell="1"]').text();
    var dataCell2 = $('[data-cell="2"]').text();
    var dataCell3 = $('[data-cell="3"]').text();
    var dataCell4 = $('[data-cell="4"]').text();
    var dataCell5 = $('[data-cell="5"]').text();
    var dataCell6 = $('[data-cell="6"]').text();
    var dataCell7 = $('[data-cell="7"]').text();
    var dataCell8 = $('[data-cell="8"]').text();

    if ($horizontalWin() || $verticalWin() || $diagonalWin()) {
      $('#announce-winner').text('Player ' + $playerTurn + ' Wins!');
      return true;
    }
  }

});
