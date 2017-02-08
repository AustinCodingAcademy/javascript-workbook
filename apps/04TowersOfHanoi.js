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

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {
//this just moves the pieces around from one stack to the other. 
var garbonzobean = stacks[startStack].pop();

stacks[endStack].push(garbonzobean);
}

function isLegal(startStack, endStack) {
  // Check to see if the input is a valid stack : a, b or c
if (( startStack === 'a' || startStack === 'b' || startStack === 'c') && (endStack === 'a' || endStack === 'b' || endStack === 'c')) 
{
  // These variables are the length of the stacks being pulled from and the one being stacked on.
  var lengthOfStartStack = stacks[startStack].length;
  var lengthOfEndStack = stacks[endStack].length;

// Check to see if the stack being pulled from, startStack, has tokens/donuts to pull from. If so, continue.
  if (lengthOfStartStack > 0) {
    // this var donut is the value of the token being taken off of the stack. 
    var donut = stacks[startStack][(lengthOfStartStack - 1)];
    // this if checks to see whether the length of the stacked-on is < 0 OR|| if the value of the donut is less than 
    // the value of the last number in the array lengthOfEndStack-1 of endStack of stacks. 
    // we subtract 1 from the lengthOfEndStack because the index begins with 0 while the length of an array starts with 1
    // So we have to subract one from the length else we would call on a numbe that isn't in the array, giving us "undefined"
    if ((lengthOfEndStack === 0) || (donut < stacks[endStack][(lengthOfEndStack - 1)])){
     return true; 
    }
    else {
      console.log("Try again. Be sure the token moved is smaller.");
      return false;
    }

  }

}
// This ELSE returns if the user inputs a wrong column !== a, b or c
else {
  console.log("Please input a valid stack, a, b or c.");
  return false;
}

  // isLegal() takes two arguments, startStack and endStack, and will check to see if the block being moved, 
  // from startStack is smaller than last block in endStack. return true if it is allowed, otherwise, return false. 
  // Also, don't forget to think about if the endStack is empty, you may put any block there. Put this check before 
  // your movePiece() function.

}

function checkForWin() {
  var lengthOfC = stacks.c.length;

  if (lengthOfC === 4){
    console.log('Hooray! You won!');
  }

  else {
    console.log('Try again.');
  }

}
/* In checkForWin(), you can simply check if the b stack or c stack has a .length of 4, then consoling out a 
message like "You Won!!!" and returning true if a win is detected, or a false if not. */

function towersOfHanoi(startStack, endStack) {

  // Will run to see if the move is legal before the move is made:
  if (isLegal(startStack, endStack)) 
    {
  // This runs movePiece 
  movePiece(startStack, endStack);
  
  // This runs a counter of moves to be displayed befor each new prompt.
  counter ++;
  
  }

  else {
    console.log("pooh");
  }
}

var counter = 0;

console.log("Welcome to the game TOWERS OF HANOI!!");
console.log("To play simply type in the tower you'd like to move a token from");
console.log("then type in the tower you'd like to place it.");
console.log("Use only a, b or c and the token on top must always be smaller. Good Luck!");

function getPrompt() {

  console.log("Moves =" + " " + counter);
  checkForWin();
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
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
