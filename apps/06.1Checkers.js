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
  }
  else {
    this.symbol = String.fromCharCode(0x125CF);
  }
}

function Board() {
  this.checkers = [];

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

  this.createCheckers = function() {
  this.whitepositions = [
    [0, 1], [0, 3], [0, 5], [0, 7],
    [1, 0], [1, 2], [1, 4], [1, 6],
    [2, 1], [2, 3], [2, 5], [2, 7]
    ];

  this.blackpositions = [
  [5, 0], [5, 2], [5, 4], [5, 6],
  [6, 1], [6, 3], [6, 5], [6, 7],
  [7, 0], [7, 2], [7, 4], [7, 6]
  ];

  var i;
  //Create white checkers.
  for (i=0; i<this.whitepositions.length; i++) {
    //i will contain an array.
    var i_array=this.whitepositions[i];
    var row = i_array[0];
    var col = i_array[1];
    var newChecker = new Checker('white');

    this.grid[row][col] = newChecker;
    this.checkers.push(newChecker);
    }

  //Create black checkers.
  for (i=0; i<this.blackpositions.length; i++) {
    //i will contain an array.
    var i_array=this.blackpositions[i];
    var row = i_array[0];
    var col = i_array[1];
    var newChecker = new Checker('black');

    this.grid[row][col] = newChecker;
    this.checkers.push(newChecker);
    }
  }

  this.selectChecker = function(row,column) {
    return (this.grid[row][column])
  }

  this.killChecker = function (position) {
    
  }
}
function Game() {

  this.board = new Board();

  this.start = function() {
    this.board.createGrid();
    // Your code here
    this.board.createCheckers();
  };

   this.moveChecker = function(start,end) {
    var checker = this.board.selectChecker(start[0],start[1]);
    if (checker != null) {
      var distance_moved = Math.abs(start[0]-end[0]);
      this.board.grid[start[0]][start[1]] = null;
      this.board.grid[end[0]][end[1]] = checker;
      
      console.log('Moved '+distance_moved+' tiles')
      if (distance_moved === 2) {
        //I moved a distance of two, kill any checkers between my movement points.
        var num_start_x=Number(start[0]);
        var num_start_y=Number(start[1]);
        var num_end_x=Number(end[0]);
        var num_end_y=Number(end[1]);

        var kill_x = (num_start_x + num_end_x) / 2;
        var kill_y = (num_start_y + num_end_y) / 2;
        console.log('Start is '+start[0] + ',' + start[1] + ' End is '+end[0]+','+end[1])
        console.log('Kill X is ' + kill_x + ' Kill Y is '+kill_y)
      }
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
