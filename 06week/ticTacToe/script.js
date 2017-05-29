'use strict';

document.addEventListener('DOMContentLoaded', () => {
  let playerTurn = 'X';
  document.querySelectorAll('[data-cell]').forEach((cell) => {
    cell.addEventListener('click', function() {
      this.innerText = playerTurn;
      playerTurn = (playerTurn === 'X') ? 'O' : 'X';
      checkForWin();
    });
    })



    function checkForWin() {
    const winningCombos = [
          ['a', 'b', 'c'],
          ['d', 'e', 'f'],
          ['g', 'h', 'i'],
          ['a', 'd', 'g'],
          ['b', 'e', 'h'],
          ['c', 'f', 'i'],
          ['a', 'e', 'i'],
          ['c', 'e', 'g'],
        ];


        winningCombos.some(combo => {
              if (document.querySelector(`[data-cell="${combo[0]}"]`).innerText === playerTurn &&
               document.querySelector(`[data-cell="${combo[1]}"]`).innerText === playerTurn &&
                 document.querySelector(`[data-cell="${combo[2]}"]`).innerText === playerTurn) {
                 document.querySelector('#announce-winner').innerText = `Player ${playerTurn} wins!`
               }
                   })
                 return false;
              }
});



//         return winningCombos.some((combo) => {
//           return combo.every((letter) => {
//             return document.querySelector(`[data-cell="${letter}"]`).innerText === playerTurn;
//
//           });
//         });
// };
