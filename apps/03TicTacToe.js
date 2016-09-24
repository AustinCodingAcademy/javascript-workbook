'use strict';


var assert = require('assert');
var prompt = require('prompt');
prompt.start();

// var valid = 0 || 1 || 2;
var board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];
// var empty = board.indexOf(' ');
var playerTurn = 'X';
var blank = ' ';

//type 'stalemate' in the row prompt to trigger this stalemate array
var staleTest = [
    ['O', 'X', 'O'],
    ['O', 'X', 'X'],
    ['X', 'O', ' ']
];

function printBoard() {
if (checkForWin() === true) {
  board = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' ']
  ];
}
    console.log('   0  1  2');
    console.log('0 ' + board[0].join(' | '));
    console.log('  ---------');
    console.log('1 ' + board[1].join(' | '));
    console.log('  ---------');
    console.log('2 ' + board[2].join(' | '));
}

function horizontalWin() {
    // this format simply returns a winning result into the top level
    return playerTurn === board[0][0] &&
        playerTurn === board[0][1] &&
        playerTurn === board[0][2] ||
        playerTurn === board[1][0] &&
        playerTurn === board[1][1] &&
        playerTurn === board[1][2] ||
        playerTurn === board[2][0] &&
        playerTurn === board[2][1] &&
        playerTurn === board[2][2];
}

function verticalWin() {
    return playerTurn === board[0][0] &&
        playerTurn === board[1][0] &&
        playerTurn === board[2][0] ||
        playerTurn === board[0][1] &&
        playerTurn === board[1][1] &&
        playerTurn === board[2][1] ||
        playerTurn === board[0][2] &&
        playerTurn === board[1][2] &&
        playerTurn === board[2][2];
}

function diagonalWin() {
    return playerTurn === board[0][0] &&
        playerTurn === board[1][1] &&
        playerTurn === board[2][2] ||
        playerTurn === board[0][2] &&
        playerTurn === board[1][1] &&
        playerTurn === board[2][0];

}
var valid = ['0', '1', '2'];

function ticTacToe(row, column) {
      board[row][column] = playerTurn;
      checkForWin();
      if(checkForWin()) {
          playAgain();
      } else {
          playerTurn = (playerTurn === 'X') ? 'O' : 'X';
          getPrompt();
      }
  }



  // var win = (horizontalWin() || verticalWin() || diagonalWin());



  var blank = ' ';
  function isBlank(blank) {
    return blank;
  }
  var blankSpaces = board.length - board.filter(isBlank);

//   function checkForTie()  {
//   if (!(win)  &&  (blankSpaces > 7)) {
//   return true;
// }
// }

function checkForTie(){
  for (var i=0;i<board.length;i++){
    for (var j=0;j<board.length;j++) {
      if (board[i][j] === ' ') {
        return false;
      }
    }
  }
  return true;
}



function checkForWin() {
    var gameOver = false;
    if (horizontalWin() || verticalWin() || diagonalWin()) {
        console.log(playerTurn + " " + "is the winner!");
        return true;
    }
    else if (checkForTie()) {
        console.log('Looks like this match is a stalemate.');
        gameOver = true;
        // playAgain();
    }
    // else {
    //   getPrompt();
    // }

    // else if (!win && (numBlanks > 8)) {
    //     console.log("No one wins.");
    //     playAgain();
    // }
return gameOver;
}

function playAgain() {
        console.log("Would you like to play again?");
        prompt.get(['y / n'], function(error, result) {
            if (result['y / n'] === 'y') {
                getPrompt();
                return true;
            } else {
                console.log("thanks for playing!");
                process.exit();
            }
        });
}

function getPrompt() {
    printBoard();
    console.log("It's Player " + playerTurn + "'s turn.");
    // console.log('board length:' + board.length);
    // console.log(blankSpaces.length + " " + "blank spaces.");
    prompt.get(['row', 'column'], function(error, result) {

        console.log(typeof result.row, typeof result.column);
        if (!(result.row === '0' || result.row === '1' || result.row === '2' || result.row === 'stalemate')) {
            console.log("Please enter valid inputs (0, 1 or 2)");
            getPrompt();
        }
        else if (result.row === 'stalemate' || result.row === 'stalemate') {
          board = staleTest;
          getPrompt();
        }
        else if (board[result.row][result.column] !== ' ' ) {
          console.log("That space is already taken. Select a different space.");
          getPrompt();
        }

        else {
            ticTacToe(result.row, result.column);
        }
    });
}



// Tests

if (typeof describe !== 'undefined') {

    describe('#ticTacToe()', function() {
        it('should place mark on the board', function() {
            ticTacToe(1, 1);
            assert.deepEqual(board, [
                [' ', ' ', ' '],
                [' ', 'X', ' '],
                [' ', ' ', ' ']
            ]);
        });
        it('should alternate between players', function() {
            ticTacToe(0, 0);
            assert.deepEqual(board, [
                ['O', ' ', ' '],
                [' ', 'X', ' '],
                [' ', ' ', ' ']
            ]);
        });
        it('should check for vertical wins', function() {
            board = [
                [' ', 'X', ' '],
                [' ', 'X', ' '],
                [' ', 'X', ' ']
            ];
            assert.equal(verticalWin(), true);
        });
        it('should check for horizontal wins', function() {
            board = [
                ['X', 'X', 'X'],
                [' ', ' ', ' '],
                [' ', ' ', ' ']
            ];
            assert.equal(horizontalWin(), true);
        });
        it('should check for diagonal wins', function() {
            board = [
                ['X', ' ', ' '],
                [' ', 'X', ' '],
                [' ', ' ', 'X']
            ];
            assert.equal(diagonalWin(), true);
        });
        it('should detect a win', function() {
            assert.equal(checkForWin(), true);
        });
    });
} else {

    getPrompt();

}
