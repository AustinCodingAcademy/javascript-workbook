'use strict';

document.addEventListener('DOMContentLoaded', () => {
  let playerTurn = 'X';
  document.querySelectorAll('[data-cell]').forEach(cell => {cell.onclick = function(e){
    this.innerText = (playerTurn === 'X') ? 'X': 'O';
    playerTurn === 'X'?playerTurn = 'O': playerTurn = 'X';
    console.log(this);}})
    checkForWin(playerTurn);
    function checkForWin(playerTurn){
      let cells = document.querySelectorAll('[data-cell]');
      console.log(cells)
      if(
          document.querySelector('[data-cell="0"]').innerText === playerTurn &&
          document.querySelector('[data-cell="3"]').innerText === playerTurn &&
          document.querySelector('[data-cell="6"]').innerText === playerTurn ||

          document.querySelector('[data-cell="1"]').innerText === playerTurn &&
          document.querySelector('[data-cell="4"]').innerText === playerTurn &&
          document.querySelector('[data-cell="7"]').innerText === playerTurn ||

          document.querySelector('[data-cell="2"]').innerText === playerTurn &&
          document.querySelector('[data-cell="5"]').innerText === playerTurn &&
          document.querySelector('[data-cell="8"]').innerText === playerTurn ||

          document.querySelector('[data-cell="0"]').innerText === playerTurn &&
          document.querySelector('[data-cell="1"]').innerText === playerTurn &&
          document.querySelector('[data-cell="2"]').innerText === playerTurn ||

          document.querySelector('[data-cell="3"]').innerText === playerTurn &&
          document.querySelector('[data-cell="4"]').innerText === playerTurn &&
          document.querySelector('[data-cell="5"]').innerText === playerTurn ||

          document.querySelector('[data-cell="6"]').innerText === playerTurn &&
          document.querySelector('[data-cell="7"]').innerText === playerTurn &&
          document.querySelector('[data-cell="8"]').innerText === playerTurn ||

          document.querySelector('[data-cell="0"]').innerText === playerTurn &&
          document.querySelector('[data-cell="4"]').innerText === playerTurn &&
          document.querySelector('[data-cell="8"]').innerText === playerTurn ||

          document.querySelector('[data-cell="2"]').innerText === playerTurn &&
          document.querySelector('[data-cell="4"]').innerText === playerTurn &&
          document.querySelector('[data-cell="6"]').innerText === playerTurn )
          {
              return true;
          }

          else {
            return false;
          }
        }

document.getElementById('clear').onclick = function(e){document.querySelectorAll('[data-cell]').forEach(cell => cell.innerText = "")};
});
