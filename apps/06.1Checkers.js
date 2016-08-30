'use strict';

var assert = require('assert');
var prompt = require('prompt');
prompt.start();

function Checker(color) {
  if (color === 'white')  {
    this.symbol = String.fromCharCode(0x125CB);
    return this.symbol;
  }
  else {
    this.symbol = String.fromCharCode(0x125CF);
    return this.symbol;
  }
}


function Board() {
    this.grid = [];
    // creates an 8x8 array, filled with null values
    this.createGrid = function() {
        // loop to create the 8 rows
        for (var row = 0; row < 8; row++) {
            this.grid[row] = [];
            // push in 8 columns of nulls
            for (var column = 0; column < 8; column++) {
                this.grid[row].push(null);
            }
        }
    };

    // prints out the board
    this.viewGrid = function() {
        // add our column numbers
        var string = "  0 1 2 3 4 5 6 7\n";
        for (var row = 0; row < 8; row++) {
            // we start with our row number in our array
            var rowOfCheckers = [row];
            // a loop within a loop
            for (var column = 0; column < 8; column++) {
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



    this.checkers = [];


    this.createCheckers = function () {
      var whitePositions = new Checker('white');
      var blackPositions = new Checker('black');
      // var whitePositions = this.grid[row][column];
      for (var x = 0; x <= 2; x++)  {
        for (var y = 1; y <= 7; y+2)  {

          // return whitePositions;
          if (x === 1)  {
            // whitePositions = [x][y-x];
            this.grid[x][y-x] = Checker(whitePositions);
          }
          else {
            // whitePositions = [x][y];
            this.grid[x][y] = Checker(whitePositions);
          }
        }
      }

      for (var a = 5; a <= 7; a++)  {
        for (var b = 1; b <= 7; b+2)  {


          if (a === 6)  {
            // blackPositions = [a][b];
            this.grid[a][b] = Checker(blackPositions);
          }
          else {
            // blackPositions = [a][b-1];
            this.grid[a][b-1] = Checker(blackPositions);
          }
        }
      }

    };
}
function Game() {

    this.board = new Board();

    this.start = function() {
        this.board.createGrid();
        this.board.createCheckers();
    };
}

function getPrompt() {
    game.board.viewGrid();
    prompt.get(['which piece?', 'to where?'], function (error, result) {
        game.moveChecker(result['which piece?'], result['to where?']);
        getPrompt();
    });
}

var game = new Game();
game.start();


// Tests

if (typeof describe !== 'undefined') {
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
            assert(!game.board.grid[4][1])
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
