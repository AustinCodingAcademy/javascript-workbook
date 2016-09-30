'use strict';

var assert = require('assert');
var prompt = require('prompt');
prompt.start();


function Checker( color ) {
    var symbol;

    // Your code here
    if (color === 'white') {
      this.symbol = String.fromCharCode(0x125CB);
    } else {
      this.symbol = String.fromCharCode(0x125CF);
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

      var jump = false;
      var tab  = true;

      for (var row = 0; row < 8; row++) {

          // a loop within a loop
          for (var column = 0; column < 8; column++) {

              // jump and insert white positions
                if (jump) {
                    if (row <= 2 ) {
                      var newChecker  = new Checker('white');
                    } else {
                      if (row >=5) {
                        var newChecker  = new Checker('black');
                      } else {
                        var newChecker = null;
                      }
                    }
                    // push the symbol color
                    // rowOfCheckers.push(color);
                    if (newChecker) {
                      if (tab) {this.grid[row][column] = newChecker;
                      } else {
                        this.grid[row][column - 1] = newChecker;
                      }
                      this.checkers.push(newChecker);
                    }
                }
              jump = !jump;
          }
          tab = !tab;
      }
    }

    this.selectChecker = function(row, column){
      return this.grid[row][column];
    }

    this.setChecker = function(row, column, object){
      this.grid[row][column] = object;
    }

    this.killChecker = function(position){

      var row     = position[0];
      var column  = position[1];
      var checher = this.selectChecker(row, column);
      var pos = this.checkers.indexOf(checher);

      if  (pos > -1) {
         this.checkers.splice(pos,1);
      }
      this.grid[row][column] = null;
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

        // get the checher
        var row1     = start[0];
        var column1  = start[1];
        var checker = this.board.selectChecker(row1, column1);

        // Clear the space
        this.board.setChecker(row1, column1, null);

        // Move to the end point
        var row2     = end[0];
        var column2  = end[1];
        this.board.setChecker(row2, column2, checker);

        if (( Math.abs(row1 - row2) === 2 ) || ( Math.abs(column1 - column2) === 2 ) ) {
          // Jumped the checker
          var xKillPostition = ((Number(row1) + Number(row2)) / 2 );
          var yKillPostition = ((Number(column1) + Number(column2)) / 2 );

          var position = xKillPostition.toString() + yKillPostition.toString();

          this.board.killChecker(position);

        }
    }


}  // End class game

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
