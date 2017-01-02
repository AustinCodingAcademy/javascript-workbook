'use strict';

var assert = require('assert');
var colors = require('colors/safe');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var board = [];
var solution = '';
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
var x = 0;
function printBoard() {
  for (var i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  for (var i = 0; i < 4; i++) {
    var randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(solution, guess) {
  var guessArray = guess.split('');
  var solutionArray = solution.split('');
  var correctLetterLocations =0;
  var correctLetter=0;
	for(var i=0; i<4; i++){
		if (guessArray[i]===solutionArray[i]){
			correctLetterLocations++;
			solutionArray[i]=1;
			guessArray[i]=2;
		}
	}
	for (var i=0; i<4;i++){
		var targetIndex = solutionArray.indexOf(guessArray[i]);
		if (targetIndex>-1){
			correctLetter++;
			solutionArray[targetIndex]=null;
		}
	}
	return(correctLetterLocations+"-"+correctLetter);
}

function mastermind(guess) {
 
	if (x>8){
	 return ('You ran out of turns! The solution was '+solution);
 	}
	x++;
	if (guess === "cheat"){
		var cheat = 'My mother used to tell me...';
		solution.split()
		for (var i=0; i<4; i++){
		switch (solution[i]){
			case "a":
			cheat = cheat + " Antelope ";
			break;
			case "b":
			cheat = cheat + " Bison ";
			break;
			case "c":
			cheat = cheat +" Cats ";
			break;
			case "d":
			cheat = cheat + " Dogs ";
			break;
			case "e":
			cheat = cheat + " Elephants ";
			break;
			case "f":
			cheat = cheat + " Frog ";
			break;
			case "g":
			cheat = cheat + " Geese ";
			break;
			default:
			case "H":
			cheat = cheat + " Hotdogs ";
			break;
			break;
			}
		}
		cheat = cheat + "are all delicious animals!";
		console.log(cheat);
	}
	if (guess.length>4){
		return "try again, but with only 4 characters";
	}
	if (guess === solution){
		return 'You guessed it!';
	}

	var hint = generateHint(solution, guess);
	board.push(hint);

	return "Guess again.";
}


function getPrompt() {
  rl.question('guess: ', (guess) => {
    console.log( mastermind(guess) );
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#mastermind()', function () {
    it('should register a guess and generate hints', function () {
      solution = 'abcd';
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', function () {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', function () {
    it('should generate hints', function () {
      assert.equal(generateHint('abcd', 'abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', function () {
      assert.equal(generateHint('abcd', 'aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}
