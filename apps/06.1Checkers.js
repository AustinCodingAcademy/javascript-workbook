'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function Checker(color) {
  // Your code here
  //this.symbol = null;
  if (color === 'white') {
    this.symbol = String.fromCharCode(0x125CB);
  }
  if (color === 'black') {
    this.symbol = String.fromCharCode(0x125CF);
  }
}


function Board() {
  this.checkers = [];
  this.createCheckers = function () {
    var whitePositions = [
      [0, 1],
      [0, 3],
      [0, 5],
      [0, 7],
      [1, 0],
      [1, 2],
      [1, 4],
      [1, 6],
      [2, 1],
      [2, 3],
      [2, 5],
      [2, 7]
    ];
    var blackPositions = [
      [5, 0],
      [5, 2],
      [5, 4],
      [5, 6],
      [6, 1],
      [6, 3],
      [6, 5],
      [6, 7],
      [7, 0],
      [7, 2],
      [7, 4],
      [7, 6]
    ];
    for (var i = 0; i < whitePositions.length; i++) {
      var position = whitePositions[i];
      //what is the position?
      //an array with something like [0,1]
      //what is the point of having a reference to the position?
      //to get a row and column out of it
      var row = position[0];
      var column = position[1];
      //now what do i do with row and column?

      //Instantiate
      var checker = new Checker("white");
      this.grid[row][column] = checker;
      //don't hard code 
      this.checkers.push(checker);
    }

    for (var i = 0; i < blackPositions.length; i++) {
      var position = blackPositions[i];
      //what is the position?
      //an array with something like [0,1]
      //what is the point of having a reference to the position?
      //to get a row and column out of it
      var row = position[0];
      var column = position[1];
      //now what do i do with row and column?

      //Instantiate
      var checker = new Checker("black");
      this.grid[row][column] = checker;
      this.checkers.push(checker);
    }
  }
  this.selectChecker = function (row, column) {
    return this.grid[row][column];
  }
  this.killChecker = function (position) {
    //In it, use this.selectChecker to grab the checker at the position given.
    var checker = this.selectChecker(position[0], position[1]); //need to send in row and column
    //use indexOf to find the index of that checker in the this.checkers array. then remove it by .splice()ing it out
    var indexofthechecker = this.checkers.indexOf(checker);
    this.checkers.splice(indexofthechecker, 1);
    this.grid[position[0]][position[1]] = null;
  }




  //this was the code given to us
  this.grid = [];
  // creates an 8x8 array, filled with null values
  this.createGrid = function () {
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
  this.viewGrid = function () {
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
  this.start = function () {
      this.board.createGrid();
      this.board.createCheckers();
    }
    // Your code here
  this.moveChecker = function (start, end) {
    var startrow = start.split('')[0];
    var startcolumn = start.split('')[1];
    var endrow = end.split('')[0];
    var endcolumn = end.split('')[1];
    var sum = startrow + endrow;
    var checker = this.board.selectChecker(startrow, startcolumn, endrow, endcolumn);
    this.board.grid[startrow][startcolumn] = null;
    this.board.grid[endrow][endcolumn] = checker;
    //check to see if the distance of the start row and the end row is 2 by 
    //finding the absolute value of the difference between the rows
    var distance = Math.abs(startrow - endrow);
    if (distance === 2) {
      //find the killPostition by finding the midpoint between the start and end positions. Then killChecker.
      var killrow = (parseInt(startrow) + parseInt(endrow)) / 2;
      var killcolumn = (parseInt(startcolumn) + parseInt(endcolumn)) / 2;
      var killposition = [killrow, killcolumn];
      this.board.killChecker(killposition);
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
  describe('Game', function () {
    it('should have a board', function () {
      assert.equal(game.board.constructor.name, 'Board');
    });
    it('board should have 24 checkers', function () {
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
    it('should be able to jump over and kill another checker', function () {
      game.moveChecker('30', '52');
      assert(game.board.grid[5][2]);
      assert(!game.board.grid[4][1]);
      assert.equal(game.board.checkers.length, 23);
    });
  });
} else {
  getPrompt();
}