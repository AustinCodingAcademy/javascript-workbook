'use strict';
var beep = require('beepbeep');

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function Checker(color) {
  if(color === 'white') {
    this.symbol = String.fromCharCode(0x125CB);
  }
  else if (color === 'black') {
    this.symbol = String.fromCharCode(0x125CF);
  }
}

function Board() {
  this.grid = [];
  this.checkers = [];

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

  this.createCheckers = function() {
    //create all white checkers
    for (var i = 0; i <= 2; i++) {
      for (var j = 1; j <= 7; j+=2) {
        if ((i === 1) && (j % 2 !== 0)) (j = j - 1);
        let whiteChecker = new Checker('white');
        this.grid[i][j] = whiteChecker;
        this.checkers.push(whiteChecker);
      }
    };
     //create all black checkers
    for (var i = 5; i <= 7; i++) {
      for (var j = 1; j <= 7; j+=2) {
        if ((i === 5 || i === 7) && (j % 2 !== 0)) (j = j - 1);
        let blackChecker = new Checker('black');
        this.grid[i][j] = blackChecker;
        this.checkers.push(blackChecker);
      }
    };
  }

  this.selectChecker = function(row, column) {
    return this.grid[row][column];
  }

  this.killChecker = function(row, col) {
    this.checkers.splice(this.selectChecker(row, col), 1);
    this.grid[row][col] = null;
  }
}
function Game() {

  this.board = new Board();

  this.start = function() {
    this.board.createGrid();
    this.board.createCheckers();
  };

  this.moveChecker = function(start, end) {
    const checker = this.board.selectChecker(start[0], start[1]);
    const endSpot = this.board.grid[end[0]][end[1]];

    if (checker) {
      if (endSpot) {
        beep(2);
        console.log('there is already a piece there');
      }
      else if(endSpot === null) {
        if (start[0] - end[0] === 2 || start[0] - end[0] === - 2) {
          if(checker.symbol === String.fromCharCode(0x125CB)) {
            let killrow = end[0] - 1;
            let killcol = end[1] - 1;
            this.board.killChecker(killrow , killcol)
          }
          if(checker.symbol === String.fromCharCode(0x125CF)) {
            let killrow = start[0] - 1;
            let killcol = end[1] - 1;
            this.board.killChecker(killrow , killcol)
          }
        }
        this.board.grid[end[0]][end[1]] = checker;
        this.board.grid[start[0]][start[1]] = null;
      }
    }
    else {
      beep(3);
      console.log('Please select a starting place with a checker')
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
