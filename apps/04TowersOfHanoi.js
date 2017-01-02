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
  var piece = stacks[startStack].pop();
  console.log("the piece is " + piece);
  stacks[endStack].push(piece);
  checkForWin();
}

function isLegal(startStack, endStack) {
  // Your code here
  //  console.log(stacks[startStack][stacks[startStack].length-1]);
    console.log("aaaa      " + stacks["a"][1]);

   var start = stacks[startStack][stacks[startStack].length-1];
   var end = stacks[endStack][stacks[endStack].length-1];
   if (start != undefined) {
     if ((start < end)||(end == undefined)) {
      //  console.log("start " + start + "  end " + end);
       return true;
     }
     else {return false}
   }
  // console.log(stacks.endStack.length);

}

function checkForWin() {
  // Your code here
  if ((stacks.b.length==4)||(stacks.c.length==4)){
    // console.log("WINWINWINWINWIN");
    return true;
  }
  else {return false;}
}

function towersOfHanoi(startStack, endStack) {
  // Your code here
  //evaluate if true
  if (isLegal(startStack, endStack)) {
    console.log("is true");
    movePiece(startStack, endStack);
  };
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
