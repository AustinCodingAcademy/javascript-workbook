'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Your code here
  // document.querySelectorAll('[data-cell]').forEach(cell => {
  //     cell.onclick = function() {
  // 		this.innerText = 'X'
  // 	}
  // });
  var playerTurn = "X";
    document.querySelectorAll('[data-cell]').forEach(cell => {
	  cell.onclick = function() {
        if (this.innerText === '') {
          this.innerText = playerTurn;
          checkForWin();
        }
         if (playerTurn === 'X') {
              playerTurn = 'O';
          } else {
              playerTurn = 'X';
         }
        };
      });


    function checkForWin() {
        if (
            (document.querySelector('[data-cell="0"]').innerText === playerTurn &&
                 document.querySelector('[data-cell="3"]').innerText === playerTurn  &&
                 document.querySelector('[data-cell="6"]').innerText === playerTurn ) ||
            ( document.querySelector('[data-cell="1"]').innerText === playerTurn  &&
                 document.querySelector('[data-cell="4"]').innerText === playerTurn  &&
                 document.querySelector('[data-cell="7"]').innerText === playerTurn ) ||
            ( document.querySelector('[data-cell="2"]').innerText === playerTurn  &&
                 document.querySelector('[data-cell="5"]').innerText === playerTurn  &&
                 document.querySelector('[data-cell="8"]').innerText === playerTurn ) ||
            ( document.querySelector('[data-cell="0"]').innerText === playerTurn  &&
                 document.querySelector('[data-cell="1"]').innerText === playerTurn  &&
                 document.querySelector('[data-cell="2"]').innerText === playerTurn ) ||
            (document.querySelector('[data-cell="3"]').innerText === playerTurn  &&
                 document.querySelector('[data-cell="4"]').innerText === playerTurn  &&
                 document.querySelector('[data-cell="5"]').innerText === playerTurn ) ||
            (document.querySelector('[data-cell="6"]').innerText === playerTurn  &&
                 document.querySelector('[data-cell="7"]').innerText === playerTurn  &&
                 document.querySelector('[data-cell="8"]').innerText === playerTurn ) ||
            (document.querySelector('[data-cell="0"]').innerText === playerTurn  &&
                 document.querySelector('[data-cell="4"]').innerText === playerTurn  &&
                 document.querySelector('[data-cell="8"]').innerText === playerTurn ) ||
            (document.querySelector('[data-cell="2"]').innerText === playerTurn  &&
                 document.querySelector('[data-cell="4"]').innerText === playerTurn  &&
                 document.querySelector('[data-cell="6"]').innerText === playerTurn )
        ) {
            alert ('Player ' + playerTurn + ' Wins!');
        }
    }

  document.getElementById('clear').onclick = function() {
    location = location
  }
});
