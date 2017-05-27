// 'use strict';
// document.addEventListener('DOMContentLoaded', () => {
//   // Your code here
//   let playerTurn = 'x';
//   //document.querySelectorAll('[data-cell]').forEach((cell => {
//   addEventListener('click', function() {
//     this.innerText = playerTurn;
//     playerTurn = (playerTurn === 'x') ? '0' : 'X';
//   });
// });
//
// function checkForWin() {
//   const winningCells = [
//   ];
//   winningCells.forEach((combo) => {
//     combo
//
//   })
//   document.querySelector('[data-cell']);
//
// ) {
//   return true;
// }
// return false
// }
//
// document.querySelector
//
//
// //
// //   document.querySelectorAll('[data-cell]').forEach(cell => {
// //     cell.addEventListener('click', function() {console.log(this);
// //
// //document.querySelector('[data-cell="0"]')
// //document.querySelector('[data-cell="1"]').innerText= "X"
// //document.querySelectorAll('[data-cell]')
// //document.querySelectorAll('[data-cell]').forEach(dataCell => {console.log(dataCell)})
// //document.querySelectorAll('[data-cell]').forEach(dataCell => {console.log(dataCell)})
// //
// $(function() {
//   let player = 'X';
//
//   $('[data-cell]').click(function() {
//     $(this).text(player);
//     if(checkWin()) {
//       $('#announce-winner').text(`${player} wins!`)
//     } else {
//       if (player === 'X') {
//         player = 'O';
//       }else {
//         player = 'X';
//       }
//     }
//
//   })
//
//
// //-----------------------------version 1
//   $(document).ready(function() {
//     let playerTurn = 'X';
//
//     $('[data-cell]').on('click', function() {
//       if ($(this).text() === '') {
//         $(this).text(playerTurn);
//         checkForWin ();
//         playerTurn = (playerTurn === 'X') ? 'O' : 'X';
//       }
//     });
//
//     function checkForWin() {
//       if (
//         ($('[data-cell="0"]').text() === playerTurn &&
//          $('[data-cell="3"]').text() === playerTurn &&
//          $('[data-cell="6"]').text() === playerTurn) ||
//         ($('[data-cell="1"]').text() === playerTurn &&
//          $('[data-cell="4"]').text() === playerTurn &&
//          $('[data-cell="7"]').text() === playerTurn) ||
//         ($('[data-cell="2"]').text() === playerTurn &&
//          $('[data-cell="5"]').text() === playerTurn &&
//          $('[data-cell="8"]').text() === playerTurn) ||
//         ($('[data-cell="0"]').text() === playerTurn &&
//          $('[data-cell="1"]').text() === playerTurn &&
//          $('[data-cell="2"]').text() === playerTurn) ||
//         ($('[data-cell="3"]').text() === playerTurn &&
//          $('[data-cell="4"]').text() === playerTurn &&
//          $('[data-cell="5"]').text() === playerTurn) ||
//         ($('[data-cell="6"]').text() === playerTurn &&
//          $('[data-cell="7"]').text() === playerTurn &&
//          $('[data-cell="8"]').text() === playerTurn) ||
//         ($('[data-cell="0"]').text() === playerTurn &&
//          $('[data-cell="4"]').text() === playerTurn &&
//          $('[data-cell="8"]').text() === playerTurn) ||
//         ($('[data-cell="2"]').text() === playerTurn &&
//          $('[data-cell="4"]').text() === playerTurn &&
//          $('[data-cell="6"]').text() === playerTurn)
//        ) {
//          $('#announce-winner').text(`Player ${playerTurn} won!`)
//        }
//      }
//      $('#clear').click(function() {
//        $('[data-cell] , #announce-winner').text(null);
//        playerTurn = 'X';
//      })
//   })
//
//
//
// // });
// //
