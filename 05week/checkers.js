'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let checkerPieceRed   = {symbol: 'red', onBorad: true};
let checkerPieceBlack = {symbol: 'black', onBorad: true};


function Checker() {
  // Your code here
  initializeGrid();
}

class Board {
  constructor() {
    this.grid = [];
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
  initializeGrid(){
    let startIndex = 0;
    for (let row = 0; row < 3; row++) {
        for (let column = 0; column < 8; column++) {
          if((row === 0) || (row === 2)){
            if(column%2 !== 0){
              this.grid[row][column] = checkerPieceRed;
            }
          }
          else{
            if(column%2 === 0)
              this.grid[row][column] = checkerPieceRed;
          }
        }
    }
    for (let row = 5; row < 8; row++) {
        for (let column = 0; column < 8; column++) {
          if((row === 5) || (row === 7)){
            if(column%2 === 0){
              this.grid[row][column] = checkerPieceBlack;
            }
          }
          else{
            if(column%2 !== 0){
              this.grid[row][column] = checkerPieceBlack;
            }
          }
        }
    }
    for(let ctr=0; ctr<12;ctr++){
      this.checkers.push(checkerPieceRed);
    }
    for(let ctr=0; ctr<12;ctr++){
      this.checkers.push(checkerPieceBlack);
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
  moveChecker(fromPiece,toPiece){
    let rowF    = ~~(fromPiece/10);
    let columnF = fromPiece%10;
    let rowT    = ~~(toPiece/10);
    let columnT = toPiece%10;

    if((game.board.grid[rowF][columnF] === null) ||
       (game.board.grid[rowT][columnT] !== null))
    {
      console.log('Invalid move.');
      return;
    }
    let fromColor = game.board.grid[rowF][columnF].symbol;
    //let toColor = game.board.grid[rowT][columnT].symbol;
    if(fromColor === 'black')
    {
       if((rowT === (rowF-1)) && 
          ((columnT === (columnF-1)) || (columnT === (columnF+1))))
       {
        game.board.grid[rowT][columnT] = game.board.grid[rowF][columnF];
        game.board.grid[rowF][columnF] = null;
       }
       else if(rowT === (rowF-2)) 
       { 
          if(columnT === (columnF-2)) 
          {
            if(game.board.grid[rowF-1][columnF-1].symbol === 'red')
            {
              game.board.grid[rowT][columnT] = game.board.grid[rowF][columnF];
              game.board.grid[rowF][columnF] = null;
              game.board.grid[rowF-1][columnF-1] = null;
              game.board.checkers.shift();
            }
          }
          else if(columnT === (columnF+2))
          {
            if(game.board.grid[rowF-1][columnF+1].symbol === 'red')
            {
              game.board.grid[rowT][columnT] = game.board.grid[rowF][columnF];
              game.board.grid[rowF][columnF] = null;
              game.board.grid[rowF-1][columnF+1] = null;
              game.board.checkers.shift();
            }
          }
       }
    }
    else if(fromColor === 'red')
    {
       if((rowT === (rowF+1)) && 
          ((columnT === (columnF-1)) || (columnT === (columnF+1))))
       {
        game.board.grid[rowT][columnT] = game.board.grid[rowF][columnF];
        game.board.grid[rowF][columnF] = null;
       }
       if(rowT === (rowF+2)) 
       { 
          if(columnT === (columnF-2)) 
          {
            if(game.board.grid[rowF+1][columnF-1].symbol === 'black')
            {
              game.board.grid[rowT][columnT] = game.board.grid[rowF][columnF];
              game.board.grid[rowF][columnF] = null;
              game.board.grid[rowF+1][columnF-1] = null;
              game.board.checkers.pop();
            }
          }
          else if(columnT === (columnF+2))
          {
            if(game.board.grid[rowF+1][columnF+1].symbol === 'black')
            {
              game.board.grid[rowT][columnT] = game.board.grid[rowF][columnF];
              game.board.grid[rowF][columnF] = null;
              game.board.grid[rowF+1][columnF+1] = null;
              game.board.checkers.pop();
            }
          }
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
