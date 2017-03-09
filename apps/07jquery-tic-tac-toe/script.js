'use strict';

$(document).on('ready', function() {
  
  var playerTurn = 'X';
  
  //play tic tac toe
  $('[data-cell]').click(function() {
    $(this).text(playerTurn);
    if(checkForWin()) {
      $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
    }
    else{
      playerTurn = (playerTurn === 'X') ? 'O' : 'X';
    }
  });

  //clear all content
  $('#clear').click(function() {
    $('[data-cell]').empty();
    $('#announce-winner').empty();
  });

  function horizontalWin() {
    if (($('div[data-cell=0]').text() === playerTurn && $('div[data-cell=1]').text() === playerTurn && $('div[data-cell=2]').text() === playerTurn) || 
    ($('div[data-cell=3]').text() === playerTurn && $('div[data-cell=4]').text() === playerTurn && $('div[data-cell=5]').text() === playerTurn) ||
    ($('div[data-cell=6]').text() === playerTurn && $('div[data-cell=7]').text() === playerTurn && $('div[data-cell=8]').text() === playerTurn)){
      return true;
    }
  }

  function verticalWin() {
    if (($('div[data-cell=0]').text() === playerTurn && $('div[data-cell=3]').text() === playerTurn && $('div[data-cell=6]').text() === playerTurn) || 
    ($('div[data-cell=1]').text() === playerTurn && $('div[data-cell=4]').text() === playerTurn && $('div[data-cell=7]').text() === playerTurn) ||
    ($('div[data-cell=2]').text() === playerTurn && $('div[data-cell=5]').text() === playerTurn && $('div[data-cell=8]').text() === playerTurn)){
      return true;
    }
  }

  function diagonalWin() {
    if (($('div[data-cell=0]').text() === playerTurn && $('div[data-cell=4]').text() === playerTurn && $('div[data-cell=8]').text() === playerTurn) ||
    ($('div[data-cell=2]').text() === playerTurn && $('div[data-cell=4]').text() === playerTurn && $('div[data-cell=6]').text() === playerTurn)){
      return true;
    }
  }

  function checkForWin() {
    if (horizontalWin() || verticalWin() || diagonalWin()){
      return true;
    }
  }

});


