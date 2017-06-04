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
    // If 3 in a row && NOT null, return true.
    if ((board[i][0] === board[i][1] && board[i][0] === board[i][2]) && (board[i][0] !== ' ')) {
      return true;
    }
  }
  
}

function verticalWin() {
  //outer loop check each column
  for (var i = 0; i < 3; i++) {
    //If 3 in a column && NOT null, return true.
    if ((board[0][i] === board[1][i] && board[0][i] === board[2][i]) && (board[0][i] !== ' ')) {
      return true;
    }
  }
}

function diagonalWin() {
  // check for diagonal win
  if (board[1][1] === ' ') return false;

  if ((board[0][0] === board[1][1] && board[0][0] === board[2][2]) ||
    (board[2][0] === board[1][1] && board[2][0] === board[0][2])) {
    return true;
  }
}

function checkForWin() {
  //call 3 different directional functions to check if player has won
  if (horizontalWin() || verticalWin() || diagonalWin()) return true;
}

function rowValValid(r) {
  if (r === '0' || r === '1' || r === '2' || r === 0 || r === 1 || r === 2) return true;
}

function colValValid(c) {
  if (c === '0' || c === '1' || c === '2' || c === 0 || c === 1 || c === 2) return true;

}

function ticTacToe(row, column) {
  //Verify 0, 1, or 2 only
  if (rowValValid(row) && colValValid(column)) {
  //if cell taken, ask again; if not, place 'X' or 'O'
    if (board[row][column] === ' ') {
      board[row][column] = playerTurn;
      //If winning combo, print win, and exit game
      if (checkForWin()) {
        console.log(`${playerTurn} wins!`);
        printBoard();
        process.exit();
      };
      //Toggle player
      playerTurn = (playerTurn === 'X') ? 'O' : 'X';
    } else {
      console.log('Sorry, that space is taken');
    }
  } else {
    console.log('You must type 0 1 or 2 only');
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
