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

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
  
  if(checkForWin() === true){
    console.log("congrats");
  }
}
//should return true if the player won on any row
function horizontalWin() {
  // Your code here //use loop
  for(let i = 0; i <=2; i++){
  if(board[i][0] === 'X' && board[i][1] === 'X' && board[i][2]==='X'){
    return true;
   }else if(board[i][0] === 'O' && board[i][1]=== 'O' && board[i][2]=== 'O'){
    return true;
  }
  
}
}
//should return true, if the player won on any column
function verticalWin() {
  for(let i = 0; i <= 2; i++){
  if(board[0][i] ==='X' && board[1][i] ==='X' && board[2][i] === 'X'){
    return true;
  }else if(board[0][i] === 'O' && board[1][i] ==='O' && board[2][i] === 'O'){
    return true;
  }
  // Your code here //use loop
}
}
//should return true if the player won diagnol
function diagonalWin() {
  if(board[0][0]==='X' && board[1][1]==='X' && board[2][2]==='X'){
    return true;
  }else if(board[0][0]==='O' && board[1][1]==='O' && board[2][2]==='O'){
    return true;
  }else if(board[0][2]==='X' && board[1][1]==='X' && board[2][0]==='X'){
    return true;
  }else if(board[0][2]==='O' && board[1][1]==='O' && board[2][0]==='O'){
    return true;
  }else{
    return false;//????????
  }
  // Your code here
}
//should return true if any of the top three functions return true
function checkForWin() {
  //may need if/else if... 
 if (horizontalWin() ||  verticalWin() || diagonalWin()){
      return true;
 }else {
    return false;
 }
  // Your code here
}

function ticTacToe(row, column) {
  board[row][column] = playerTurn;
 if(playerTurn === 'X'){
    playerTurn = 'O';
  //then assign playerturn to O after X is assigned to a square
 }else {
    playerTurn = 'X';
 }
  // if playerturn O is found assign playerTurn to X

  // Your code here
//set the value on the box 
//check if the player won
//if they did (say congrats!!)
//switch out the variable for the other player

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
