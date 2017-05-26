'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Your code here
  let playerTurn = 'X'; //assign first player's move to X

  document.querySelectorAll('[data-cell]').forEach(cell => {
    cell.addEventListener ('click', function() { //target each div when it's clicked/selected
      this.innerText = playerTurn; //assign current data cell to X
      playerTurn = (playerTurn === 'X') ? 'O' : 'X';
    }); //addEventListener function ends
  }) //forEach function ends

}); //addEventListener function ends
