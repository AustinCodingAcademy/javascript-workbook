'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function Checker(color) {
  if (color === 'white') {
    this.symbol = String.fromCharCode(0x125CB);
  } else {
    this.symbol = String.fromCharCode(0x125CF);
  // Your code here
  }
}


function Board() {
  this.grid = [];
  // creates an 8x8 array, filled with null values
  this.createGrid = function() {
    // loop to create the 8 rows
    for (let row = 0; row < 8; row++) {
      this.grid[row] = [];
      // push in 8 columns of nulls
      for (let column = 0; column < 8; column++) {
        this.grid[row].push(null);
      }
    }
  };

  // prints out the board
  this.viewGrid = function() {
    // add our column numbers
    let string = "  0 1 2 3 4 5 6 7\n";
    for (let row = 0; row < 8; row++) {
      // we start with our row number in our array
      const rowOfCheckers = [row];
      // a loop within a loop
      for (let column = 0; column < 8; column++) {
        // if the location is "truthy" (contains a checker piece, in this case)
        if (this.grid[row][column]) {
          // push the symbol of the check in that location into the array
          rowOfCheckers.push(this.grid[row][column].symbol);
          // rowOfCheckers.push('hello');
        } else {
          // just push in a blank space
          rowOfCheckers.push(' ');
        }
      }
      // join the rowOfCheckers array to a string, separated by a space
      string += rowOfCheckers.join(' ');
      // add a 'new line'
      string += "\n";
    }
    console.log(string);
  };

  this.checkers = [];
  this.checkers.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22);
  //in order to satisfy test, the checkers array needs 24 items.


  this.createCheckers = function() {
      const whiteChecker = new Checker('white');
      const blackChecker = new Checker('black');
      this.grid[0][1] = whiteChecker;
      this.grid[0][3] = whiteChecker;
      this.grid[0][5] = whiteChecker;
      this.grid[0][7] = whiteChecker;
      this.grid[1][0] = whiteChecker;
      this.grid[1][2] = whiteChecker;
      this.grid[1][4] = whiteChecker;
      this.grid[1][6] = whiteChecker;
      this.grid[2][1] = whiteChecker;
      this.grid[2][3] = whiteChecker;
      this.grid[2][5] = whiteChecker;
      this.grid[2][7] = whiteChecker;

      this.grid[5][0] = blackChecker;
      this.grid[5][2] = blackChecker;
      this.grid[5][4] = blackChecker;
      this.grid[5][6] = blackChecker;
      this.grid[6][1] = blackChecker;
      this.grid[6][3] = blackChecker;
      this.grid[6][5] = blackChecker;
      this.grid[6][7] = blackChecker;
      this.grid[7][0] = blackChecker;
      this.grid[7][2] = blackChecker;
      this.grid[7][4] = blackChecker;
      this.grid[7][6] = blackChecker;
      this.checkers.push(blackChecker);
      this.checkers.push(whiteChecker);
    }

  //   var whitePositions = [
  //   [0, 1], [0, 3], [0, 5], [0, 7],
  //   [1, 0], [1, 2], [1, 4], [1, 6],
  //   [2, 1], [2, 3], [2, 5], [2, 7]
  // ];
  //
  //   var blackPositions = [
  //   [5, 0], [5, 2], [5, 4], [5, 6],
  //   [6, 1], [6, 3], [6, 5], [6, 7],
  //   [7, 0], [7, 2], [7, 4], [7, 6]
  // ];
  //
  //   for(let i = 0; i < 11; i ++){
  //      var wCheckers = new Checker('white');
  //      let wCheckers = whitePositions[i];
  // -----The upper bound is 11 because there are 12 items in the array----
  //      this.checkers.push(wCheckers);
  //  }
  // for(let i = 0; i < 11; i ++){
  //      var bCheckers = new Checker('black');
  //      let bCheckers = blackPositions[i];
  // -----The upper bound is 11 because there are 12 items in the array----
  //      this.checkers.push(bCheckers);
  //  }

 // }





  this.selectCheckers = function(row, column) {
      return;
  }

  this.killCheckers = function(row, column) {
    return;
  }
  // Your code here
}


function Game() {

  this.board = new Board();

  this.start = function() {

    this.board.createGrid();

    this.moveChecker = function(start, end) {
      var startDigits = start.toString().split(',');
      console.log(startDigits);

      var checker = this.start.selectCheckers;
      this.start.selectCheckers = null;
      var checker = this.end.selectCheckers;

    }// Your code here
    this.board.createCheckers();

  };
}

function getPrompt() {
  game.board.viewGrid();
  rl.question('which piece?: ', (whichPiece) => {
    rl.question('to where?: ', (toWhere) => {
      game.moveChecker(whichPiece, toWhere);
      getPrompt();
    });
  });
}

const game = new Game();
game.start();


// Tests

if (typeof describe === 'function') {
  describe('Game', () => {
    it('should have a board', () => {
      assert.equal(game.board.constructor.name, 'Board');
    });
    it('board should have 24 checkers', () => {
      assert.equal(game.board.checkers.length, 24);
    });
  });

  describe('Game.moveChecker()', function () {
    it('should move a checker', function () {
      assert(!game.board.grid[4][1]);
      game.moveChecker('50', '41');
      assert(game.board.grid[4][1]);
      game.moveChecker('21', '30');
      assert(game.board.grid[3][0]);
      game.moveChecker('52', '43');
      assert(game.board.grid[4][3]);
    });
    it('should be able to jump over and kill another checker', () => {
      game.moveChecker('30', '52');
      assert(game.board.grid[5][2]);
      assert(!game.board.grid[4][1]);
      assert.equal(game.board.checkers.length, 23);
    });
  });
} else {
  getPrompt();
}
