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
    const threeInRow = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    return threeInRow.some(order => {
      if (
      document.querySelector(`[data-cell="${order[0]}"]`).innerText === playerTurn &&
      document.querySelector(`[data-cell="${order[1]}"]`).innerText === playerTurn &&
      document.querySelector(`[data-cell="${order[2]}"]`).innerText === playerTurn
    ) {
      return true;
      }
    });
  }
});
