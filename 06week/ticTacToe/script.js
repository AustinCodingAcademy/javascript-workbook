'use strict';
document.addEventListener('DOMContentLoaded', () => {
  let playerTurn = 'X';

  document.querySelectorAll('[data-cell]').forEach((cell) => {
    if (checkForWin()) {
      document.querySelector('#announce-winner').innerText = ('Player ' + playerTurn + ': wins');
      return;
    }
    cell.onclick = function() {

      this.innerText = playerTurn;
      if (playerTurn === 'X') {
        playerTurn = 'O';
      } else {
        playerTurn = 'X'
      }
      console.log(playerTurn);

    }

  })

})

////problem now is that i need access to player turn up top from new const functions below

// const playerMove = () => {
//   var playerturn = 'X';
//   document.querySelectorAll('[data-cell]').onclick = function() {
//     document.innerText = playerTurn;
//     if (playerTurn === 'X') {
//       playerTurn = 'O';
//     } else {
//       playerTurn = 'X';
//     }
//     console.log(playerTurn);
//
//   }
// }
const handleClearClick = () => {
  var cells = document.querySelectorAll(`[data-cell]`);
  cells.forEach(cell => cell.innerText = '');
}
const checkForWin = (playerTurn) => {
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
      document.querySelector('#tic-tac-toe').innerText = 'You win!';
    }
  })
};
