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

//reset board when game is won
function reset() {
  stacks = {
    a: [4, 3, 2, 1],
    b: [],
    c: []
  };
}

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {
  // Your code here
  var move = stacks[startStack].pop();
  stacks[endStack].push(move);

}

function isLegal(startStack, endStack) {
  // Your code here

  //check for endStack value
  var check = stacks[endStack];
  var check2 = check[check.length-1];
  //added console.log to see what value was being produced
  //console.log("isLegal end ", check2);
  
  //create zeroCheck value in order to clear an undefined value production later on
  var zeroCheck = check.length;

  //check for startStack value
  var cheek = stacks[startStack];
  var cheek2 = cheek[cheek.length-1];
  //value check again, commented out when program was finished
  //console.log('start ', cheek2);
  
  //check to see if end spot is bigger that start stop
  //test for zero, was getting an undefined value here
  //created zeroCheck to specifically check for zero and not undefined. 
  if (zeroCheck === 0){
    //console.log('true');
    return true;
  }
  
  else if (check2 > cheek2) {
    //console.log('true');
    return true;
  }
  else{
    //console.log('false');
    return false;
  }
  
}

function checkForWin(startStack, endStack) {
  // Your code here

  //created chicken game winning print when game is completed.
  if (stacks.b.length === 4 || stacks.c.length === 4){
    console.log(" ");
    console.log("********************************");
    console.log("*                              *")
    console.log("*Winner Winner Chicken Dinner!!*");
    console.log("*           \\\\                 *")
    console.log("*           (0>                *")
    console.log("*        \\\\_/\/\)                *")
    console.log("*         \\_/\/\                 *")
    console.log("*          _|_                 *")
    console.log("********************************");
    console.log(" ");
    console.log("New Game: ")
    reset();
    return true;
  }
  else{
    return false;

  }

}

function towersOfHanoi(startStack, endStack) {
  // Your code here
  // check for legality
  if (isLegal(startStack, endStack)) {
    movePiece(startStack, endStack);
    checkForWin(startStack, endStack);
  }
  else{
    //if move is illegal, will imform player and return to game.
    console.log(" ")
    console.log("****************************");
    console.log("* That move is not allowed *");
    console.log("*        Try again.        *");
    console.log("****************************");
    console.log(" ");
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
