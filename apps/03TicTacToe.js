'use strict';

var assert = require('assert');
var prompt = require('prompt');
prompt.start();


var board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];

var playerTurn = 'X';

function printBoard() {
    console.log('   0  1  2');
    console.log('0 ' + board[0].join(' | '));
    console.log('  ---------');
    console.log('1 ' + board[1].join(' | '));
    console.log('  ---------');
    console.log('2 ' + board[2].join(' | '));
}

function horizontalWin() {
    
    // Your code here
    if ((board[0][0] === playerTurn && board[0][1] === playerTurn && board[0][2] === playerTurn)
    || (board[1][0] === playerTurn && board[1][1] === playerTurn && board[1][2] === playerTurn)
    || (board[2][0] === playerTurn && board[2][1] === playerTurn && board[2][2] === playerTurn)){
        
        return true;
    }
}

function verticalWin() {
    // Your code here
    if ((board[0][0] === playerTurn && board[1][0] === playerTurn && board[2][0] === playerTurn)
    || (board[0][1] === playerTurn && board[1][1] === playerTurn && board[2][1] === playerTurn)
    || (board[0][2] === playerTurn && board[1][2] === playerTurn && board[2][2] === playerTurn)){
        
        return true;
    }
}

function diagonalWin() {
    // Your code here
    if ((board[0][0] === playerTurn && board[1][1] === playerTurn && board[2][2] === playerTurn)
    || (board[0][2] === playerTurn && board[1][1] === playerTurn && board[2][0] === playerTurn)
    ){
        
        return true;
    }
}

function checkForWin() {
    // Your code here
    if (horizontalWin() || verticalWin() || diagonalWin()){
        console.log( 'Player ' + playerTurn + ' Won!');
        return true;
    }
}

function ticTacToe(row, column) {
    //check if board is empty
if (board[row][column] == ' ') {


        // check first row
        if (row == 0 && column == 0){
            board[0][0] = playerTurn;
            if(checkForWin() == true){
                process.exit();
            }
        } else if (row == 0 && column == 1){
            board[0][1] = playerTurn;
            if(checkForWin() == true){
                process.exit();
            }
        } else if (row == 0 && column == 2){
            board[0][2] = playerTurn;
            if(checkForWin() == true){
                process.exit();
            }
        }
        
		//check second row
	if (row == 1 && column == 0){
            board[1][0] = playerTurn;
        if(checkForWin() == true){
                process.exit();
            }
        } else if (row == 1 && column == 1){
            board[1][1] = playerTurn;
            if(checkForWin() == true){
                process.exit();
            }
        } else if (row == 1 && column == 2){
            board[1][2] = playerTurn;
            if(checkForWin() == true){
                process.exit();
            }
        }
        
		//check third row
        if (row == 2 && column == 0){
            board[2][0] = playerTurn;
            if(checkForWin() == true){
                process.exit();
            }
        } else if (row == 2 && column == 1){
            board[2][1] = playerTurn;
            if(checkForWin() == true){
                process.exit();
            }
        } else if (row == 2 && column == 2){
            board[2][2] = playerTurn;
            if(checkForWin() == true){
                process.exit();
            }
        }
        //checkForWin();
        
        playerTurn = (playerTurn == 'X') ? 'O':'X';
      

    } 
    else {

        console.log("Oops! Try Again.");
    }
   
    //run checkForWin() function
       
}


function getPrompt() {
    printBoard();
    console.log("It's Player " + playerTurn + "'s turn.");
    prompt.get(['row', 'column'], function (error, result) {
        ticTacToe(result['row'], result['column']);
        getPrompt();
    });
}



// Tests

if (typeof describe !== 'undefined') {

    describe('#ticTacToe()', function () {
        it('should place mark on the board', function () {
            ticTacToe(1, 1);
            assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
        });
        it('should alternate between players', function () {
            ticTacToe(0, 0);
            assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
        });
        it('should check for vertical wins', function () {
            board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
            assert.equal(verticalWin(), true);
        });
        it('should check for horizontal wins', function () {
            board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
            assert.equal(horizontalWin(), true);
        });
        it('should check for diagonal wins', function () {
            board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
            assert.equal(diagonalWin(), true);
        });
        it('should detect a win', function () {
            assert.equal(checkForWin(), true);
        });
    });
} else {

    getPrompt();

}
