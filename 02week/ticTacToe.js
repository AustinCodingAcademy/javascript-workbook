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
  console.log('\n   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}


//Check for horizontal win
function horizontalWin() {
  for (var i = 0; i < 3; i++) {
    if (board[i].join('') === 'XXX' || board[i].join('') === 'OOO') {
      console.log(`Player ${board[i][0]} wins!`);
      return true;
    }
  }
}

//Check for vertical win
function verticalWin() {
  let vertCheck;
  for (var i = 0; i < 3; i++) {
    //Reset vertCheck to blank
    vertCheck = '';
    for (var x = 0; x < 3; x++) {
      vertCheck = vertCheck + board[x][i];
    }
    if (vertCheck === 'XXX' || vertCheck === 'OOO') {
      console.log(`\nPlayer ${vertCheck.charAt(0)} wins!`);
      return true;
    }
  }
}

//Check for diagonal win
function diagonalWin() {
  //Set upLeft = to string of upper left to lower right
  let upLeft = board[0][0] + board[1][1] + board[2][2];
  //Set upRight = to string of upper right to lower left
  let upRight = board[0][2] + board[1][1] + board[2][0];
  //Check if upLeft or upRight are xxx or OOO
  if (
    upLeft === 'XXX' || upLeft === 'OOO' ||
    upRight === 'XXX' || upRight === 'OOO'
  ) {
    //Log player win
    console.log(`\nPlayer ${board[1][1]} wins!`);
    return true;
  }
}

//Runs all directional win checks
function checkForWin() {
  if (
    horizontalWin() === true ||
    verticalWin() === true ||
    diagonalWin() === true
  ) {
    return true;
  }
}

//Main TTT function
function ticTacToe(row, column) {
  if (board[row][column] === ' ') {
    board[row][column] = playerTurn;
    playerTurn = (playerTurn==='X'?'O':'X');
    checkForWin();
  } else {
    console.log('\nInvalid location!');
  }
}

function getPrompt() {
  printBoard();
  console.log("\nIt's player " + playerTurn + "'s turn.");
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
