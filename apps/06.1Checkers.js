'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



  // Your code here
  //setting the checker class and assigning it a color perameter
class Checker {
    constructor(color) {
      //if the color is white make the checker white. If not make the checker black
      if (color === 'white') {
        this.symbol = String.fromCharCode(0x125CB);
      }
      else {
        this.symbol = String.fromCharCode(0x125CF);
      }
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
  // setting a checker array
  this.checkers = [];
  //creating the checkers and assigning the position that they need to be placed for white and black checkers
  this.createCheckers = function() {
    var whitePositions = [[0, 1], [0, 3], [0, 5], [0, 7],
      [1, 0], [1, 2], [1, 4], [1, 6],
      [2, 1], [2, 3], [2, 5], [2, 7]];

    var blackPositions = [[5, 0], [5, 2], [5, 4], [5, 6],
      [6, 1], [6, 3], [6, 5], [6, 7],
      [7, 0], [7, 2], [7, 4], [7, 6]]; 
      // placing the white checkers on the grid
      for (var i = 0; i <= 11; i++) {
        var checker = new Checker('white');
        var p = whitePositions[i];
        this.checkers.push(checker);
        this.grid[p[0]][p[1]] = checker;
        //placing the black checkers on the grid
        var checkerb = new Checker('black');
        p = blackPositions[i];
        this.checkers.push(checkerb);
        this.grid[p[0]][p[1]] = checkerb;
      }

    }

    this.selectChecker = function(row, column) { 
      return this.grid[row][column];
    }
    //removing a checker if it gets jumped
     this.killChecker = function(position) {
      var checkerPositionKill = this.selectChecker(position[0], position[1]);
      var checkerIndex = this.checkers.indexOf(checkerPositionKill);
      if (checkerPositionKill !== null) {
        this.checkers.splice(checkerIndex, 1);
        this.grid[position[0]][position[1]] = null;
    }
  }
}

function Game() {
// setting the board
  this.board = new Board();

  this.start = function() {
    this.board.createGrid();
    // Your code here
    //placing checkers
    this.board.createCheckers()
  };
  //making so players can move the checkers
  this.moveChecker = function(start, end) {
    //moving the checker and nulling the spot where it was
    var checker = this.board.selectChecker(start[0], start[1]);
    this.board.grid[start[0]][start[1]] = null;
    this.board.grid[end[0]][end[1]] = checker;
    //setting variables to find the start and end spot of the move to jump a checker
   var startrow = Number(start[0]);
   var startcolumn = Number(start[1]);
   var endrow = Number(end[0]);
   var endcolumn = Number(end[1]);
   // finding the spot of the checker that was jumped
   var cord1 = (startrow + endrow) / 2;
   var cord2 = (startcolumn + endcolumn) / 2;
   var killPosition = [cord1, cord2];
   //setting the absolute value of the start and end to make sure the player moved two spots for a jump. 
   // then calling the method to remove the jumped checker 
   if (Math.abs(startrow - endrow) ===  2)
    this.board.killChecker(killPosition);

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







