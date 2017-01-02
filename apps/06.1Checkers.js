'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


//we need to pass in a string into this class function
//value will be 'white' or 'black'
//only one of these two words
function Checker(color) {
    // Your code here
    //property called symbol
    //but i cant just set it outright, if the color is white set it to String.fromCharCode(0x1<unicode>)
    //if color is black set the symbol to String.fromCharCode(0x125CF)
    if (color === 'white') {
        this.symbol = String.fromCharCode(0x125CB);
    } else {
        this.symbol = String.fromCharCode(0x125CF);
    }
}

function Board() {
    //create propery called checkers and assign it to an empty array
    //create method called 'createCheckers'
    this.checkers = [];
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
        //need to put something in these above positions
        for (var i = 0; i < whitePositions.length; i++) {
            //cant hardcode row and col, where do i dynamictly row and col
            var position = whitePositions[i];
            //what is in position, an array with something like [0,1]
            var row = position[0];
            var col = position[1];
            //these are positions of each row, first.. then col, second.
            //to get row and column out of it
            var checker = new Checker('white');
            this.grid[row][col] = checker;
            this.checkers.push(checker);
        }
        ////blackcheckrs/////
        for (var i = 0; i < blackPositions.length; i++) {

            //cant hardcode row and col, where do i dynamictly row and col
            var position = blackPositions[i];
            //what is in position, an array with something like [0,1]
            var row = position[0];
            var col = position[1];

            var checker = new Checker('black');
            this.grid[row][col] = checker;
            //these are positions of each row, first.. then col, second.
            //to get row and column out of it
            this.checkers.push(checker);

        }
        //how do i put a checker on the grid
        //for example row 0 column 0 put an x


        // checkers.push(checkers);
        // checkers.push(checker);
    };
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
    this.selectChecker = function(row, column) {
        return this.grid[row][column];

    };
    this.killChecker = function(position) {

        var checker = this.selectChecker(position[0], position[1]);

        var name = this.checkers.indexOf(checker);

        this.checkers.splice(name, 1);

        this.grid[position[0]][position[1]] = null;
        //In your Board class, write a method killChecker that take a single argument position which is a coordinate pair, eg. [0, 5].
        //In it, use this.selectChecker to grab the checker at the position given.
        //Find the index of that checker in the this.checkers array. then remove it by .splice()ing it out.
        //Then assign the position on this.grid to null. That checker is dead.

    };
    // Your code here
}

function Game() {

    this.board = new Board();

    this.start = function() {
        this.board.createGrid();
        // Your code here
        this.board.createCheckers();
        //start might look like this 40, end might look like this 52.
    };
    this.moveChecker = function(start, end) {
        //we need to send in row and col to select checker
        //"4" "0"
        var startrow = start.split('')[0];
        var startcol = start.split('')[1];
        var endrow = end.split('')[0];
        var endcol = end.split('')[1];
        var sum = startrow + endrow;
        var checker = this.board.selectChecker(startrow, startcol, endrow, endcol);
        //we are removing checker from grid, grid is in property called grid
        this.board.grid[startrow][startcol] = null;
        this.board.grid[endrow][endcol] = checker;


        var distance = Math.abs(startrow - endrow);
        if (distance === 2){
          var killrow = (parseInt(startrow) + parseInt(endrow)) /2;
          var killcol = (parseInt(startcol) + parseInt(endcol)) /2;
          var killposition = [killrow, killcol];

          this.board.killChecker(killposition);
        }
    };

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
