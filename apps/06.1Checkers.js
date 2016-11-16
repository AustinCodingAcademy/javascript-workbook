'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//we need to pass in a string into this class function
//the value will be either 'white' or 'black'
//it will only be one fo these two words
function Checker(color) {
    // Your code here
    //here i need to set the property called 'symbol'
    //  this.symbol = null;
    if (color === 'white') {
        this.symbol = String.fromCharCode(0x125CB);
    } else {
        this.symbol = String.fromCharCode(0x125CF);
    }
}
//  this.createCheckers
//but i cant just set it outright
//if the color is white set it to String.fromCharCode(0x125CB)
//if the color is other set symbol to String.fromCharCode(0x125CF)


function Board() {

    this.killChecker = function(position) {
            var checker = this.selectChecker(position[0], position[1]);
            var indexofthechecker = this.checkers.indexOf(checker);
            this.checkers.splice(indexofthechecker,1)
            this.grid[position[0]][position[1]] = null;
        }

        //assign this.grid to null
        //useindex of to find the index of that checker in the this.checkers array
        //then remote it by .splic()ing it it
        //then assign the position on this.grid to null. That checker is dead.
        //create a propery and give it an empty array
    this.checkers = [];

    //create a method called 'createCheckers'
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
        //how do i put a checker on the grid
        //for example row 0, column 0 put an X
        //to put a checker on the grid:
        //we notice that we need to do something for everything that is inside of the arrays above

        for (var i = 0; i < whitePositions.length; i++) {

            var position = whitePositions[i];

            //what is in position
            //an array with something like [0,1]
            var row = position[0];
            var column = position[1];
            //what is the point of having a reference to position
            //to get the row and column out of it

            //now what do i do with row and column
            //Instantiate a 'white' Checker \/
            var checker = new Checker("white");
            //i cant hard code the row and column
            //where do i dynamically get row and column

            this.grid[row][column] = checker;

            this.checkers.push(checker);

        }

        for (var i = 0; i < blackPositions.length; i++) {

            var position = blackPositions[i];

            //what is in position
            //an array with something like [0,1]
            var row = position[0];
            var column = position[1];
            //what is the point of having a reference to position
            //to get the row and column out of it

            //now what do i do with row and column
            //Instantiate a 'white' Checker \/
            var checker = new Checker("black");
            //i cant hard code the row and column
            //where do i dynamically get row and column
            //grid[row][column] = checker;

            this.grid[row][column] = checker;

            this.checkers.push(checker);

        }

        //Push the checker into your this.checkers array
        //checkers.push(checker);



    }



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

    // Your code here
    this.selectChecker = function(row, column) {
        return this.grid[row][column];
    }
}

function Game() {

    this.board = new Board();

    this.start = function() {
        this.board.createGrid();
        // Your code herethis.board.createCheckers()
        this.board.createCheckers();

    this.moveChecker = function(start, end) {
        //we need to send in row and column to selectChecker
        var startrow = start.split('')[0];
        var startcolumn = start.split('')[1];

        var endrow = end.split('')[0];
        var endcolumn = end.split('')[1];

        var distance = Math.abs(startrow - endrow);

        if (distance === 2) {
            var killrow = (parseInt(startrow) + parseInt(endrow)) / 2;
            var killcolumn = (parseInt(startcolumn) + parseInt(endcolumn)) / 2;
            var killPosition = [killrow, killcolumn];
            this.board.killChecker(killPosition);
        }
        var checker = this.board.selectChecker(startrow, startcolumn);
      this.board.grid[endrow][endcolumn] = checker;

        //we are removing the checker from the grid
        //the grid is in a property called "grid"
        //we represent removing it by setting the row/column to null

        this.board.grid[startrow][startcolumn] = null;
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
