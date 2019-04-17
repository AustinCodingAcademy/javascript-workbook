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
}

function markBoard(row, column) {
  board [row][column]= playerTurn;
  console.log("row",board[row]);
  console.log("column",board[column]);
}

function switchPlayer() {
if  ( playerTurn=="x"){
  playerTurn=="o";
}else if(playerTurn=="o"){
  playerTurn=="x";
}
}

function horizontalWin() {
  if ((board[0][0]===playerTurn) &&
    (board[0][1]===playerTurn) &&
    (board[0][2]===playerTurn)) {
      return true;
  } else if ((board[1][0]===playerTurn) &&
    (board[1][1]===playerTurn) && 
    (board[1][2]===playerTurn)) {
      return true;
  } else if ((board[2][0]===playerTurn) &&
    (board[2][1]===playerTurn) && 
    (board[2][2]===playerTurn)) {
      return true;
  }
}
function verticalWin() {
  if ((board[0][0]===playerTUrn) &&
  (board[1][0]===playerTurn) &&
  (board[2][0]===playerTurn)){
return true;
} else if ((board[0][1]===playerTurn) &&
(board[1][1]===playerTurn) && 
(board[2][1]===playerTurn)) {
  return true;
} else if ((board[0][2]===playerTurn) &&
(board[1][2]===playerTurn) && 
(board[2][2]===playerTurn)) {
  return true;
  } 
}

function diagonalWin() {
  if ((board[0][0]===playerTUrn) &&
  (board[1][1]===playerTurn) &&
  (board[2][2]===playerTurn)){
  return true;
  } else if ((board[0][2]===playerTurn) &&
    (board[1][1]===playerTurn) && 
    (board[2][0]===playerTurn)) {
      return true; 
  }
}

function checkForWin() {
  // console.log(board[1]);  
  
  // for(let i = 0; i < board.length; i++) {
  //   if(board[i][0] != "" &&
  //    board[i][0] == board[i][1] &&
  //    board[i][1] == board[i][2]) {
  //     console.log("rows: "+board[i][0]+""+board[i][1]+""+board[i][2]);
  //     return true;
  //   }      
  // }
  
  // for(let j = 0; j < board.length; j++) {
  //   if(board[0][j] != "" &&
  //    board[0][j] == board[1][j] &&
  //    board[1][j] == board[2][j]) {
  //     console.log("column: "+board[0][j]+""+board[1][j]+""+board[2][j]);
  //     return true;
  //   }
  // }
  
  // if(board[0][0] != "" &&
  //  board[0][0] == board[1][1] &&
  //  board[1][1] == board[2][2]) {
  //   console.log("diagonal1");
  //     return true;
  // }
  // if(board[0][2] != "" &&
  //  board[0][2] == board[1][1] && 
  //  board[1][1] == board[2][0]) {
  //   console.log("diagonal2");
  //     return true;
  // }
 
  // return false;
    if(horizontalWin()){
      return true; 
    }else if(verticalWin()){
      return true;
    } else if (diagonalWin()){
      return true;
    }
  }

function ticTacToe(row, column) {
  markBoard(row,column)
  checkForWin();
  switchPlayer();
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
