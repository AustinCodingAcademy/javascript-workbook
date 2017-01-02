'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

var winner = false;

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {
//cheat code
	if(startStack === "cheat" & endStack === "code"){
		stacks.a= [];
		stacks.b = [];
		stacks.c = [4,3,2,1];
		printStacks();
		return true;
	}

//check to see if the move is legal
 	if(!isLegal(startStack, endStack)){
		return false;
  	}
//if it hasnt returned false, move the number and return to the main funcion
	stacks[endStack].push(stacks[startStack].pop());
	return true;
}

function isLegal(startStack, endStack) {
//check to see if the end stack is empty stack because, when we do length-1 to get the value, an empty stack will return undefined
	if(stacks[endStack].length === 0)
 	{
	 	return true;
  	}
//this is where we check to make sure the endstack has a value bigger than the start stack pop
	if (stacks[startStack][(stacks[startStack].length-1)]<stacks[endStack][(stacks[endStack].length-1)])
	{
	  return true;
  	}
//if we haven't returned true, it violates, so return false
  return false;
}

function checkForWin(){
	//after we make the first move, anytime we get back to four in a stack, thats a winner
	if(stacks.a.length === 4 || stacks.b.length === 4 || stacks.c.length === 4){
		return true;
  	}
	else{
		return false;
	}
}

function towersOfHanoi(startStack, endStack) {
//run movePiece and make sure its valid (if it returns false, ask again);	
	if (!(movePiece(startStack,endStack))) {
		console.log("please enter a valid play");
	}
//check for the win and if it does switch the boolean winner to true;
	if(checkForWin()){
		console.log("Winner Winner");
		winner=true;
		return true;
	}
}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack.toLowerCase(), endStack.toLowerCase());
 	if(!winner){
      		getPrompt();
 	}      
	else{
	     	playAgain();
      	}
    });
    });
}

function playAgain(){
//play again funciton resets the board and runs getPrompt to end
	rl.question("Play again? (Y/N)", (replay) => {
	replay = replay.toLowerCase();
	if (replay === 'y'){
		stacks.a= [4, 3, 2, 1];
		stacks.b=[];
		stacks.c=[];
		winner = false;
		getPrompt();
	}
 //if user doesnt want to play again, exit
        else {
		process.exit();}
      	});
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', function () {
    it('should be able to move a block', function () {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', function () {
    it('should not allow an illegal move', function () {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', function () {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', function () {
    it('should detect a win', function () {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });
} else {

  getPrompt();

}
