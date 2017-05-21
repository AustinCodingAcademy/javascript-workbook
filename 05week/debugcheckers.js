



'use strict';

// const assert = require('assert');
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });


function Checker(color) {
  if(color === 'white'){
    this.symbol = String.fromCharCode(0x125CF);
  } else{
    this.symbol =String.fromCharCode(0x125CB);
  }
  // (this.color === 'white')?this.symbol = String.fromCharCode(0x125CB):this.symbol = String.fromCharCode(0x125CF)
  // // Your code here
}

//Places checkers at starting points, working on moving
function Board() {
  this.grid = [];
  this.checkers = [];
  // const whiteChecker = new Checker('white');
  // const blackChecker = new Checker('black');

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

  this.createCheckers = function(){
    let whitePositions = [
      [0, 1], [0, 3], [0, 5], [0, 7],
      [1, 0], [1, 2], [1, 4], [1, 6],
      [2, 1], [2, 3], [2, 5], [2, 7]
    ];


    let blackPositions = [
      [5, 0], [5, 2], [5, 4], [5, 6],
      [6, 1], [6, 3], [6, 5], [6, 7],
      [7, 0], [7, 2], [7, 4], [7, 6]
    ];
    // for(let i = 0; i < 11; i ++){
      const blackChecker = new Checker('black');
      const whiteChecker = new Checker('white');
    //   this.checkers.push(whitePositions[i][row][col]);


  for(let i = 0; i < whitePositions.length; i ++){

    let a = whitePositions[i][0];
    let b = whitePositions[i][1];
    this.grid[a][b]= new Checker('white');

    let c = blackPositions[i][0];
    let d = blackPositions[i][1];
    this.grid[c][d]= new Checker('black');

  }
}//createCheckers
  this.selectChecker = function(row, col){
      return this.grid[row][col];
    };


    this.grid[whitePositions[2]] = whiteChecker;
    console.log((whitePositions[2][0][whitePositions[2][1]]));
    console.log(blackPositions[1].length);




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

  // Your code here
}//board


  // Your code here

function Game() {

  this.board = new Board();

  this.start = function() {
    this.board.createGrid();
    board.createCheckers();
    game.viewGrid();
  };


  this.moveChecker = function(start, end){
      console.log(start, end);

      let startrow = start.toString().split('')[0];
      let startcol = start.toString().split('')[1];
      let endrow  = end.toString().split('')[0];
      let endcol = end.toString().split('')[1];

      console.log(this.board.selectChecker(startrow,startcol));

      let checker = this.board.selectChecker(startrow, startcol);
      console.log(this.board.grid[startrow][startcol]);
      this.board.grid[startrow][startcol] = null;
      this.board.grid[endrow][endcol] = checker;

  };

// function getPrompt() {
//   game.board.viewGrid();
  // rl.question('which piece?: ', (whichPiece) => {
  //   rl.question('to where?: ', (toWhere) => {
    //   game.moveChecker(whichPiece, toWhere);
    //   getPrompt();
    // };




// const game = new Game();
// game.start();
// board.createCheckers();
// game.viewGrid();
// game.moveChecker(52,43);
// game.viewGrid();
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
  // getPrompt();
}
}
