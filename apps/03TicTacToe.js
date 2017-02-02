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

var playerTurn = "X";


function toggleTurn() {
  // changes the player's mark after each move. 
  playerTurn = (playerTurn === 'X') ? 'O' : 'X';
}



function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}
function checkForWin() {
  // All Win functions are inside this function.  
// if    (board[0][0] === playerTurn && board[0][1] === playerTurn && board[0][2] === playerTurn ||
//       board[1][0] === playerTurn && board[1][1] === playerTurn && board[1][2] === playerTurn ||
//       board[2][0] === playerTurn && board[2][1] === playerTurn && board[2][2] === playerTurn ||
//       board[0][0] === playerTurn && board[1][0] === playerTurn && board[2][0] === playerTurn ||
//       board[0][1] === playerTurn && board[1][1] === playerTurn && board[2][1] === playerTurn ||
//       board[0][2] === playerTurn && board[1][2] === playerTurn && board[2][2] === playerTurn ||
//       board[0][0] === playerTurn && board[1][0] === playerTurn && board[2][0] === playerTurn ||
//       board[0][1] === playerTurn && board[1][1] === playerTurn && board[2][1] === playerTurn ||
//       board[0][2] === playerTurn && board[1][2] === playerTurn && board[2][2] === playerTurn) {
//         return true;
//   }
//   else { 
//     return false;
//   }
if (horizontalWin() || verticalWin() || diagonalWin()) {
  return true;
}
}
      



function horizontalWin() {
  // This chunk checks to see if there is a win on any of the rows. 
  // Since this statement has a true/false if/else statement it doesn't need to be restated again. 
  if (board[0][0] === playerTurn && board[0][1] === playerTurn && board[0][2] === playerTurn ||
      board[1][0] === playerTurn && board[1][1] === playerTurn && board[1][2] === playerTurn ||
      board[2][0] === playerTurn && board[2][1] === playerTurn && board[2][2] === playerTurn) {
        return true;
  }
  else { 
    return false;
  }
  }

// This checks to see if the there is a win in the columns
function verticalWin() {
    if (board[0][0] === playerTurn && board[1][0] === playerTurn && board[2][0] === playerTurn ||
        board[0][1] === playerTurn && board[1][1] === playerTurn && board[2][1] === playerTurn ||
        board[0][2] === playerTurn && board[1][2] === playerTurn && board[2][2] === playerTurn) {
          return true;
  }
  else { 
    return false;
  }

}

function diagonalWin() {
      if (board[0][0] === playerTurn && board[1][1] === playerTurn && board[2][2] === playerTurn ||
          board[0][2] === playerTurn && board[1][1] === playerTurn && board[2][0] === playerTurn)  {
            return true;
  }
  else { 
    return false;
  }

}




function ticTacToe(row, column) {
  // Calls takes input from user and places it into row and column in the original board. 
  board[row][column] = playerTurn;
  // the next lines check for wins in the rows, columns and diagonals. 
  if (checkForWin() === true) {
    console.log("################################");
    console.log("################################");
    console.log("-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-");
    console.log( "Player" + " " + playerTurn + " " + "wins!");
    console.log("-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-");
    printBoard();
    console.log("-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-");
    console.log("################################");
    console.log("################################");
    
    board = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' ']
      ];

    // getPrompt();
  }
  else {
    console.log("Where to next?");
    toggleTurn();
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

  describe('#ticTacToe()', function () {
    it('should place mark on the board', function () {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', function () {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', function () {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', function () {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', function () {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', function () {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
