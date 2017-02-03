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

//  Your code here
  if ((board[0][0] === 'X' && board[0][1] === 'X' && board[0][2] === 'X' ) || (board[0][0] === 'O' && board[0][1] === 'O' && board[0][2] === 'O')) {
      console.log(playerTurn + " !!! WINS!!!    ...Resetting Game");

        return  board = [
          [' ', ' ', ' '],
          [' ', ' ', ' '],
          [' ', ' ', ' ']
        ];

  } else
  return false;
}

function verticalWin() {
        if  ((board[0][0] === 'X' && board[1][0] === 'X' && board[2][0] === 'X' )
          || (board[0][1] === 'X' && board[1][1] === 'X' && board[1][2] === 'X')
          || (board[0][2] === 'X' && board[1][2] === 'X' && board[2][2] === 'X')
          || (board[0][0] === 'O' && board[1][0] === 'O' && board[2][0] === 'O')
          || (board[0][1] === 'O' && board[1][1] === 'O' && board[1][2] === 'O')
          || (board[0][2] === 'O' && board[1][2] === 'O' && board[2][2] === 'O'))  {
      console.log(playerTurn + " !!! WINS!!!    ...Resetting Game.");

        return  board = [
          [' ', ' ', ' '],
          [' ', ' ', ' '],
          [' ', ' ', ' ']
        ];

  } else
  return false;
}

function diagonalWin() {
  // Your code here
  if  ((board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === 'X' )
    || (board[0][2] === 'X' && board[1][1] === 'X' && board[0][0] === 'X')
    || (board[0][0] === 'O' && board[1][1] === 'O' && board[2][2] === 'O')
    || (board[0][2] === 'O' && board[1][1] === 'O' && board[0][0] === 'O')) {
  console.log(playerTurn + " !!! WINS!!!    ...Resetting Game.");

  return  board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ];

} else
return false;
}

function checkForWin() {
  // Your code here
  console.log("run 1");
  horizontalWin();
  verticalWin();
  diagonalWin()
}

function ticTacToe(row, column) {
  // Your code here
    if (playerTurn === 'X'){
      board[row][column] = 'X';

        checkForWin();
        playerTurn = (playerTurn==='X') ? 'O':'X';
        //  playerTurn = 'O';
    } else {
      board[row][column] = 'O';
      checkForWin();
      //return playerTurn = 'X';
      playerTurn = (playerTurn==='O') ? 'X':'O';
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
