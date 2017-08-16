'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Your code here
  (function playGame() {
    let playerTurn = 1;
    let coordsX = [];
    let coordsO = [];
    let dataCells = document.querySelectorAll('div[data-cell]');
    showTurn();

    // clear board
    document.querySelector('button').addEventListener('click', (e) => {
      document.querySelector('#announce-winner').innerHTML = '';
      document.querySelector('#clear').innerHTML = 'CLEAR BOARD';
      document.querySelector('button').disabled = true;
      coordsX = [];
      coordsO = [];
      dataCells.forEach((cell) => {
        cell.innerHTML = '';
      });
    });

    // display turn
    function showTurn() {
      document.querySelector('.currentTurn').innerHTML = 'Player ' + playerTurn + '\'s turn.';
    }

    function switchPlayer() {
      playerTurn === 1 ? playerTurn = 2 : playerTurn = 1;
    }

    dataCells.forEach((cell) => {
      cell.addEventListener('click', onGridClick);
    });

    function onGridClick(event) {
      // console.log(`${event.type} got fired`);
      document.querySelector('button').disabled = false;

      if (!event.target.innerHTML) {
        playerTurn === 1 ? event.target.innerHTML = 'X' : event.target.innerHTML = 'O';

        if (playerTurn === 1) {
          coordsX.push(Number(this.getAttribute('data-cell')));
        } else {
          coordsO.push(Number(this.getAttribute('data-cell')));
        }
      } else {
        alert(`That's already taken. Try again.`);
        switchPlayer();
      }

      checkWin();
      switchPlayer();
      showTurn();
    }

    function checkWin() {
      let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];

      let coords = playerTurn === 1 ? coordsX.sort().join() : coordsO.sort().join();
      // console.log(`${coordsX} coords sorted`);

      let userWon = false;
      for (let i = 0; i < wins.length; i++) {
        let win = wins[i];
        // console.log(`${win} possible win`);

        let gotWin = true;
        for (let j = 0; j < win.length; j++) {
          let bits = win[j];
          if (coords.indexOf(bits) > -1) {} else {
            gotWin = false;
            break;
          }
        }

        if (gotWin) {
          userWon = true;
        }

        if (userWon) {
          document.querySelector('#announce-winner').innerHTML = 'Player ' + playerTurn + ' has won!';
          break;
        } else {
          // check draw;
          if (coordsO.length + coordsX.length === 9) {
            document.querySelector('#announce-winner').innerHTML = 'It\'s a DRAW!';
            document.querySelector('#clear').innerHTML = 'START OVER';
          }
        }
      }
    }
  })();
}); // outer wrapper function
