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

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(disk, peg1, peg2, peg3){
  // Your code here
    if(disk == 0) return;
    movePiece(disk-1,peg1,peg3,peg2);
    if(peg1 == 'a'){
      stacks.a.pop();
    }
    else if(peg1 == 'b'){
      stacks.b.pop();
    }
    else if(peg1 == 'c'){
      stacks.c.pop();
    }
    if(peg3 == 'a'){
      stacks.a.push(disk);
    }
    else if(peg3 == 'b'){
      stacks.b.push(disk);
    }
    else if(peg3 == 'c'){
      stacks.c.push(disk);
    }
function isLegal() {
  // Your code here
  for (i = 0; i < stacks.a.length-1; i++) { 
    if (stacks[i] > stacks[i+1]) {
      console.log("ascending"); 
    }else{
      console.log("descending");
    }
  }
 
  console.log();
     
      for (i = 0; i < stacks.b.length-1; i++) { 
    if (stacks[i] > stacks[i+1]) {
      console.log("ascending"); 
    }else{
      console.log("descending");
    }
  }
 
  console.log();
     
  else {
    console.log("ascending")
      }
    }
  
 
function checkForWin() {
  // Your code here

}

function towersOfHanoi(startStack, endStack) {
  // Your code here

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
