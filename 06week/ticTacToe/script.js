'use strict';

document.addEventListener('DOMContentLoaded', () => {

  let cells = document.querySelectorAll('[data-cell]')
  let playerTurn = 'X'

  function placeMark(){
    return cells.forEach(cell => {
      cell.onclick = function(){
        this.innerText = playerTurn
        if(checkForWin()){
          document.querySelector('#announce-winner').innerText = playerTurn + ' Wins!';
        }
        playerTurn = (playerTurn === 'X') ? 'O':'X';
      }
    });
  }

  function checkForWin() {

    const winningCombo = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

    return winningCombo.some(combo => {
      if (
        document.querySelector(`[data-cell="${combo[0]}"]`).innerText === playerTurn &&
        document.querySelector(`[data-cell="${combo[1]}"]`).innerText === playerTurn &&
        document.querySelector(`[data-cell="${combo[2]}"]`).innerText === playerTurn
      ) {
        return true;
      } else {
        return false
      }
    })
  }
  document.getElementById('clear').addEventListener('click', function(){
      document.querySelectorAll('[data-cell]').forEach(cell => {
        cell.innerText = null;
      })
  })



  placeMark();




});
