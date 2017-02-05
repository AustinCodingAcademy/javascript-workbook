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
  // Your code here
  var starting = stacks[startStack];
  var startPiece = starting.pop();
  var end = stacks[endStack];
  console.log(end);
  console.log(end.pop());
  if (startPiece >= end.length -1 ){
    var ending = end.push(startPiece);
  }
  console.log(end.pop());
  //console.log(stacks.a.length);
  //console.log(startPiece);
  //console.log(end);

}

function isLegal(startStack, endStack) {
  // Your code here
  if (stacks[startStack].pop() >= stacks[endStack].pop()){
    console.log('valid');
    return true;
  }else {
    console.log('nooooooope');
    return false;
  }

}

function verifyInput(startStack, endStack){
  startStack = startStack.toLowerCase();
  endStack = endStack.toLowerCase();
  if (startStack === 'a' || startStack === 'b' || startStack === 'c'){
    console.log(startStack);
  }else {
    return console.log('invalid');
  }
  if (endStack === 'a' || endStack === 'b' || endStack === 'c'){
    console.log(endStack);
  }else {
    return console.log('invalid');
  }
  return startStack;
  return endStack;
}

function checkForWin() {
  // Your code here

}

function towersOfHanoi(startStack, endStack) {
  // Your code here
  verifyInput(startStack, endStack);
  //isLegal(startStack, endStack)
  movePiece(startStack, endStack);
  
  checkForWin();

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
