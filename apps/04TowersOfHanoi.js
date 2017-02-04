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
var token = stacks[startStack].pop();

stacks[endStack].push(token);
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
    // this if checks to see whether the length of the stacke-on is <0 OR|| if the value of the donut/token is less than 
    // the value of the last number in the array lengthOfEndStack-1 of endStack of stacks. 
    // we subtract 1 from the lengthOfEndStack because the index begins with 0 while the length of an array starts with 1
    // So we have to subract one from the length else we would call on a numbe that isn't in the array, giving us "undefined"
    if ((lengthOfEndStack === 0) || (donut < stacks[endStack][(lengthOfEndStack - 1)])){
     return true; 
    }
    else {
      console.log("Try again.")
      return false;

    }


  }



}



  // if (endToken < startToken) {
  //   console.log("Try again!");
  //   return false;
  // } 
  // if (endToken === undefined) {
  //   return true;
  // }
  // else {
  //   return true;
  // }

  /*from Alex's code:
  if (stacks[endStack].length < 1) {
    console.log("one");
    return true;

    else if (stacks[startStack][startStack.length-1] < stacks[endStack][endSTack.length-1]) {
      console.log("two");
      return true;

      else{
        console.log("Illegal move! Try again!");
        console.log("nope");
        return false;

      }
    }
  }
  */
// Ask if the column is blank and if so it a valid move.

  //  // Declares the value of the token being moved
  // var startToken = stacks[startStack].pop();

  // // Declares the value of the token being put on
  // var endToken = stacks[endStack][endStack.length()-1];
// else if ()
//   if (endToken === undefined){ 
//     return true;
//   }

//   if  (startToken < endToken) {
//      return true;
//   }
//   //  Ask if the token below it is smaller and if so it is a valid move.

//   else {
//     console.log("Try again!");
//     return false;
//   }

   // Declares the value of the token being moved
  // var startToken = stacks[startStack].pop();

  // Declares the value of the token being put on
  // var endToken = stacks[endStack][(endStack.length()-1)];



  // isLegal() takes two arguments, startStack and endStack, and will check to see if the block being moved, 
  // from startStack is smaller than last block in endStack. return true if it is allowed, otherwise, return false. 
  // Also, don't forget to think about if the endStack is empty, you may put any block there. Put this check before 
  // your movePiece() function.

}

function checkForWin() {
  // Your code here

}

function towersOfHanoi(startStack, endStack) {
  // Will run to see if the move is legeal before the move is made:
  if (isLegal(startStack, endStack)) {

  // This runs movePiece 
  movePiece(startStack, endStack);
  }

}

function getPrompt() {
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
