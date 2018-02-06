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
let rowZero = board[0]
let rowOne = board[1]
let rowTwo = board[2]

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
};

function horizontalWin() {


  if ((rowZero[0] == playerTurn && rowZero[1] == playerTurn && rowZero[2] == playerTurn) ||
    (rowOne[0] == playerTurn && rowOne[1] == playerTurn && rowOne[2] == playerTurn) ||
    (rowTwo[0] == playerTurn && rowTwo[1] == playerTurn && rowTwo[2] == playerTurn)){
    console.log(`${playerTurn} wins!`)
  }

};

function verticalWin() {

  if ((rowZero[0] === playerTurn && rowOne[0] === playerTurn && rowTwo[0] === playerTurn) ||
    (rowZero[1] === playerTurn && rowOne[1] === playerTurn && rowTwo[1] === playerTurn) ||
    (rowZero[2] === playerTurn && rowOne[2] === playerTurn && rowTwo[2] === playerTurn)) {
    console.log(`${playerTurn} wins!`)
  }
};

function diagonalWin() {

  if ((rowZero[0] === playerTurn && rowOne[1] === playerTurn && rowTwo[2] === playerTurn) ||
    (rowZero[2] === playerTurn && rowOne[1] === playerTurn && rowTwo[0] === playerTurn)) {
    console.log(`${playerTurn} wins!`)
  }
};

function checkForWin() {
  horizontalWin();
  verticalWin();
  diagonalWin();
};

function switchPlayerTurn() {

  if (playerTurn === 'X'){
    playerTurn = 'O'
  } else {
    playerTurn = 'X'
  }
};

function ticTacToe(row, column) {


  if (row == 0) {
    rowZero.splice(column, 1, playerTurn)
  } else if (row == 1){
    rowOne.splice(column, 1, playerTurn)
  } else if (row == 2){
    rowTwo.splice(column, 1, playerTurn)
  }

  checkForWin();
  switchPlayerTurn();

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
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), console.log(`${playerTurn} wins!`));
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), console.log(`${playerTurn} wins!`));
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(),  console.log(`${playerTurn} wins!`));
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), console.log(`${playerTurn} wins!`));
    });
  });
} else {

  getPrompt();

}
