'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};
const initialLength = stacks.a.length;

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {
  // Your code here
  stacks[endStack].push(stacks[startStack].pop());
}

function isLegal(startStack, endStack) {
  //console.log( "start array last variable: " + stacks[startStack][stacks[startStack].length-1]   );
  var lastArrayValueStart = stacks[startStack][stacks[startStack].length-1];

  //console.log( "end array last variable: " + stacks[endStack][stacks[endStack].length-1]   );
  var lastArrayValueEnd = stacks[endStack][stacks[endStack].length-1];

  // console.log("hi");
  // //why isnt this running?
  // console.log( "lastArrayValueEnd == undefined :  ");
  // console.log(lastArrayValueEnd == undefined);
  // console.log( "lastArrayValueEnd >= lastArrayValueStart :  ");
  // console.log(lastArrayValueEnd >= lastArrayValueStart);
  if( !lastArrayValueEnd ){
    return true;
  } else if (lastArrayValueStart < lastArrayValueEnd){
    return true;
  } else {
    return false;
  }

}

function checkForWin() {
  // Your code here
  //console.log(initialStack);
  // stacks.b = [4,3,2,1];
  // console.log([4,3,2,1]===[4,3,2,1]);
  // console.log(stacks.b === [4,3,2,1] || stacks.c === [4,3,2,1]);
  // console.log(stacks.b);
  // console.log(stacks.c);
  if (stacks.b.length == initialLength || stacks.c == initialLength){
    console.log("You win!");
    return true;
  } else {
    return false;
  }
}

function towersOfHanoi(startStack, endStack) {

  //check if legal
  //console.log("checking islegal:  " + isLegal(startStack, endStack));
  if ( isLegal(startStack, endStack) ){
    //console.log("about to move ");
    movePiece(startStack, endStack);
  } else {
    console.log("illegal move");
  }

  //check for win
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

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });
} else {

  getPrompt();

}
