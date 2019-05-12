'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//game board
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



//check for wins
  function horizontalWin() {
    if (board[0][0] === "X" && board[0][1] === "X" && board[0][2] === "X") {
    return true;
    } else if (board[1][0] === "X" && board[1][1] === "X" && board[1][2] === "X") {
    return true;
    } else if (board[2][0] === "X" && board[2][1] === "X" && board[2][2] === "X") {
    return true;
    }
    }

//check for wins
function verticalWin() {
  if (board[0][0] === "X" && board[1][0] === "X" && board[2][0] === "X") {
    return true;
    } else if (board[0][1] === "X" && board[1][1] === "X" && board[2][1] === "X") {
    return true;
    } else if (board[0][2] === "X" && board[1][2] === "X" && board[2][2] === "X") {
    return true;
    }}

function diagonalWin() {
  if (board[0][0] === "X" && board[1][1] === "X" && board[2][2] === "X") {
    return true;
    } else if (board[0][2] === "X" && board[1][1] === "X" && board[2][0] === "X") {
    return true;
    }}
//checks for winns
function checkForWin() {
  if (verticalWin() || horizontalWin() || diagonalWin()) return true;
  return false;
}
//changes turns
function ticTacToe(row, column) {
board[row][column] = playerTurn;
if(playerTurn === 'X')
playerTurn = 'O';
else(
  playerTurn = 'X');
}
//tell user who's turn it is
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
//check for empty
function empty(row, column){
  if (board [row][column] == '  '){
    return true;
  } else {
    return false;
  }
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
    //my unit test
    it('should check for empty', () => {
      board = [ [' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' '] ];
      ticTacToe(0, 0);
      assert.equal(empty(0,0), false);
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

  getPrompt()}
