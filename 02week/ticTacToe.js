'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// creates and empty "board" for the user to see where marks can be placed.
// using let because the variable is expected to change with more 'X's and 'O's to add
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

// assigns the first mark as 'X'
// using let because the variable is expected to change from 'X' to 'O' and back
let playerTurn = 'X';

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

// ======================TickTacToe Notes ==============================
// return true if you have won, other wse return

// accept the row and column, the user wants to put a mark on ....
// place the approptiate mark on the borad
// check if they have won ?s
// if they have not won, and still open slots, do nothing
// else if they have not won, and thereare no open slots
// else it they have won, print out the winning players name and message
// make sure to switch the playerturn varialble before you return from the function (but after you print any message )


  // Your code here to check for horizontal wins
function horizontalWin() {
  // for(let i=0; i<=2; i++){
  //   if((board[i][0] == board[i][1]) && (board[i][1] == board [i][2]) && (board [i][0] !="")){
  //     return true;
  //   }
  // } return false
  for(let i=0; i<=2; i++){
    if(board[i][0] == playerTurn && board[i][1] == playerTurn && board [i][2] == playerTurn) {
      return true;
    }
  } return false
}

  // Your code here to check for vertical wins
function verticalWin() {
  // for(let i=0; i<=2; i++){
  //   if(board[0][i] == board[1][i] && board[1][i] == board [2][i] && board [0][i] !=""){
  //     return true;
  //   }
  // } return false;

    for(let i=0; i<=2; i++){
      if(board[0][i] == playerTurn && board[1][i] == playerTurn && board [2][i] == playerTurn) {
        return true;
      }
    } return false;
}

  // Your code here to check for diagonal wins
function diagonalWin() {
  // for(let i=0; i<=2; i++){
  //   if(board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[i][i] !=""){
  //     return true;
  //   }
  //   if(board[2][0] == board[1][1] && board[1][1] == board[0][2] && board[1][1] !=""){
  //     return true;
  //   }
  // } return false;

  for(let i=0; i<=2; i++){
    if(board[0][0] == playerTurn && board[1][1] == playerTurn && board[2][2] == playerTurn) {
      return true;
    }
    if(board[2][0] == playerTurn && board[1][1] == playerTurn && board[0][2] === playerTurn) {
      return true;
    }
  } return false;
}

  // ternary operator to cahnge marker
  // if it's an X make it an O, if O make it an X
  function changeMarker(){
    playerTurn = playerTurn === "O" ? "X":"O";
  }

  // Your code here call each of the check for typßes of wins
function checkForWin() {
  if(horizontalWin() || verticalWin() || diagonalWin()) {
    // console.log(horizontalWin(), verticalWin(), diagonalWin());
    console.log(`Player ${playerTurn} won!`)
    return true;
  } else {
    changeMarker();
    return false;
  }
}

  // Your code here to place a marker on the board, 
  // then check for a win
function ticTacToe(row, column) {
  board[row][column] = playerTurn;
  checkForWin();
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
