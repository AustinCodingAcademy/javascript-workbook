'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//checker pieces using symbols

class Checker {
  constructor(color){
  this.color = color;
  if(color === 'white') {
    this.symbol = '◉';
  } else {
  this.symbol =  '◎';
    }
  }
};

class Board {
  constructor() {
    this.selectChecker = function (row, column) {
      return this.grid[row][column];
    };
    this.createChecker = function () {
      let whitePositions =
      [[0, 1], [0, 3], [0, 5], [0, 7],
      [1, 0], [1, 2], [1, 4], [1, 6],
      [2, 1], [2, 3], [2, 5], [2, 7]];
      
      let blackPositions = 
      [[5, 0], [5, 2], [5, 4], [5, 6],
      [6, 1], [6, 3], [6, 5], [6, 7],
      [7, 0], [7, 2], [7, 4], [7, 6]];

      for (let i = 0; i <= 11; i++) {
      let whiteChecker = new Checker('white');
      this.checkers.push(whiteChecker);
      let coord = whitePositions[i];
      this.grid[coord[0]][coord[1]] = whiteChecker;
      let blackChecker = new Checker('black');
      this.checkers.push(blackChecker);
      let coord2 = blackPositions[i];
      this.grid[coord2[0]][coord2[1]] = blackChecker;
      }
    };
    this.checker = [];
    this.grid = [];

    
  
  


// class playerBoard {
//   constructor(row, column) {
//     this.grid = [row] [column];
//   }
  // method that creates an 8x8 array, filled with null values
  // createGrid() {
    // loop to create the 8 rows
    // for (let row = 0; row < 8; row++) {
    //   this.grid[row] = [];
    //   // push in 8 columns of nulls
    //   for (let column = 0; column < 8; column++) {
    //     this.grid[row].push(null);
    //   }
    // }
  
  // viewGrid() {
    // add our column numbers
    // let string = "  0 1 2 3 4 5 6 7\n";
    // for (let row = 0; row < 8; row++) {
      // we start with our row number in our array
      // const rowOfCheckers = [row];
      // a loop within a loop
      // for (let column = 0; column < 8; column++) {
        // if the location is "truthy" (contains a checker piece, in this case)
        // if (this.grid[row][column]) {
          // push the symbol of the check in that location into the array
        //   rowOfCheckers.push(this.grid[row][column].symbol);
        // } else {
          // just push in a blank space
      //     rowOfCheckers.push(' ');
      //   }
      // }
      // join the rowOfCheckers array to a string, separated by a space
      // string += rowOfCheckers.join(' ');
      // add a 'new line'
    //   string += "\n";
    // }
    // console.log(string);
  

  // Your code here


class Game {
  constructor() {
    this.board = new Board;
  }
  start() {
    this.board.createGrid();
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
// game.start();


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
};
