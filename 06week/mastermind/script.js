'use strict';

document.addEventListener('DOMContentLoaded', () => {

  document.querySelector('button').onclick = function (event) {
    event.preventDefault();
    let guess = document.querySelector('input').value;

    // mastermind(guess);

    let newDiv = document.createElement('div');
    newDiv.innerText = mastermind(guess);

    document.querySelector('#board').appendChild(newDiv);
  }

  let board = [];
  let solution = 'abcd';
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

  function mastermind(guess) {
    let count = 0;
    board = [];
    let gs = [];
    for (var i = 0; i < 4; i++) {
      gs.push(guess[i]);
    }

    generateHint(solution, gs);

    count++;
    if (board[4] === '4-0') {
      return('You guessed it!');
    }
    board = board.join('').split(',');
    return('try again');

  }

  function generateHint(solution, gs) {
    //check for reds
    board = [];
    let redCount = 0;
    for (var i = 0; i <= gs.length-1; i++) {
      if (solution[i] === gs[i]) redCount++;
    }

    //check for white
    let whiteCount = 0;
    for (var i = 0; i <= solution.length-1; i++) {
      let current = '';
      for (var j = 0; j <= gs.length-1; j++) {
        if (current !== solution[i]) {
          if (solution[i] === gs[j] && solution[i] !== gs[i]) {
            whiteCount++;
            current = solution[i];
          }
        }
      }
    }

    //log results
    for (var i = 0; i <= gs.length-1; i++) {
      board.push(gs[i]);
    }
    board.push(redCount + '-' + whiteCount);
    return(board[4]);
  }
  // let board = [];
  // let solution = 'abcd';
  // const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  //
  // function printBoard() {
  //   for (let i = 0; i <= board.length-1; i++) {
  //     console.log(board[i]);
  //   }
  // }
  //
  // function generateSolution() {
  //   for (let i = 0; i < 4; i++) {
  //     const randomIndex = getRandomInt(0, letters.length);
  //     solution += letters[randomIndex];
  //   }
  // }
  //
  // function getRandomInt(min, max) {
  //   return Math.floor(Math.random() * (max - min)) + min;
  // }
  //
  // function generateHint(solution, gs) {
  //   //check for reds
  //   board = [];
  //   let redCount = 0;
  //   for (var i = 0; i <= gs.length-1; i++) {
  //     if (solution[i] === gs[i]) redCount++;
  //
  //   }
  //   //check for white
  //   let whiteCount = 0;
  //   for (var i = 0; i <= solution.length-1; i++) {
  //     let current = '';
  //     for (var j = 0; j <= gs.length-1; j++) {
  //       if (current !== solution[i]) {
  //         if (solution[i] === gs[j] && solution[i] !== gs[i]) {
  //           whiteCount++;
  //           current = solution[i];
  //         }
  //       }
  //     }
  //   }
  //
  //   //log results
  //   for (var i = 0; i <= gs.length-1; i++) {
  //     board.push(gs[i]);
  //   }
  //   board.push(redCount + '-' + whiteCount);
  //   return(board[4]);
  // }
  //
  // function mastermind(guess) {
  //   let count = 0;
  //   board = [];
  //   let gs = [];
  //   for (var i = 0; i < 4; i++) {
  //     gs.push(guess[i]);
  //   }
  //   generateHint(solution, gs);
  //   count++;
  //   if (board[4] === '4-0') {
  //     return('You guessed it!');
  //   }
  //   board = board.join('').split(',');
  //   return('try again');
  //
  // }
  //
  //
  // function getPrompt() {
  //   rl.question('guess: ', (guess) => {
  //     console.log( mastermind(guess) );
  //     printBoard();
  //     getPrompt();
  //   });
  // }


});



//   let playerTurn = 'X';
//   document.querySelectorAll('[data-cell]').forEach(cell => {
//     cell.onclick = function(event) {
//       event.preventDefault();
//       this.innerText = playerTurn;
//
//   // Check to see if there's a winner
//       if (checkWin()) {
//         document.getElementById("announce-winner").innerText = (playerTurn + " wins!");
//       }
//   // Switches from X to O and visa versa
//       playerTurn = (playerTurn === 'X') ? 'O' : 'X';
//     }
//   });
//
// // Clears the board and fades a clean board back in
//   document.querySelectorAll('button').forEach(cell => {
//     cell.onclick = function(event) {
//       event.preventDefault();
//       var elements = document.querySelectorAll('[data-cell]');
//         for (var i=0; i < elements.length; i++) {
//           elements[i].innerText = "";
//         }
//       document.getElementById('announce-winner').innerText = "";
//
//       playerTurn = 'X';
//     }
//   });
//
//   function checkWin() {
//     const winningCells = [
//       [0,1,2],
//       [3,4,5],
//       [6,7,8],
//       [0,3,6],
//       [1,4,7],
//       [2,5,8],
//       [0,4,8],
//       [2,4,6]
//     ];
//
//     return winningCells.some((combo) => {
//       return combo.every((letter) => {
//         return document.querySelector(`[data-cell="${letter}"]`).innerText === playerTurn;
//       });
//     });
//   }
// });
// stop

// https://gdevany.github.io/javascript-workbook/06week/ticTacToe/index.html
