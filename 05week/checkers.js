'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function difference(a, b) {
return Math.abs(a - b);
}
// function Checker() {
//   // Your code here
// }

class Checker {
  constructor(color) {
    if (color === 'white') {
      this.symbol = String.fromCharCode(0x125CB);
    } else if (color === 'black') {
      this.symbol = String.fromCharCode(0x125CF);
    }
  }
}



// let whiteChecker = new Checker('white');
// let blackChecker = new Checker('black');

class Board {
  constructor() {
    this.grid = []
    this.checkers = [];
    this.blackCheckers = [];
    this.whiteCheckers = [];
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
  }

  createCheckers() {
    let whitePositions = 
    [
        [0, 1], [0, 3], [0, 5], [0, 7],
      [1, 0], [1, 2], [1, 4], [1, 6],
        [2, 1], [2, 3], [2, 5], [2, 7]
    ];

    let blackPositions = [
      [5, 0], [5, 2], [5, 4], [5, 6],
        [6, 1], [6, 3], [6, 5], [6, 7],
      [7, 0], [7, 2], [7, 4], [7, 6]
    ];
    
    for (let i=0; i < 12; i++) {
      let checkerPiece = new Checker('white');
      // let space = i[row][column];
      let newRow = whitePositions[i][0];
      let newCol = whitePositions[i][1];
      this.grid[newRow][newCol] = checkerPiece;

      this.checkers.push(checkerPiece);
    };
    for (let j = 0; j < 12; j++) {
      // instantiate a black checker
      let checkerPiece = new Checker('black');
      // let space = i[row][column];
        // Place that checker on the grid at the position corresponding with the index in the positions array
      let newRow = blackPositions[j][0];
      let newCol = blackPositions[j][1];
      this.grid[newRow][newCol] = checkerPiece;
       // Push the checker into your this.checkers array
      this.checkers.push(checkerPiece);
    };
  }
  // r Board class, write a method this.selectChecker that takes two arguments row, colum
  selectChecker(row,column) {
    // use your board helper method selectChecker to select the checker at your starting rowcolumncoordinates and set it to a local variable checker
    let checker = this.grid[row][column];
    // return the checker at that particular spot on this.grid
    return checker;
  }

  killChecker(position) 
  {
    // let posRow = Number(position[0]);
    // let posColumn = Number(position[1]);
    let victim = this.selectChecker(position[0],position[1]);
    // Find the index of that checker in the this.checkers array.
    let dead = this.checkers.indexOf(victim);
    // then remove it by .splice()ing it out.
    this.checkers.splice(dead, 1);
    // assign the position on this.grid to null
    this.grid[position[0]][position[1]] = null;
  }
  // Your code here
}
 
class Game {
  constructor() {
    this.board = new Board;
  }
  start() {
    this.board.createGrid();
    // n your Game class, in the this.start method, add this.board.createCheckers()
    this.board.createCheckers();
  }
    // Next, in your Game class, create a this.moveChecker method that takes two parameters start, end
    moveChecker(start,end) 
    {
      let startRow = Number(start[0]);
      let startColumn = Number(start[1]);
      let endRow = Number(end[0]);
      let endColumn = Number(end[1]);
      const checker = this.board.selectChecker(startRow, startColumn);
       // Then set that spot on the grid to null and set the spot at the end rowcolumn coordinate to the checker
      this.board.grid[start[0]][start[1]] = null;
      this.board.grid[end[0]][end[1]] = checker;

      // In the Game class, in the moveChecker method, after you have moved the checker, check to see if the distance of the start row and the end row is 2 by finding the absolute value of the difference between the rows
      
      let distance = difference(start[0], end[0]);
      if (distance === 2) {
        let killRow = (startRow + endRow) / 2;
        let killColumn = (startColumn + endColumn) / 2;
        this.board.killChecker([killRow, killColumn]);
      }
  }
  checkForWin() {
    if (Checker.color('black') === 0) {
      console.log('White Wins!!');
      newGame()
    } else if (Checker.color('white') === 0) {
      console.log('Black Wins!!!')
      newGame()
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
