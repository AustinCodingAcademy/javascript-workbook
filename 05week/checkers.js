'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function Checker(color) {
    this.color = color;
    if (this.color === 'white') {
        this.symbol = String.fromCharCode(0x125CB)
    } else {
        this.symbol = String.fromCharCode(0x125CF)
    }
}

function Board() {
    this.checkers = [];
    this.grid = [];
    // creates an 8x8 array, filled with null values
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
        // add our column numbers
        let string = "  0 1 2 3 4 5 6 7\n";
        for (let row = 0; row < 8; row++) {
            // we start with our row number in our array
            const rowOfCheckers = [row];
            // a loop within a loop
            for (let column = 0; column < 8; column++) {
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
    // this is creating the white checker locations
    this.createCheckers = function() {
        let whitePositions = [
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
        // this is creating black checker locations
        let blackPositions = [
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

        for (let i = 0; i <= 11; i++) {
            let whiteChecker = new Checker('white');
            this.checkers.push(whiteChecker);
            let coordinate = whitePositions[i];
            this.grid[coordinate[0]][coordinate[1]] = whiteChecker;
        }
        for (let i = 0; i <= 11; i++) {
            let blackChecker = new Checker('black');
            this.checkers.push(blackChecker);
            let coordinate = blackPositions[i];
            this.grid[coordinate[0]][coordinate[1]] = blackChecker;
        }

        this.selectChecker = function(row, col) {
          return this.grid[row][col];
        }

    }
    this.killChecker = function(position) {
        // selects the checker
        let checker = this.selectChecker(position[0], position[1]);
        // finds the index of the checker
        let indexChecker = this.checkers.indexOf(checker);
        // removes the selected checker from array checkers
        this.checkers.splice(indexChecker, 1);

        this.grid[position[0]][position[1]] = null;

    }
}

function Game() {

    this.board = new Board();

    this.start = function() {
        this.board.createGrid();
        // Your code here
        this.board.createCheckers();
    };

    this.moveChecker = function(start, end) {

        let checker = this.board.selectChecker(start[0], start[1]);
        this.board.grid[end[0]][end[1]] = checker;
        this.board.grid[start[0]][start[1]] = null;
        let distance = start[0] - end[0];
        if (Math.abs(distance) === 2) {
            // Calculates the midPoint if the absolute distance between two coordinates
            let midRow = (Number(start[0]) + Number(end[0])) / 2;
            let midCol = (Number(start[1]) + Number(end[1])) / 2;
            let midPosition = [midRow, midCol];
            this.board.killChecker(midPosition);
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

const game = new Game();
game.start();


// Tests

if (typeof describe === 'function') {
    describe('Game', () => {
        it('should have a board', () => {
            assert.equal(game.board.constructor.name, 'Board');
        });
        it('board should have 24 checkers', () => {
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
        it('should be able to jump over and kill another checker', () => {
            game.moveChecker('30', '52');
            assert(game.board.grid[5][2]);
            assert(!game.board.grid[4][1]);
            assert.equal(game.board.checkers.length, 23);
        });
    });
} else {
    getPrompt();
}
