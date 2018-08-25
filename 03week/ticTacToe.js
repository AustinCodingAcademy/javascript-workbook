
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

function horizontalWin() {
  for (i=0;board.length <=3; i++){
    const A = board[i][0];
    const B = board[i][1];
    const C = board[i][2];
    
    if(A != ' ' || B != ' ' || C != ' ')
    {
      if (A===B===C){
       return true;
     }
   }
  }
  return false;
}

function verticalWin() {
  for (i=0;board.length <=3; i++){
    const A = board[0][i];
    const B = board[1][i];
    const C = board[2][i];
    // const A = board[0][i];
    // const B = board[1][i];
    // const C = board[2][i];
    
    // const A = board[0][1];
    // const B = board[1][1];
    // const C = board[2][1];

    // const A = board[0][2];
    // const B = board[1][2];
    // const C = board[2][2];
    if(A != ' ' || B != ' ' || C != ' ')
    {
      if (A===B===C){
       return true;
     }
   }
  }
  return false;
}

function diagonalWin() {
  const A = board[0][0];
  const B = board[1][1];
  const C = board[2][2];
  const X = board[0][2];
  // const Y = board[1][1]; use contant B instead all values for win checked
  const Z = board[2][0];
  if(A != ' ' || B != ' ' || C != ' '){
    if (A===B===C){
      return true;
    }
  }
  if( B != ' ' || Z != ' '|| X != ' '){
    if (X===B===Z){
      return true;
    }
  }
  return false;
}


function checkForWin() {

  const horizResult = horizontalWin();
  const vertResult = verticalWin();
  const diagResult = diagonalWin();

  if (horizResult=== true || vertResult=== true || diagonalWin=== true)
  {
    console.log('Player' + playerTurn +  ' Wins!!')
  }
  return false;
}

function ticTacToe(row, column) {
  board[row][column] = playerTurn;
  const result = checkForWin();
  if(result == false)
  {
   if (playerTurn === 'O') {
     playerTurn = 'X'
   } else{
     playerTurn = 'O'
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
