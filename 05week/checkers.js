'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


class Checker{
  constructor(color){
    this.color = color;
    if(this.color == 'white') {
      this.mark = 'W'
    }else if(this.color =='black'){
      this.mark = 'B'
    }else{
      this.mark = null
    }
  }
}
//_______________________________________________________________

class Board {
  constructor(){
    this.grid = [];
  }
  // creates an 8x8 array, filled with null values
  createGrid() {
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

          console.log(this.grid[row][column].mark);
          rowOfCheckers.push(this.grid[row][column].mark);
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

  createCheckers() {
    const whiteMarks = [
      [0, 1], [0, 3], [0, 5], [0, 7],
      [1, 0], [1, 2], [1, 4], [1, 6],
      [2, 1], [2, 3], [2, 5], [2, 7]
    ]
    const blackMarks = [
      [5, 0], [5, 2], [5, 4], [5, 6],
      [6, 1], [6, 3], [6, 5], [6, 7],
      [7, 0], [7, 2], [7, 4], [7, 6]
    ]

    for (let i = 0; i < 12; i++) {
      let whiteRow = whiteMarks[i][0];
      let whiteColumn = whiteMarks[i][1];
      //let whiteChecker = new Checker('white');
      // console.log(`this is the grid ${this.grid}`)
      this.grid[whiteRow][whiteColumn] = new Checker('white');
    }

    for (let i = 0; i < 12; i++) {
      let blackRow = blackMarks[i][0];
      let blackColumn = blackMarks[i][1];
      // console.log(`this is the grid ${this.grid}`)
      this.grid[blackRow][blackColumn] = new Checker('black');
    }
  }
}
//_______________________________________________________________

class Game {
  constructor(){
    this.beginningBoard = new Board();
  }

  start() {
    this.beginningBoard.createGrid();
    this.beginningBoard.createCheckers();
  }

  movePiece(whichPiece, toWhere){
    const startRow = parseInt(whichPiece.charAt(0));
    const startColumn = parseInt(whichPiece.charAt(1));
    const endRow = parseInt(toWhere.charAt(0));
    const endColumn = parseInt(toWhere.charAt(1));

    isLegalInput = () => {
      const legalStart = ((startRow >= 0 && startRow < 8) && (startColumn >= 0 && startColumn < 8));
      const legalEnd = ((endRow >= 0 && endRow < 8) && (endColumn >= 0 && endColumn < 8));
      if(legalStart && legalEnd){
        return true
      }
    };

    isLegalMove = () => {
      const legalRowMove = (endRow - startRow);
      const legalColumMove = (endColumn - startColumn);
      if(legalRowMove === 1 && legalColumMove === 1){
        return true;
      }else if(legalRowMove === 2 && legalColumMove === 2) {
        return true;
      }else{
        return false;
      }
    };

    if(isLegalInput()){
      if(isLegalMove() && this.board.grid[endRow][endColumn] === null){
        this.beginningBoard.grid[endRow][endColumn] = this.board.grid[startRow][startColumn];
        this.beginningBoard.grid[startRow][startColumn] = null;
      }else{console.log('Illegal Move');}
    }else{console.log('Illegal Input');}
  }
}

//_______________________________________________________________

const getPrompt = () => {
  game.beginningBoard.viewGrid();
  rl.question('which piece?: ', (whichPiece) => {
    rl.question('to where?: ', (toWhere) => {
      game.movePiece(whichPiece, toWhere);
      getPrompt();
    });
  });
}

//_______________________________________________________________

const game = new Game();
game.start();

//_______________________________________________________________
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
