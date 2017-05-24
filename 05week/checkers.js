'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function Checker(color) {
  //...
  this.symbol = color
  if (color === 'white') {
    this.symbol = String.fromCharCode(0x125CB)
  } else {
    this.symbol = String.fromCharCode(0x125CF)
  }
}

function Board() {
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
  // Your code here
  this.checkers = [];
  this.createCheckers = function() {
    const whiteChecker = new Checker('white');
    const blackChecker = new Checker('black');
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        if (((row === 0 || row === 2) && (col % 2 === 1)) || (row === 1 && (col % 2 === 0))) {
          this.grid[row][col] = whiteChecker;
          this.checkers.push(whiteChecker);
          //^^if row is 0 or 2 and col is odd; or if row is 1 and col is even place a white checker ^^
        } else if (((row === 5 || row === 7) && (col % 2 === 0)) || (row === 6 && (col % 2 === 1))) {
          this.grid[row][col] = blackChecker;
          this.checkers.push(blackChecker);
          //^^if row is 5 or 7 and col is even; or if row is 6 and col is odd place a black checker ^^
        }
      }
    }
    // console.log(this.grid)
    // this.grid[0][1] = whiteChecker;
    // this.grid[5][0] = blackChecker;
    // console.log('whiteChecker:', whiteChecker.symbol, 'blackChecker:', blackChecker.symbol)
    // this.checkers.push(whiteChecker, blackChecker);
    // let whitePositions = [] // [0, 1], [0, 3], [0, 5], [0, 7], [1, 0], [1, 2], [1, 4], [1, 6],
    //                         // [2, 1], [2, 3], [2, 5], [2, 7];
    // let blackPositions = [] // [5, 0], [5, 2], [5, 4], [5, 6], [6, 1], [6, 3], [6, 5], [6, 7],
    //                         // [7, 0], [7, 2], [7, 4], [7, 6]
    // for (let i = 0; i < 12; i++)
    //   if
  }
  this.selectChecker = function(row, column) {
    return this.grid[row][column]
  }

  this.killChecker = function(position) {
    this.selectChecker(position);
    this.checkers.indexOf();
    // THIS IS WHERE IM LEAVING OFF!!!!!!!!!!!!! //
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
    let checker = this.board.selectChecker(start[0], start[1]);
    // console.log(end.toString())
    // if (end.toString() === start.toString()+11 || end.toString() === start.toString()+9 ||
    //   end.toString() === start.toString()-11 || end.toString() === start.toString()-9) {
    //cant get this fucking thing to do a legal/not legal move.  Maybe the end/start numbers aren't strings?  no idea.
      this.board.grid[end[0]][end[1]] = checker;
      // console.log(whichPiece);
      this.board.grid[start[0]][start[1]] = null;
    // } else {
    //   console.log('Not a valid move, try again.')
    //   return false
    // }
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
