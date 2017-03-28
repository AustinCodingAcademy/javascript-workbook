'use strict';

var getElements = $;
var playerTurn = 'X'

$(document).on('ready', function() {
  // Put app logic in here
  setupTheWebpage();
});

function setupTheWebpage() {
 getElements('[data-cell]').click(handleDataCellDivClick); 
 getElements('#clear').click(handleClearButtonClick);
}

function handleDataCellDivClick () {
  

  if ($(this).text() === "") {
    $(this).text(playerTurn)

    if (checkForWin()) {
      var winElement = $('#announce-winner');
      winElement.text('Player ' + playerTurn + ' Wins!')
    }
    else  {
      playerTurn = (playerTurn === 'X' ? 'O' : 'X' )
    }
  }
}

function handleClearButtonClick () {
  getElements('[data-cell]').text("");
  var winElement = $('#announce-winner');
  winElement.empty()
  playerTurn = "X";
}

function checkForWin() {
  //Horizontal Wins
  if (getElements("[data-cell='0']").text() === playerTurn &&
  getElements("[data-cell='1']").text() === playerTurn &&
  getElements("[data-cell='2']").text() === playerTurn) {
    return true;
  }

  if (getElements("[data-cell='3']").text() === playerTurn &&
  getElements("[data-cell='4']").text() === playerTurn &&
  getElements("[data-cell='5']").text() === playerTurn) {
    return true;
  }

  if (getElements("[data-cell='6']").text() === playerTurn &&
  getElements("[data-cell='7']").text() === playerTurn &&
  getElements("[data-cell='8']").text() === playerTurn) {
    return true;
  }

  //Vertical Wins
  if (getElements("[data-cell='0']").text() === playerTurn &&
  getElements("[data-cell='3']").text() === playerTurn &&
  getElements("[data-cell='6']").text() === playerTurn) {
    return true;
  }

  if (getElements("[data-cell='1']").text() === playerTurn &&
  getElements("[data-cell='4']").text() === playerTurn &&
  getElements("[data-cell='7']").text() === playerTurn) {
    return true;
  }

  if (getElements("[data-cell='2']").text() === playerTurn &&
  getElements("[data-cell='5']").text() === playerTurn &&
  getElements("[data-cell='8']").text() === playerTurn) {
    return true;
  }

  //Diagonal Wins
  if (getElements("[data-cell='0']").text() === playerTurn &&
  getElements("[data-cell='4']").text() === playerTurn &&
  getElements("[data-cell='8']").text() === playerTurn) {
    return true;
  }

  if (getElements("[data-cell='2']").text() === playerTurn &&
  getElements("[data-cell='4']").text() === playerTurn &&
  getElements("[data-cell='6']").text() === playerTurn) {
    return true;
  }

  return false;
}