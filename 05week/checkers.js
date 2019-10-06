'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function Checker() {
  // Your code here


}

class Board {
  constructor() {
    // Set up pieces and grids
    this.grid = []
    this.redPiece = 'r'
    this.blackPiece = 'b'
    this.checkers = []
    this.playerTurn = 'r'

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

  // Your code here
  initialPosition(){

    // Loop for Red Pieces
    for (let row1 = 0; row1 < 3; row1++) { 
      for (let col1 = 0; col1 < 8; col1 ++) {
        if(row1 % 2 === 0 && col1 % 2 === 1){
          this.grid[row1][col1] = this.redPiece
        }
        if (row1 == 1 && col1 % 2 == 0){
          this.grid[row1][col1] = this.redPiece
        }
  
      }
    }

    // Loop for Black Pieces
    for (let row2 = 5; row2 < 8; row2++) { 
      for (let col2 = 0; col2 < 8; col2 ++) {
        if(row2 % 2 === 1 && col2 % 2 === 0){
          this.grid[row2][col2] = this.blackPiece
        }
        if (row2 == 6 && col2 % 2 == 1){
          this.grid[row2][col2] = this.blackPiece
        }
  
      }
    }

  //   for (let i = 0; i <= 2;) { 
  //     for (let j = 0; j <= 7;) {
  //       this.grid[i,j] = redPiece;
  
  //     }
  //   }

  }

  changePlayer() {
    if (playerTurn == 'b') {
      this.playerTurn = 'r'
    }

    else if (playerTurn == 'r') {
      this.playerTurn = 'b'
    }

    }




  }

  



class Game {
  constructor() {
    this.board = new Board;
  }
  start() {
    this.board.createGrid();
    this.board.initialPosition();
  }

  moveChecker(piece, where) {
    console.log(' ')
    let x = piece.split('')
    let y = where.split('')
    let startRow = x[0]
    let startColumn = x[1]
    let endRow = y[0]
    let endColumn = y[1]
    let trueFalse = true
    let killRow = null
    let killCol = null

    // The legality of the moves:
    // If the placement piece is filled
    // if the moving piece has something in it
    // if the row/column are different (cant move up, down, left, right)
    if (this.board.grid[endRow][endColumn] == null &&
      this.board.grid[startRow][startColumn] != null && 
      endRow != startRow && endColumn != startColumn) {

        // Red King Pieces
        if (this.board.grid[startRow][startColumn] == 'R') {
          this.board.grid[startRow][startColumn] = null
          this.board.grid[endRow][endColumn] = 'R'
        }
        // Black King Pieces
        else if (this.board.grid[startRow][startColumn] == 'B') {
          this.board.grid[startRow][startColumn] = null
          this.board.grid[endRow][endColumn] = 'B'
        }
        // Normal Pieces
        else if (this.board.grid[startRow][startColumn] == 'r' || 
        this.board.grid[startRow][startColumn] == 'b') {
          this.board.grid[startRow][startColumn] = null
          this.board.grid[endRow][endColumn] = this.board.playerTurn
        }
        // else if () {

        // }


        // Invalid Moves
        else {
          console.log('Invalid Move')
          trueFalse = false
        }



        if (trueFalse == true) {
          Board.changePlayer()
        }
        game.king()
    }


    
  }


  // [7, 0], [7, 2], [7, 4], [7, 6] for Red Kings
  // [0, 1], [0, 3], [0, 5], [0, 7] for Black Kings
  king() {
    for(let w = 0; w < 7; w+=2){
      if (this.board.grid[7][w] == 'r'){
        this.board.grid[7][w] = 'R'
        
      }

    }
    for(let z = 1; z < 8; z+=2){
      if (this.board.grid[0][z] == 'b'){
        this.board.grid[0][z] = 'B'
        
      }

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
