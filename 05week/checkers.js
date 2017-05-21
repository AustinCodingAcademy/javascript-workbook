'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function Checker(color) {
  if (color === 'white') {
    this.symbol = String.fromCharCode(0x125CB);
  } else {
    this.symbol = String.fromCharCode(0x125CF);
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
    alertTerminal();

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

  this.checkers = [];
  this.createCheckers = function() {
    // 1) Create all white checkers on the grid, then add same to checkers array
    for (var i = 0; i <= 2; i++) {
      for (var j = 1; j <= 7; j+=2) {
        if ((i === 1) && (j % 2 !== 0)) (j = j - 1);
        let whiteChecker = new Checker('white');
        this.grid[i][j] = whiteChecker;
        this.checkers.push(whiteChecker);
      }
    };
    // 2) Create all black checkers on the grid, then add same to checkers array
    for (var i = 5; i <= 7; i++) {
      for (var j = 1; j <= 7; j+=2) {
        if ((i === 5 || i === 7) && (j % 2 !== 0)) (j = j - 1);
        let blackChecker = new Checker('black');
        this.grid[i][j] = blackChecker;
        this.checkers.push(blackChecker);
      }
    };

  };

  // select the object checker to move:
  this.selectChecker = function(row, column) {
    return this.grid[row][column];
  };

  // killing a checker: 1)
  this.killChecker = function(position) {
    let row = position[0];
    let col = position[1];
    this.checkers.splice(this.selectChecker(row, col), 1);
    this.grid[row][col] = null;
  }

}

function Game() {
  // when game() is called, create a new Board, and call it this board.
  this.board = new Board();

  // then start the game (which is a function) -> so call it this.start
  this.start = function() {
    // call createGrid function, which is a function inside board(),..this.board
    //  -> so call it this.board.createGrid()
    // then, ditto to createCheckers, which puts game start pieces on the board
    this.board.createGrid();
    this.board.createCheckers();

  };

  this.moveChecker = function(start, end) {
    let rowStart = start[0];
    let colStart = start[1];
    let rowEnd = end[0];
    let colEnd = end[1];

    // if there is a checker at start to move:
    if (this.board.grid[rowStart][colStart]) {
      console.log('\nThat is a valid checker to move.');

      // if the end space already has a checker there:
      if (this.board.grid[rowEnd][colEnd]) {
        console.log('That is NOT a valid space to move to.  Try again.\n');
        alertTerminal();
        alertTerminal();
        return false;
      } else {

        // if start is true and end is false, move checker there and nullify start position:
        // * But don't remove piece from checkers array *
        this.board.grid[rowEnd][colEnd] = this.board.selectChecker(rowStart, colStart);
        this.board.grid[rowStart][colStart] = null;
// console.log(this.board.grid);

      }
    } else {

      // if there is NO checker at start position:
      console.log('\nThat is not a valid checker to move.  Try again.\n');
      alertTerminal();
      alertTerminal();
      return false;
    }

    // if rowStart - rowEnd === 2, romove checker:
    if (Math.abs(rowStart - rowEnd) === 2) {
      let posArray = [];

      posArray.push( ( parseInt(rowStart) + parseInt(rowEnd) ) / 2  );
      posArray.push( ( parseInt(colStart) + parseInt(colEnd) ) / 2  );
      // this.board.killChecker(rowJump + colJump);
      this.board.killChecker(posArray);

      console.log(this.board.grid);
      console.log(this.board.checkers + 'fsdfsdf');
    }
  }

}

function getPrompt() {
//   function alertTerminal(){
//   console.log("\x07");
// }
  game.board.viewGrid();
  rl.question('which piece?: ', (whichPiece) => {
    rl.question('to where?: ', (toWhere) => {
      game.moveChecker(whichPiece, toWhere);
      getPrompt();
    });
  });
}

function alertTerminal(){
  console.log('\u0007');
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
