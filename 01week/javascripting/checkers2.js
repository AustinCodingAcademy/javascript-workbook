'use strict';

let assert = require('assert');
let readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function Checker(color) {
  //Passes in the color as an argument, function Checker(color) { ... and set the Checker instance's this.symbol. if the color is 'white, set this.symbol equal to String.fromCharCode(0x125CB), otherwise set it equal to String.fromCharCode(0x125CF)//
  if(color === 'white') {
    this.symbol = String.fromCharCode(0x125CB);
  } else {
    this.symbol = String.fromCharCode(0x125CF);
  }
}

function Board() {
  //Board class, writes killChecker that takes a single argument position. index of that checker is in the this.checkers array. removed by .splice()ing it out.
  this.killChecker = function(position) {
    let row = position[0];
    let column = position[1];
    let checker = this.selectChecker(position[0], position[1]);
    let indexofthechecker = this.checkers.indexOf(checker)
    this.checkers.splice(indexofthechecker,1)
    this.grid[row][column] = null;
  }
  this.checkers = [];
  // attribute called this.checkers is assigned to an empty array.//
  this.grid =;
  // creates an 8x8 array, filled with null values
  //defines starting positions of the checkers on the grid- defines whitePositions and blackPositions as array of [row, column] coordinates:

  this.createCheckers = function() {
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

    for(let i = 0; i <= 11; i++) {
      let whiteChecker = new 'white' checker;
      let blackChecker = new 'black' checker;
      let indexOftheChecker = this.checkers.indexOf(checker)
      this.checkers.splice(indexOftheChecker, 1)
    }
  }
  //returns chosen checker at that particular spot on this.grid.//
  this.selectChecker = function(row, column) {
    return this.grid[row][column];
  }

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

  // prints out the board
  this.viewGrid = function() {
    // add column numbers
    let string = "  0 1 2 3 4 5 6 7\n";
    for (let row = 0; row < 8; row++) {
      // start with row number in array
      let rowOfCheckers = [row];
      // loop within a loop
      for (let column = 0; column < 8; column++) {
        // if the location is "truthy" (contains a checker piece)
        if (this.grid[row][column]) {
          // push the symbol of the check in that location into the array
          rowOfCheckers.push(this.grid[row][column].symbol);
        } else {
          //push in a blank space
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

  function Game() {
    this.board = new Board();
    this.start = function() {
      this.board.createGrid();
      // Your code here
      this.board.createCheckers();
    }
    //this.moveChecker method that takes two parameters start, end. These two arguments will each contain a row and a column, eg. 50, 41. Inside the method, use your board helper method selectChecker to select the checker at your starting rowcolumncoordinates and set it to a local letiable checker. Then set that spot on the grid to null and set the spot at the end rowcolumn coordinate to the checker.
    this.moveChecker = function(start, end){
      let checker = this.board.selectChecker[start[0], start[1]];
      this.board.grid[start] = null;
      let startrow = end.split('')[0];
      let startcolumn = end.split('')[1];
      let endrow = end.split('')[0];
      let endcolumn = end.split('')[1];
      this.board.grid[end] = checker;

      //In the Game class, in the moveChecker method, after you have moved the checker, check to see if the distance of the start row and the end row is 2 by finding the absolute value of the difference between the rows. If so, which means you must have jumped a checker, find the killPostition by finding the midpoint between the start and end positions. Then killChecker.
      let difference = startrow - endrow;
      let distance = Math.abs(distance);
      if(distance === 2){
        let killrow = (parseInt(startrow) + parseInt(endrow)) / 2;
        let killcolumn = (parseInt(startcolumn) + parseInt(endcolumn)) / 2;
        let killPosition = [killrow, killcolumn];
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

  let game = new Game();
  game.start();


  // Tests===================================================

  if (typeof describe === 'function') {
    describe('Game', function() {
      it('should have a board', function() {
        assert.equal(game.board.constructor.name, 'Board');
      });
      it('board should have 24 checkers', function() {
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
      it('should be able to jump over and kill another checker', function() {
        game.moveChecker('30', '52');
        assert(game.board.grid[5][2]);
        assert(!game.board.grid[4][1]);
        assert.equal(game.board.checkers.length, 23);
      });
    });
  } else {
    getPrompt();
  }
