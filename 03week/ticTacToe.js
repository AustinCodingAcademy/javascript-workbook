'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';


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
  if (board[0][0] === playerTurn && board[0][1] === playerTurn && board[0][2] === playerTurn) {
    console.log(true);
    return true
  } else if (board[1][0] === playerTurn && board[1][1] === playerTurn && board[1][2] === playerTurn) {
    console.log(true);
    return true
  } else if (board[2][0] === playerTurn && board[2][1] === playerTurn && board[2][2] === playerTurn) {
    console.log(true);
    return true
  } else {
    return false
  }
}

function verticalWin() {
  // Your code here
  if (board[0][0] === playerTurn && board[1][0] === playerTurn && board[2][0] === playerTurn) {
    console.log(true);
  } else if (board[0][1] === playerTurn && board[1][1] === playerTurn && board[2][1] === playerTurn) {
    console.log(true);
    return true
  } else if (board[0][2] === playerTurn && board[1][2] === playerTurn && board[2][2] === playerTurn) {
    console.log(true);
    return true
  } else {
    return false
  }
}

function diagonalWin() {
  // Your code here
  if (board[0][0] === playerTurn && board[1][1] === playerTurn && board[2][2] === playerTurn) {
    console.log(true);
  } else if (board[0][2] === playerTurn && board[1][1] === playerTurn && board[2][0] === playerTurn) {
    console.log(true);
    return true
  } else {
    return false
  }
}

function checkForWin() {
  // Your code here
  if (horizontalWin(row, column)) {
    console.log('HORIZONTAL WIN!!');
    return true
  } else if (verticalWin(row, column)) {
    console.log('VERTICAL WIN!!');
    return true
  } else if (diagonalWin(row, column)) {
    console.log('DIAGONAL WIN!!');
    return true
  } else {
    return false
  }
}

const checkValidEntry = (row, column) => {
  if ((row === '0' || row === '1' || row === '2') && (column === '0' || column === '1' || column === '2') && (board[row][column] === ' ')) {
    return true
  } else {
    return false
  }
}

const switchPlayer = (row, column) => {
  if (playerTurn === 'X') {
    playerTurn = 'O'
  } else {
    playerTurn = 'X'
  }
}

function ticTacToe(row, column) {
  // Your code here
  if (checkValidEntry(row, column)) {
    board[row][column] = playerTurn;
    switchPlayer(row, column)
  } else {
    console.log("Invalid entry!");
  }
}

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



// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [
        [' ', ' ', ' '],
        [' ', 'X', ' '],
        [' ', ' ', ' ']
      ]);
    });

    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [
        ['O', ' ', ' '],
        [' ', 'X', ' '],
        [' ', ' ', ' ']
      ]);
    });

    it('should check for vertical wins', () => {
      board = [
        [' ', 'X', ' '],
        [' ', 'X', ' '],
        [' ', 'X', ' ']
      ];
      assert.equal(verticalWin(), true);
    });

    it('should check for horizontal wins', () => {
      board = [
        ['X', 'X', 'X'],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
      ];
      assert.equal(horizontalWin(), true);
    });

    it('should check for diagonal wins', () => {
      board = [
        ['X', ' ', ' '],
        [' ', 'X', ' '],
        [' ', ' ', 'X']
      ];
      assert.equal(diagonalWin(), true);
    });

    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}