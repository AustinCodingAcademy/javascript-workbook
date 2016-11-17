'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// we need to pass in a string into this class function
//the value will be either 'white' or 'black'
//it will only be one of these two words
function Checker(color) {
    // Your code here
    if (color === 'white') {
        this.symbol = String.fromCharCode(0x125CB)
    } else {
        this.symbol = String.fromCharCode(0x125CF)
    }

    // Here I need to set the property called "symbol"
    // but I can't just set it outright'
    //if the color is white set it to String.fromCharCode(0x125CB)
    // if the color is black set it to symbol ...

} // end function Checker

function Board() {
    //that take a single argument called position
    //which is a coordinate pair, eg. [0,5]
    /*this.kill = function(position) {
            //In it, use this.selectChecker to grab the checker at the position given.
            var checker = this.selectChecker(); //need to send in a row and column

        }
        // create property called "checkers" and assign to it an empty array. */

    //create a method called "createCheckers"
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

            for (var i = 0; i < whitePositions.length; i++) {

                var position = whitePositions[i];

                var row = position[0];
                var column = position[1];

                var checker = new Checker("white");

                this.grid[row][column] = checker;

                this.checkers.push(checker);
            } //for end
            for (var i = 0; i < blackPositions.length; i++) {

                var position = blackPositions[i];

                var row = position[0];
                var column = position[1];

                var checker = new Checker("black");

                this.grid[row][column] = checker;

                this.checkers.push(checker);
            } //for end
        } //end createCheckers
    this.killChecker = function(killPosition) {

            var checker = this.selectChecker(killPosition[0], killPosition[1]);

            var indexofthechecker = this.checkers.indexOf(checker);

            this.checkers.splice(indexofthechecker, 1);
            this.grid[killPosition[0]][killPosition[1]] = null;
        }
        //given code 
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
    this.selectChecker = function(startrow, startcolumn) {
        return this.grid[startrow][startcolumn];
    }
}


// Your code here


function Game() {

    this.board = new Board();

    this.start = function() {
        this.board.createGrid();
        // Your code here
        this.board.createCheckers()
    };

    this.moveChecker = function(start, end) {


            var startrow = start.split('')[0];
            var startcolumn = start.split('')[1];

            var checker = this.board.selectChecker(startrow, startcolumn);

            var endrow = end.split('')[0];
            var endcolumn = end.split('')[1];

            //check to see if the distance of the start row and the end row is 2 
            //by finding the absolute value of the difference between the rows.

            var distance = Math.abs(startrow - endrow);

            if (distance === 2) {
                var killrow = (parseInt(startrow, 10) + parseInt(endrow, 10)) / 2;

                var killcolumn = (parseInt(startcolumn) + parseInt(endcolumn)) / 2;

                var killPosition = [killrow, killcolumn];
                console.log(killPosition);
                this.board.killChecker(killPosition);
            } //end if

            this.board.grid[startrow][startcolumn] = null;
            this.board.grid[endrow][endcolumn] = checker;


        } // end moveChecker function
} // end Game function

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