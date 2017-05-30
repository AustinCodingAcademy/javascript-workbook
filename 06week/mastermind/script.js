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
    newDiv.innerText = printBoard();
    document.querySelector('#board').appendChild(newDiv);
    newInput();

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
        document.querySelector('#announce-winner').innerText = 'You guessed it!';
      } else {
        document.querySelector('#announce-winner').innerText = 'Try again';
      }

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

      //return hint
      return(board[4]);
    }

    function printBoard() {
      convertToColorPegs(board);
      return(board);

    }

    function convertToColorPegs(result) {
      let colorBoard = result[0].split(" ");
      let redWhite = colorBoard[4].split("-");
      let dots = [];

      let whiteCount = redWhite[1];
      dots.push(convertToWhite(whiteCount));

      let redCount = redWhite[0];
      dots.push(convertToRed(redCount));
      return dots;
    }

    function convertToRed(redCount) {
      let redDots = [];

      for (var i = 0; i < redCount; i++) {
        let newRedDot = document.createElement('div');
        newRedDot.id = "newRed";
        newRedDot.className = "dot";
        document.querySelector('#board').appendChild(newRedDot);
        redDots.push(newRedDot);
      }
      return redDots;
    }

    function convertToWhite(whiteCount) {
      let whiteDots = [];

      for (var i = 0; i < whiteCount; i++) {
        let newWhiteDot = document.createElement('div');
        newWhiteDot.id = "newWhite";
        newWhiteDot.className = "dot";
        document.querySelector('#board').appendChild(newWhiteDot);
        whiteDots.push(newWhiteDot);
      }
      return whiteDots;
    }

  }

// Clears the board
  document.querySelector('#clear').onclick = function(event) {
    event.preventDefault();

    var elementsToDelete = document.querySelectorAll('#newDivs');
    for (var i=0; i < elementsToDelete.length; i++) {
      elementsToDelete[i].innerText = "";
    }

    let redsToDelete = document.querySelectorAll('#newRed');
    for (var i=0; i < redsToDelete.length; i++) {
      let redBye = redsToDelete[i];
      redBye.remove();
    }

    let whitesToDelete = document.querySelectorAll('#newWhite');
    for (var i=0; i < whitesToDelete.length; i++) {
      let whiteBye = whitesToDelete[i];
      whiteBye.remove();
    }

    let messageToDelete = document.querySelector('#announce-winner');
    messageToDelete.innerText = "";

    document.querySelector('input').value = "";

    newInput();
  };

  function newInput() {
    document.querySelector('input').value = "";
    document.querySelector('input').focus();
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
