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
// var win1 = stacks.b;
// var win2 = stacks.c;

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
};

function movePiece() {
  // Your code here

};

function isLegal(startStack, endStack) {
  // Your code here
var arrayA = stacks[startStack][stacks[startStack].length-1];
var arrayB = stacks[endStack][stacks[endStack].length-1];

if (arrayA == arrayB){
  return true;
}
else if (arrayA > arrayB){
  return false;
}
else{
  return true;
}
}


function checkForWin() {
  // Your code here
if(stacks.b.length === 4 || stacks.c.length === 4){
  console.log("You won!");
  return true;
}
else {
return false;
}
}

function towersOfHanoi(startStack, endStack) {
  // Your code here
  var startingStack = stacks[startStack];
  var block = startingStack.pop();
  var endingStack = stacks[endStack];
  endingStack.push(block);
  checkForWin();
};

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
