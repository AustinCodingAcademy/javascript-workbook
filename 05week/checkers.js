'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//will need an isLegal function
//will need a function to change turns
//will need a function to move checkers
//will need a function to remove jumped checkers
//will need a checkForWin function

//moveChecker(), you'll input a starting position and an end position.  Each will have two digits because of 8x8 grid.  A coordinate.
//isLegal(), find out if the move you make is a legal move, if statements
//checkForWin(), check if one player has no pieces left, if statements
//removePiece(), remove a piece if the moveChecker function moves over an opponent's piece, splice method

function Checker(color) {
if (color === 'white') {
  this.symbol = string.fromCharCode(0x125CF);
  this.color = "white";
  } else {
  this.symbol = string.fromCharCode(0x125CB);
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

  // populates the grid with checkers
 this.createCheckers = () => {
   // loops through the 8 rows
   for (let row = 0; row < 8; row++) {
     // ignores rows which should be empty
     if (row === 3 || row === 4) continue;
     // loops through the 8 columns
     for (let col = 0; col < 8; col++) {
       // sets current color based on the current row
       let color = (row < 3 ? 'white' : 'black');
       // alternates cells to populate with either white or black checkers
       // then pushes checker to array named checkers
       if (row % 2 === 0 && col % 2 === 1) {
         this.grid[row][col] = new Checker(color);
         this.checkers.push(this.grid[row][col]);
       } else if (row % 2 === 1 && col % 2 === 0) {
         this.grid[row][col] = new Checker(color);
         this.checkers.push(this.grid[row][col]);
       }
     }
   }
 };
}

  // Your code here
}
function Game() {
  //Create a new board
  //start on the black checker's turns
  //populate the board and checkers on it
  this.board = new Board();
  this.turn = 'black';
  this.start = () => {
    this.board.createGrid();
    this.board.createCheckers();
  }
  //moveChecker(), move a checker from the beginning location to the end location
  //split the player input into an array.  The first number is the Y axis and the second number is the X axis
  //Move from startingPositionto endingPosition
  this.moveChecker = (startingPosition, endingPosition) => {
    const beginning = startingPosition.split('');
    const end = endingPosition.split('');
    this.board.grid[end[0]][end[1]] = this.board.grid[start[0]][start[1]];
    this.board.grid[start[0]][start[1]] = null;
  }
  //isLegal(), check to se if the chosen positions are odd or equal zero.  Checkers cannot be moved to those locations, use modulo
  //Check if the starting and ending position inputs are divisible by two
  //
  this.isLegal=(beginning, end)=>{

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
