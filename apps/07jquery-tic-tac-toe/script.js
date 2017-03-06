'use strict';

// playerTurn variable
var playerTurn = 'X'
// variables to store each data-cell value
var $cell1 = $('[data-cell = "0"]')
var $cell2 = $('[data-cell = "1"]')
var $cell3 = $('[data-cell = "2"]')
var $cell4 = $('[data-cell = "3"]')
var $cell5 = $('[data-cell = "4"]')
var $cell6 = $('[data-cell = "5"]')
var $cell7 = $('[data-cell = "6"]')
var $cell8 = $('[data-cell = "7"]')
var $cell9 = $('[data-cell = "8"]')

$(document).on('ready', function() {
  $('[data-cell]').click(function(){
    $(this).text(playerTurn);
    checkForWin();
    playerTurn = (playerTurn === 'X') ? 'O' : 'X';
  });
  clearBoard();
  
});

// function to check for win
function checkForWin() {
  // if all win functions evaluate to true, announce winner
  if (horizontalWin() === true || verticalWin() === true || diagonalWin() === true) {
    $('#announce-winner').text('Player ' + playerTurn + ' Wins!')
    return true;
  };
}

// horizontal win conditions
function horizontalWin() {
  if (($cell1.text() === playerTurn && $cell2.text() === playerTurn && $cell3.text() === playerTurn) ||
     ($cell4.text() === playerTurn && $cell5.text() === playerTurn && $cell6.text() === playerTurn) ||
     ($cell7.text() === playerTurn && $cell8.text() === playerTurn && $cell9.text() === playerTurn)) {
       return true;
  };
}

// vertical win conditions
function verticalWin() {
  if (($cell1.text() === playerTurn && $cell4.text() === playerTurn && $cell7.text() === playerTurn) ||
     ($cell2.text() === playerTurn && $cell5.text() === playerTurn && $cell8.text() === playerTurn) ||
     ($cell3.text() === playerTurn && $cell6.text() === playerTurn && $cell9.text() === playerTurn)) {
       return true;
  };
}

// diagonal win conditions
function diagonalWin() {
  if (($cell1.text() === playerTurn && $cell5.text() === playerTurn && $cell9.text() === playerTurn) ||
     ($cell3.text() === playerTurn && $cell5.text() === playerTurn && $cell7.text() === playerTurn)) {
       return true;
  };
}

// clear board function
function clearBoard() {
  $('#clear').click(function(){
    $('[data-cell]').text(" ");
    $('#announce-winner').text(" ");
    playerTurn = "X";
  });
}
