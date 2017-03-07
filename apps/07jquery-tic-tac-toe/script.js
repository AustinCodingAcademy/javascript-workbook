'use strict';

$(document).on('ready', function() {
  console.log('Start');

  var playerTurn = 'X';

  $('div[data-cell]').on('click', function () {
    //when data cells are clicked, mark is made
    $(this).text(playerTurn);
    if (checkForWin()) {
      $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
    };
    //changes playerTurn from x to o
    playerTurn = (playerTurn === 'X' ? 'O' : 'X');
  })

$('#clear').on('click', function () {
  newGame();
})

function newGame() {
  clearBoard();
  playerTurn = 'X';
  $('#announce-winner').text('');
}

function clearBoard() {
  $('div[data-cell]').text(' ');
}

function checkForWin() {

//horizontal wins
  if ($('div[data-cell=0]').text() === playerTurn &&
  $('div[data-cell=1]').text() === playerTurn &&
  $('div[data-cell=2]').text() === playerTurn){
    return true;
  }

  if ($('div[data-cell=3]').text() === playerTurn &&
  $('div[data-cell=4]').text() === playerTurn &&
  $('div[data-cell=5]').text() === playerTurn){
    return true;
  }

  if ($('div[data-cell=6]').text() === playerTurn &&
  $('div[data-cell=7]').text() === playerTurn &&
  $('div[data-cell=8]').text() === playerTurn){
    return true;
  }

//vertical wins
  if ($('div[data-cell=0]').text() === playerTurn &&
  $('div[data-cell=3]').text() === playerTurn &&
  $('div[data-cell=6]').text() === playerTurn){
    return true;
  }

  if ($('div[data-cell=1]').text() === playerTurn &&
  $('div[data-cell=4]').text() === playerTurn &&
  $('div[data-cell=7]').text() === playerTurn){
    return true;
  }

  if ($('div[data-cell=2]').text() === playerTurn &&
  $('div[data-cell=5]').text() === playerTurn &&
  $('div[data-cell=8]').text() === playerTurn){
    return true;
  }

//diagonal wins
  if ($('div[data-cell=0]').text() === playerTurn &&
  $('div[data-cell=4]').text() === playerTurn &&
  $('div[data-cell=8]').text() === playerTurn){
    return true;
  }
  if ($('div[data-cell=2]').text() === playerTurn &&
  $('div[data-cell=4]').text() === playerTurn &&
  $('div[data-cell=6]').text() === playerTurn){
   return true;
  }

  return false
}

});
