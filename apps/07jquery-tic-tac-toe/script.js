'use strict';

var playerTurn = 'X';

$(document).ready(function() {
  $('[data-cell]').click(function() {
 $(this).text(playerTurn);
 checkForWin();
 if (checkForWin() === true) {
   $("#announce-winner").text('please select clear board to start over');
}

playerTurn = (playerTurn === 'X') ? 'O' : 'X'; // this teirnery operator allows us to switch between x and o when clicking.
});

$('#clear').click(function() {
$('[data-cell]').empty() //we do not have to use each here since the data cell selector performs its own implicit iteration. //
 $('#announce-winner').empty(); // this code clears the message displayed when a winner is detected
 playerTurn = 'X';
});
});


//if statements execute when the return value === true//
// using the "or" concditional operator
// or "or" conditional will return true if any of the conditions are met.
// Once this is detected the script moves to the next functional pat of the code.

function checkForWin() {
if (horizontalWin() || verticalWin()|| diagonalWin()) {
    $("#announce-winner").text('player ' + playerTurn + ' wins!');
};
}

function horizontalWin() {
console.log('horizontalWin is working');
  return
  ($('[data-cell = "0"]').text() === playerTurn &&
  $('[data-cell = "1"]').text() === playerTurn &&
  $('[data-cell = "2"]').text() === playerTurn) ||

  ($('[data-cell = "3"]').text() === playerTurn &&
  $('[data-cell = "4"]').text() === playerTurn &&
  $('[data-cell = "5"]').text() === playerTurn) ||

  ($('[data-cell = "6"]').text() === playerTurn &&
  $('[data-cell = "7"]').text() === playerTurn &&
  $('[data-cell = "8"]').text() === playerTurn);
}

horizontalWin();

function verticalWin() {
console.log('verticalWin is working');
  	return
    ($('[data-cell = "0"]').text() === playerTurn &&
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
return
  ($('[data-cell = "0"]').text() === playerTurn &&
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

preventMove(); //these funcitons are place holders for the bonus spec. they also serve as troubleshooting devices to see exactly where my mode might be running into isses.

function preventMoveChange() {
console.log('this function will prevent a prevous cell from being over written with a click');
}

preventMoveChange();
