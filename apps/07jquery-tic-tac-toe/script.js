'use strict';

var playerTurn = 'X';


function diagonalWin(){
  return ($('[data-cell = "0"]').text() === playerTurn && $('[data-cell = "4" ]').text() === playerTurn && $('[data-cell = "8"]').text() === playerTurn)
  || ($('[data-cell = "2"]').text() === playerTurn && $('[data-cell = "4"]').text() === playerTurn && $('[data-cell = "6"]').text() === playerTurn);
}

function horizontalWin(){
  return ($('[data-cell="0"]').text() === playerTurn && $('[data-cell = "1"]').text() === playerTurn && $('[data-cell = "2"]').text() === playerTurn)
  || ($('[data-cell = "3"]').text() === playerTurn && $('[data-cell = "4"]').text() === playerTurn && $('[data-cell ="5"]').text() === playerTurn)
  || ($('[data-cell = "6"]').text() === playerTurn && $('[data-cell = "7"]').text() === playerTurn && $('[data-cell ="8"]').text() === playerTurn);
}

function verticalWin(){
  return ($('[data-cell = "0"]').text() === playerTurn && $('[data-cell = "3"]').text() === playerTurn && $('[data-cell = "6"]').text() === playerTurn)
  || ($('[data-cell = "1"]').text() === playerTurn && $('[data-cell = "4"]').text() === playerTurn && $('[data-cell = "7"]').text() === playerTurn)
  || ($('[data-cell = "2"]').text() === playerTurn && $('[data-cell = "5"]').text() === playerTurn && $('[data-cell = "8"]').text() === playerTurn);
  }

function checkForWin(){
  if(verticalWin() === true || horizontalWin() === true || diagonalWin() === true) {
      $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
    return true;
  }
}

function togglePlayerTurn() {
  playerTurn = (playerTurn = (playerTurn ==='X') ? 'O' : 'X');
}

$(document).on('ready', function(){
  $('[data-cell]').click(function(){
    $(this).text(playerTurn);
    checkForWin()
    togglePlayerTurn();
});
});
