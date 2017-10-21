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
  //horizontalWin(), checks if there are three X's or O's in [0][0], [0][1], [0][2], etc, indexOf method
  if (printBoard.indexOf(printBoard) === ((([0][0]) && [0][1] && [0][2]) || ([1][0] && [1][1] && [1][2]) || ([2][0] && [2][1] && [2][2])) {
    return 'You Win!'
  } else {
    const getPrompt;
  }
}

function verticalWin() {
  //verticalWin(), checks if there are th ree X's or O'ss in [0][0], [1][0], [2][0]; [0][1], [1][1], [2][1]; [0][2], [1][2], [2][2]; indexOf method
  if (printBoard.indexOf(printBoard) === ((([0][0]) && [1][0] && [2][0]) || ([0][1] && [1][1] && [2][1]) || ([0][2] && [1][2] && [2][2])) {
    return 'You Win!'
  } else {
    const getPrompt;
  }
}

function diagonalWin() {
  //diagonalWin(), checks if there are three X's or O's in [0][0], [1][1], [2][2]; [0][2], [1][1], [2][0]; indexOf method
  if (printBoard.indexOf(printBoard) === ((([0][0]) && [1][1] && [2][2]) || ([0][2] && [1][1] && [2][0])) {
    return 'You Win!'
  } else {
    const getPrompt;
  }
}

function checkForWin() {
  //checkForWin(), check if horizontalWin, verticalWin, diagonalWin have three of the same values, if else statements
}

function ticTacToe(row, column) {
  //ticTacToe(), begin the game with player X
  //playerXTurn(), set playerTurn to 'X' - place an X in the column/row that player X chooses, splice method on var board
  //playerOTurn(), change playerTurn to 'O' - switch to player O, place an O in the column/row that player O chooses, splice method on var board
  //switch back to player X, run the same code again
  //Between every turn, run checkForWin

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
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
