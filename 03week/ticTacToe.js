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
/*  - Create player X and player O (already completed)
    - Create board (already completed)
    - Whiteboard all possible wins. There are 8 possible ways to win on the board.
    - Write if statements for each possible line that will win.  Horizontal, vertical and diagonal.
    - Check for wins each time playerTurn.
    - Return win for the playerTurn that hits a possible win function
    - Reset board after win.  */
function horizontalWin() {
  // Function for each horizontal line to show winner for either playerTurn
  if (board[0][0] === board[0][1] && board[0][0] === board[0][2]) { // row 0 matches colum 0,1,2 wins
    console.log(playerTurn + " Won!!!");
  }
  if (board[1][0] === board[1][1] && board[1][0] === board[1][2]) {  // row 1 matches colum 0,1,2 wins
    console.log(playerTurn + " Won!!!");
  }
  if (board[2][0] === board[2][1] && board[2][0] === board[2][2]) { // row 2 matches colum 0,1,2 wins
    console.log(playerTurn + " Won!!!");
  }
}

function verticalWin() {
  // Function for each vertical line shows the winner for either playerTurn
  if (board[0][0] === board[1][0] && board[0][0] === board[2][0]) { // column 0 matches rows 0,1,2 wins
    console.log(playerTurn + " Won!!!");
  }
  if (board[0][1] === board[1][1] && board[0][1] === board[2][1]) { // column 1 matches rows 0,1,2 wins
    console.log(playerTurn + " Won!!!");
  }
  if (board[0][2] === board[1][2] && board[0][2] === board[2][2]) { // column 2 matches rows 0,1,2 wins
    console.log(playerTurn + " Won!!!");
  }
}

function diagonalWin() {
  // Function for each diagonal line shows the winner for either playerTurn
  if (board[0][0] === board[1][1] && board[0][0] === board[2][2]) {  // diagonal winner for either playerTurn
    console.log(playerTurn + " Won!!!");
  }
  if (board[0][2] === board[1][1] && board[0][2] === board[2][0]) { // diagonal winner for either playerTurn
    console.log(playerTurn + " Won!!!");
  }
}

function checkForWin() {
  // Verify win based on the functions in the parameter.
  if (diagonalWin() || verticalWin() || horizontalWin()) {
    return board.reset();
 }
}

function ticTacToe(row, column) {
  // Function for playerTurn and checkForWin.
  board[row][column] = playerTurn;
  checkForWin();
  if (playerTurn === 'X'){ // playerTurn starts with X
    return playerTurn = 'O'; // next move will switch to playerTurn O
    }
  else {
    playerTurn = 'X'; //switch to playerTurn X
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
