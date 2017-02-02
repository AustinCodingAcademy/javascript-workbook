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

var playerTurn = 'X';
var detectWin = false;
var detectTie = false;

function reset() {
  //clear the board
  board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];
 //reset the win and tie values
 detectWin = false;
 detectTie = false;
 console.log("\nNew Game! Please enter a value.");
}

function togglePlayerTurn() {
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

function horizontalWin() {
   //check for horizontal win
  if ((board [0][0] === playerTurn) && (board [0][1] === playerTurn) && (board [0][2] === playerTurn)) {
    return true;
  }
  if ((board [1][0] === playerTurn) && (board [1][1] === playerTurn) && (board [1][2] === playerTurn)) {
    return true;
  }
  if ((board [2][0] === playerTurn) && (board [2][1] === playerTurn) && (board [2][2] === playerTurn)) {
    return true;
  }
}

function verticalWin() {
  //check for vertical win
  if ((board [0][0] === playerTurn) && (board [1][0] === playerTurn) && (board [2][0] === playerTurn)) {
    return true;
  }
  if ((board [0][1] === playerTurn) && (board [1][1] === playerTurn) && (board [2][1] === playerTurn)) {
    return true;
  }
  if ((board [0][2] === playerTurn) && (board [1][2] === playerTurn) && (board [2][2] === playerTurn)) {
    return true;
  }
}

function diagonalWin() {
  //check for diagonal win
  if ((board [0][0] === playerTurn) && (board [1][1] === playerTurn) && (board [2][2] === playerTurn)) {
    return true;
  }
  if ((board [0][2] === playerTurn) && (board [1][1] === playerTurn) && (board [2][0] === playerTurn)) {
    return true;
  }
}

function checkForWin() {
  if (horizontalWin() || verticalWin() || diagonalWin()) {
    console.log('Player ' + playerTurn + ' Won!');
    detectWin = true;
    return true;
  }
}

function checkForTie() {
  var count = 0;
  for (var i=0;i<3;i++) {
    for (var j=0;j<3;j++) {
      if (board[i][j] !== ' ') {
        count += 1;
      }
    }
  }
  if (count === 9) {
      console.log("It's a tie! New Game has started.");
      detectTie = true;
  }
}


function ticTacToe(row, column) {
  //check duplicate
  // if ((board[row][column] === "O") || (board[row][column] === "X")) { 
  if (board[row][column]!== ' ') {
  console.log("Spot already taken!!! Please restart.");
  } else {
  //put the turn on the board
   board[row][column] = playerTurn;
  //check for win
  checkForWin();
  //check for tie 
  checkForTie();
  //switch the players
  togglePlayerTurn();
  }
}

function getPrompt() {
  printBoard();
  if (detectWin === false) {
    if (detectTie === false) {
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
    });} else {
      reset();
      getPrompt();
    }
  } else {
    reset();
    getPrompt();
  }
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
