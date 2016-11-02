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
  // Get the piece off the top of the start stack and save it (var)
  // Move it to the endStack
//  var towertoremovefrom = stacks[startStack];
//  var block = towertoremovefrom.pop();

//  var towertoaddto = stacks[endStack];
//  towertoaddto.push(block);




  var piece = stacks[startStack].pop();
  stacks[endStack].push(piece);
}

function isLegal(startStack, endStack) {
  // Your code here
  // Get a reference to the actual start stack ans save it
  // Does start stack have anything in it?
  // Get a reference to the actual end stack and save it
  // Is the piece from the start stack bigger or smaller than the piece on the top of the end stack
var startStackArray = stacks[startStack];
var endStackArray   = stacks[endStack];

if (startStackArray.length  === 0){
  return false;
}
else if (endStackArray.length === 0) {
  return true;
}
else {
  return startStackArray[startStackArray.length-1]
  < endStackArray[endStackArray.length - 1];
}

}

function checkForWin() {
  // Your code here
  // Does Stack C have a length of 4? (.length -- to check the length of the array)
if((stacks.c.length === 4) || (stacks.b.length === 4)){
  console.log("You Won!")
  return true;
}
else{
  return false;
}

}

// var towers = {

// var tower1 : [4,3,2,1],
// var tower2 : [],
// var tower3 : []
// }

function towersOfHanoi(startStack, endStack) {
  // Your code here
  // MAIN FUNCTION
  //  Check if the move is okay
  //  If its okay, then make the move



  if (isLegal(startStack, endStack)){
    movePiece(startStack, endStack);
  }
  else {
    console.log("Invalid move please try again.")
  }
  if (checkForWin()) {
  process.exit();
  }

}

//if(start === "tower1"){
//  var block = tower1.pop();
//}
//
//if(start === "tower2"){
//  var block = tower2.pop();
//}
//
//if(start === "tower3"){
//  var block = tower3.pop();
//}
//
//if(end === "tower2"){
//  tower1.push(block);
//}
//
//var block = tower1.pop();
//tower2.push(block);


  //  Did the player win yet?


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
