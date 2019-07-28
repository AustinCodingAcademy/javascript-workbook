'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

// The checker pieces
class Checker
{
	constructor( color )
	{
		if ( color === 'red' )
		{
            this.symbol = '\u25CF'; // ●
			this.color = color;	
		}
		else if ( color === 'black' )
		{ 
            this.symbol = '\u25CB'; // ○
            this.color = color;
        }
	}
}

const redChecker = new Checker('red');
const blkChecker = new Checker('black');


// The board and it's in play pieces
class Board
{
	constructor()
	{
		this.grid = [];
        this.redPieces = 0;
		this.blkPieces = 0;
	}

	log()
	{
		console.log('Red pieces: ' + this.redPieces +  ( player === redChecker ? ' <= ' + redChecker.color + '\'s turn: ' + redChecker.symbol : '' ) )
        console.log('Black pieces: ' + this.blkPieces + ( player === blkChecker ? ' <= ' + blkChecker.color + '\'s turn: ' + blkChecker.symbol : '' ) )
        console.log('')
    }

	// method that creates an 8x8 array, filled with null values
	createGrid()
	{
		// loop to create the 8 rows
		for (let row = 0; row < 8; row++)
		{
			this.grid[row] = [];
			// push in 8 columns of nulls
			for (let col = 0; col < 8; col++)
			{
				this.grid[row].push(null);
			}
		}
	}

