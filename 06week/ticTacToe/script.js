'use strict';

document.addEventListener('DOMContentLoaded', () => {
// Your code here
//
//   document.querySelectorAll('[data-cell]').forEach(cell => {
//     cell.addEventListener('click', function() {console.log(this);
//
//document.querySelector('[data-cell="0"]')
//document.querySelector('[data-cell="1"]').innerText= "X"
//document.querySelectorAll('[data-cell]')
//document.querySelectorAll('[data-cell]').forEach(dataCell => {console.log(dataCell)})
//document.querySelectorAll('[data-cell]').forEach(dataCell => {console.log(dataCell)})
//
      $(function() {
        let player = 'X';

        $('[data-cell]').click(function() {
          $(this).text(player);
          if(checkWin()) {
            $('#announce-winner').text(`${player} wins!`)
          } else {
            if (player === 'X') {
              player = 'O';
            }else {
              player = 'X';
            }
          }

        })

        function checkWin() {
          if (
            $('[data-cell="0"]').text() === 'X' &&
            $('[data-cell="3"]').text() === 'X' &&
            $('[data-cell="6"]').text() === 'X' ||
            $('[data-cell="0"]').text() === 'O' &&
            $('[data-cell="3"]').text() === 'O' &&
            $('[data-cell="6"]').text() === 'O'
          ) {
            return true;
          } else if(
            $('[data-cell="0"]').text() === 'X' &&
            $('[data-cell="4"]').text() === 'X' &&
            $('[data-cell="8"]').text() === 'X' ||
            $('[data-cell="0"]').text() === 'O' &&
            $('[data-cell="4"]').text() === 'O' &&
            $('[data-cell="8"]').text() === 'O'
          ) {
            return true;
          } else if(
            $('[data-cell="0"]').text() === 'X' &&
            $('[data-cell="1"]').text() === 'X' &&
            $('[data-cell="2"]').text() === 'X' ||
            $('[data-cell="0"]').text() === 'O' &&
            $('[data-cell="1"]').text() === 'O' &&
            $('[data-cell="2"]').text() === 'O'
          ) {
            return true;
          } else if(
            $('[data-cell="1"]').text() === 'X' &&
            $('[data-cell="4"]').text() === 'X' &&
            $('[data-cell="7"]').text() === 'X' ||
            $('[data-cell="1"]').text() === 'O' &&
            $('[data-cell="4"]').text() === 'O' &&
            $('[data-cell="7"]').text() === 'O'
          ) {
            return true;
          } else if(
            $('[data-cell="2"]').text() === 'X' &&
            $('[data-cell="4"]').text() === 'X' &&
            $('[data-cell="6"]').text() === 'X' ||
            $('[data-cell="2"]').text() === 'O' &&
            $('[data-cell="4"]').text() === 'O' &&
            $('[data-cell="6"]').text() === 'O'
          ) {
            return true;
          } else if(
            $('[data-cell="2"]').text() === 'X' &&
            $('[data-cell="5"]').text() === 'X' &&
            $('[data-cell="8"]').text() === 'X' ||
            $('[data-cell="2"]').text() === 'O' &&
            $('[data-cell="5"]').text() === 'O' &&
            $('[data-cell="8"]').text() === 'O'
          ) {
            return true;
          } else if(
            $('[data-cell="3"]').text() === 'X' &&
            $('[data-cell="4"]').text() === 'X' &&
            $('[data-cell="5"]').text() === 'X' ||
            $('[data-cell="3"]').text() === 'O' &&
            $('[data-cell="4"]').text() === 'O' &&
            $('[data-cell="5"]').text() === 'O'
          ) {
            return true;
          } else if(
            $('[data-cell="6"]').text() === 'X' &&
            $('[data-cell="7"]').text() === 'X' &&
            $('[data-cell="8"]').text() === 'X' ||
            $('[data-cell="6"]').text() === 'O' &&
            $('[data-cell="7"]').text() === 'O' &&
            $('[data-cell="8"]').text() === 'O'
          ) {
            return true;
          }else {
            return false;
          }
        }
      })
  // });
  //
  // Tests ===========================================================
  //
  // if (typeof describe === 'function') {
  //
  //   describe('#ticTacToe()', () => {
  //     it('should place mark on the board', () => {
  //       ticTacToe(1, 1);
  //       assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
  //     });
  //     it('should alternate between players', () => {
  //       ticTacToe(0, 0);
  //       assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
  //     });
  //     it('should check for vertical wins', () => {
  //       board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
  //       assert.equal(verticalWin(), true);
  //     });
  //     it('should check for horizontal wins', () => {
  //       board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
  //       assert.equal(horizontalWin(), true);
  //     });
  //     it('should check for diagonal wins', () => {
  //       board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
  //       assert.equal(diagonalWin(), true);
  //     });
  //     it('should detect a win', () => {
  //       assert.equal(checkForWin(), true);
  //     });
  //   });
  // } else {
  //
  //   getPrompt();
  //
  // }
