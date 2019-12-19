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

var playerTurn = 'X';

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

//returns true if the board has a winning horizontal combination
function horizontalWin() {
  for (let i = 0; i < board.length; i++) {
    if (board[i][0] == board[i][1] && board[i][1] == board[i][2] && board[i][0] != ' ') {
      return true;
  }

    return false;
  }
}

function verticalWin() {
  for (let j = 0; j < board.length; j++) {
    if (board[0][j] == board[1][j] && board[1][j] == board[2][j] && board[0][j] != ' ') {
      return true;
    }
  }
  return false;
}

function diagonalWin() {
  if ((board[1][1] == board[0][0] && board[1][1] == board[2][2]) || 
      (board[1][1] == board[0][2] && board[1][1] == board[2][0]) && 
       board[1][1] != ' ') {
    return true;
  }
  return false;
}

function checkForWin() {
  if (horizontalWin() === true || verticalWin() === true || diagonalWin() === true) {
    return true;
  }
  return false;
}
/*
accept row and column, the user wants to put a mark on
place the appropriate mark on the board (board[row][column] = 'X' or 'O')
Change the game piece after a player has had their turn
check if anyone has won
if they have not won, and there are still open slots, do nothing
else if they have not won, and there are no open slots, print 'its a tie!'
else if they have won, print out the winning player's name an message.

parseInt(number) to check to see if it is a number that is returned. Will return NaN if it is not a value integer
*/
function ticTacToe(row, column) {
  board[row][column] = playerTurn;

  // if ((parseInt(row) < 2 || parseInt(row) > 0) && (parseInt(column) < 2 || parseInt(column) > 0)) {
  //   return true;
  // }

  if (playerTurn === 'X') {
    playerTurn = 'O';
  } else {
    playerTurn = 'X';
  }    

  if (checkForWin() === true) {
    console.log('Player ' + (playerTurn === 'O'?'X':'O') + ' wins!');
    return true;
  }
}

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      if (checkForWin() === false) {
        getPrompt();
      }
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