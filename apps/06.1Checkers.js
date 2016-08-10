'use strict';

var assert = require('assert');
var prompt = require('prompt');
prompt.start();


function Checker(color) {
  // Your code here
  this.symbol = color === "white" ? String.fromCharCode(0x125CB) : String.fromCharCode(0x125CF);
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
    }

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
    }

    // Your code here
    this.checkers = [];

    this.createCheckers = function(){
      var whitePositions = [
        [0, 1], [0, 3], [0, 5], [0, 7],
        [1, 0], [1, 2], [1, 4], [1, 6],
        [2, 1], [2, 3], [2, 5], [2, 7]
      ];
      var blackPositions = [
        [5, 0], [5, 2], [5, 4], [5, 6],
        [6, 1], [6, 3], [6, 5], [6, 7],
        [7, 0], [7, 2], [7, 4], [7, 6]
      ];

      for(var i = 0; i < whitePositions.length; i++){
        var row = whitePositions[i][0];
        var col = whitePositions[i][1];
        this.checkers.push(new Checker("white"));
        this.grid[row][col] = this.checkers[this.checkers.length - 1];

        row = blackPositions[i][0];
        col = blackPositions[i][1];
        this.checkers.push(new Checker("black"));
        this.grid[row][col] = this.checkers[this.checkers.length - 1];
      }

    }

    this.selectChecker = function(row, col){
      return this.grid[row][col];
    }

    this.killChecker = function(position){
      var checker = this.grid[position[0]][position[1]];
      var index = this.checkers.indexOf(checker);
      this.checkers.splice(index, 1);
      this.grid[position[0]][position[1]] = null;
    }
}
function Game() {

    this.board = new Board();

    this.start = function() {
        this.board.createGrid();
        // Your code here
        this.board.createCheckers();
    }

    this.moveChecker = function(start, end){
      var startRow = parseInt(start[0]);
      var startCol = parseInt(start[1]);
      var endRow   = parseInt(end[0]);
      var endCol   = parseInt(end[1]);

      var checker = this.board.selectChecker(startRow, startCol);

      this.board.grid[startRow][startCol] = null;
      this.board.grid[endRow][endCol] = checker;

      if(Math.abs(endRow - startRow) === 2 && Math.abs(endCol - startCol) === 2){
        var row = (startRow + endRow) / 2;
        var col = (startCol + endCol) / 2;
        var position = [row, col];
        this.board.killChecker(position);
      }
    }
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
