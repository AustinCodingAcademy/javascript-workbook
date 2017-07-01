'use strict';

document.addEventListener('DOMContentLoaded', () => {
  let playerTurn = 'X';

  let cells = document.querySelectorAll('[data-cell]');
  document.querySelectorAll('[data-cell]').forEach(cell => {
    cell.onclick = function (e) {
      this.innerText = (playerTurn === 'X') ? 'X' : 'O';

      console.log(checkForWin(playerTurn));
      if (checkForWin(playerTurn)) {
        document.querySelector('#announce-winner').innerText = `Player "${playerTurn}" Wins!`;
      }
      playerTurn === 'X' ? playerTurn = 'O' : playerTurn = 'X';
      console.log(this);
    }
  })

  function checkForWin(playerTurn) {
    const winningCells = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    return winningCells.some((combo) => {
      return combo.every((idx) => {
        return document.querySelector(`[data-cell="${idx}"]`).innerText === playerTurn;
      })
    })
  }

  document.getElementById('clear').onclick = function (e) {
    document.querySelectorAll('[data-cell]').forEach(cell => cell.innerText = "");
    playerTurn = 'X';
    document.querySelector('#announce-winner').innerText = '';
  };
})
document.getElementById('clear').onclick = function (e) {
  document.querySelectorAll('[data-cell]').forEach(cell => cell.innerText = "")
};