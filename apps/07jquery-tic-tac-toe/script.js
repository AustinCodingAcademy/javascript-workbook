
playerTurn = 'X';

$(document).on('ready', function() {

$('[data-cell]').click(function() {
  $(this).text(playerTurn)
  checkForWin();
  playerTurn = (playerTurn === 'X') ?  'O' : 'X';
})

$('#clear').click(function() {
  $('[data-cell]').empty()
  $("#announce-winner").empty()
  playerTurn = 'X';
})
});

function horizontalWin() {
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

// horizontalWin();

function verticalWin() {

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

// verticalWin();

function diagonalWin() {

  return ($('[data-cell = "0"]').text() === playerTurn &&
  $('[data-cell = "4"]').text() === playerTurn &&
  $('[data-cell = "8"]').text() === playerTurn) ||

	($('[data-cell = "2"]').text() === playerTurn &&
	$('[data-cell = "4"]').text() === playerTurn &&
	$('[data-cell = "6"]').text() === playerTurn);
}

// diagonalWin();

function checkForWin() {
  if (horizontalWin() || verticalWin() || diagonalWin()) {
    $("#announce-winner").text('player ' + playerTurn + ' wins!');
  }
}
