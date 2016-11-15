'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function Checker(color) {
  // Spec 1
  // pass in the color as an argument...
  // A Checker piece has one concern, its symbol.
  // The symbol that is assigned is based on what color ('white' or 'black') the checker will be.

  var symbol = this.symbol;
  // and set the Checker instance's this.symbol...

  function CharCode() {
  // Used unicode characters with the JavaScript String.fromCharCode(0x1<unicode>) method (function).

    // if the color is 'white', set this.symbol equal to String.fromCharCode(0x125CB),
    // otherwise set it equal to String.fromCharCode(0x125CF)...
    if (color = 'white') {
      this.symbol = String.fromCharCode(0x125CB);
      } else {
        this.symbol = String.fromCharCode(0x125CF);
      }
  }

}


function Board() {
  this.grid = [];
  // creates an 8x8 array, filled with null values
  // this.grid [] will hold the Checker instances (i.e., the pieces)
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

  // Spec 2.1
  // in your Board class, create an attribute called this.checkers and assign it to an empty array...
  // this will be your repository of checker pieces...
  this.checkers = [];

  this.createCheckers = function() {
    // created a method called this.createCheckers...

    // in it (the function), defined our starting positions of the checkers on the grid...
    // in local variables, define whitePositions and blackPositions as array of [row, column] coordinates:...
    var whitePositions = [row, column];
    var blackPositions = [row, column];
  }

  // Spec 2.1
  // in a for loop, iterate over the range from 0 - 11, with each index you want to:...
  // instantiate a 'white' Checker...
  // place that checker on the grid at the position corresponding with the index in the positions array...
  // push the checker into your this.checkers array...

  var whiteChecker = whitePositions;

  for (var i = 0; i < 12; i++) {
    this.checkers = [];
    this.positions = [];
    this.grid = this.positions[i];
    whiteChecker.push(this.checkers[i]);
  }

  // do all three steps above for a 'black' checker...
  var blackChecker = blackPositions;

  for (var i = 0; i < 12; i++) {
    this.checkers = [];
    this.positions = [];
    this.grid = this.positions[i];
    blackChecker.push(this.checkers[i]);
  }

}


function Game() {
// Tests Game
// 1) should have a board
// 2) board should have 24 checkers

// Tests Game.moveChecker()
// 3) should move a checker
// 4) should be able to jump over and kill another checker

  this.board = new Board();

  this.start = function() {
    this.board.createGrid();
    // Your code here

    // Spec 2.1 - In your Game class, in the this.start method (function), added this.board.createCheckers().
    this.board.createCheckers()
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
