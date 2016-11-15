'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function Checker(color) {
  // Your code here
  if (color === 'white') {
    this.symbol = String.fromCharCode(0x125CB);
  } else {
    this.symbol = String.fromCharCode(0x125CF);
  }
}

function Board() {
  this.checkers =[];
  this.createCheckers = function() {
    var whitePositions = [
      [0, 1], [0, 3], [0, 5], [0, 7],
      [1, 0], [1, 2], [1, 4], [1, 6],
      [2, 1], [2, 3], [2, 5], [2, 7]
    ];
    var blackPositions = [
      [5, 0], [5, 2], [5, 4], [5, 6],
      [6, 1], [6, 3], [6, 5], [6, 7],
      [7, 0], [7, 2], [7, 4], [7, 6]
    ];
    for (var i = 0; i < whitePositions.length; i++){
      //this.Checker(white);
      var wPos = whitePositions[i];

      //this.checkers.push(checker);
      var row = wPos[0];
      var column = wPos[1];
      var checker = new Checker('white');
      this.grid[row][column] = checker;
      this.checkers.push(checker);
    }
    for (var i = 0; i < blackPositions.length; i++){
      //this.Checker(black);
      var bPos = blackPositions[i];

      //checkers.push(checker);
      var row = bPos[0];
      var column = bPos[1];
      var checker = new Checker('black');
      this.grid[row][column] = checker;
      this.checkers.push(checker);
    }
  }
  this.selectChecker = function(row, column){
    return this.grid[row][column];
  }


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

  // Your code here
  this.killChecker = function(position) {
    var checkerPosition = this.checkers.indexOf(this.selectChecker(position[0],position[1]));
    this.checkers.splice(checkerPosition,1);
    this.grid[position[0]][position[1]] = null;
  }

}
function Game() {

  this.board = new Board();

  this.start = function() {
    this.board.createGrid();
    // Your code here
    this.board.createCheckers();
  };
  //start might look like 50
  //end might look like 41
  this.moveChecker = function(start, end){
    //Inside the method, use your board helper method selectChecker to select the checker at your starting rowcolumncoordinates and set it to a local variable checker. Then set that spot on the grid to null and set the spot at the end rowcolumn coordinate to the checker.
    var startRow = start.split("")[0];
    var startColumn = start.split("")[1];
    var endRow = end.split("")[0];
    var endColumn = end.split("")[1];
    var checker = this.board.selectChecker(startRow, startColumn);
    this.board.grid[startRow][startColumn] = null;
    this.board.grid[endRow][endColumn] = checker;
    if (startRow - endRow === 2){
      var killRow = startRow -1;
      if (startColumn - endColumn === 2) {
        var killColumn = endColumn -1;
      } else if (startColumn - endColumn === -2) {
        var killColumn = endColumn + 1;
      }
      var killPosition = killRow+killColumn;
      killChecker(killPosition);
    }
    if (startRow - endRow === -2){
      var killRow = startRow +1;
      if (startColumn - endColumn === 2) {
        var killColumn = endColumn -1;
      } else if (startColumn - endColumn === -2) {
        var killColumn = endColumn + 1;
      }
      var killPosition = killRow+killColumn;
      killChecker(killPosition);
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
