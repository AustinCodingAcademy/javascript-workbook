'use strict';

var playerTurn = 'X';

$(document).ready(function() {

$('[data-cell]').click(function() {
 $(this).text(playerTurn);
 checkForWin();
 if (checkForWin() === true) {
   $("#announce-winner").text('please select clear board to start over');
 }
 playerTurn = (playerTurn === 'X') ? 'O' : 'X';
 });

$('#clear').click(function() {
 $('[data-cell]').empty() //we do not have to use each here since the data cell selector performs its own implicit iteration. //
 $('#announce-winner').empty();
 playerTurn = 'X';
});
});

function checkForWin() {
  if (horizontalWin() || verticalWin()|| diagonalWin()) {
    $("#announce-winner").text('player ' + playerTurn + ' wins!');
  };
}

function horizontalWin() {
  console.log('horizontalWin is working');
  return ($('[data-cell = "0"]').text() === playerTurn &&
  $('[data-cell = "1"]').text() === playerTurn &&
  $('[data-cell = "2"]').text() === playerTurn) ||
  ($('[data-cell = "3"]').text() === playerTurn &&
  $('[data-cell = "4"]').text() === playerTurn &&
  $('[data-cell = "5"]').text() === playerTurn) ||
  ($('[data-cell = "6"]').text() === playerTurn &&
  $('[data-cell = "7"]').text() === playerTurn &&
  $('[data-cell = "8"]').text() === playerTurn);
} // I tried several ways to target these data cells without having to write out each one, but was never able to get the results I was looking for 
horizontalWin();

function verticalWin() {
    console.log('verticalWin is working');
  	return ($('[data-cell = "0"]').text() === playerTurn &&
	  $('[data-cell = "3"]').text() === playerTurn &&
	  $('[data-cell = "6"]').text() === playerTurn) ||
	  ($('[data-cell = "1"]').text() === playerTurn &&
	  $('[data-cell = "4"]').text() === playerTurn &&
	  $('[data-cell = "7"]').text() === playerTurn) ||
	  ($('[data-cell = "2"]').text() === playerTurn &&
	  $('[data-cell = "5"]').text() === playerTurn &&
	  $('[data-cell = "8"]').text() === playerTurn);
}
verticalWin();

function diagonalWin() {
  return ($('[data-cell = "0"]').text() === playerTurn &&
  $('[data-cell = "4"]').text() === playerTurn &&
  $('[data-cell = "8"]').text() === playerTurn) ||
	($('[data-cell = "2"]').text() === playerTurn &&
	$('[data-cell = "4"]').text() === playerTurn &&
	$('[data-cell = "6"]').text() === playerTurn);
}
diagonalWin();

function preventMove() {
  console.log('this function will prevent a move')
}
preventMove();

function preventMoveChange() {
  console.log('this function will prevent a prevous cell from being over written with a click');
}
preventMoveChange();
