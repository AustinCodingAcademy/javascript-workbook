'use strict';

var assert = require('assert');
var prompt = require('prompt');
prompt.start();


function Checker(color) {
    this.color = color;
    // Your code here
    if (color === 'white'){
      this.symbol = String.fromCharCode(0x125CB);
    }
    else{
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
      //starting positions
      var whitePositions = [[0, 1], [0, 3], [0, 5], [0, 7],
                            [1, 0], [1, 2], [1, 4], [1, 6],
                            [2, 1], [2, 3], [2, 5], [2, 7]];
      var blackPositions = [[5, 0], [5, 2], [5, 4], [5, 6],
                            [6, 1], [6, 3], [6, 5], [6, 7],
                            [7, 0], [7, 2], [7, 4], [7, 6]];
      //create white checkers and place at specified positions
      for (var i = 0; i <= 11; i++){
        var checker = new Checker("white");
        var position = whitePositions[i];
        this.grid[position[0]][position[1]] = checker;
        this.checkers.push(checker);
      }
      //create black checkers and add to grid
      for (var i = 0; i <= 11; i++){
        var checker = new Checker("black");
        var position = blackPositions[i];
        this.grid[position[0]][position[1]] = checker;
        this.checkers.push(checker);
      }
    };

    this.selectChecker = function(row, column){
      return this.grid[row][column];
    };

    this.killChecker = function(position){
      var checker = this.selectChecker(position[0], position[1]);
      var checkerIndex = this.checkers.indexOf(checker);
      this.checkers.splice(checkerIndex, 1);
      this.grid[position[0]][position[1]] = null;
    };

}

function Game() {

    this.board = new Board();

    this.start = function() {
        this.board.createGrid();
        // Your code here
        this.board.createCheckers();
    }

    //start and end are each two digits that represent rowcolumn
    this.moveChecker = function(start, end){
      var startrow = Number(start.charAt(0));
      var startcol = Number(start.charAt(1));
      var endrow = Number(end.charAt(0));
      var endcol = Number(end.charAt(1));
      //check move before proceeding
      var isLegal = this.isLegalMove([startrow, startcol], [endrow, endcol]);
      if (!isLegal[0]){
        console.log("invalid move. " + isLegal[1]);
        return;
      };

      var checker = this.board.selectChecker(startrow, startcol);
      this.board.grid[startrow][startcol] = null;
      this.board.grid[endrow][endcol] = checker;
      //check for kill
      if (Math.abs(startrow - endrow) === 2){
        var killPosition = [(startrow + endrow)/2, (startcol + endcol)/2];
        this.board.killChecker(killPosition);
      }
    };

    //start and end are positions in the form [row, column]
    this.isLegalMove = function(start, end){
      var myChecker = this.board.selectChecker(start[0], start[1]);
      //start position must have checker
      if (myChecker === null){ return false;}
      //must move diagonally
      var rowDistance = Math.abs(start[0] - end[0]);
      var colDistance = Math.abs(start[1] - end[1]);
      if (rowDistance !== colDistance || rowDistance > 2){
        return [false, "not diagonal"];
      }
      //white must move down
      if (myChecker.color === "white"){
        if(start[0] >= end[0]){
          return [false, "white can't move that way"];
        };
      }
      //black must move up
      else {
        if(start[0] <= end[0]){
          return [false, "black can't move that way"];
        };
      };

      //end position must start empty
      var landing = this.board.selectChecker(end[0], end[1]);
      if (landing !== null){
        return [false, "can't land on a checker"];
      }

      //jumps must have a victim in the middle
      if (rowDistance === 2){
        var victim = this.board.selectChecker( (start[0] + end[0]) / 2, (start[1] + end[1]) / 2);
        if (victim === null){
          return [false, "can't jump an empty space"];
        }
      }

      //no violations found
      return [true, "valid"];
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
