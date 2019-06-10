'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//sets symbol & makes checkers
class Checker {
constructor(color) {
if (color === 'white'){
  this.symbol = String.fromCharCode(0x125CB)
} else {this.symbol = String.fromCharCode(0x125CF)
    }
  }
}


// function Checker(color) {
//   // Your code here
// }

class Board {
  constructor() {
    this.grid = []
    this.checkers = []
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

  //location for checkers to start at
createCheckers(){
  let whitePositions = [
  [0, 1], [0, 3], [0, 5], [0, 7],
  [1, 0], [1, 2], [1, 4], [1, 6],
  [2, 1], [2, 3], [2, 5], [2, 7]
  ]
  let blackPositions = [
  [5, 0], [5, 2], [5, 4], [5, 6],
  [6, 1], [6, 3], [6, 5], [6, 7],
  [7, 0], [7, 2], [7, 4], [7, 6]]
    for(let i = 0; i < 12; i++){
  const whiteChecker = new Checker('white')
  //Instantiate checker-white
  const whiteRow = whitePositions[i][0];
  const whiteColumn = whitePositions[i][1]


  const blackChecker = new Checker('black')
  const blackRow = blackPositions[i][0];
  const blackColumn = blackPositions[i][1]

  //call to place checkers
  this.grid[whiteRow][whiteColumn] = whiteChecker;
  this.grid[blackRow][blackColumn] = blackChecker;

  this.checkers.push(whiteChecker, blackChecker)

}
}
selectChecker(row, column){
return this.grid[row][column]
}


killCheckers(position){
this.checkers.splice(position, 1)


}
  // Your code here  In your Board class, write a method killChecker that takes a single argument position which is a coordinate pair, eg. [0, 5]. In it, use this.selectChecker to grab the checker at the position given. Find the index of that checker in the this.checkers array. then remove it by .splice()ing it out. Then assign the position on this.grid to null. That checker is dead.

//In the Game class, in the moveChecker method, after you have moved the checker, check to see if the distance of the start row and the end row is 2 by finding the absolute value of the difference between the rows. If so, which means you must have jumped a checker, find the killPosition by finding the midpoint between the start and end positions. Then killChecker.
}

class Game {
  constructor() {
    this.board = new Board;
    }
  start() {
    this.board.createGrid();
    this.board.createCheckers()
  }
  moveChecker(start, end){
    const startRow = start.charAt(0)
    const startColumn = start.charAt(1)
    const endRow = end.charAt(0)
    const endColumn = end.charAt(1)
    let checker = this.board.selectChecker(startRow, startColumn)
    this.board.grid[startRow][startColumn] = null
    this.board.grid[endRow][endColumn] = checker
    if (Math.abs(start[0] - end[0]) == 2) {
      const midPointRow = (parseInt(start[0]) + parseInt(end[0])) / 2;
      const midPointColumn = (parseInt(start[1]) + parseInt(end[1])) / 2;
      console.log("midpoint:",midPointRow,midPointColumn);
      const killPosition = this.board.selectChecker(
      midPointRow,
      midPointColumn
      );
      this.board.killCheckers(killPosition);
      this.board.grid[midPointRow][midPointColumn] = null;
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
