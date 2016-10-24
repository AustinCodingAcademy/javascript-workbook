'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//establishes the game board
var board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];
//establishes a parallel board based on binary, this allows for easy tracking of wins based on addition of numbers
var binBoard = [
[1,2,4],
[8,16,32],
[64,128,256]
];

//pick the firt player, make a global variable to switch
var playerTurn = 'X';
//create a variable to keep track of X and Os combined space score
var winConditionX = 0;
var winConditionO = 0;
//create an array of winning sums
var winArray = [7,56,448,73,146,292,274,84]; 
//create a winner/end variable
var winner = false;
//choice array to be used to verify input is good
var choiceArray = [0,1,2];
//print the board for UI
function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

function checkForWin() {
//this code checks to see if either of the variables storing the sums for X and O match any of the numbers in the array
	if (winArray.some(function(arrVal){return (arrVal=== (winConditionX & arrVal) || arrVal === (winConditionO & arrVal));})){
	return true;
	}

//this checks to see if the functions (as requested by ACA) are true
	if ( horizontalWin() ||	verticalWin() || diagonalWin()){
		return true;
	}
	else {return false;}

}

function ticTacToe(row, column) {
//convert everything to Int to use the array.some function 
	row=parseInt(row);
	column=parseInt(column);
//use the array.some function to check and see if the row/column entered is a valid option, if not getAnotherPrompt
	if(!(choiceArray.some(function(arrVal){return (column ===arrVal);}))){getAnotherPrompt(); return;} 	
	if(!(choiceArray.some(function(arrVal){return (row === arrVal);}))){getAnotherPrompt(); return;}	
//makes sure that the player plays on an eligible space
	if(board[row][column] === " "){board[row][column] = playerTurn}else{getAnotherPrompt();return;}
//adds the number of the space chosen by a player to that players sum
	playerTurn === 'X' ? winConditionX += binBoard[row][column] : winConditionO +=binBoard[row][column];
//check to see if the win conditon is satisfied and return a win message if true
	if(checkForWin()){
	console.log('Player ' + playerTurn + ' Won!');
		winner=true;
		return true;
	}
//if no errors compile and no one wins, then its the next players turn.
	switchUser();
}

//function switches user when called
function switchUser(){
	playerTurn = playerTurn === "X" ? "O" : "X";
}

//function is called to prompt for correct input
function getAnotherPrompt(){
	console.warn("Please pick a valid free space!")
}
	
//prompt function to begin game
function getPrompt() {
  	printBoard();
  	console.log("It's Player " + playerTurn + "'s turn.");
  	rl.question('row: ', (row) => {
    	rl.question('column: ', (column) => {
		ticTacToe(row, column);
//check to see if a winner has been crowned, if not play again    
	if (!winner){
      		getPrompt();
     	 }
//if there is a winner ask to play again
     	else { 
		playAgain();
     	}
    });
  });

}
// a play again function to reset the game
function playAgain(){
	     rl.question("Play again? (Y/N)", (replay) => {
	     replay = replay.toLowerCase();
		     if (replay === 'y'){

		 board = [
 			    [' ', ' ', ' '],
  			    [' ', ' ', ' '],
  			    [' ', ' ', ' ']
		     	    ];
		winConditionX = 0;
	    	winConditionO = 0;
		winner= false;	
			    getPrompt();
	     }
//if user doesnt want to play again, ext
		     else {process.exit();}
	     }); 
	     }
// Tests

if (typeof describe === 'function') {

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
//checks to see if there is a horizontal/vertical/diagonal win (not necessary, but to pass the ACA checks
function horizontalWin() {

	for (var i=0; i<3; i++){
	      if (board[i].join("")==="XXX" || board[i].join("")==="OOO"){
		return true;
      	}
      }
      return false;
    }

function verticalWin() {
	var varCheck="";
	for (var i=0; i<3; i++){
		for (var j=0;j<3; j++){
		varCheck += board[j][i];
		if (varCheck ==="XXX" || varCheck==="OOO"){
		return true;
      		}
	      }
		varCheck="";
      }
      return false;
    
}

function diagonalWin() {
var checkOne = board[0][0]+board[1][1]+board[2][2]+"";
var checkTwo = board[0][2]+board[1][1]+board[2][0]+"";
if(checkOne === "XXX" || checkOne === "OOO" || checkTwo === "OOO" || checkTwo === "XXX"){
	return true;}
else{return false;}	
}

