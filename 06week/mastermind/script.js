'use strict';

document.addEventListener('DOMContentLoaded', () => {
  let message = "";

  document.querySelector('button').onclick = function (event) {
    event.preventDefault();
    let guess = document.querySelector('input').value;
    mastermind(guess);

    let newDiv = document.createElement('div');
    newDiv.innerText = printBoard() + message;
    console.log(board);

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
      message = '  You guessed it!';
    }
    board = board.join('').split(',');
    message = '  Try again';
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

function printBoard() {
  for (let i = 0; i <= board.length-1; i++) {
    return(board[i]);
  }
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

// https://gdevany.github.io/javascript-workbook/06week/mastermind/index.html
