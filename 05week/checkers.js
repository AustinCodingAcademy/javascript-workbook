'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});




function Checker(color) {
  // Your code here
  if (color === 'white') {
    this.symbol = String.fromCharCode(0x125CB); //assign white color to checker
  } else {
    this.symbol = String.fromCharCode(0x125CF); //assign black color to checker
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
  this.checkers = []; // create an empty array to collect black and white pieces

  this.createCheckers = function () { //create a method to assign black and white pieces' positions
    const whiteChecker = new Checker('white'); //constructor for white checkers
    const blackChecker = new Checker('black'); //constructor for black checkers

    for (let row = 0; row < 8; row++) { //iterate each row

      for (let column = 0; column < 8; column++) { //iterate each column

        if (row < 3) { //if row is 0,1 or 2
           
          if ((row % 2 === 0 && column % 2 === 1) || ( row % 2 === 1 && column % 2 === 0)) { /*if row is even and column is odd
                                                                                              or row is odd and column is even*/
            this.grid[row][column] = whiteChecker; //place white checker
            this.checkers.push(whiteChecker); //push all white checkers into checkers array
          }
        } else if (row > 4) { //leave row 3 and 4 null and move to row 5
          if ((row%2 === 1 && column%2 === 0) || (row%2 === 0 && column%2 === 1)) { /*if row is odd and column is even
                                                                                        or row is even and column is odd*/
              this.grid[row][column] = blackChecker; //place black checker
              this.checkers.push(blackChecker); //push all black checkers into checkers array
            }
        }
      }
    }
    return false;
  }; //createCheckers() method ends

  this.selectChecker = function (row,column) { //this function returns the selected spot
    return this.grid[row][column]; //access the board
  };
}// Board class ends

function Game() {

  this.board = new Board();

  this.start = function() {
    this.board.createGrid();
    // Your code here
    this.board.createCheckers(); // call your method to see the pieces on the board
  }; //start method ends

  this.moveChecker = function (start,end) {
    const checker = this.board.selectChecker(start[0],start[1]); //return checker at the starting positions
    this.board.grid[ [start[0]][start[1]] ] = null;
    this.board.grid[ [end[0]][end[1]] ] = checker;
  }

}// Game class ends

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
