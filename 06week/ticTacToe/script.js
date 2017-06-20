'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Fill all cells with an X
  document.querySelectorAll('[data-cell]').forEach(cell => {
    cell.addEventListener("click", function(){

      if (this.innerText === ""){
        this.innerText = playerTurn;
        if(checkForWin()){
          document.querySelector('#announce-winner').innerText = `Player ${playerTurn} Wins!`;
        }
        playerTurn = (playerTurn === 'X') ? 'O' : 'X';
      }

    });
  });
  let playerTurn = 'X';


  function checkForWin(){
    const winningCombos = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];
    return winningCombos.some(combo => {
      return combo.every(letter => {
        return document.querySelector(`[data-cell="${letter}"]`).innerText === playerTurn;
      });

    });


  }
});
