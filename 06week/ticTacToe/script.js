'use strict';
document.addEventListener('DOMContentLoaded', () => {
  let turn = 'X';
  let b = [null, null, null, null, null, null, null, null, null];
  let changeTurn = () => {
    turn = (turn === 'X' ? 'O' : 'X');
    document.getElementById('turn').innerHTML = turn;
  }
  let checkWin = () => {
    let currentWin = `${turn}${turn}${turn}`;
    if (`${b[0]}${b[1]}${b[2]}` === currentWin) return true;
    if (`${b[0]}${b[3]}${b[6]}` === currentWin) return true;
    if (`${b[0]}${b[4]}${b[8]}` === currentWin) return true;
    if (`${b[1]}${b[4]}${b[7]}` === currentWin) return true;
    if (`${b[2]}${b[4]}${b[6]}` === currentWin) return true;
    if (`${b[2]}${b[5]}${b[8]}` === currentWin) return true;
    if (`${b[3]}${b[4]}${b[5]}` === currentWin) return true;
    if (`${b[6]}${b[7]}${b[8]}` === currentWin) return true;
    return false;
  }
  document.querySelectorAll('[data-cell]').forEach(cell => {
    cell.onclick = function() {
      this.innerHTML = turn;
      b[cell.getAttribute('data-cell')] = turn;
      if (checkWin()) {
        document.getElementById('winner').innerHTML = `Player ${turn} wins!!`;
      }
      changeTurn();
    }
  })
  document.getElementById('clear').onclick = function() {
    document.querySelectorAll('[data-cell]').forEach((cell) => {
      cell.innerHTML = '';
    })
    document.getElementById('winner').innerHTML = '';
    b.forEach((e) => {e = null;});
  }
});
