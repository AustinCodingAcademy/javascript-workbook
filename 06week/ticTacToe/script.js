'use strict';

let toggle = false;
let playerOne = 'X';
let playerTwo = 'O';
let winningPermutation = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-cell]').forEach((div) => {
    div.addEventListener('click', (e) => {
      if (!e.target.innerHTML) {
        e.target.innerHTML = getPlayer();

        if (checkWinner()) {
          setWinnerAnnouncement('You won!');
        }

        switchPlayer();
      } else {
        alert('No Way Bro');
      }
    });
  });
  createEventListenerClearBoard();
});

function checkWinner() {
  for (let i = 0; i < winningPermutation.length; i++) {
    let value0 = winningPermutation[i][0]; // 0, 3, 6 ...
    let value1 = winningPermutation[i][1]; // 1, 4, 7 ...
    let value2 = winningPermutation[i][2]; // 2, 5, 8 ...

    let divElement0 = document.querySelector("[data-cell='" + value0 + "']");
    let divElement1 = document.querySelector("[data-cell='" + value1 + "']");
    let divElement2 = document.querySelector("[data-cell='" + value2 + "']");

    let currentPlayer = getPlayer();

    if (currentPlayer === divElement0.innerHTML && currentPlayer === divElement1.innerHTML && currentPlayer === divElement2.innerHTML) {
      return true;
    }
  }
  return false;
}

function getPlayer() {
  return toggle ? playerOne : playerTwo;
}

function switchPlayer() {
  toggle = !toggle;
}

function setWinnerAnnouncement(message) {
  let $el = document.getElementById('announce-winner');
  $el.innerHTML = message;
}

function createEventListenerClearBoard() {
  let $el = document.getElementById('clear');
  $el.addEventListener('click', (e) => {
    setWinnerAnnouncement('');
    document.querySelectorAll('[data-cell]').forEach((div) => {
      div.innerHTML = '';
    });
  });
}
