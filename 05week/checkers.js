'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function Checker(piece) {
  this.symbol = piece;
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
      this.addChecker(0,1,'X');
      this.addChecker(0,3,'X');
      this.addChecker(0,5,'X');
      this.addChecker(0,7,'X');
      this.addChecker(1,0,'X');
      this.addChecker(1,2,'X');
      this.addChecker(1,4,'X');
      this.addChecker(1,6,'X');
      this.addChecker(2,1,'X');
      this.addChecker(2,3,'X');
      this.addChecker(2,5,'X');
      this.addChecker(2,7,'X');
      this.addChecker(5,0,'O');
      this.addChecker(5,2,'O');
      this.addChecker(5,4,'O');
      this.addChecker(5,6,'O');
      this.addChecker(6,1,'O');
      this.addChecker(6,3,'O');
      this.addChecker(6,5,'O');
      this.addChecker(6,7,'O');
      this.addChecker(7,0,'O');
      this.addChecker(7,2,'O');
      this.addChecker(7,4,'O');
      this.addChecker(7,6,'O');
  };

  let checkers = [];

  this.addChecker = function(xCoord, yCoord, playerType){
    let xChecker = new Checker(playerType);
    this.grid[xCoord][yCoord] = xChecker;
    checkers.push('1');
  }

  this.removeChecker = function(xCoord, yCoord){
    this.grid[xCoord][yCoord] = null;
    checkers.pop();
  }

  // prints out the board
  this.viewGrid = function() {
    // add our column numbers
    let string = "  0 1 2 3 4 5 6 7\n";
    for (let row = 0; row < 8; row++)  {
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
}

function Game() {

  this.board = new Board();

  this.moveChecker = function(whichPiece,toWhere){
    let myMove = this.board.grid[whichPiece[0]][whichPiece[1]];
    this.board.grid[whichPiece[0]][whichPiece[1]] = null;
    this.board.grid[toWhere[0]][toWhere[1]] = myMove;
  }

  this.start = function() {
    this.board.createGrid();
    this.board.addChecker(0);
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
