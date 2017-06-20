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
  // Your code here
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
          // rowOfCheckers.push('hello');
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
      const whiteChecker = new Checker('white');
      const blackChecker = new Checker('black');
      this.grid[0][1] = whiteChecker;
      this.grid[0][3] = whiteChecker;
      this.grid[0][5] = whiteChecker;
      this.grid[0][7] = whiteChecker;
      this.grid[1][0] = whiteChecker;
      this.grid[1][2] = whiteChecker;
      this.grid[1][4] = whiteChecker;
      this.grid[1][6] = whiteChecker;
      this.grid[2][1] = whiteChecker;
      this.grid[2][3] = whiteChecker;
      this.grid[2][5] = whiteChecker;
      this.grid[2][7] = whiteChecker;

      this.grid[5][0] = blackChecker;
      this.grid[5][2] = blackChecker;
      this.grid[5][4] = blackChecker;
      this.grid[5][6] = blackChecker;
      this.grid[6][1] = blackChecker;
      this.grid[6][3] = blackChecker;
      this.grid[6][5] = blackChecker;
      this.grid[6][7] = blackChecker;
      this.grid[7][0] = blackChecker;
      this.grid[7][2] = blackChecker;
      this.grid[7][4] = blackChecker;
      this.grid[7][6] = blackChecker;

      this.checkers.push(blackChecker, blackChecker, blackChecker, blackChecker, blackChecker,
      blackChecker, blackChecker, blackChecker, blackChecker, blackChecker, blackChecker,
      blackChecker);


      this.checkers.push(whiteChecker, whiteChecker, whiteChecker, whiteChecker,
      whiteChecker, whiteChecker, whiteChecker, whiteChecker, whiteChecker,
      whiteChecker, whiteChecker, whiteChecker);
    }

  this.selectChecker = function(row, column) {
    return(this.grid[row][column]);
  }



  // Your code here
  this.killChecker = function(position) {
    let coordinate = this.selectChecker(position[0], position[1]);
    let killedChecker = this.checkers.indexOf(coordinate);
    this.checkers.splice(killedChecker, 1);
    this.grid[position[0]][position[1]] = null;
  }
}


function Game() {

  this.board = new Board();

  this.start = function() {
    this.board.createGrid();
    this.board.createCheckers();

  };

  this.moveChecker = function(start, end) {
    //the "start" and "end" indivudal parameters are actually arrays containing 2 coordinate values [0, 0]

    //you select the first and second coordinate values of the start array
    const checker = this.board.selectChecker(start[0], start[1]);

     //You put add the checker into the end position.  Setting it equal to checker allows it to exist
    this.board.grid[end[0]][end[1]] = checker;

    //Now that the checker has been moved, you can null out what was in the original position
    this.board.grid[start[0]][start[1]] = null;


    let distance = Math.abs(end[0]-start[0]);

    if (distance === 2) {
      let rowMidpoint = (Number(start[0]) + Number(end[0])) / 2;
      let colMidpoint = (Number(start[1]) + Number(end[1])) / 2;
      let killPosition = [rowMidpoint, colMidpoint];
      this.board.killChecker(killPosition);
    }
     this.board.grid[start[0]][start[1]] = null;
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
