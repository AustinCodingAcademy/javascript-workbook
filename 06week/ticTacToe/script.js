'use strict';
//neeed a ) somewhere down there.
document.addEventListener('DOMContentLoaded', () => {
  let playerTurn = 'X';
    let cells = document.querySelectorAll('[data-cell]');
  document.querySelectorAll('[data-cell]').forEach(cell => {cell.onclick = function(e){
    this.innerText = (playerTurn === 'X') ? 'X': 'O';
    i++;
    checkForWin(playerTurn);
    playerTurn === 'X'?playerTurn = 'O': playerTurn = 'X';
    console.log(this);}})

    function checkForWin(playerTurn){

      // for(let i = 0; i < 3; i +
      console.log(cells)
      let i = 0;
      while(i < 9){
        if(
          cells[0].innerText === cells[3].innerText === cells[6].innerText||


          // document.querySelector('[data-cell="0"]').innerText === playerTurn &&
          // document.querySelector('[data-cell="3"]').innerText === playerTurn &&
          // document.querySelector('[data-cell="6"]').innerText === playerTurn ||

          cells[1].innerText === cells[4].innerText === cells[7].innerText||
          // document.querySelector('[data-cell="1"]').innerText === playerTurn &&
          // document.querySelector('[data-cell="4"]').innerText === playerTurn &&
          // document.querySelector('[data-cell="7"]').innerText === playerTurn ||

          cells[2].innerText === cells[5].innerText === cells[8].innerText||
          // document.querySelector('[data-cell="2"]').innerText === playerTurn &&
          // document.querySelector('[data-cell="5"]').innerText === playerTurn &&
          // document.querySelector('[data-cell="8"]').innerText === playerTurn ||

          cells[2].innerText === cells[1].innerText === cells[0].innerText||
          // document.querySelector('[data-cell="0"]').innerText === playerTurn &&
          // document.querySelector('[data-cell="1"]').innerText === playerTurn &&
          // document.querySelector('[data-cell="2"]').innerText === playerTurn ||

          cells[5].innerText === cells[4].innerText === cells[3].innerText||
          // document.querySelector('[data-cell="3"]').innerText === playerTurn &&
          // document.querySelector('[data-cell="4"]').innerText === playerTurn &&
          // document.querySelector('[data-cell="5"]').innerText === playerTurn ||

          cells[6].innerText === cells[7].innerText === cells[8].innerText||
          // document.querySelector('[data-cell="6"]').innerText === playerTurn &&
          // document.querySelector('[data-cell="7"]').innerText === playerTurn &&
          // document.querySelector('[data-cell="8"]').innerText === playerTurn ||

          cells[0].innerText === cells[4].innerText === cells[8].innerText||
          // document.querySelector('[data-cell="0"]').innerText === playerTurn &&
          // document.querySelector('[data-cell="4"]').innerText === playerTurn &&
          // document.querySelector('[data-cell="8"]').innerText === playerTurn ||

          cells[6].innerText === cells[4].innerText === cells[2].innerText
          // document.querySelector('[data-cell="2"]').innerText === playerTurn &&
          // document.querySelector('[data-cell="4"]').innerText === playerTurn &&
          // document.querySelector('[data-cell="6"]').innerText === playerTurn )
        ){
              alert ('You Win!');
          };
}
        }
}

document.getElementById('clear').onclick = function(e){document.querySelectorAll('[data-cell]').forEach(cell => cell.innerText = "")};
});
