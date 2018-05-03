'use strict';

// 1.  Figure how to add 'X' and 'O' into 2 dimensional array.
// 2.  Create code in horizontalWin(), verticalWin, and diagonalWin() to determine winner.
// 3.  Use ternary operator for player's turn.
// 4.  Add horizontalWin(), verticalWin(), and diagonalWin() into the checkForWin() function to access winner.
// 5.  Add all possibilities into the ticTacToe() function to position 'X' or 'O'.
// 6.  Run tests to assert all tests.

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
  // Your code
  if(board[0][0] == 'X' && board[0][1] == 'X' && board[0][2] == 'X') {
    playerTurn = 'X';
    console.log(playerTurn + ' Wins!!!' + '\n');
    return true;
  } else if(board[0][0] == 'O' && board[0][1] == 'O' && board[0][2] == 'O') {
    playerTurn = 'O';
    console.log(playerTurn + ' Wins!!!' + '\n');
    return true;
  } else if(board[1][0] == 'X' && board[1][1] == 'X' && board[1][2] == 'X') {
    playerTurn = 'X';
    console.log(playerTurn + ' Wins!!!' + '\n');
    return true;
  } else if(board[1][0] == 'O' && board[1][1] == 'O' && board[1][2] == 'O') {
    playerTurn = 'O';
    console.log(playerTurn + ' Wins!!!' + '\n');
    return true;
  } else if(board[2][0] == 'X' && board[2][1] == 'X' && board[2][2] == 'X') {
    playerTurn = 'X';
    console.log(playerTurn + ' Wins!!!' + '\n');
    return true;
  } else if(board[2][0] == 'O' && board[2][1] == 'O' && board[2][2] == 'O') {
    playerTurn = 'O';
    console.log(playerTurn + ' Wins!!!' + '\n');
    return true;
  }
}

function verticalWin() {
  // Your code here
  if(board[0][0] == 'X' && board[1][0] == 'X' && board[2][0] == 'X') {
    playerTurn = 'X';
    console.log(playerTurn + ' Wins!!!' + '\n');
    return true;
  } else if(board[0][1] == 'X' && board[1][1] == 'X' && board[2][1] == 'X') {
    playerTurn = 'X';
    console.log(playerTurn + ' Wins!!!' + '\n');
    return true;
  } else if(board[0][2] == 'X' && board[1][2] == 'X' && board[2][2] == 'X') {
    playerTurn = 'X';
    console.log(playerTurn + ' Wins!!!' + '\n');
    return true;
  } else if(board[0][0] == 'O' && board[1][0] == 'O' && board[2][0] == 'O') {
    playerTurn = 'O';
    console.log(playerTurn + ' Wins!!!' + '\n');
    return true;
  } else if(board[0][1] == 'O' && board[1][1] == 'O' && board[2][1] == 'O') {
    playerTurn = 'O';
    console.log(playerTurn + ' Wins!!!' + '\n');
    return true;
  } else if(board[0][2] == 'O' && board[1][2] == 'O' && board[2][2] == 'O') {
    playerTurn = 'O';
    console.log(playerTurn + ' Wins!!!' + '\n');
    return true;
  }
}

function diagonalWin() {
  // Your code here
  if(board[0][0] == 'X' && board[1][1] == 'X' && board[2][2] == 'X') {
    playerTurn = 'X';
    console.log(playerTurn + ' Wins!!!' + '\n');
    return true;
  } else if(board[0][2] == 'X' && board[1][1] == 'X' && board[2][0] == 'X') {
    playerTurn = 'X';
    console.log(playerTurn + ' Wins!!!' + '\n');
    return true;
  } else if(board[0][0] == 'O' && board[1][1] == 'O' && board[2][2] == 'O') {
    playerTurn = 'O';
    console.log(playerTurn + ' Wins!!!' + '\n');
    return true;
  } else if(board[0][2] == 'O' && board[1][1] == 'O' && board[2][0] == 'O') {
    playerTurn = 'O';
    console.log(playerTurn + ' Wins!!!' + '\n');
    return true;
  }
}

function checkForWin() {
  // Your code here
  horizontalWin();
  verticalWin();
  diagonalWin();

  return true;
}

function ticTacToe(row, column) {
  // Your code here
    if(playerTurn == 'X') {
      if(row == 0 && column == 0) {
        board[row][column] = 'X';
      } else if(row == 0 && column == 1) {
        board[row][column] = 'X';
      } else if(row == 0 && column == 2) {
        board[row][column] = 'X';
      } else if(row == 1 && column == 0) {
        board[row][column] = 'X';
      } else if(row == 1 && column == 1) {
        board[row][column] = 'X';
      } else if(row == 1 && column == 2) {
        board[row][column] = 'X';
      } else if(row == 2 && column == 0) {
        board[row][column] = 'X';
      } else if(row == 2 && column == 1) {
        board[row][column] = 'X';
      } else if(row == 2 && column == 2) {
        board[row][column] = 'X';
      }
    }

    if(playerTurn == 'O') {
      if(row == 0 && column == 0) {
        board[row][column] = 'O';
      } else if(row == 0 && column == 1) {
        board[row][column] = 'O';
      } else if(row == 0 && column == 2) {
        board[row][column] = 'O';
      } else if(row == 1 && column == 0) {
        board[row][column] = 'O';
      } else if(row == 1 && column == 1) {
        board[row][column] = 'O';
      } else if(row == 1 && column == 2) {
        board[row][column] = 'O';
      } else if(row == 2 && column == 0) {
        board[row][column] = 'O';
      } else if(row == 2 && column == 1) {
        board[row][column] = 'O';
      } else if(row == 2 && column == 2) {
        board[row][column] = 'O';
      }
    }
}


function getPrompt() {
  printBoard();
  checkForWin();
  playerTurn = playerTurn == "X" ? "O" : "X";
  // checkForWin();
  console.log();
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
