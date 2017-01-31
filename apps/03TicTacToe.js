'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

var playerTurn = 'X';

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
  if ((board[0][0] === playerTurn && board[0][1] === playerTurn && board[0][2] === playerTurn) || (board[1][0] === playerTurn && board[1][1] === playerTurn && board[1][2] === playerTurn) || (board[2][0] === playerTurn && board[2][1] === playerTurn && board[2][2] === playerTurn))
    {
    return true;
    }
  else
    {
    return false;
    }
}

function verticalWin() {
  // Your code here
  if ((board[0][0] === playerTurn && board[1][0] === playerTurn && board[2][0] === playerTurn) || (board[0][1] === playerTurn && board[1][1] === playerTurn && board[2][1] === playerTurn) || (board[0][2] === playerTurn && board[1][2] === playerTurn && board[2][2] === playerTurn))
    {
    return true;
    }
  else
    {
    return false;
    }
}

function diagonalWin() {
  // Your code here
  if ((board[0][0] === playerTurn && board[1][1] === playerTurn && board[2][2] === playerTurn) || (board[0][2] === playerTurn && board[1][1] === playerTurn && board[2][0] === playerTurn))
    {
    return true;
    }
  else
    {
    return false;
    }
}

function checkForWin() {
  // Your code here
  if (horizontalWin() || verticalWin() || diagonalWin())
    {
    //Print the win message.
    var totalTimesToLoop = 8;
    var currentTimesToLoop = totalTimesToLoop;
    var printedBoard = false;
    var winString = 'HOLY CRAP PLAYER ' + playerTurn + ' WON!!!!!'
    console.log('///////////////////////////');
    while (currentTimesToLoop>0)
      {
      console.log(winString);
      currentTimesToLoop=currentTimesToLoop-1;

      if (printedBoard===false && (currentTimesToLoop<=(totalTimesToLoop/2)))
        {
        printedBoard=true;
        printBoard();
        }
      }
    console.log('///////////////////////////');
    console.log('Resetting the board')

    //Reset the board.
    board = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' ']
    ];

    //Reset the player turn to X. X Always starts a new game.
    playerTurn='X';
    return true;
    }
  else
    {
    //There were no wins, just go to the next turn.
    playerTurn = (playerTurn === 'X') ? 'O' : 'X';
    return false;
    }
}

function ticTacToe(row, column) {
  // Your code here
  row=row.toString();
  column=column.toString();
  if ((row==='0' || row==='1' || row==='2') && (column==='0' || column==='1' || column==='2'))
    {
      //I entered a valid number. 
      //Check if the slot is valid too.
      if (board[row][column]===' ')
        {
        //This spot is empty, it is a valid spot to choose.
        board[row][column] = playerTurn;

        checkForWin();
        }
      else
        {
        console.log('//////////////////////////////////////////////////');
        console.log('Sorry, this spot is already taken. Choose another.');
        console.log('//////////////////////////////////////////////////');
        }
    }
  else  
    {
    console.log('///////////////////////////////////////////////////////');
    console.log('I dont understand. Use 0, 1, or 2 for columns and rows.');
    console.log('///////////////////////////////////////////////////////');
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

  describe('#ticTacToe()', function () {
    it('should place mark on the board', function () {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', function () {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', function () {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', function () {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', function () {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', function () {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
