'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let board = [
	[' ', ' ', ' '],
	[' ', ' ', ' '],
	[' ', ' ', ' ']
];

let clearBoard = [
	[' ', ' ', ' '],
	[' ', ' ', ' '],
	[' ', ' ', ' ']
];

let playerTurn = 'X';

function printBoard() {
	console.log('   0  1  2');
	console.log('0 ' + board[0].join(' | '));
	console.log('  ---------');
	console.log('1 ' + board[1].join(' | '));
	console.log('  ---------');
	console.log('2 ' + board[2].join(' | '));
}

function horizontalWin() {

	// horz wins
	const row0Win = (board[0][0] == playerTurn) && (board[0][1] == playerTurn) && (board[0][2] == playerTurn);
	const row1Win = (board[1][0] == playerTurn) && (board[1][1] == playerTurn) && (board[1][2] == playerTurn);
	const row2Win = (board[2][0] == playerTurn) && (board[2][1] == playerTurn) && (board[2][2] == playerTurn);
	
	// if win condition met
	if ( (row0Win) || (row1Win) || (row2Win) ) {
		return true;
	// else continue
	} else {
		return false;
	}
}

function verticalWin() {

	// vert wins
	const col0Win = (board[0][0] == playerTurn) && (board[1][0] == playerTurn) && (board[2][0] == playerTurn);
	const col1Win = (board[0][1] == playerTurn) && (board[1][1] == playerTurn) && (board[2][1] == playerTurn);
	const col2Win = (board[0][2] == playerTurn) && (board[1][2] == playerTurn) && (board[2][2] == playerTurn);
	
	// if win condition met
	if ( (col0Win) || (col1Win) || (col2Win) ) {
		return true;
	// else continue
	} else {
		return false;
	}
}

function diagonalWin() {

	// diag wins
	const dig0Win = (board[0][0] == playerTurn) && (board[1][1] == playerTurn) && (board[2][2] == playerTurn);
	const dig1Win = (board[2][2] == playerTurn) && (board[1][1] == playerTurn) && (board[0][0] == playerTurn);
	
	// if win condition met
	if ( (dig0Win) || (dig1Win) ) {
		return true;
	// else continue
	} else {
		return false;
	}
}

function checkForWin() {
	// check for horizontalWin
	if ( horizontalWin()) {
		console.log(playerTurn, " made a horz win");
		return true
	} else

	// check for verticalWin
	if (verticalWin()) {
		console.log(playerTurn, " made a vert win");
		return true
	} else

	// check for diagonalWin
	if (diagonalWin()) {
		console.log(playerTurn, " made a diag win");
		return true
	}

	// else continue
	else {
		return false
	}
}

function isValidInput(row, column) {
	// check for valid input
	if ( (row >= 0 && row < 3) && (column >= 0 && column < 3) ) {
		return true;
	} else {
		console.log('Not a valid move');
		return false;
	}
}

function isValidMove(row, column) {
	if ( board[row][column] === " " ) {
		// continue
		return true;
	} else {
		// invalid
		console.log('Not an open spot');
		return false;
	}
}

function switchPlayer() {

	// if player X change to player O
	if ( playerTurn === 'X' ) {
		playerTurn = 'O';
	// else player X
	} else {
		playerTurn = 'X';
	}
}

function ticTacToe(row, column) {
	
	// check for valid input and check for valid move
	if ( isValidInput(row, column) && isValidMove(row, column) ) {

		// place the players play
		board[row][column] = playerTurn;
	
		// check for win
		if ( checkForWin() ) {

			// clear the board
			board = clearBoard
		}

		// switch player
		switchPlayer();
		
	} else {
		console.log("Please make a valid move!")
	}
}

function getPrompt() {
	printBoard();
	console.log("It's Player " + playerTurn + "'s turn.");
	rl.question('row: ', (row) => {
		rl.question('column: ', (column) => {
			ticTacToe(row, column);
		getPrompt();
		});
	});
}



// Tests

if (typeof describe === 'function') {

	describe('#ticTacToe()', () => {
		it('should place mark on the board', () => {
			ticTacToe(1, 1);
			assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
		});
		it('should alternate between players', () => {
			ticTacToe(0, 0);
			assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
		});
		it('should check for vertical wins', () => {
			board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
			assert.equal(verticalWin(), true);
		});
		it('should check for horizontal wins', () => {
			board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
			assert.equal(horizontalWin(), true);
		});
		it('should check for diagonal wins', () => {
			board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
			assert.equal(diagonalWin(), true);
		});
		it('should detect a win', () => {
			assert.equal(checkForWin(), true);
		});
	});
} else {

	getPrompt();

}
