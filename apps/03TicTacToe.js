'use strict';


var clear = require("cli-clear");
var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var new_board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

var board = new_board;

function clearBoard() {
  for (var r = 0; r < 3; r++) {
    //col
    for (var c = 0; c < 3; c++) {
      board[r][c] = ' '; {
      }
    }
  }
}

var playerTurn = 'X';
clear();

function printBoard() {
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
  //row
  for (var r = 0; r < 3; r++) {
    var three_in_a_row = 0;
    //col
    for (var c = 0; c < 3; c++) {
      if (board[r][c] === playerTurn) {
        three_in_a_row++;
      }
      if (check_three_in_a_row(three_in_a_row)) {return true;}
    }
  }

}

function verticalWin() {
  //row
  for (var c = 0; c < 3; c++) {
    var three_in_a_row = 0;
    //col
    for (var r = 0; r < 3; r++) {
      if (board[r][c] === playerTurn) {
        three_in_a_row++;
      }
      if (check_three_in_a_row(three_in_a_row)) {return true;}
    }
  }
}

function diagonalWin() {
  //upper_left to bottom_right
  if (diagonalWin_upper_left_bottom_right()){return true;}
  else if (diagonalWin_bottom_left_upper_right()){return true;}
}


function diagonalWin_upper_left_bottom_right() {
  var three_in_a_row = 0;
  for (var r = 0; r < 3; r++) {
    var c = r;
    if (board[r][c] === playerTurn) {
      three_in_a_row++;
    }
    if (check_three_in_a_row(three_in_a_row)) {return true;}
  }
}

function diagonalWin_bottom_left_upper_right() {
  //row
  var three_in_a_row = 0;
  for (var r = 0; r < 3; r++) {
    var c = 2 - r;
    if (board[r][c] === playerTurn) {
      three_in_a_row++;
    }
      return check_three_in_a_row(three_in_a_row);
  }
}

function checkForWin() {
  clear();
  if (verticalWin()){return true;}
  else if (horizontalWin()){return true;}
  else if (diagonalWin()){return true;}
  else {return false;}
}

function ticTacToe(row, column) {
  //validate input
  clear();
  row = String(row);
  column = String(column);
  if ((['0', '1', '2'].indexOf(row) === -1) || (['0', '1', '2'].indexOf(column) === -1)) {
    console.log("["+row+"]"+"["+column+"]"+" is an invalid input.");
    console.log('Rows and columns can only be values 0, 1, or 2. Please enter a valid value.');
    return;
  }
  //check if space is taken
  if (board[row][column] !== ' ') {
    clear();
    console.log("["+row+"]"+"["+column+"]"+" is taken, try again.");
    return;
  }
  //updates the board
  else {
    board[row][column] = playerTurn;
  }

  if (checkForWin()){
    clearBoard();
    return true;}

  //changes Xs to Os
  playerTurn = (playerTurn === "X") ? "O" : "X";

}


function check_three_in_a_row(three_in_a_row) {
  if (three_in_a_row === 3) {
    printBoard();

    if (playerTurn === "X") {
      printXwins();
      return true;
    }
    else {
      printOwins();
      return true;
    }
  }
    else { return false;}

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


function printXwins () {
  console.log("");
  console.log("  ██╗  ██╗    ██╗    ██╗██╗███╗   ██╗███████╗    ██╗██╗██╗");
  console.log("  ╚██╗██╔╝    ██║    ██║██║████╗  ██║██╔════╝    ██║██║██║");
  console.log("   ╚███╔╝     ██║ █╗ ██║██║██╔██╗ ██║███████╗    ██║██║██║");
  console.log("   ██╔██╗     ██║███╗██║██║██║╚██╗██║╚════██║    ╚═╝╚═╝╚═╝");
  console.log("  ██╔╝ ██╗    ╚███╔███╔╝██║██║ ╚████║███████║    ██╗██╗██╗");
  console.log("  ╚═╝  ╚═╝     ╚══╝╚══╝ ╚═╝╚═╝  ╚═══╝╚══════╝    ╚═╝╚═╝╚═╝");
  console.log("");
}



function printOwins () {
  console.log("");
  console.log("  ██████╗     ██╗    ██╗██╗███╗   ██╗███████╗    ██╗██╗██╗");
  console.log(" ██╔═══██╗    ██║    ██║██║████╗  ██║██╔════╝    ██║██║██║");
  console.log(" ██║   ██║    ██║ █╗ ██║██║██╔██╗ ██║███████╗    ██║██║██║");
  console.log(" ██║   ██║    ██║███╗██║██║██║╚██╗██║╚════██║    ╚═╝╚═╝╚═╝");
  console.log(" ╚██████╔╝    ╚███╔███╔╝██║██║ ╚████║███████║    ██╗██╗██╗");
  console.log("  ╚═════╝      ╚══╝╚══╝ ╚═╝╚═╝  ╚═══╝╚══════╝    ╚═╝╚═╝╚═╝");
  console.log("");
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
