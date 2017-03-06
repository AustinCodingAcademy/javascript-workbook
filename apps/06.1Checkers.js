'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Setting the symbols for each checker color
function Checker(color) {
  if (color === 'white') {
      this.symbol = String.fromCharCode(0x125CB);
  }
  if (color === 'black') {
      this.symbol = String.fromCharCode(0x125CF);
  }
}

function Board() {
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
  this.checkers = [];
  this.createCheckers = function() {
    var whiteCheckers = [
      [0, 1], [0, 3], [0, 5], [0, 7],
      [1, 0], [1, 2], [1, 4], [1, 6],
      [2, 1], [2, 3], [2, 5], [2, 7]
    ];
    var blackCheckers = [
      [5, 0], [5, 2], [5, 4], [5, 6],
      [6, 1], [6, 3], [6, 5], [6, 7],
      [7, 0], [7, 2], [7, 4], [7, 6]
    ];

    for(var spot of whiteCheckers) {
      // spot = an array [0][1]
      var row = spot[0];
      var column = spot[1];
      var whiteChecker = new Checker('white');
      this.grid[row][column] = whiteChecker;
      this.checkers.push(whiteChecker);
    };

    for(var spot of blackCheckers) {
      // spot = an array [0][1]
      var row = spot[0];
      var column = spot[1];
      var blackChecker = new Checker('black');
      this.grid[row][column] = blackChecker;
      this.checkers.push(blackChecker);
    };
  };
    // Help function for selecting checkers on board
  this.selectChecker = function (checkerPosition) {
    // Get the row and column indexes of the position passed in
    var row = checkerPosition[0];
    var column = checkerPosition[1];
    // Put the checker in the variable c
    var selectedChecker = this.grid[row][column];
    // Nullify the checker on board
    this.grid[row][column] = null;
    return selectedChecker;
  }
  this.killChecker = function (checkerPosition) {
    // Get the checker using the helper function
    var checkerForKill = this.selectChecker(checkerPosition);
    // Get the index of the checker to be killed
    var killPosition = this.checkers.indexOf(checkerForKill);
    // Remove the checker from the array
    this.checkers.splice(killPosition, 1);
    // Assign the checker's position on the grid to null
    this.grid[checkerPosition[0]][checkerPosition[1]] = null;
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

  // Your code here
}
function Game() {
  this.board = new Board();
  this.start = function() {
    this.board.createGrid();
    // Calls the creatCheckers() function and puts them on the board
    this.board.createCheckers();
  };
  this.moveChecker = (start,end) => {
    // Selects the checker and inserts it into the "checker" variable
    var checker = this.board.selectChecker(start);
    this.board.grid[end[0]][end[1]] = checker;
    if (Math.abs(end[0] - start[0]) === 2) {
      // Get the midpoint position by adding both coordinates up and divide the result by 2
      var killPosition = [(parseInt(end[0]) + parseInt(start[0])) / 2, (parseInt(end[1]) + parseInt(start[1])) / 2];
      // Kill the checker on board and from the array
      this.board.killChecker(killPosition);
    }
  }
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
