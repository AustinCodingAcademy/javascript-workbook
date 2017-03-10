'use strict';

$(document).on('ready', function() {
  var playerTurn = 'X';
  var $dataCells = $('[data-cell]');
  var $announceText = $('#announce-winner');

  bindSquares();

  $('#clear').click(function() {
  	$dataCells.text('');
  	$announceText.text('');
  	playerTurn = 'X';
  	bindSquares();
  });

  function bindSquares() {
  	$dataCells.click(function() {
  	  if (isSpaceAvailable($(this))) {
  	    $(this).text(playerTurn);
  	    checkForWin();
  	    checkForTie();
  	    playerTurn = (playerTurn === 'X') ? 'O' : 'X';
  	  }
  });
  }

  function horizontalWin() {
  	return (($('[data-cell="0"]').text() === playerTurn && $('[data-cell="1"]').text() === playerTurn && $('[data-cell="2"]').text() === playerTurn)
  	  || ($('[data-cell="3"]').text() === playerTurn && $('[data-cell="4"]').text() === playerTurn && $('[data-cell="5"]').text() === playerTurn)
  	  || ($('[data-cell="6"]').text() === playerTurn && $('[data-cell="7"]').text() === playerTurn && $('[data-cell="8"]').text() === playerTurn));
  }

  function verticalWin() {
  	return (($('[data-cell="0"]').text() === playerTurn && $('[data-cell="3"]').text() === playerTurn && $('[data-cell="6"]').text() === playerTurn)
  	  || ($('[data-cell="1"]').text() === playerTurn && $('[data-cell="4"]').text() === playerTurn && $('[data-cell="7"]').text() === playerTurn)
  	  || ($('[data-cell="2"]').text() === playerTurn && $('[data-cell="5"]').text() === playerTurn && $('[data-cell="8"]').text() === playerTurn));
  }

  function diagonalWin() {
  	return (($('[data-cell="0"]').text() === playerTurn && $('[data-cell="4"]').text() === playerTurn && $('[data-cell="8"]').text() === playerTurn)
  	  || ($('[data-cell="2"]').text() === playerTurn && $('[data-cell="4"]').text() === playerTurn && $('[data-cell="6"]').text() === playerTurn));
  }

  function checkForWin() {
  	if (horizontalWin() || verticalWin() || diagonalWin()) {
  	  $announceText.text('Player ' + playerTurn + ' Wins!');
  	  $dataCells.off('click');
  	}
  }

  function checkForTie() {
  	if ($dataCells.text().length === 9) {
  	  $announceText.text("It's a tie");
  	}
  }

  function isSpaceAvailable(e) {
  	return (e.text() === '');
  }

});