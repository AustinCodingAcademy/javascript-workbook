'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Your code here
  let playerTurn = 'X';
  document.querySelectorAll('[data-cell]').forEach(cell => {
    cell.addEventListener('click', function() {
      this.innerText = playerTurn;
      if (checkForWin()) {
        document.querySelector('#announce-winner').innerText = `Player ${playerTurn} Wins!`;
      }
      playerTurn = (playerTurn === 'X') ? 'O' : 'X';
    });
  });

  function checkForWin() {
    const winningCells = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    return winningCells.some(combo => {
      if (
        document.querySelector(`[data-cell="${combo[0]}"]`).innerText === playerTurn &&
        document.querySelector(`[data-cell="${combo[1]}"]`).innerText === playerTurn &&
        document.querySelector(`[data-cell="${combo[2]}"]`).innerText === playerTurn
      ) {
          return true;
      }
    });
  }
  document.getElementById('clear').addEventListener('click', function() {
    document.querySelectorAll('[data-cell]').forEach(square => {
      square.innerText = "";
    })
  });

});
