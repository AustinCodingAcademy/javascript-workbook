'use strict';
//neeed a ) somewhere down there.
document.addEventListener('DOMContentLoaded', () => {
  let playerTurn = 'X';
    let cells = document.querySelectorAll('[data-cell]');
  document.querySelectorAll('[data-cell]').forEach(cell => {cell.onclick = function(e){
    this.innerText = (playerTurn === 'X') ? 'X': 'O';
    checkForWin(playerTurn);
    playerTurn === 'X'?playerTurn = 'O': playerTurn = 'X';
  };})

    function checkForWin(playerTurn){

      // for(let i = 0; i < 3; i +
      console.log(cells)
      // let i = 0;
      // while(i < 9){
        if(
          cells[0].innerText === playerTurn &&
          cells[3].innerText === playerTurn &&
          cells[6].innerText === playerTurn ||

          cells[1].innerText === playerTurn &&
          cells[4].innerText === playerTurn &&
          cells[7].innerText === playerTurn ||

          cells[2].innerText === playerTurn &&
          cells[5].innerText === playerTurn &&
          cells[8].innerText === playerTurn ||

          cells[2].innerText === playerTurn &&
          cells[1].innerText === playerTurn &&
          cells[0].innerText === playerTurn ||

          cells[5].innerText === playerTurn &&
          cells[4].innerText === playerTurn &&
          cells[3].innerText === playerTurn ||

          cells[6].innerText === playerTurn &&
          cells[7].innerText === playerTurn &&
          cells[8].innerText === playerTurn ||

          cells[0].innerText === playerTurn &&
          cells[4].innerText === playerTurn &&
          cells[8].innerText === playerTurn ||

          cells[6].innerText === playerTurn &&
          cells[4].innerText === playerTurn &&
          cells[2].innerText ===playerTurn
          ){
              alert ('You Win!');
          };
        }



document.getElementById('clear').onclick = function(e){document.querySelectorAll('[data-cell]').forEach(cell => cell.innerText = "")};
})
