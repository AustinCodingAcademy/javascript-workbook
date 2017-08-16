'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Your code here
  let toggle = true;
  let square = {};

  let diagonalWin = () => {
    if (square[0] === square[4] && square[4] === square[8] && square[0] !== undefined ||
       square[2] === square[4] && square[4] === square[6] && square[2] !== undefined) {
      return true;
    }
  };
  let rowWin = () => {
    if (square[0] === square[1] && square[1] === square[2] && square[1] !== undefined ||
        square[3] === square[4] && square[4] === square[5] && square[4] !== undefined ||
        square[6] === square[7] && square[7] === square[8] && square[7] !== undefined) {
      return true;
    }
  };
  let columnWin = () => {
    if (square[0] === square[3] && square[3] === square[6] && square[3] !== undefined ||
        square[1] === square[4] && square[4] === square[7] && square[4] !== undefined ||
        square[2] === square[5] && square[5] === square[8] && square[5] !== undefined) {
      return true;
    }
  };

  document.querySelectorAll('[data-cell]').forEach((div) => {
    div.addEventListener('click', (e) => {
      if (!e.target.innerHTML) {
        const move = toggle ? 'X' : 'O';
        e.target.innerHTML = move;
        square[e.target.attributes[0].value] = move;
        toggle = !toggle;
      } else {
        alert('Choose another square');
      }
      if (diagonalWin()) {
        alert('You Win!');
      } else if (rowWin()) {
        alert('You Win!');
      } else if (columnWin()) {
        alert('You Win!');
      }
    });
  });

  document.querySelector('button').addEventListener('click', (e) => {
    document.querySelectorAll('[data-cell]').forEach((div) => {
      div.innerHTML = '';
      square = {};
    });
  });
});
