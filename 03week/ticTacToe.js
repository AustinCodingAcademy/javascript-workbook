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

// JavaScript
// function drawBoard()
// {
//     var parent = document.getElementById("game");
//     var counter = 1;

//     for (var i = 0; i < 3; i++)
//     {
//         var row = document.createElement("tr");

//         for(var x = 0; x < size; x++)
//         {
//             var col = document.createElement("td");
//             col.innerHTML = counter;

//             row.appendChild(col);
//         }
//         parent.appendChild(row);
//     }
// }'



function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

function horizontalWin() {
  // Your code here
  
if( board[0][0]==='X'&& board[0][1]==='X' && board [0][2]==='X') 
return true; 
else return false;
}

function verticalWin() {
  // Your code here
  if( board[0][1]==='X' && board[1][1]==='X' && board [2][1]==='X') 
return true;  
return false;
}



function diagonalWin() {
  // Your code here
  if( board[0][0]==='X' && board[1][1]==='X' && board [2][2]==='X') 
  return true; 
  return false;
  }


function checkForWin() {
  // Your code here
 if (diagonalWin() || horizontalWin() || verticalWin()) return true;
 return false;

}

//this function is checking to see if the space is empty
function empty(row,column){
  if (board[row][column]==' '){ 
    return true;
  } else { 
    return false;
  }
}

function ticTacToe(row, column) {
  // Your code here
  if (empty(row, column)){
    if (playerTurn ==='X'){
      board[row][column]='X';
      playerTurn = 'O';
    } else {
      board[row][column]='O';
      playerTurn= 'X';
    }    
  } else {
    console.log('already taking, please choose different space')
  }
}


//   if (playerTurn ==='X'){
//     if (empty(row, column)){ 
//       console.log('already taking, please choose different spot')
//     } else {
//         board[row][column]='X';
//         playerTurn = 'O';
//     }
//   } else{
//     if (board[row][column]!==' '){
//       console.log('already taking, please choose different spot');
//     } else {
        
//       }
//   }
// }
// checking for win!
function getPrompt() {
  if (checkForWin()){
    console.log('you win')
  } else{
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {

    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });
  }
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
    //our test
    it('should check for an empty spot', () => {
      board = [ [' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' '] ];
      ticTacToe(0, 0);
      assert.equal(empty(0, 0), false);
    });
    //
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
