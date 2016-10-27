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

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

function horizontalWin() {
  if (board[0][0] === playerTurn && board[0][1] === playerTurn && board[0][2] === playerTurn) {
    console.log("horizontalWin");
    return true;
  } else if (board[1][0] === playerTurn && board[1][1] === playerTurn && board[1][2] === playerTurn) {
    console.log("horizontalWin");
    return true;
  } else if (board[2][0] === playerTurn && board[2][1] === playerTurn && board[2][2] === playerTurn) {
    console.log("horizontalWin");
    return true;
  }
}

function verticalWin() {
  if (board[0][0] === playerTurn && board[1][0] === playerTurn && board[2][0] === playerTurn) {
    console.log("verticalWin");
    return true;
  } else if (board[0][1] === playerTurn && board[1][1] === playerTurn && board[2][1] === playerTurn) {
    console.log("verticalWin");
    return true;
  } else if (board[0][2] === playerTurn && board[1][2] === playerTurn && board[2][2] === playerTurn) {
    console.log("verticalWin");
    return true;
  }
}

function diagonalWin() {
  if (board[0][0] === playerTurn && board[1][1] === playerTurn && board[2][2] === playerTurn) {
    console.log('diagonalWin');
    return true;
  } else if (board[0][2] === playerTurn && board[1][1] === playerTurn && board[2][0] === playerTurn) {
    console.log('diagonalWin');
    return true;
  }
}

function checkForWin() {
  if (diagonalWin() || verticalWin() || horizontalWin()) {
    console.log("Player " + playerTurn + " wins!");
    return true;
  }
}
/*function checkForTie() {

  var playerTurns = 0;

  for(var i = 0; i < playerTurns.length; i++) {
    playerTurns = playerTurns++
    console.log(playerTurns);
    console.log(board.length);
  }

  if (board.length > playerTurns) {
    console.log('Game is Tied');
    return true;
  }
}*/
function ticTacToe(row, column) {

  //var acceptable = {'undefined': 1, 'boolean'L 1}
  // check whether the input has already been entered 
  board[row][column] = playerTurn;
  playerTurn = (playerTurn === 'X') ? 'O' : 'X';
    
  /*if (row !== '0' && row !== '1' && row !== '2')  {
    console.log("Please enter a valid input");
  } else {
    board[row][column] = playerTurn;
    playerTurn = (playerTurn === 'X') ? 'O' : 'X';
    checkForWin();*/
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
