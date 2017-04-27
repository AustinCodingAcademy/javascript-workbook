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
//outer loop check each row
  for (var i = 0; i < 3; i++) {
//check each column in row
    const j = 0;
    if (board[i][j] === ' ') return false;
    if (board[i][j] === board[i][j+1] && board[i][j] === board[i][j+2]) return true;
  }
}

function verticalWin() {
  //outer loop check each column
  for (var i = 0; i < 3; i++) {
  //check each row in column
    const j = 0;
    if (board[j][i] === ' ') return false;
    if (board[j][i] === board[j+1][i] && board[j][i] === board[j+2][i]) return true;
  }
}

function diagonalWin() {
// check for diagonal win
  if (board[0][0] === ' ' || board[2][0] === ' ') return false;
  if ((board[0][0] === board[1][1] && board[0][0] === board[2][2]) ||
    (board[2][0] === board[1][1] && board[2][0] === board[0][2])) {
    return true;
  }
}

function checkForWin() {
//call 3 different directional functions to check if player has won
  if (horizontalWin() || verticalWin() || diagonalWin()) {
    console.log(`${playerTurn} wins!`);
    printBoard();
    process.exit();
  }

}

function ticTacToe(row, column) {
//if cell taken, ask again; if not, place 'x' or 'o'
  if (board[row][column] === ' ') {
    board[row][column] = playerTurn;
    checkForWin();
    playerTurn = (playerTurn === 'X') ? 'O' : 'X';
  } else {
    console.log('Sorry, that space is taken');
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
