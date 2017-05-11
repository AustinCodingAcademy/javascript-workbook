
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

//horizontal win logic
function horizontalWin() {
  // Your code here
  if( (board[0][0] === playerTurn && board[0][1] === playerTurn && board[0][2] === playerTurn) || (board[1][0] === playerTurn &&
   board[1][1] === playerTurn && board[1][2] === playerTurn) || (board[2][0] === playerTurn && board[2][1] === playerTurn && board[2][2] === playerTurn)){

    return true;

  }
}

//vertical win logic
function verticalWin() {
  // Your code here
  if( (board[0][0] === playerTurn && board[1][0] === playerTurn && board[2][0] === playerTurn) || (board[0][1] === playerTurn &&
   board[1][1] === playerTurn && board[2][1] === playerTurn) || (board[0][2] === playerTurn && board[1][2] === playerTurn && board[2][2] === playerTurn)){

    return true;

  }
}

//diagnol win logic
function diagonalWin() {
  // Your code here
  if( (board[0][0] === playerTurn && board[1][1] === playerTurn && board[2][2] === playerTurn) || (board[2][0] === playerTurn &&
   board[1][1] === playerTurn && board[0][2])){

    return true;
  }
}

//checking for all the wins
function checkForWin() {
  // trying to sort out the end of game function with option to play again, reset board....
  if((horizontalWin()) || (verticalWin()) || (diagonalWin()) ){
    console.log('\n'+ playerTurn + ' Wins');
    console.log('Would you like to play again?');
    rl.question('y/n',(again) => {
      if(playAgain(again)){
        resetBoard();
        playerTurn = 'X';
        getPrompt();
      }
      else{
        console.log('Goodbye');
        process.exit(0);
      }
      return true;
    })
  }
}
//Play again option

function playAgain(again){
  if(again.toLowerCase() !=='y'){
    return false;
  }
  else{
    return true;
  }
}

function resetBoard(){
  board = [[],[]];
}

//need to sort out the 'play again' function, perhaps separate it.

//getting the move and win check method
function ticTacToe(row, column) {
  board[row][column] = playerTurn;
  printBoard();
  checkForWin();
  playerTurn = (playerTurn === 'X') ?  'O' : 'X';
}

  // rl.question('Y/N', (again) => {
      //
    // }
    //   else{
    //     console.log('Goodbye');
    //   }





//prompt and move input
function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);

      getPrompt();

    })
  })

}
getPrompt();
//Tests

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
}
