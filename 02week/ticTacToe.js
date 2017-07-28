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
//code here
function horizontalWin() {
  return board[0].every(square => square === playerTurn) || board[1].every(square => square === playerTurn) || board[2].every(square => square === playerTurn);
}

function verticalWin() {
  return [board[0][0], board[1][0], board[2][0]].every(square => square === playerTurn) || [board[0][1], board[1][1], board[2][1]].every(square => square === playerTurn) || [board[0][2], board[1][2], board[2][2]].every(square => square === playerTurn);
}

function diagonalWin() {
  return [board[0][0], board[1][1], board[2][2]].every(square => square === playerTurn) || [board[0][2], board[1][1], board[2][0]].every(square => square === playerTurn);
}

function checkForWin() {
  if (horizontalWin()) {
    printBoard();
    console.log(`Congratulations player ${playerTurn}.  You won on the horizontal!`);
    return true;
  } else if (verticalWin()) {
    printBoard();
    console.log(`Congratulations player ${playerTurn}.  You won on the vertical!`);
    return true;
  } else if (diagonalWin()) {
    printBoard();
    console.log(`Congratulations player ${playerTurn}.  You won on the diagonal!`);
    return true;
  }
  return false;
}

function ticTacToe(row, column) {

  const validValue = (myIndex) => {
    const valuesArr = [0,1,2];
    return valuesArr.some(validIndex => myIndex == validIndex);
  }

  if (validValue(row) && validValue(column)) {
    if (!board[row][column].trim() ) {
      board[row][column] = playerTurn;

      if (!checkForWin()) {
        if (playerTurn === 'X') {
          playerTurn = 'O';
        } else {
          playerTurn = 'X';
        }
        return false;
      } else {
        console.log(`The winner is player ${playerTurn}.  Start a new game`);
        return true;
      }
    } else {
      console.log('Please choose another square!  That one is taken!');
    }
  } else {
    console.log('Please enter a valid index.  Valid values are 0, 1, 2');
  }
}

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      if (!ticTacToe(row, column)) {
        getPrompt();
      } else {
        process.exit(0);
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
