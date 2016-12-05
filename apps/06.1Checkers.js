'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function Checker(color) {
    // Your code here - this is done
    if (color === "white") {
        this.symbol = String.fromCharCode(0x125CB);
    } else {
        this.symbol = String.fromCharCode(0x125CF);
    }
};

function Board() {
    this.selectChecker = function(row, column) {
            return this.grid[row][column];
        }
        // we did the following in class:
    this.killChecker = function(position) {

          var startRowColumnArray = position[0];
          var endRowColumnArray = position[1];

            var checker = this.selectChecker(startRowColumnArray, endRowColumnArray);

            // indexOfto find number to splice
            var randomForSplice = this.checkers.indexOf(checker);
            this.checkers.splice(randomForSplice, 1);
            this.grid[startRowColumnArray][endRowColumnArray] = null;
        }
        //create property called "checkers" etc...
    this.checkers = [];
    //create method called "createCheckers" etc ...
    this.createCheckers = function() {
            var whitePositions = [
                [0, 1],
                [0, 3],
                [0, 5],
                [0, 7],
                [1, 0],
                [1, 2],
                [1, 4],
                [1, 6],
                [2, 1],
                [2, 3],
                [2, 5],
                [2, 7]
            ];
            var blackPositions = [
                [5, 0],
                [5, 2],
                [5, 4],
                [5, 6],
                [6, 1],
                [6, 3],
                [6, 5],
                [6, 7],
                [7, 0],
                [7, 2],
                [7, 4],
                [7, 6]
            ];
            //how do i put a checker on a gridspot?

            for (var i = 0; i < whitePositions.length; i++) {
                var newChecker = new Checker('white');
                this.grid[whitePositions[i][0]][whitePositions[i][1]] = newChecker;
                this.checkers.push(newChecker);
            }
            for (var i = 0; i < blackPositions.length; i++) {
                var newChecker = new Checker('black');
                this.grid[blackPositions[i][0]][blackPositions[i][1]] = newChecker;
                this.checkers.push(newChecker);
            }
        }
        //below is ok:
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
    }
};

function Game() {
    this.board = new Board();
    this.start = function() {
        this.board.createGrid();
        this.board.createCheckers();
    };

    this.moveChecker = function(start, end) {
      var startRowColumnArray = start.split('');
      var endRowColumnArray = end.split('');
      var chosenChecker = this.board.selectChecker(startRowColumnArray[0],
        startRowColumnArray[1]);
        console.log("cc", chosenChecker);
        console.log("column array", endRowColumnArray);
        console.log("start RowColumnarray", startRowColumnArray);

      this.board.grid[endRowColumnArray[0]][endRowColumnArray[1]] = chosenChecker;
      if (Math.abs(startRowColumnArray[0] - endRowColumnArray[0]) === 2) {
        var killPosition = [((parseInt(startRowColumnArray[0]) +
        parseInt(endRowColumnArray[0])) / 2),
        ((parseInt(startRowColumnArray[1]) + parseInt(endRowColumnArray[1])) / 2)];
        this.board.killChecker(killPosition);
        }

    }

    // this.selectChecker = new SelectChecker();
// this.moveCheck = function(start, end) {
//     var startrow = start.split("")[0];
//     var startcolumn = start.split("")[1];
//     var checker = this.board.selectChecker(startrow, startcolumn);
//     this.board.grid[startrow][startcolumn] = null;
// }
};

function getPrompt() {
    game.board.viewGrid();
    rl.question('which piece?: ', (whichPiece) => {
        rl.question('to where?: ', (toWhere) => {
            game.moveChecker(whichPiece, toWhere);
            getPrompt();
        });
    });
}
// This is where I moved the var to from the end of this code:
var game = new Game();
game.start();



// Tests

if (typeof describe === 'function') {
    describe('Game', function() {
        it('should have a board', function() {
            assert.equal(game.board.constructor.name, 'Board');
        });
        it('board should have 24 checkers', function() {
            assert.equal(game.board.checkers.length, 24);
        });
    });

    describe('Game.moveChecker()', function() {
        it('should move a checker', function() {
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
