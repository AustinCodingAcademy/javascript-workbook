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

let winningCondition = ("" + playerTurn + "," + playerTurn + "," + playerTurn + "").toString();

let gameOver = false;


// change player from X to O after each turn
function changePlayer() {
  if (playerTurn === "X") {
    playerTurn = "O";
  } else {
    playerTurn = "X"
  };
};

function printBoard() {
  if (gameOver) {
    playerTurn = "X";
    board = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' ']
    ];
    gameOver = false;
  }
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}


function horizontalWin() {
  let rowTop = board[0].toString();
  let rowMid = board[1].toString();
  let rowBot = board[2].toString();
  if (rowTop === winningCondition || rowMid === winningCondition || rowBot === winningCondition) {
    return true;
  }
  return false;
};

function verticalWin() {
  let colLeft = (board[0][0] + "," + board[1][0] + "," + board[2][0]);
  let colMiddle = (board[0][1] + "," + board[1][1] + "," + board[2][1]);
  let colRight = (board[0][2] + "," + board[1][2] + "," + board[2][2]);
  if (colLeft === winningCondition || colMiddle === winningCondition || colRight === winningCondition) {
    return true;
  }
  return false;
}

function diagonalWin() {
  let leftDiag = (board[0][0] + "," + board[1][1] + "," + board[2][2]);
  let rightDaig = (board[0][2] + "," + board[1][1] + "," + board[2][0]);
  if (leftDiag === winningCondition || rightDaig === winningCondition) {
    return true;
  }
  return false;
}


function checkForWin() {
  if (horizontalWin() || verticalWin() || diagonalWin()) {
    printBoard();
    console.log("Winner!!");
    gameOver = true;
    return true;
  }
  return false;
};

function ticTacToe(row, column) {
  if ((row != "0" && row != "1" && row != "2") ||
    (column != "0" && column != "1" && column != "2")) {
    console.log("invalid move");
    return false;
  };
  board[row][column] = playerTurn;
  changePlayer();
  checkForWin();
};

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });
};




// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [
        [' ', ' ', ' '],
        [' ', 'X', ' '],
        [' ', ' ', ' ']
      ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [
        ['O', ' ', ' '],
        [' ', 'X', ' '],
        [' ', ' ', ' ']
      ]);
    });
    it('should check for vertical wins', () => {
      board = [
        [' ', 'X', ' '],
        [' ', 'X', ' '],
        [' ', 'X', ' ']
      ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [
        ['X', 'X', 'X'],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
      ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [
        ['X', ' ', ' '],
        [' ', 'X', ' '],
        [' ', ' ', 'X']
      ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}