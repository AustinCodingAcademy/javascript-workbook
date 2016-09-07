'use strict';

var assert = require('assert');
var prompt = require('prompt');
prompt.start();


function Checker(color) {
    this.symbol = ((color === 'white')? String.fromCharCode(0x125CB) : String.fromCharCode(0x125CF))
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
    this.checkers = [];
    this.createCheckers = function() {
      var whitePositions =  [[0, 1], [0, 3], [0, 5], [0, 7], [1, 0], [1, 2], [1, 4], [1, 6], [2, 1], [2, 3], [2, 5], [2, 7]];
      var blackPositions =  [[5, 0], [5, 2], [5, 4], [5, 6], [6, 1], [6, 3], [6, 5], [6, 7], [7, 0], [7, 2], [7, 4], [7, 6]];
      //for loop iterating over 12 for each position (white or black)
      for (var i = 0; i < 12; i++) {
        //instantiate a 'white' checker
        var newCheckerWhite = new Checker('white');
        //place that checker on the grid at the position corresponding with the index in the positions array
        //push to checkers array
        this.grid[whitePositions[i][0]][whitePositions[i][1]] = newCheckerWhite;
        this.checkers.push(newCheckerWhite);
        //repeat for a 'black checker'
        var newCheckerBlack = new Checker('black');
        this.grid[blackPositions[i][0]][blackPositions[i][1]] = newCheckerBlack;
        this.checkers.push(newCheckerBlack);
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
    this.selectChecker = function(row, column) {
      return this.grid[row][column];
    }
}
function Game() {

    this.board = new Board();

    this.start = function() {
        this.board.createGrid();
        this.board.createCheckers();
    }
    //takes a start and end as 40, 50
    this.moveChecker = function(start, end) {
      //split the string into an array
      var startingPosition = start.split('');
      var endingPosition = end.split('');
      //select the checker at the starting position and set it equal to checker
      var checker = this.board.selectChecker(startingPosition[0], startingPosition[1]);
      //set the selected spot on the board to null
      this.board.grid[startingPosition[0]][startingPosition[1]] = null;
      this.board.grid[endingPosition[0]][endingPosition[1]] = checker;
      //find distance betwen start and row, 2
      var absoluteDistance = this.rowDistance(startingPosition[0], endingPosition[0]);
      if (absoluteDistance === 2) {
        var killPosition = this.midpoint(start, end);
        console.log(killPosition + " this is killPosition");
        this.killChecker(killPosition);
      }
    }
    this.midpoint = function(x, y) {
      //add x and y together, then divide by 2 and split
      //take startingrow and endingrow, add together and divide by 2
      var midpoint = (x + y)/2;
    }
    this.rowDistance = function(x, y) {
      var numX = Number(x);
      var numY = Number(y);
      var absoluteDistance = ((numX > numY)? (numX - numY) : (numY - numX));
      return absoluteDistance;
    }
    this.killChecker = function(position) {
      var positionSplit = position.split('');
      var selectedChecker = this.board.selectChecker(positionSplit[0], positionSplit[1]);
      console.log(selectedChecker);
      //find the index of selectedChecker in the checkers array
      var checkerIndex = this.board.checkers.indexOf(selectedChecker);
      console.log(checkerIndex + " this is checkerIndex");
      //splice out the location of the selectedChecker from the checkers array
      this.board.checkers.splice(checkerIndex);
      //assign the position on the grid to null
      this.board.grid[positionSplit[0]][positionSplit[1]] = null;
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
