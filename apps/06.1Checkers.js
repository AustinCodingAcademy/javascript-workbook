'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// var colors = {
//   white: String.fromCharCode(0x125CB),
//   black: String.fromCharCode(0x125CF)
// }

// if the color is 'white, set this.symbol equal to String.fromCharCode(0x125CB),
// otherwise set it equal to String.fromCharCode(0x125CF)


class Checker{
  constructor (color){
    if (color === 'white'){
      this.symbol = String.fromCharCode(0x125CB);
    }
    else {
      this.symbol = String.fromCharCode(0x125CF);
    }
    // return colors[color];
  }
}

// //In a for loop, iterate over the range from 0 - 11, with each index you want to:
// Instantiate a 'white' Checker
// Place that checker on the grid at the position corresponding with the index in the positions array
// Push the checker into your this.checkers array
// Do all three steps above for a 'black' checker
// In your Game class, in the this.start method, add this.board.createCheckers().


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

  this.checkers = [];
  this.createCheckers = function(){
    var whiteCheckers = [
      [0, 1], [0, 3], [0, 5], [0, 7],
      [1, 0], [1, 2], [1, 4], [1, 6],
      [2, 1], [2, 3], [2, 5], [2, 7]
    ]
    var blackCheckers = [
      [5, 0], [5, 2], [5, 4], [5, 6],
      [6, 1], [6, 3], [6, 5], [6, 7],
      [7, 0], [7, 2], [7, 4], [7, 6]
    ]

    //for(var i = 0; i < whiteCheckers.length ; i ++){
        //var spot = whiteCheckers[i];
    //}  THIS IS THE SAME CODE AS THE FOR OF LOOP BELOW

    for(var spot of whiteCheckers){
      //spot is going to be an array
      //spot may look like [0,1]
      var row = spot[0];
      var column = spot[1];
      //row may have a 0 in it
      //row may have a 1 in it
      var whiteChecker = new Checker('white');
      this.grid[row][column] = whiteChecker;
      this.checkers.push(whiteChecker);
    }

    for(var spot of blackCheckers){
      //spot is going to be an array
      //spot may look like [0,1]
      var row = spot[0];
      var column = spot[1];
      //row may have a 0 in it
      //row may have a 1 in it
      var blackChecker = new Checker('black');
      this.grid[row][column] = blackChecker;
      this.checkers.push(blackChecker);
    }  

  }
  // var whitePositions = this.grid.symbol;
  // var blackPositions = this.grid.symbol;

  this.selectChecker = function (row, column) {
    return this.grid[row][column];
  };

  this.killChecker = function(position) {
    var selectedChecker = this.selectChecker(position[0],position[1]);
    var checkerIndex = this.checkers.indexOf(selectedChecker);

    this.checkers.splice(checkerIndex,1);
    this.grid[position[0]][position[1]] = null;
  };

}

function Game() {

  this.board = new Board();

  this.start = function() {
    this.board.createGrid();
    this.board.createCheckers();
  };

  this.moveChecker = function(start, end) {
    var checker = this.board.selectChecker(start[0], start[1]);
    this.board.grid[start[0]][start[1]] = null;
    this.board.grid[end[0]][end[1]] = checker;
    if (Math.abs(start[0] - end[0]) === 2) {
      var killPosition = [(parseInt(start[0],10) + parseInt(end[0],10)) / 2 , (parseInt(start[1],10) + parseInt(end[1],10)) / 2];
      this.board.killChecker(killPosition);
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
