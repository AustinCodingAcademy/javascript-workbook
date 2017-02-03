'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

var playerTurn = 'X';

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

function horizontalWin() {
  // Your code here
  if ((board[0][0] === playerTurn && board[0][1] === playerTurn && board[0][2] === playerTurn) ||
    (board[1][0] === playerTurn && board[1][1] === playerTurn && board[1][2] === playerTurn) ||
    (board[2][0] === playerTurn && board[2][1] === playerTurn && board[2][2] === playerTurn)) {
    return true;
  }
}

function verticalWin() {
  // Your code here
  if ((board[0][0] === playerTurn && board[1][0] === playerTurn && board[2][0] === playerTurn) ||
    (board[0][1] === playerTurn && board[1][1] === playerTurn && board[2][1] === playerTurn) ||
    (board[0][2] === playerTurn && board[1][2] === playerTurn && board[2][2] === playerTurn)) {
    return true;
  }
}

function diagonalWin() {
  // Your code here
  if ((board[0][0] === playerTurn && board[1][1] === playerTurn && board[2][2] === playerTurn) ||
    (board[0][2] === playerTurn && board[1][1] === playerTurn && board[2][0] === playerTurn)) {
    return true;
  }
}

function checkForWin() {
  // Your code here
  //if checkForWin === false and there are no free spaces === tie
  //prevent overwriting
  if (horizontalWin() || verticalWin() || diagonalWin()) {
    console.log('Player ' + playerTurn + ' won!');
    return true;
  }
}

function isSpaceAvailable(row, column) {
  return (board[row][column] !== 'O' && board[row][column] !== 'X');
}

function ticTacToe(row, column) {
  // Your code here
  // check for availability
  if (isSpaceAvailable(row, column)) {
    board[row][column] = playerTurn;
    playerTurn = (playerTurn === 'X') ? 'O' : 'X';
  } else {
    console.log('space taken');
  }
}

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      // checking for win
      checkForWin();
      ticTacToe(row, column);
      getPrompt();
    });
  });

}

/*  unedited getPrompt in case I need it.
function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });

}
from the rock paper scissors app
function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      // checking for win conditionals
      var winMessage = rockPaperScissors(answer1, answer2);
      console.log(winMessage);
      if (winMessage === 'Hand two wins!' || winMessage === 'Hand one wins!') {
        rl.question('Play Again? ', function (answer3) {
          if (answer3 === 'yes') {
            getPrompt();
          } else {
            console.log('later loser');
            process.exit()
          }
        });
      }
    });
  });
}

*/

// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', function () {
    it('should place mark on the board', function () {
      ticTacToe(1, 1);
      assert.deepEqual(board, [
        [' ', ' ', ' '],
        [' ', 'X', ' '],
        [' ', ' ', ' ']
      ]);
    });
    it('should alternate between players', function () {
      ticTacToe(0, 0);
      assert.deepEqual(board, [
        ['O', ' ', ' '],
        [' ', 'X', ' '],
        [' ', ' ', ' ']
      ]);
    });
    it('should check for vertical wins', function () {
      board = [
        [' ', 'X', ' '],
        [' ', 'X', ' '],
        [' ', 'X', ' ']
      ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', function () {
      board = [
        ['X', 'X', 'X'],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
      ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', function () {
      board = [
        ['X', ' ', ' '],
        [' ', 'X', ' '],
        [' ', ' ', 'X']
      ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', function () {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
