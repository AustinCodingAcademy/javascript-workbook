'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function checkers() {
  // Your code here


}

// // class Checkers {
// //   constructor(symbol) {
// //     this.symbol = symbol
// //   }
// }

class Board {
  constructor(grid, checkers) {
    this.grid = [],
    this.redPiece = 'R',
    this.blackPiece = 'B',
    this.checkers = []
  }
  selectChecker(row, column) {
    return this.grid[row][column];
    
  }

  // method that creates an 8x8 array, filled with null values
  createGrid() {
    // loop to create the 8 rows
    for (let row = 0; row < 8; row++) {
      this.grid[row] = [];
      // push in 8 columns of nulls
      for (let column = 0; column < 8; column++) {
        this.grid[row].push(null);
      }
    }
  }
  viewGrid() {
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
          rowOfCheckers.push(this.grid[row][column]);
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
  }

  initializeGrid () {
    for (let row1 = 0; row1 < 3; row1++) {
      for(let col1 = 0; col1 < 8; col1++) {
        if(row1 % 2 == 0 & col1 % 2 == 1) {
          this.grid[row1][col1] = this.redPiece;
        } if(row1 % 2 == 1 & col1 % 2 == 0) {
          this.grid[row1][col1] = this.redPiece;
        }
      }
    }
    for (let row2 = 5; row2 < 8; row2++) {
      for(let col2 = 0; col2 < 8; col2++) {
        if(row2 % 2 == 0 & col2 % 2 == 1) {
          this.grid[row2][col2] = this.blackPiece;
        }if(row2 % 2 == 1 & col2 % 2 == 0) {
          this.grid[row2][col2] = this.blackPiece;
        }
      }
    }
  }

}

class Game {
  constructor() {
    this.board = new Board;
  }
  start() {
    this.board.createGrid();
    this.board.initializeGrid(); 
  }
  moveChecker(start, end) {
    if(this.validInput(start, end)) {
      let startArray = start.split("");
      let selectedPiece = this.board.selectChecker(startArray[0], startArray[1])
      console.log(selectedPiece)
      let endArray = end.split("");
      this.board.grid[endArray[0]][endArray[1]] = selectedPiece
      this.board.grid[startArray[0]][startArray[1]] = null
  }
}
  validInput(start, end) {
    let startArray = start.split(""); 
    let endArray = end.split("");
 
    if(startArray.length === 2 && endArray.length === 2) {
      if(startArray[0] >= 0 && startArray[0] <= 7 && startArray[1] >= 0 && startArray[1] <= 7 && endArray[0] >= 0 && endArray[0] <= 7 && endArray[1] >= 0 && endArray[1] <= 7) {
        return true
      }
    }console.log("Invalid Input")
     return false 
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

  describe('Game.moveChecker()', () => {
    it('should move a checker', () => {
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
