'use strict';

document.addEventListener('DOMContentLoaded', () => {
  let playerTurn = 'X';
  document.querySelectorAll('[data-cell]').forEach((cell) => {
    cell.addEventListener('click', function() {
      this.innerText = playerTurn;
      checkForWin();
      playerTurn = (playerTurn === 'X') ? 'O' : 'X'; //the playerturn switcher needs to go after the checkforwin or else the announcement will come at the wrong time
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


    return winningCombos.some(combo => { //higher order function like 'some' and 'every' will always return a true or false value.  Therefore you can return it and provide an example of what is true.
      if (document.querySelector(`[data-cell="${combo[0]}"]`).innerText === playerTurn &&
      document.querySelector(`[data-cell="${combo[1]}"]`).innerText === playerTurn &&
      document.querySelector(`[data-cell="${combo[2]}"]`).innerText === playerTurn) {
        document.querySelector('#announce-winner').innerText = `Player ${playerTurn} wins!`
        return true;
      }
    })

  }
});



//         return winningCombos.some((combo) => {
//           return combo.every((letter) => {
//             return document.querySelector(`[data-cell="${letter}"]`).innerText === playerTurn;
//
//           });
//         });
// };
