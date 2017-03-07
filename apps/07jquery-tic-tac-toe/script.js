'use strict';

var playerTurn = 'X';
var boxZero = $("[data-cell='0']");
var boxOne = $("[data-cell='1']");
var boxTwo = $("[data-cell='2']");
var boxThree = $("[data-cell='3']");
var boxFour = $("[data-cell='4']");
var boxFive= $("[data-cell='5']");
var boxSix = $("[data-cell='6']");
var boxSeven = $("[data-cell='7']");
var boxEight = $("[data-cell='8']");

$(document).on('ready', function() {
  $('[data-cell]').click(function() {
    $(this).text(playerTurn);
    checkForWin();
    playerTurn = (playerTurn === 'X') ? 'O' : 'X';
  })

  clearBoard();

  function checkForWin() {
  if(horizontalWin() || verticalWin() || diagonalWin()) {
    $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
    return true;
  }
}

function horizontalWin() {
  if((boxZero.text() === playerTurn) && (boxOne.text() === playerTurn) && (boxTwo.text() === playerTurn)) {
    return true;
  }
  if((boxThree.text() === playerTurn) && (boxFour.text() === playerTurn) && (boxFive.text() === playerTurn)) {
    return true;
  }
  if((boxSix.text() === playerTurn) && (boxSeven.text() === playerTurn) && (boxEight.text() === playerTurn)) {
    return true;
  }
}

function verticalWin() {
  if((boxZero.text() === playerTurn) && (boxThree.text() === playerTurn) && (boxSix.text() === playerTurn)) {
    return true;
  }
  if((boxOne.text() === playerTurn) && (boxFour.text() === playerTurn) && (boxSeven.text() === playerTurn)) {
    return true;
  }
  if((boxTwo.text() === playerTurn) && (boxFive.text() === playerTurn) && (boxEight.text() === playerTurn)) {
    return true;
  }

}

function diagonalWin() {
  if((boxZero.text() === playerTurn) && (boxFour.text() === playerTurn) && (boxEight.text() === playerTurn)) {
    return true;
  }
  if((boxTwo.text() === playerTurn) && (boxFour.text() === playerTurn) && (boxSix.text() === playerTurn)) {
    return true;
  }

}

function clearBoard() {
  playerTurn = 'X';
  $('#clear').click(function() {
    $('[data-cell]').text(" ");
    $('#announce-winner').text(" ");
  })
}

});

