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

var counter = 0;

function movePiece(startStack, endStack) {
  // Your code here
  //get the piece off of the start stack
  //move it to the end stack
  //may have to get these variables from isLegal or from towersOfHanoi
  // startStack.pop();
  // endStack.push();
  //var startMove = stacks[startStack].pop();
  //var endMove = stacks[endStack].push();
  //notes from demo
  //var start = stacks[startStack];
  //var end = stacks[endStack];
  counter++;
  var start = stacks[startStack];
  var end = stacks[endStack];
  var block = start.pop();
  end.push(block);
}

function isLegal(startStack, endStack) {
  // Your code here
  // does start stack have anything in it?
  //get a refrense to the actual end stack and save it
  //is the piece from the start stack bigger or smaller than the one on the end stack?
  //is there even anything in there?
  // if bad return something if good return something else
  // if (startStack.length === 0 ) {
  //   return;
  // }
  //if (startStack)

  //barbs idea
  // var start = stacks[startStack].pop();
  // var end = stacks[endStack].push();
  // if (end < start || stacks[endStack].length > 0) {
  //   return true;
  // }
  //var start = startStack.toLowerCase();
  //var end = endStack.toLowerCase();

  // if (start === "a" || start === "b" || start === "c"){
  //   return true;
  // }else  {
  //   return false;
  // }
  // if (end === "a" || end === "b" || end === "c"){
  //   return true;
  // }
  // else{
  //   return false;
  // }
  // if (block > end){
  //   console.log("Invalid");
  //   return false;
  // }

  // if (block wanting to move > block on bottom){
  //   cant do this shit.
  // }
  //var startCheck = start.length -1;
  //var endCheck = end.length - 1;
  //return !(start[startCheck] > end[endCheck]);
  if (stacks[startStack][stacks[startStack].length - 1] > stacks[endStack][stacks[endStack].length - 1]){
    console.log("INVALID");
    return false;
  }else {
    movePiece(startStack, endStack);
    return true;
  }



  // var start = stacks[startStack.toLowerCase()];
  // var end = stacks[endStack.toLowerCase()];

  // var mightRemove = stacks[start];
  // var willRemove = mightRemove[mightRemove].length -1    ***so this evaluates to a number essentially stacks[][] ];

}

function checkForWin() {
  // Your code here
  //does stack c have a length of 4?
  if (stacks.c.length === 4 || stacks.b.length === 4 && counter === 15){
    console.log("Perfect game! board is reset");
    stacks = {
      a: [4, 3, 2, 1],
      b: [],
      c: []
    };
    return true;
  }else if (stacks.c.length === 4 || stacks.b.length === 4){
    console.log("you beat it in "+counter+" moves, board is reset, shoot for 15!");
    stacks = {
      a: [4, 3, 2, 1],
      b: [],
      c: []
    };
    return true;
  }else {
    console.log("Move counter:"+counter);
    return false;
  }
}

function towersOfHanoi(startStack, endStack) {
  startStack = startStack.toLowerCase();
  endStack = endStack.toLowerCase();
  //var block = start.pop();
  //end.push(block);
  // start = stacks[startStack];
  // end = stacks[endStack];
  // Your code here
  //check to make sure move is okay
  //make move
  //check for win
  // var start = startStack;
  // var end = endStack;
  isLegal(startStack, endStack);
  //movePiece(startStack, endStack);
  checkForWin();
  // var start = stacks[startStack];
  // var end = stacks[endStack];
  // var block = start.pop();
  // end.push(block);
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


/*
function TOH(start, end){
  // start = "tower1";
  // end = "tower2";

  var towers = {
    tower1 = [4, 3, 2, 1],
    tower2 = [],
    tower3 = []
  }

  var mightRemove = stacks[start];
  var willRemove = mightRemove[mightRemove.length -1***so this evaluates to a number essentially stacks[][] ];

  var towerToRemoveFrom = towers[start];
  var towerToAddTo = towers[end];
  var block = towerToRemoveFrom.pop();
  towerToAddTo.push(block);
//or this
  var towerToAddTo = tower[end];
  var block = towers[start].pop();
  towerToAddTo.push(block);


  // if (start === "tower1"){
  //   var block = tower1.pop();
  // }
  // if (start === "tower2"){
  //   var block = tower2.pop();
  // }
  // if (start === "tower3"){
  //   var block = tower3.pop();
  // }
  // if (end === "tower1"){
  //   tower1.push(block);
  // }
  // var block = tower1.pop();
  // tower2.push(block);

}
*/
