'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//The variable 'stacks' is made up of keys and values
var stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

console.log(stacks['a']);

function printStacks() {
  console.log("Stack a: " + stacks.a);
  console.log("Stack b: " + stacks.b);
  console.log("Stack c: " + stacks.c);
}

function movePiece(startStackKey, endStackKey) {
  // Test - should be able to move a block
  // pop off block from the start stack
  // startStack variable contains the string name of the stack to pull block from
  var block = stacks[startStackKey].pop();
  // push block to new stack
  // endStack variable contains the string name of the stack to put block on
  stacks[endStackKey].push(block);
}

function isLegal(startStackKey, endStackKey) {
  // Test - should not allow an illegal move
  // Test - should allow a legal move

  // The variable 'startStackArray' is an array (4, 3, 2, 1), and is equal to the key 'startStackKey' (which is a, b or c) inside the global variable 'stacks'
  var startStackArray = stacks[startStackKey];
  // The variable 'topBlockOfStartStackKey' is the block on top of the key 'startStackKey', and is equal to the length of the array 'startStackArray' minus one
  var topBlockOfStartStackKey = startStackArray[startStackArray.length - 1];

  var endStackArray = stacks[endStackKey];
  var topBlockOfEndStackKey = endStackArray[endStackArray.length - 1];

  if(stacks[startStackKey].length === 0) {
    return false;
  }

  else if(stacks[endStackKey].length === 0) {
    return true;
  } else {
    return(topBlockOfStartStackKey < topBlockOfEndStackKey);
  }
}

function checkForWin() {
  // Test - should detect a win
  if(stacks.b.length === 4 || stacks.c.length === 4) {
    console.log("You Won!!!");
    return true;
    } else {
      return false;
  }
}

function towersOfHanoi(startStackKey, endStackKey) {
  // This function organizes the code from the other functions
  if(isLegal(startStackKey, endStackKey)) {
    movePiece(startStackKey, endStackKey);
    } else {
      console.log('Move is Not Legal!!');
  }
  checkForWin();

}


function getPrompt() {
  printStacks();
  rl.question('Pull block from stack: ', (startStackKey) => {
    rl.question('Put block on stack: ', (endStackKey) => {
      towersOfHanoi(startStackKey, endStackKey);
  // This causes the loop, instead of only running the game one time
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
