'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function Checker(color) {
  if (color === 'white'){
    this.symbol = String.fromCharCode(0x125CB);
  }
  else{
    this.symbol = String.fromCharCode(0x125CF);
  }
}

function Board() {
  this.grid = [];
  this.checkers = [];

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
  //code here ------------
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
    //create an array of white checkers and their positions;
    for (var i = 0; i < whiteCheckers.length; i++) { // for (var position of whiteCheckers)
      var position = whiteCheckers[i];
      var whiteChecker = new Checker ('white');
      //assign a whiteChecker to grid at position[0,1]
      this.grid[position[0]][position[1]] = whiteChecker;
      this.checkers.push(whiteChecker);
    }
    //create an array of black checkers and their positions
    for (var i = 0; i < blackCheckers.length; i++) {
      var position = blackCheckers[i];
      var blackChecker = new Checker ('black');
      //assign a whiteChecker to grid at position[0,1]
      this.grid[position[0]][position[1]] = blackChecker;
      this.checkers.push(blackChecker);
    }
  };
  this.selectChecker = function(position) {
    return this.grid[position[0]][position[1]];
  };
  this.killChecker = function(position) {
    var checkerToKill = this.selectChecker(position);
    var indexOfChecker = this.checkers.indexOf(checkerToKill);
    if (checkerToKill !== null) {
      this.checkers.splice(indexOfChecker, 1);
      //find the index of 'position' in this.checkers[];
      this.grid[position[0]][position[1]] = null;
      //assign this position to null; in this.grid -> this.grid(position) = null;
    }
  }
}
function Game() {
  this.board = new Board();
  this.start = function() {
    this.board.createGrid();
    this.board.createCheckers();
  };
  this.moveChecker = function(start, end) {
    start = start.split("");
    end = end.split("");
    var checker = this.board.selectChecker(start);
    this.board.grid[start[0]][start[1]] = null;
    this.board.grid[end[0]][end[1]] = checker;
    var distance = Math.sqrt((parseInt(start[0]) + parseInt(end[0]))/2);
    var midRow = (parseInt(start[0]) + parseInt(end[0]))/2;
    var midColumn = (parseInt(start[1]) + parseInt(end[1]))/2;
    if (distance === 2) {
      var middle = [midRow, midColumn];
      game.board.killChecker(middle);

      //in the Game class, in the moveChecker method, after you have moved the checker, 
      //check to see if the distance of the start row and the end row is 2 by finding the 
      //absolute value of the difference between the rows. If so, which means you must have jumped a checker, 
      //find the killPostition by finding the midpoint between the start and end positions. Then killChecker.
    }
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
