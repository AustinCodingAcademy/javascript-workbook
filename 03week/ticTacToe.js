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
let counter = '0';
function incrementCounter() {
  counter++
}
const catsScratch = () => counter === 9;

const resetBoard = () => {
  return [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ];
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
  const isValidInput = (row, column) => {
    const validInputs = [0, 1, 2];
    const isValid = validInputs.indexOf(row) > -1 && validInputs.indexOf(column) > -1
    return isValid
}

function verticalWin() {
  if (board[0][1] == 'X' && board[1][1] === 'X' && board[2][1] === 'X' ){
  return true;
  }
 else if (board[0][0] == 'X' && board[1][0] === 'X' && board[2][0] === 'X' ){
  return true;
 }
 else if (board[0][2] == 'X' && board[1][2] === 'X' && board[2][2] === 'X' ){
  return true;
 }

function diagonalWin() {
  if (board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === 'X' ){
  return true;
}
else if (board[0][0] === 'X' && board[1][1] === 'X' && board[2][0] === 'X' ){
return true;
}
function checkForWin() {
  if (diagonalWin() === true || verticalWin() === true || horizontalWin() === true) {
 return true;}
return false;
  
}

function ticTacToe(row, column) {
  if(!isValidInput(row, column)){
    return console.log('invalid entry, try again!')
  }

  if( playerTurn === 'X'){
   playerTurn = 'O';
  } else {
    playerTurn = 'X'
  }
}
function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      ticTacToe(parseInt(row), parseInt(column));
      getPrompt();
    });
  });
  function getPrompt() {
}



// Tests //    git push --set-upstream origin Tictactoe

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