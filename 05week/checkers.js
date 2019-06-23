'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
 

class Checker {
  constructor(symbol){
    this.symbol = symbol;
  }
}

class Board {
  constructor() {
    this.grid = []
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
  setUpBoard(){
    this.grid[0][0] = new Checker('-');
    this.grid[0][2] = new Checker('-');
    this.grid[0][4] = new Checker('-');
    this.grid[0][6] = new Checker('-');
    this.grid[1][1] = new Checker('-');
    this.grid[1][3] = new Checker('-');
    this.grid[1][5] = new Checker('-');
    this.grid[1][7] = new Checker('-');
    this.grid[2][0] = new Checker('-');
    this.grid[2][2] = new Checker('-');
    this.grid[2][4] = new Checker('-');
    this.grid[2][6] = new Checker('-');
    this.grid[5][1] = new Checker('+');
    this.grid[5][3] = new Checker('+');
    this.grid[5][5] = new Checker('+');
    this.grid[5][7] = new Checker('+');
    this.grid[6][0] = new Checker('+');
    this.grid[6][2] = new Checker('+');
    this.grid[6][4] = new Checker('+');
    this.grid[6][6] = new Checker('+');
    this.grid[7][1] = new Checker('+');
    this.grid[7][3] = new Checker('+');
    this.grid[7][5] = new Checker('+');
    this.grid[7][7] = new Checker('+');
  }
  
}

class Game {
  constructor() {
    this.board = new Board;
  }
  start() {
    this.board.createGrid();
    this.board.setUpBoard();
  }
  processUserInput(userString) {
    const row = parseInt(userString.split('')[0])
    const column = parseInt(userString.split('')[1])
    return {
      row: row, 
      column: column
    }
  }
  getCheckerFromCoordinates(coordinates) {
    return this.board.grid[coordinates.row][coordinates.column] 
  }
  setCheckerFromCoordinates(coordinates, checker) {
    this.board.grid[coordinates.row][coordinates.column] = checker
  }
  moveChecker(startCoordinates, endCoordinates) {
    const checker = this.getCheckerFromCoordinates(startCoordinates)
    this.setCheckerFromCoordinates(endCoordinates, checker)
    this.setCheckerFromCoordinates(startCoordinates, null)
  }
  isInvalidDirection(startChecker, startCoordinates, endCoordinates){
    if(startChecker.symbol === '+' && (endCoordinates.row - startCoordinates.row) > 0){
      return true
    } else if(startChecker.symbol === '-' && (startCoordinates.row - endCoordinates.row) > 0){
      return true
    } 
    return false
  }
  checkForMoves(startCoordinates, endCoordinates){
    const rowDifference = startCoordinates.row - endCoordinates.row;
    const columnDifference = startCoordinates.column - endCoordinates.column;
    if(Math.abs(rowDifference) === 1 && Math.abs(columnDifference) === 1){
      return true
    } 
    return false
  }
  checkForKill(startCoordinates, endCoordinates){
    const startChecker = this.getCheckerFromCoordinates(startCoordinates)
    const rowDifference = startCoordinates.row - endCoordinates.row;
    const columnDifference = startCoordinates.column - endCoordinates.column;
    if (Math.abs(rowDifference) === 2 && Math.abs(columnDifference) === 2){
      const jumpingRow = (startCoordinates.row + endCoordinates.row) / 2
      const jumpingColumn = (startCoordinates.column + endCoordinates.column) / 2
      const checkerToBeKilled = this.board.grid[jumpingRow][jumpingColumn];
      if(!checkerToBeKilled){
        return false
      } else if(checkerToBeKilled.symbol === startChecker.symbol){
        return false
      }
      return true
    } 
    return false
  }
  killChecker(startCoordinates, endCoordinates) {
    const startChecker = this.getCheckerFromCoordinates(startCoordinates)
    const jumpingRow = (startCoordinates.row + endCoordinates.row) / 2
    const jumpingColumn = (startCoordinates.column + endCoordinates.column) / 2
    this.setCheckerFromCoordinates({row: jumpingRow, column: jumpingColumn}, null)
    this.setCheckerFromCoordinates(endCoordinates, startChecker)
    this.setCheckerFromCoordinates(startCoordinates, null)
  }
  isValid(startCoordinates, endCoordinates) {
    const startChecker = this.getCheckerFromCoordinates(startCoordinates)
    const endChecker = this.getCheckerFromCoordinates(endCoordinates)
    if (startChecker === null) {
      return false
    } else if(endChecker !== null){
      return false
    } else if(this.isInvalidDirection(startChecker, startCoordinates, endCoordinates)){
      return false
    } 
    return true
  }
  getCheckersCountBySymbol(symbol) {
    return this.board.grid.reduce((count, row) => {
      return count + row.filter(item => item && item.symbol === symbol).length
    }, 0)
  }
  isWin(){
    const redCount = this.getCheckersCountBySymbol('+')
    const blackCount = this.getCheckersCountBySymbol('-')
    return redCount === 0 || blackCount === 0
  }
}

function getPrompt() {
  game.board.viewGrid();
  rl.question('which piece?: ', (whichPiece) => {
    rl.question('to where?: ', (toWhere) => {
      const startCoordinates = game.processUserInput(whichPiece)
      const endCoordinates = game.processUserInput(toWhere)
      const validMove = game.isValid(startCoordinates, endCoordinates)
      if(!validMove) {
        console.log('invalid move')
        getPrompt()
        return;
      }
      const isMove = game.checkForMoves(startCoordinates, endCoordinates);
      const isKill = game.checkForKill(startCoordinates, endCoordinates);
      if(isMove){
        game.moveChecker(startCoordinates, endCoordinates);
      } else if(isKill){
        game.killChecker(startCoordinates, endCoordinates);
      } else {
        console.log('invalid move')
      }
      if(game.isWin()){
        console.log('You Win!');
        game = new Game();
        game.start();
      }
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
    it('board should have 8 rows', () => {
      assert.equal(game.board.grid.length, 8);
    });
    it('each row should have 8 columns', () => {
      game.board.grid.forEach((row) => assert.equal(row.length, 8))
    });

  });
  describe('game.processUserInput()', () => {
    it('should be return integers for the location of row and column of start and end', () => {
      const startCoordinates = game.processUserInput('20')
      const endCoordinates = game.processUserInput('31')
      assert.equal(startCoordinates.row, 2);
    });
  });
  describe('checkForMoves(startCoordinates, endCoordinates)', () => {
    it('should be ok with a move', () => {
      const checkForMove = game.checkForMoves({row: 2, column: 2}, {row: 3, column: 3})
      assert.equal(checkForMove, true);
    });
    it('should be ok with a move', () => {
      const checkForMove = game.checkForMoves({row: 5, column: 1}, {row: 4, column: 0})
      assert.equal(checkForMove, true);
    });
    it('should not jump', () => {
      const checkForMove = game.checkForMoves({row: 5, column: 1}, {row: 5, column: 2})
      assert.equal(checkForMove, false);
    });
  });
  describe('checkForKill(startCoordinates, endCoordinates)', () => {
    it('should jump checker false', () => {
      const isKill = game.checkForKill({row: 5, column: 1}, {row: 3, column: 3})
      assert.equal(isKill, false);
    });
    it('should jump checker true', () => {
      game.board.grid[3][1] = new Checker('+');
      const isKill = game.checkForKill({row: 2, column: 2}, {row: 4, column: 0})
      assert.equal(isKill, true);
    });
  });
  describe('Game.isValid()', () => {
    it('should be a valid move/ checking for basic movement forward and checker to null spot', () => {
      const validMove = game.isValid({row: 2, column: 0}, {row: 3, column: 0});
      assert.equal(validMove, true);
    });
    it('should be a valid move/ checking for possible direction', () => {
      const validMove = game.isValid({row: 2, column: 0}, {row: 1, column: 0});
      assert.equal(validMove, false);
    });
    it('should be a valid move/ checking for an empty ending position', () => {
      const validMove = game.isValid({row: 0, column: 0}, {row: 1, column: 1});
      assert.equal(validMove, false);
    });
    it('should be a valid move/ checking for empty starting position', () => {
      const validMove = game.isValid({row: 2, column: 1}, {row: 1, column: 1});
      assert.equal(validMove, false);
    });
  });

  describe('Game.moveChecker()', () => {
    it('should move a checker', () => {
      assert(game.board.grid[2][0]);
      assert(!game.board.grid[3][0]);
      game.moveChecker({row: 2, column: 0}, {row: 3, column: 0});
      assert(game.board.grid[3][0]);
    });
    it('should be able to jump over and kill another checker', () => {
      game.moveChecker({row: 3, column: 0}, {row: 5, column: 2});
      assert(game.board.grid[5][2]);
      assert(!game.board.grid[4][1]);
      // assert.equal(game.board.checkers.length, 23);
    });
  });
  describe('Game.getCheckersCount()', () => {
    it('should get checker count', () => {
      const count = game.getCheckersCountBySymbol('+');
      assert(count, 12);
    });
    it('should get checker count', () => {
      const count = game.getCheckersCountBySymbol('+');
      game.board.grid[7][7] = null;
      assert(count, 11);
    });
  });
} else {
  getPrompt();
}