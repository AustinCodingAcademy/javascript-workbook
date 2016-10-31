//Spec 1
//In movePiece(), pass in two arguments, startStack and endStack. Visualizing playing in a physical game, you .pop() //off a block from the the startStack and .push() it on the endStack. Call this function from towersOfHanoi(), //passing in your arguments.

//Spec 2
//isLegal() takes two arguments, startStack and endStack, and will check to see if the block being moved, from //startStack is smaller than last block in endStack. return true if it is allowed, otherwise, return false. Also, //don't forget to think about if the endStack is empty, you may put any block there. Put this check before your //movePiece() function.

//Spec 3
//In checkForWin(), you can simply check if the c stack has a .length of 4, then consoleing out a //message like "You Won!!!" and returning true if a win is detected, or a false if not.

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

var moveCount = 0;

function movePiece(startStack, endStack) {
  // Your code here
  //get the piece off of the top of the start stack and move to the end stack and save it.
  if (isLegal(startStack, endStack)) {
    stacks[endStack].push(stacks[startStack].pop());
  }

}

function isLegal(startStack, endStack) {
  // Your code here
  //get a reference to the actual startStack and save it (putting something into a variable)
  //does start stack have anything in it??
  //get a reference to the actual endStack and save it
  //is the piece from the start stack bigger or smaller than the piece on top of the end stack? legal move would //only be smaller on bigger.
  //does the end stack have anything it??
  //if bad return something, if good return something else
  var startStackValue = stacks[startStack][stacks[startStack].lenth - 1];

  if (stacks[startStack].length === 0) {
    var startStackValue = 0;
  } else {
    var startStackValue = stacks[startStack][stacks[startStack].length - 1];
  }

  if (stacks[endStack].length === 0) {
    var endStackValue = 0;
  } else {
    var endStackValue = stacks[endStack][stacks[endStack].length - 1];
  }

  if (startStackValue < endStackValue || endStackValue == 0) {
    return true;
  } else {
    console.log("Illegal Move");
    return false;
  }

}

function checkForWin() {
  // Your code here
  //does stack c have a .length of 4?
  console.log("Stacks a is " + stacks.a.length);
  console.log("Stacks a is " + stacks.b.length);
  console.log("Stacks a is " + stacks.c.length);

  if (stacks.b.length == 4 || stacks.c.length == 4) {
    console.log("You win, your movecount was" + moveCount);
    return true;
  } else {
    return false;
  }
}

function resetStacks () {
  console.log("Resetting Stacks");
}

function checkEntry (startStack, endStack) {
  if (startStack == 'a' || startStack == 'b' || startStack == 'c') {
    return true;
  } else {
    console.log("Please enter 'a' , 'b' , or 'c'");
    return false;
  }
}


function towersOfHanoi(startStack, endStack) {
  // Your code here: coordinates the effort of all the other functions
  //check if the move is okay. if it is, make the move.
  //check for win after move is made
  startStack = startStack.toLowerCase();
  endStack = endStack.toLowerCase();

  if (startStack == "win") {
    winTheGame();
  }

  if (checkEntry(startStack, endStack) && isLegal(startStack, endStack)) {
    movePiece(startStack, endStack);
    console.log("move made. checking for win");
    moveCount += 1;
    checkForWin();
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
