'use strict';
//neeed a ) somewhere down there.
document.addEventListener('DOMContentLoaded', () => {
  let playerTurn = 'X';
<<<<<<< HEAD
  let cells = document.querySelectorAll('[data-cell]');
  document.querySelectorAll('[data-cell]').forEach(cell => {
    cell.onclick = function (e) {
      this.innerText = (playerTurn === 'X') ? 'X' : 'O';
      //  i++;
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
=======
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
>>>>>>> 879040ea171f4150119dd4144d41e8bd1e8ef875
