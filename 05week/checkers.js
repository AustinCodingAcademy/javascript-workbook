'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function Checker(color) { //fn to create actual checkers to be placed in play
  // Your code here
  this.symbol = null; //??
  if (color === 'white') { //setting appropriate checker for white moves
    this.symbol = String.fromCharCode(0x125CB); //setting checker for white
  } else if (color === 'black') { //setting checker for black
    this.symbol = String.fromCharCode(0x125CF) //setting checker for black;
  }
}

function Board() { //fn to build nd maintain the board
  this.grid = []; // emty array to hold the board indices
  this.checkers = []; //empty array to keep track of checker indices
  this.createCheckers = function() { //fn within Board to generate starting positions of checkers
    var whiteChecker = new Checker('white'); //setting const to create checker from above Checker fn
    var blackChecker = new Checker('black'); //same as above for black instead of white
    function storeCoordinate(xVal, yVal, array) {
      array.push({
        x: xVal,
        y: yVal
      });
    }

    var checkers = [];
    storeCoordinate(0, 1, checkers);
    storeCoordinate(0, 3, checkers);
    storeCoordinate(0, 5, checkers);
    storeCoordinate(0, 7, checkers);
    storeCoordinate(1, 0, checkers);
    storeCoordinate(1, 2, checkers);
    storeCoordinate(1, 4, checkers);
    storeCoordinate(1, 6, checkers);
    storeCoordinate(2, 1, checkers);
    storeCoordinate(2, 3, checkers);
    storeCoordinate(2, 5, checkers);
    storeCoordinate(2, 7, checkers);
    storeCoordinate(5, 0, checkers);
    storeCoordinate(5, 2, checkers);
    storeCoordinate(5, 4, checkers);
    storeCoordinate(5, 6, checkers);
    storeCoordinate(6, 1, checkers);
    storeCoordinate(6, 3, checkers);
    storeCoordinate(6, 5, checkers);
    storeCoordinate(6, 7, checkers);
    storeCoordinate(7, 0, checkers);
    storeCoordinate(7, 2, checkers);
    storeCoordinate(7, 4, checkers);
    storeCoordinate(7, 6, checkers);


    // to loop through coordinate values
    for (var i = 0; i < checkers.length; i++) {
      var x = checkers[i].x;
      var y = checkers[i].y;
      if (x < 3 && ) {
        checkers.push(whiteChecker);
      }
    }
    console.log(checkers);
    console.log(checkers[0].x);
    console.log(checkers[0].y);



  }
  this.createGrid = function() {
    // loop to create the 8 rows
    for (let row = 0; row < 8; row++) {
      this.grid[row] = [];
      // push in 8 columns of nulls
      for (let column = 0; column < 8; column++) {
        this.grid[row].push(null);
      }
    }
  }
  this.selectChecker = function(row, column) { //'helper' function. this should return the checker at a particlar location on the grid
    return Checker.this.grid[i];
  }
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

} // Your code here



function Game() {

  this.board = new Board(); //setting up new board for play

  this.start = function() { //method to call in creation of grid array(locations) and checker creation
    this.board.createGrid();
    // Your code here
    this.board.createCheckers();

  };
  this.moveChecker = function(start, end) { //method to facilitate and track movement of checkers
    var checker = selectChecker(); //creating place to store result of select checker which takes row and column as arguments
    checker = null; //setting var to null since it doesn't exist here yet I think----??????

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

const game = new Game();
console.log('game', game);
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

  describe('Game.moveChecker()', function() {
    it('should move a checker', function() {
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
