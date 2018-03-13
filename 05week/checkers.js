'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Notes

// Next step is to find how to differentiate the 12 pieces for each player
// Have a Red pieces (R) and Black Pieces (B)
// Next is to how to add each player pieces into the correct index(s)
// Need to make sure that the player piece can only move one direction
// Next is to make sure if move is legal
// Need to remove a piece if another piece jumps over
// Need to state that once a piece is moved, it cannot move back to the opposite direction
// Players can only win when they run out of legal moves
// Once both players run out of legal moves, the player with the most pieces, win.
// The player with the less pieces will lose.

function Checker(color) {
  // Your code here

  // Need to print out checker pieces
  if(color === 'red') {
    this.symbol = 'R';
  } else {
    this.symbol = 'B'
  }
}

function Board() {
  this.grid = [];
  this.checkerPosition = [];

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

  // Printing out checker pieces to designated row and column
  this.makeCheckers = () => {
    const blackPieces = [
      [0, 1], [0, 3], [0, 5],[0, 7],
      [1, 0], [1, 2], [1, 4],[1, 6],
      [2, 1], [2, 3], [2, 5],[2, 7]
    ];

    // Assigning black checker pieces
    const blackChecker = new Checker('black')
    blackPieces.forEach((pieces) => {
      this.checkerPosition.push(pieces)
      this.grid[pieces[0]][pieces[1]] = blackChecker
    })

    const redPieces = [
      [5, 0], [5, 2], [5, 4],[5, 6],
      [6, 1], [6, 3], [6, 5],[6, 7],
      [7, 0], [7, 2], [7, 4],[7, 6]
    ];

    // Assigning red checker pieces
    const redChecker = new Checker('red')
    redPieces.forEach((pieces) => {
      this.checkerPosition.push(pieces)
      this.grid[pieces[0]][pieces[1]] = redChecker
    })

    // return checkerPosition
  };
  // Printing the checker pieces to the grid
  this.selectChecker = (row, column) => {
    return this.grid[row][column];
    console.log(this.selectChecker)
  };
  this.killChecker = (position) => {
    const destroyChecker = this.selectChecker(position[0], position[1]);
    const checkerIndex = this.checkers.indexOf(destroyChecker);
    if (destroyChecker !== null) {
      this.checkers.splice(checkerIndex, 1);
      this.grid[position[0]][position[1]] = null;
    }
    // this.checkers.splice(index, 1);
    // this.grid[position[0]][position[1]] = null;
  };
}

function Game() {

  this.board = new Board();

  this.start = function() {
    this.board.createGrid();
    // Your code here

    // Making a method to create the game and move pieces
    this.board.makeCheckers();
  };
  this.moveChecker = (source, destination) => {
    // Creating a variable equals parseInt, and calling '0' & '1'
    // from the user input from source (argument)
    const beginRow = parseInt(source.charAt(0));
    const beginCol = parseInt(source.charAt(1));
    // Creating another variable for destination and assigning numbers to the
    // destination argument
    const finishRow = parseInt(destination.charAt(0));
    const finishCol = parseInt(destination.charAt(1));
    // Calling the grid board to assign the Red and Black pieces to move
    // in the correct row and column
    this.board.grid[finishRow][finishCol] = this.board.grid[beginRow][beginCol];
    // Calling the pieces to reassign the source piece as null
    this.board.grid[beginRow][beginCol] = null;

    // Taking pieces
    if(Math.abs(finishRow - beginRow) === 2) {
      let killRow = finishRow - beginRow > 0 ? beginRow + 1 : finishRow + 1;
      let killCol = finishCol - finishRow > 0 ? finishCol + 1 : finishRow + 1;

      this.board.grid[killRow][killCol] = null;
      this.board.checkerPosition.push();
    } else {
      return false
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
