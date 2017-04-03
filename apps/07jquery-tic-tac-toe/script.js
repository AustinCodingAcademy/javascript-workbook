'use strict';

var playerTurn = 'X';
var $dataCell = $('[data-cell]');
var getElements = $;

$(document).on('ready', function() {
  // Put app logic in here
  $dataCell.click(handleClick);

  function handleClick() {
    $(this).text(playerTurn);
    checkForWin();
    togglePlayerTurn();
  }

  function togglePlayerTurn() {
    var playerOne = 'O';
    var playerTwo = 'X';
    playerTurn = (playerTurn === playerOne) ? playerTwo : playerOne;
  }

  function horizontalWin() {
    if ((getElements("[data-cell='0']").text() === playerTurn && getElements("[data-cell='1']").text() === playerTurn && getElements("[data-cell='2']").text() === playerTurn) ||
        (getElements("[data-cell='3']").text() === playerTurn && getElements("[data-cell='4']").text() === playerTurn && getElements("[data-cell='5']").text() === playerTurn) ||
        (getElements("[data-cell='6']").text() === playerTurn && getElements("[data-cell='7']").text() === playerTurn && getElements("[data-cell='8']").text() === playerTurn)) {
      return true;
    }
  }

  function verticalWin() {
    if ((getElements("[data-cell='0']").text() === playerTurn && getElements("[data-cell='3']").text() === playerTurn && getElements("[data-cell='6']").text() === playerTurn) ||
        (getElements("[data-cell='1']").text() === playerTurn && getElements("[data-cell='4']").text() === playerTurn && getElements("[data-cell='7']").text() === playerTurn) ||
        (getElements("[data-cell='2']").text() === playerTurn && getElements("[data-cell='5']").text() === playerTurn && getElements("[data-cell='8']").text() === playerTurn)) {
      return true;
    }
  }

  function diagonalWin() {
    if ((getElements("[data-cell='0']").text() === playerTurn && getElements("[data-cell='4']").text() === playerTurn && getElements("[data-cell='8']").text() === playerTurn) ||
         (getElements("[data-cell='2']").text() === playerTurn && getElements("[data-cell='4']").text() === playerTurn && getElements("[data-cell='6']").text() === playerTurn)) {
      return true;
    }
  }

  function checkForWin() {
    if ((horizontalWin() || verticalWin() || diagonalWin()) === true ){
      getElements('#announce-winner').text('Player ' + playerTurn + ' Wins!');
    }
  }

  getElements('#clear').click(handleClearButton);

  function handleClearButton() {
    $dataCell.text('');
    getElements('#announce-winner').text('');
    playerTurn = 'X';
  }
});
