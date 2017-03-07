'use strict';

$(document).on('ready', function() {
  var playerTurn = 'X';

var $cell0 = $('div[data-cell=0]');
var $cell1 = $('div[data-cell=1]');
var $cell2 = $('div[data-cell=2]');
var $cell3 = $('div[data-cell=3]');
var $cell4 = $('div[data-cell=4]');
var $cell5 = $('div[data-cell=5]');
var $cell6 = $('div[data-cell=6]');
var $cell7 = $('div[data-cell=7]');
var $cell8 = $('div[data-cell=8]');

var $announceWinner = $('#announce-winner');

function horizontalWin() {
   return ($cell0.text() === playerTurn && $cell1.text() === playerTurn && $cell2.text() === playerTurn) ||
       ($cell3.text() === playerTurn && $cell4.text() === playerTurn && $cell5.text() === playerTurn) ||
       ($cell6.text() === playerTurn && $cell7.text() === playerTurn && $cell8.text() === playerTurn)
}

function verticalWin() {
   return ($cell0.text() === playerTurn && $cell3.text() === playerTurn && $cell6.text() === playerTurn) ||
       ($cell1.text() === playerTurn && $cell4.text() === playerTurn && $cell7.text() === playerTurn) ||
       ($cell2.text() === playerTurn && $cell5.text() === playerTurn && $cell8.text() === playerTurn)
}

function diagonalWin() {
   return ($cell0.text() === playerTurn && $cell4.text() === playerTurn && $cell8.text() === playerTurn)||
       ($cell2.text() === playerTurn && $cell4.text() === playerTurn && $cell6.text() === playerTurn)
}

function checkForWin() {
   return (horizontalWin() === true) || (verticalWin() === true) || (diagonalWin() === true);
}

$('[data-cell]').click(function() {
   $(this).text(playerTurn);
   var winCheck = checkForWin();
   console.log(winCheck);
   if (winCheck) {
       return $announceWinner.text('player ' + playerTurn.toLowerCase() + ' wins!');
   };
   playerTurn = (playerTurn === 'X') ? 'O' : 'X';
})

$('#clear').click(function() {
   $('[data-cell]').empty();
   playerTurn = 'X';
})
});
