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

//let rowWinConditions = 

//let colWinConditions =


let playerTurn = 'X';


function changePlayer() {
  if (playerTurn === "X") {
    playerTurn = "O";
  } else {
    playerTurn = "X"
  };
};
// change player from X to O after each turn


function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}


function horizontalWin() {
  if (board = [
      ['X', 'X', 'X'],
      [' ', ' ', ' '],
      [' ', ' ', ' ']
    ]) {
    return true;
  }
  console.log(checkForWin);
  // Your code here
  // check for x or o across the row




  console.log("checking for horizontal win conditions", horizontalWin());

  function verticalWin() {
    // Your code here
    if (board = [
        [' ', 'X', ' '],
        [' ', 'X', ' '],
        [' ', 'X', ' ']
      ]) {
      return true;
    }
    return false;
    console.log(verticalWin);

  }

  function diagonalWin() {
    // Your code here
  }

  function checkForWin() {
    if (verticalWin() === true) {
      return "Player Wins"
    }

  }

  function ticTacToe(row, column) {
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

  }



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