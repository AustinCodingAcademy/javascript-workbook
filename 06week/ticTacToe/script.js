'use strict';
document.addEventListener('DOMContentLoaded', () => {
  let playerTurn = 'X';

  document.querySelectorAll('[data-cell]').forEach((cell) => {
    if (checkForWin()) {
      document.querySelector('#announce-winner').innerText = ('Player ' + playerTurn + ': wins');
      console.log('RERERERERER');
      return;
    }
    cell.onclick = function() {

      this.innerText = playerTurn;
      if (playerTurn === 'X') {
        playerTurn = 'O';
      } else {
        playerTurn = 'X'
      }
    }

  })


  function handleClearClick() {
    var cells = document.querySelectorAll(`[data-cell]`).forEach((cell) => {
      //cells.querySelector('') => {
      cells.onclick = function() { ///////leaving off here
        return cell.innerText = '';
        console.log('heyheyheyhey', cells, cell.innerText = '')
      }
    })

  }

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

    winningCells.forEach((combo) => {
      if (document.querySelector(`[data-cell= "${combo[0]}"]`).innerText === playerTurn && //iterating through the 0 index  of the current combo
        document.querySelector(`[data-cell= "${combo[1]}"]`).innerText === playerTurn && //iterating through the 1 index of current combo
        document.querySelector(`[data-cell= "${combo[2]}"]`).innerText === playerTurn) { //iterating throught the 2 index of current combo
        //if no win condition is found in current combo then next array down is iterated through looking for a match
        console.log('WINNNNER');
        return true;
      } else {

        return false;
      }
    })

  }
})
