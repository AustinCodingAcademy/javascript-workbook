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

let playerTurn  = 'X';

function arrayEqual(arr1, arr2) {
  if(arr1.length !== arr2.length)
      return false;
  for(var i=0; i<arr1.length; i++) {
      if(arr1[i] !== arr2[i])
          return false;
  }
  return true;
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
  const winCombination1 = ['X','X','X'];
  const winCombination2 = ['O','O','O'];
  for(let j=0;j<board.length;j++){
    if(arrayEqual(board[j],winCombination1) || arrayEqual(board[j],winCombination2))
      return true;
  };
  return false;
}

function diagonalWin() {
  const winCombination1 = ['X','X','X'];
  const winCombination2 = ['O','O','O'];
  const diag1 = board.map((value,index) => value[index]);
  const diag2 = board.map((value,index) => value[2-index]);
  if(arrayEqual(diag1,winCombination1) || arrayEqual(diag1,winCombination2) ||
     arrayEqual(diag2,winCombination1) || arrayEqual(diag2,winCombination2))
     return true;

  return false;
}

function verticalWin() {
  const winCombination1 = ['X','X','X'];
  const winCombination2 = ['O','O','O'];
  const col1 = board.map((value,index) => value[0]);
  const col2 = board.map((value,index) => value[1]);
  const col3 = board.map((value,index) => value[2]);

  if(arrayEqual(col1,winCombination1) || arrayEqual(col2,winCombination1) ||
     arrayEqual(col3,winCombination1))
      return true;
  else if(arrayEqual(col1,winCombination2) || arrayEqual(col2,winCombination2) ||
      arrayEqual(col3,winCombination2))
       return true;
  else
      return false;

}

function checkForWin() {
  const isHorizontalWin = horizontalWin();
  const isVerticalWin   = verticalWin();
  const isDiagonalWin   = diagonalWin();
  if(isHorizontalWin || isVerticalWin || isDiagonalWin)
  {
    console.log("Player",playerTurn,"Won!!");
    console.log('resetting...');
    board = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' ']
    ];
    playerTurn = 'X';
    return false;
  }
  else
  {
    return true;
  }
}

function ticTacToe(row, column) {
  // Your code here
  if((row < 0 || row > 2) &&
     (column <0 || column > 2))
    console.log('Invalid input. Row/Column does not exist...');
  else if(board[row][column] != ' ')
    console.log("Invalid entry. Block already used. Try another...");
  else{
    board[row][column] = playerTurn;
    if(checkForWin())
    {
        if(playerTurn == 'X')
          playerTurn = 'O';
        else
          playerTurn = 'X';   
    }
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


