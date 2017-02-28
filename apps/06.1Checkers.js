'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function Checker(color) {
  if (color === 'white') {
    this.symbol = String.fromCharCode(0x125CB);
  };
  if (color === 'black') {
    this.symbol = String.fromCharCode(0x125CF);
  };
}

function Board() {
  // array to store checker pieces
  this.checkers = [];
  // method to create starting positions of the checkers on the grid
  this.createCheckers = function() {
    var whitePositions = [ 
      [0, 1], [0, 3], [0, 5], [0, 7],
      [1, 0], [1, 2], [1, 4], [1, 6], 
      [2, 1], [2, 3], [2, 5], [2, 7]
    ]

    var blackPositions = [
      [5, 0], [5, 2], [5, 4], [5, 6],
      [6, 1], [6, 3], [6, 5], [6, 7],
      [7, 0], [7, 2], [7, 4], [7, 6]
    ]

    // loop that will place white checkers on the board

    for (var spot of whitePositions) {
      // 'spot' is a place on the board
      // loop through whitePositions array and pick out each position
      var row = spot[0];
      var column = spot[1];
      // new Checker "whtChecker"
      var whtChecker = new Checker('white');
      // place whtChecker at each position on the white side of the grid
      this.grid[row][column] = whtChecker;
      this.checkers.push(whtChecker);
    };

    // loop that will place black checkers on the board

    for (var spot of blackPositions) {
      // 'spot' is a place on the board
      // loop through whitePositions array and pick out each position
      var row = spot[0];
      var column = spot[1];
      // new Checker "blkChecker"
      var blkChecker = new Checker('black');
      // place whtChecker at each position on the white side of the grid
      this.grid[row][column] = blkChecker;
      this.checkers.push(blkChecker);
    };

  }

  // method that will store the checker found at a specific spot on the grid
  this.selectChecker = function(row, column){
    return this.grid[row][column];
  }

  //method that will kill a checker

  this.killChecker = function(position) {
    // find the checker at the target position
    var targetChecker = position.selectChecker(row, column);
    // locate the index of the target checker in the checkers array
    var ripChecker = this.checkers[targetChecker];
  }

  // array for grid
  this.grid = [];
  // creates an 8x8 array, filled with null values
  this.createGrid = function() {
    // loop to create the 8 rows
    for (var row = 0; row < 8; row++) {
      this.grid[row] = [];
      // push in 8 columns of nulls
      for (var column = 0; column < 8; column++) {
        this.grid[row].push(null);
      }
    }
  };

  // prints out the board
  this.viewGrid = function() {
    // add our column numbers
    var string = "  0 1 2 3 4 5 6 7\n";
    for (var row = 0; row < 8; row++) {
      // we start with our row number in our array
      var rowOfCheckers = [row];
      // a loop within a loop
      for (var column = 0; column < 8; column++) {
        // if the location is "truthy" (contains a checker piece, in this case)
        if (this.grid[row][column]) {
          // push the symbol of the check in that location into the array
          rowOfCheckers.push(this.grid[row][column].symbol);
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
}

function Game() {

  this.board = new Board();

  this.start = function() {
    this.board.createGrid();
    this.board.createCheckers();
  };
  // method for moving a checker
  this.moveChecker = function(start, end) {
    // store user's input for desired starting position
    var sRow = start[0];
    var sColumn = start[1];
    // use selectChecker method to grab the checker at that position
    var checker = this.board.selectChecker(sRow, sColumn);
    // set that position to null
    this.board.grid[sRow][sColumn] = null;
    // store user's input for desired destination
    var eRow = end[0];
    var eColumn = end[1];
    // place the stored checker in that position
    this.board.grid[eRow][eColumn] = checker;
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

var game = new Game();
game.start();


// Tests

if (typeof describe === 'function') {
  describe('Game', function() {
    it('should have a board', function() {
      assert.equal(game.board.constructor.name, 'Board');
    });
    it('board should have 24 checkers', function() {
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
    it('should be able to jump over and kill another checker', function() {
      game.moveChecker('30', '52');
      assert(game.board.grid[5][2]);
      assert(!game.board.grid[4][1]);
      assert.equal(game.board.checkers.length, 23);
    });
  });
} else {
  getPrompt();
}
