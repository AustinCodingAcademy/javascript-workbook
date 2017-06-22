'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function Checker(color) {
  // Your code here
  this.symbol = color;
  if (color === "white") {
    this.symbol = String.fromCharCode(0x125CB);
  } else {
    this.symbol = String.fromCharCode(0x125CF);
  }
}


function Board() {
  this.grid = [];
  // creates an 8x8 array, filled with null values
  this.checkers = new Array();
  // in-play checker pieces // creates checker pieces

  this.createGrid = function() {
    // loop to create the 8 rows
    for (let row = 0; row < 8; row++) {
      this.grid[row] = [];
      // push in 8 columns of nulls
      for (let column = 0; column < 8; column++) {
        this.grid[row].push(null);
      }
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
    // Your code here
    this.createCheckers = function() {
        let whiteChecker = new Checker('white');
        let blackChecker = new Checker('black');

        const whitePositions = [
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

        const blackPositions = [
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

        // create and push white checkers
        // for (var i = 0; i <= 2; i++) {
        //   for (var j = 1; j <= 7; j += 2) {
        //     if ((i === 1) && (j % 2 !== 0)) { j = j - 1 }
        //     this.grid[i][j] = whiteChecker;
        //     // this.checkers.push(whiteChecker)
        //   }
        // };
        for(var w = 0; w <= whitePositions.length-1; w++){
          let x = whitePositions[w][0];
          let y = whitePositions[w][1];
          this.grid[x][y] = whiteChecker;
          this.checkers.push(whiteChecker);

        };

        //TEST iterate thru hard-coded array

        for (var b = 0; b <= blackPositions.length - 1; b++) {
          let x = blackPositions[b][0];
          let y = blackPositions[b][1];
          this.grid[x][y] = blackChecker;
          this.checkers.push(blackChecker)


        };
        // create and push black checkers

        // for (var h = 5; h <= 7; h++) {
        //   for (var k = 1; k <= 7; k += 2) {
        //     if ((h === 6) && (k % 2 !== 1)) { k = k - 1 }
        //     this.grid[h][k] = blackChecker;
        //     this.checkers.push(blackChecker)
        //   }
        // };

      }
      // user chooses which checker to move
    this.selectChecker = (row, column) => {
      return this.grid[row][column];
    };

    // KILL CHECKER
    this.killChecker = (position) => {
      let kill = this.selectChecker(position[0], position[1]);
      let index = this.checkers.indexOf(kill);
      this.checkers.splice(index, 1);
      this.grid[position[0]][position[1]] = null;
    };
  };
  console.log(this.checkers)
}

function Game() {

  this.board = new Board();

  this.start = function() {
    this.board.createGrid();
    // Your code here
    this.board.createCheckers();
  };

  this.moveChecker = (start, end) => {
    let startRow = start[0];
    let startCol = start[1];
    let endRow = end[0];
    let endCol = end[1];
    let checker = this.board.selectChecker(startRow, startCol);
    this.board.grid[endRow][endCol] = checker;
    this.board.grid[startRow][startCol] = null;
    // console.log(this.board.checkers.indexOf(checker));

    var killPosition = (midpointX, midpointY) => {
      return midpointX = (Math.abs(startRow) - Math.abs(endRow)) / 2;
      return midpointY = (Math.abs(startCol) - Math.abs(endCol)) / 2;
    };

    if (Math.abs(startRow) - Math.abs(endRow) === 2) {

      this.board.killChecker(killPosition);
    };
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
