'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


class Checker {
  constructor(color) {
  this.color = color;
    if (this.color === 'white') {
      this.symbol = '◉';
    }
    else {
  this.symbol = '◎';
    }
  }
}

class Board {
  constructor() {
    this.grid = [];
    //checkers that are still in play
    this.checkers = [];
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

  // Your code here
  createCheckers(){
    const whitePositions = [
      [0, 1], [0, 3], [0, 5], [0, 7],
      [1, 0], [1, 2], [1, 4], [1, 6],
      [2, 1], [2, 3], [2, 5], [2, 7]
    ];
    const blackPositions = [
      [5, 0], [5, 2], [5, 4], [5, 6],
      [6, 1], [6, 3], [6, 5], [6, 7],
      [7, 0], [7, 2], [7, 4], [7, 6]
    ];

    for (let i = 0; i < 12; i++){
      const whiteChecker = new Checker('white');
      const whiteRow = whitePositions[i][0];
      const whiteColumn = whitePositions[i][1];
      
      const blackChecker = new Checker('black');
      const blackRow = blackPositions[i][0];
      const blackColumn = blackPositions[i][1];

      this.checkers.push(whiteChecker);
      this.checkers.push(blackChecker);

      this.grid[whiteRow][whiteColumn] = whiteChecker;
      this.grid[blackRow][blackColumn] = blackChecker;
    }
  }

  selectChecker(row, col){
    return this.grid[row][col];
  }

  killChecker(position){
    let checker = this.selectChecker(position[0], position[1]);
    let indexChecker = this.checkers.indexOf(checker);
    this.checkers.splice(indexChecker, 1);

    this.grid[position[0]][position[1]] = null;
  }
}

class Game {
  constructor() {
    this.board = new Board;
  }
  start() {
    this.board.createGrid();
    this.board.createCheckers();
  }

  moveChecker(start, end){
    const coordX = parseInt(start[0]);
    const coordY = parseInt(start[1]);
    const endX = parseInt(end[0]);
    const endY = parseInt(end[1]);

    const checker = this.board.selectChecker(start[0], start[1]);

    this.board.grid[endX][endY] = checker;
    this.board.grid[coordX][coordY] = null;

    if (Math.sqrt((endX - coordX)^2 + (endY - coordY)^2) >= 2){
      this.board.killChecker([(endX + coordX) / 2, (endY + coordY) / 2]);
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

