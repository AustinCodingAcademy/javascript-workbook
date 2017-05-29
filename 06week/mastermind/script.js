'use strict';

document.addEventListener('DOMContentLoaded', () => {
  let message = "";
  document.querySelector('input').focus();

  document.querySelector('#submit').onclick = function (event) {
    event.preventDefault();

    let board = [];
    let solution = 'abcd';
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    let guess = document.querySelector('input').value;
    mastermind(guess);
    let newDiv = document.createElement('div');
    newDiv.id = "newDivs";
    newDiv.innerText = printBoard() + message;
    document.querySelector('#board').appendChild(newDiv);
    newInput();


    function newInput() {
      document.querySelector('input').value = "";
      document.querySelector('input').focus();
    }

    //takes user guess, and analyzes results
    function mastermind(guess) {
      let count = 0;
      board = [];
      let gs = [];
      for (var i = 0; i < 4; i++) {
        gs.push(guess[i]);
      }

      generateHint(solution, gs);

      count++;

      // if 4 reds, then 'win', else, 'try again'
      if (board[4] === '4-0') {
        message = '  You guessed it!';
      } else message = '  Try again';

      //return board as one array item
      board = board.join(' ').split(',');
    }

    // analyze user guess and returns results inside board
    function generateHint(solution, gs) {
      board = [];

      //check for reds
      let redCount = 0;
      for (var i = 0; i <= gs.length-1; i++) {
        if (solution[i] === gs[i]) redCount++;
      }

      //check for whites
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

      //push guess into board
      for (var i = 0; i <= gs.length-1; i++) {
        board.push(gs[i]);
      }
      //push hint into board
      board.push(redCount + '-' + whiteCount);

      return(board[4]);
    }

    function printBoard() {
      board.push(convertToColorPegs(board));
      return(board);
    }

    function convertToColorPegs(result) {
      let colorBoard = result[0].split(" ");
      let redCount = colorBoard[8];
      let redObj = convertToRed(redCount);
      let whiteCount = colorBoard[10];
      let whiteObj = convertToWhite(whiteCount);
      return redObj;
    }

    function convertToRed(redCount) {
      let redDots = [];
      for (var i = 0; i <= redCount; i++) {
        let newRedDot = document.createElement('span');
        newRedDot.id = "newRed";
        document.querySelector('#board').appendChild(newRedSpan);
        redDots.push(newRedDot);
      }
      return redDots;
    }

    function convertToWhite(whiteCount) {
      for (var i = 0; i <= whiteCount; i++) {
        let newWhiteDot = document.createElement('span');
        newWhiteDot.id = "newWite";
        document.querySelector('#board').appendChild(newWhiteSpan);
      }

    }

  }

// Clears the board
  document.querySelector('#clear').onclick = function(event) {
    event.preventDefault();

    var elements = document.querySelectorAll('#newDivs');
    for (var i=0; i < elements.length; i++) {
      elements[i].innerText = "";
    }
    message = "";
    document.querySelector('input').value = "";
  };
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
