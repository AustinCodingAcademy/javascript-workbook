'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const board = [
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

//Horizontal Win

function horizontalWin(boardSpot) {
  if(board[0][0] === board[0][1] && board[0][0] === board[0][2] && board[0][0] ===boardSpot) {
    return boardSpot;
  }
  if(board[1][0] === board[1][1] && board[1][0] === board[1][2] && board[1][1] ===boardSpot) {
    return boardSpot;
  }
  if(board[2][0] === board[2][1] && board[2][2] === board[2][0] && board[2][0] ===boardSpot) {
    return boardSpot;
  }
}

//Vertical Win

function verticalWin(boardSpot) {
  if(board[0][0] === board[1][0] && board[2][0] === board[0][0] && board[0][0] ===boardSpot) {
    return boardSpot;
  }
  if(board[0][1] === board[1][1] && board[2][1] === board[0][1] && board[0][1] ===boardSpot) {
    return boardSpot;
  }
  if(board[0][2] === board[1][2] && board[2][2] === board[0][2] && board[0][2] ===boardSpot) {
    return boardSpot;
  }
}

//Diagonal Win

function diagonalWin() {
  if(board[0][0] === board[1][1] && board[2][2] === board[0][0] && board[1][1] ===boardSpot) {
    return boardSpot;
  }
  if(board[0][2] === board[1][1] && board[0][2] === board[0][2] && board[1][1] ===boardSpot) {
    return boardSpot;
  }
}

function checkForWin() {

  //check for vertical win
  if(topleft === playerTurn && middleleft === playerTurn && bottomleft === playerTurn){
    //win
    console.log("player wins!");
  }

  if(topmiddle === playerTurn && middlemiddle === playerTurn && bottommiddle === playerTurn){
    //win
    console.log("player wins!");
  }
  //check for win
  if(topright === playerTurn && middleright === playerTurn && bottomright === playerTurn){

    console.log("player wins!");
  }
}

function ticTacToe(row, column) {

}

function getPrompt() {

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
