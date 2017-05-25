'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Set the first turn to 'X', selects each cell so we are able to click
  // the text in the cell each time we click toggles between X or O
  // we call checkForWin() in between each turn
  var playerTurn = 'X';
  document.querySelectorAll('[data-cell]').forEach(function(cell) {
    cell.addEventListener('click', function() {
      this.innerText = playerTurn;
      checkForWin();
      if (playerTurn === 'X') {
        playerTurn = 'O';
      } else {
        playerTurn = 'X';
      }
    })
  })

  // we check the text inside each cell horizontally, vertically, and diagonally
  // in order to check for a win
  function checkForWin() {
    if (
      (document.querySelector('[data-cell="0"]').innerText === playerTurn &&
        document.querySelector('[data-cell="3"]').innerText === playerTurn &&
        document.querySelector('[data-cell="6"]').innerText === playerTurn) ||
      (document.querySelector('[data-cell="1"]').innerText === playerTurn &&
        document.querySelector('[data-cell="4"]').innerText === playerTurn &&
        document.querySelector('[data-cell="7"]').innerText === playerTurn) ||
      (document.querySelector('[data-cell="2"]').innerText === playerTurn &&
        document.querySelector('[data-cell="5"]').innerText === playerTurn &&
        document.querySelector('[data-cell="8"]').innerText === playerTurn) ||
      (document.querySelector('[data-cell="0"]').innerText === playerTurn &&
        document.querySelector('[data-cell="1"]').innerText === playerTurn &&
        document.querySelector('[data-cell="2"]').innerText === playerTurn) ||
      (document.querySelector('[data-cell="3"]').innerText === playerTurn &&
        document.querySelector('[data-cell="4"]').innerText === playerTurn &&
        document.querySelector('[data-cell="5"]').innerText === playerTurn) ||
      (document.querySelector('[data-cell="6"]').innerText === playerTurn &&
        document.querySelector('[data-cell="7"]').innerText === playerTurn &&
        document.querySelector('[data-cell="8"]').innerText === playerTurn) ||
      (document.querySelector('[data-cell="0"]').innerText === playerTurn &&
        document.querySelector('[data-cell="4"]').innerText === playerTurn &&
        document.querySelector('[data-cell="8"]').innerText === playerTurn) ||
      (document.querySelector('[data-cell="2"]').innerText === playerTurn &&
        document.querySelector('[data-cell="4"]').innerText === playerTurn &&
        document.querySelector('[data-cell="6"]').innerText === playerTurn))

    // when there is a win detected, we announce the winner by including playerTurn
    {
      document.getElementById('announce-winner').innerText = 'Player' + playerTurn + ' ' + 'Wins!';
    }
  }

  // we get the #clear and add an event, when we click on the button, it will turn
  // the cell's text to blank to clear the board
  // it resets the playerTurn to X to restart the game
  document.getElementById('clear').addEventListener('click', function() {
    document.querySelectorAll('[data-cell], announce-winner').forEach(function(cell) {
      cell.innerText = '';
      playerTurn = 'X';
    }

    )
  })
})
