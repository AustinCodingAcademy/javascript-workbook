'use strict';

const illegal = require('')
const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function Checker(color) {
  // Your code here
  this.color = color;
  // Pass a generic parameter here, then define.
  // this.symbol = something

  if (this.color === 'white') {
    this.symbol = String.fromCharCode(0x125CB);
  } else {
    this.symbol = String.fromCharCode(0x125CF);
  }
}


function Board() {
// this.selectChecker = function(position) {}
// this.killChecker = function(position) {}
// this.createGrid = function() {}
  this.checkers = function (){
    let whitePositions = [[0, 1], [0, 3], [0, 5], [0, 7],[1, 0], [1, 2], [1, 4], [1, 6],[2, 1], [2, 3], [2, 5], [2, 7]];
    let blackPositions = [[5, 0], [5, 2], [5, 4], [5, 6],[6, 1], [6, 3], [6, 5], [6, 7],[7, 0], [7, 2], [7, 4], [7, 6]];
  }

  this.grid = [];
  // creates an 8x8 array, filled with null values
  this.createGrid = function() {
    // loop to create the 8 rows
    for (let row = 0; row < 8; row++) {
      this.grid[row] = [];
      // push in 8 columns of nulls
      for (let column = 0; column < 8; column++) {
        this.grid[row].push(null);
      }
    }
  };

  // prints out the board
  this.viewGrid = function() {
    // add column numbers
    let string = "  0 1 2 3 4 5 6 7\n";
    for (let row = 0; row < 8; row++) {
      // we start with our row number in our array
      const rowOfCheckers = [row];
      // a loop within a loop
      for (let column = 0; column < 8; column++) {
        // if the location is "truthy" or legal (contains a checker piece, in this case)
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
  this.checkers = [];

  this.createCheckers = function () {
    // make the white checkers
    for (let i = 0; i <= 2; i++) {
      for (let j = 1; j <=7; j+=2) {
        if ((i === 1) && (j % 2 !==0)) (j = j - 1);
        let whitePositions = new Checker ('white');
        this.grid [i][j] = whitePositions;
        this.checkers.push(whitePositions);
      }
    };

    // make the black checkers
    for (let i = 0; i <= 2; i++) {
      for (let j = 1; j <=7; j+=2) {
        if ((i === 1) && (j % 2 !==0)) (j = j - 1);
        let blackPositions = new Checker ('black');
        this.grid [i][j] = blackPositions;
        this.checkers.push(blackPositions);
      }
    };
  }
    // Before breaking it down, we had a top-level idea of how this would work below:
    // const whitePositions = new Checker('white');
    // const blackPositions = new Checker ('black');
    // this.grid [0][1] = whitePositions;
    // this.grid [5][0] = blackPositions;
    // // This is where are placing them references on the board.
    // this.checkers.push(whitePositions, blackPositions);
    // // Now this function now knows about my checkers.


  this.selectChecker = function (row, column) {
    return this.grid[row][column];
  }

  this.killChecker = function(row, column) {
    this.checkers.splice(this.selectChecker(row, column), 1);
    this.grid[row][column] = null;
  }
}
function Game() {
  this.board = new Board();

  this.start = function() {
    this.board.createGrid();
    // Your code here
    this.board.createCheckers();
  };

  this.moveChecker = function(start, end) {
    const checker = this.board.selectChecker(start[0], start [1]);
    const endPosition = this.board.grid[ end[0] ][ end[1] ];

    // Again, this is the top-level before breaking down further.
    // const end = this.board.grid[ end[0] ][ end[1] ] = checker;
    // this.board.grid[ start[0] ][start[1] ] = null;
    // console.log(this.board.checkers.indexOf(checker));

    if (checker) {
      if (endPosition) {
        illegal(2);
        console.log("This space is taken.");
      }
      else if (endPosition === null) {
        if (start[0] - end[0] === 2 || start[0] - end[0] === - 2) {
          if(checker.symbol === String.fromCharCode(0x125CB)) {
            let killrow = end [0] - 1;
            let killcol = end [1] - 1;
            this.board.killTheChecker(killrow , killcol)
          }
          if(checker.symbol === String.fromCharCode(0x125CF)) {
            let killrow = start[0] - 1;
            let killcol = end [1] - 1;
            this.board.killTheChecker(killrow , killcol)
          }
        }
        this.board.grid[ end[0] ][ end[1] ] = checker;
        this.board.grid[ start[0] ][start[1] ] = null;
      }
    }
    else {
      illegal(3);
      console.log(this.board.checkers.indexOf(checker));
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

const game = new Game();
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