	viewGrid()
	{
		// add our column numbers
		let string = "\n  0 1 2 3 4 5 6 7\n";

		for ( let row = 0; row < 8; row++ )
		{
			// we start with our row number in our array
			const rowOfCheckers = [row];
			// a loop within a loop
			for ( let col = 0; col < 8; col++ )
			{
				// if the location is "truthy" (contains a checker piece, in this case)
				if (this.grid[row][col])
				{
					// push the symbol of the check in that location into the array
					rowOfCheckers.push(this.grid[row][col].symbol);
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

    setPieces()
    {
        for (let row = 0; row < 3; row++)
        {
			for (let col = 0; col < 8; col++)
            {
				if ( (row % 2 === 0 && col % 2 !== 0) || (row % 2 !== 0 && col % 2 === 0) )
                {
					this.addRedPiece( row, col );
				}
			}
		}
        for (let row = 5; row < 8; row++)
        {
			for (let col = 0; col < 8; col++)
            {
				if ( (row % 2 === 0 && col % 2 !== 0) || (row % 2 !== 0 && col % 2 === 0) )
                {
					this.addBlackPiece( row, col );
				}
			}
		}
    }

	addRedPiece( row, col )
    {
		this.grid[row][col] = redChecker;
		this.redPieces++;
	}

	addBlackPiece( row, col )
    {
		this.grid[row][col] = blkChecker;
		this.blkPieces++;
	}

    playerMove( start, end )
    {
		// coordinates variables
        let startRow = start[0];
        let startCol = start[1];
        let endRow   = end[0];
		let endCol   = end[1];

		// tasks
		const move = 'move';
		const hop  = 'hop';

		// error logs
		let wrongInput    = 'Wrong input ';
		let notOnTheBoard = 'not on the board.'
		let notYourPiece  = 'You have not selected your own piece.';
		let spotTaken     = 'That spot has a piece on it.';
		let invalidPlayer = 'Don\'t know how you got this error.';
		let wrongWay      = 'Going the wrong way.';
		let invalidMove   = 'Not a valid move.';

		// check if two numbers
		if ( typeof start !== 'number' && start.length !== 2 )
		{
			return wrongInput + 'piece: ' + start;
		}
		if ( typeof end !== 'number' && end.length !== 2 )
		{
			return wrongInput + 'move: ' + end;
		}

		// check if on the board
		if ( ( 0 > startRow || startRow > 7 ) || ( 0 > startCol || startCol > 7 ) )
		{
			return 'Piece: ' + start + ' ' + notOnTheBoard;
		}
		if ( ( 0 > endRow || endRow > 7 ) || ( 0 > endCol || endCol > 7 ) )
		{
			return 'Move: ' + end + ' ' + notOnTheBoard;
		}
		
		// check if start is the player
        if ( this.grid[startRow][startCol] !== player )
        {
			return notYourPiece;
		}
		
		// check if end spot is open
		if ( this.grid[endRow][endCol] !== null )
		{
			return spotTaken;
		}
		
		// what to do for the player types
		switch ( player )
		{

			case blkChecker:
				// check if the player is going up
				if ( start > end )
				{
					// check if the player is moving or hopping
					if ( start - end == ( 9 || 11 ) )
					{
						// move piece
						return move;
					}
					else if ( start - end == ( 18 || 22 ) )
					{
						// hop piece
						return hop;
					} 
					else
					{
						// not a valid move
						return invalidMove;
					}
				}
				else
				{
					// going the wrong way
					return wrongWay;
				}

			case redChecker:
				// check if the player is going down
				if ( end > start )
				{
					// check if the player is moving or hopping
					if ( end - start == ( 9 || 11 ) )
					{
						// move piece
						return move;
					}
					else if ( end - start == ( 18 || 22 ) )
					{
						// hop piece
						return hop;
					} 
					else
					{
						// not a valid move
						return invalidMove;
					}
				}
				else
				{
					// going the wrong way
					return wrongWay;
				}

			default:
				// not a valid player
				return invalidPlayer;

		}
	}
	
	// move piece function
	movePiece( start, end )
	{
		// coordinates variables
        let startRow = start[0];
        let startCol = start[1];
        let endRow   = end[0];
		let endCol   = end[1];

		// remove the picked piece from board
		this.grid[startRow][startCol] = null;
		// place piece on picked spot
		this.grid[endRow][endCol] = player;

		// log last move
		console.log( player.color + ' - from: ' + start + ' to: ' + end );
	}

	// hop piece function
	hopPiece( start, end )
	{
		// coordinates variables
        let startRow = start[0];
        let startCol = start[1];
        let endRow   = end[0];
		let endCol   = end[1];

		// remove the picked piece from board
		this.grid[startRow][startCol] = null;
		// place piece on picked spot
		this.grid[endRow][endCol] = player;

		if ( opponent === redChecker )
		{
			this.redPieces--;
		}
		else
		{
			this.blkPieces--;
		}

		// log last move
		console.log( player.color + ' - from: ' + start + '  over: ' + opponent.color + '  to: ' + end );
	}
}


class Game {
	constructor()
	{
		this.board = new Board;
	}

	start()
	{
		this.board.createGrid();
        this.board.setPieces();
	}

	moveChecker( start, end )
	{
		let playerMove = this.board.playerMove( start, end );

		switch ( playerMove )
		{
			case 'move':
				this.board.movePiece( start, end );
				this.changePlayer();
				break;
			case 'hop':
				this.board.hopPiece( start, end );
				break;
			default:
				console.log( playerMove )
		}
	}
	
	checkForWin()
	{
		if ( this.board.redPieces === 0 )
		{
			// black wins!
		}
		else if ( this.board.blkPieces === 0 )
		{
			// red wins!
		} else
		{
			// keep going
		}
	}

	changePlayer()
	{
		if ( player === blkChecker )
		{
			player = redChecker;
			opponent = blkChecker;
		}
		else
		{
			player = blkChecker;
			opponent = redChecker;
		}
	}
}



function getPrompt()
{
	game.board.viewGrid();
	game.board.log();
	rl.question('which piece?: ', (whichPiece) =>
	{
		rl.question('to where?: ', (toWhere) =>
		{
			game.moveChecker(whichPiece, toWhere);
			// game.checkForWin();
			getPrompt();
		});
	});
}

// set our starting player
let player = blkChecker;
// set the opponent to the opposite player
let opponent = redChecker;

const game = new Game();
game.start();



// Tests
if (typeof describe === 'function')
{
	describe('Game', () =>
	{
		it('should have a board', () =>
		{
			assert.equal(game.board.constructor.name, 'Board');
		});
		it('board should have 24 checkers', () =>
		{
			assert.equal(game.board.blkPieces + game.board.redPieces, 24);
		});
	});

	describe('Game.moveChecker()', () =>
	{
		it('should move a checker', () =>
		{
			assert(!game.board.grid[4][1]);
			game.moveChecker('50', '41');
			assert(game.board.grid[4][1]);
			game.moveChecker('21', '30');
			assert(game.board.grid[3][0]);
			game.moveChecker('52', '43');
			assert(game.board.grid[4][3]);
		});
		it('should be able to jump over and kill another checker', () =>
		{
			game.moveChecker('30', '52');
			assert(game.board.grid[5][2]);
			assert(!game.board.grid[4][1]);
			assert.equal(game.board.checkers.length, 23);
		});
	});
}
else
{
	getPrompt();
}
