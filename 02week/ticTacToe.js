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


function checkPlacement(r, c) {
if (board[r][c] != ' '){
  console.log('Invalid Row/Column');
  return true;
}

}


function horizontalWin() {
  // // Your code here
  // for(let x = 0; x < 4; x++){
  //   for(let y = 0; y <  4; y++) {
  //     if (board[x][y] == playerTurn) {
        
  //     }
  //   }
  // }

  if ((board[0][0] == playerTurn && board[0][1] == playerTurn && board[0][2] == playerTurn) ||
    (board[1][0] == playerTurn && board[1][1] == playerTurn && board[1][2] == playerTurn) ||
    (board[2][0] == playerTurn && board[2][1] == playerTurn && board[2][2] == playerTurn)) {
      return true;
  }


 }

function verticalWin() {
  // Your code here
  if ((board[0][0] == playerTurn && board[1][0] == playerTurn && board[2][0] == playerTurn) ||
    (board[0][1] == playerTurn && board[1][1] == playerTurn && board[2][1] == playerTurn) ||
    (board[0][2] == playerTurn && board[1][2] == playerTurn && board[2][2] == playerTurn)) {
      return true;
  }
}

function diagonalWin() {
  // Your code here
  if ( (board[0][0] == playerTurn && board[1][1] == playerTurn && board[2][2] == playerTurn) ||
     (board[2][0] == playerTurn && board[1][1] == playerTurn && board[0][2] == playerTurn)) {
      return true;
    }
}

function checkForWin() {
  // Your code here
  let HW = horizontalWin();
  if (HW === true) {
    // document.write(playerTurn + ' Wins!')
    console.log(playerTurn + ' Wins!');
    console.log(' ');

    // let board = [
    //   [' ', ' ', ' '],
    //   [' ', ' ', ' '],
    //   [' ', ' ', ' ']
    // ];

  }
  let VW = verticalWin();
  if (VW === true) {
    // document.write(playerTurn + ' Wins!')
    console.log(playerTurn + ' Wins!');
    console.log(' ');
  }


  let DW = diagonalWin();
  if (DW === true) {
    // document.write(playerTurn + ' Wins!')
    console.log(' ');
    console.log(playerTurn + ' Wins!');
    console.log(' ');
  }
}

function ticTacToe(row, column) {
  // Your code here
  let CP = checkPlacement(row, column)
  if (CP != true) {
    board[row][column] = playerTurn;
    checkForWin();
    playerTurn = switchPlayer(playerTurn);
  }

  

}

function switchPlayer(XO){
  if (XO == 'X') {
    return 'O';
  }
  else if (XO == 'O') {
    return 'X';
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

