'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
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
  //define start stack
  var start = stacks[startStack];
  //define end stack
  var end = stacks[endStack];
  //grab last peice in the stack
  var lastTower = start.pop();
  console.log(lastTower);
  //add peice to stack
end.push(lastTower);
console.log(end);
checkForWin();


 

}

function isLegal(startMove,endMove) {
  console.log('start',startMove);
  console.log('end',endMove);
  
  var lastBlock = endMove[endMove.length - 1];
  console.log(startMove[startMove.length - 1] < lastBlock || lastBlock === undefined)
  
  if(startMove[startMove.length - 1] < lastBlock || lastBlock === undefined) {

    console.log(lastBlock);
    
    return true;
  } else {
    
    return false;
  }
}



function checkForWin() {
  let winGame = stacks.b.length || stacks.c.length;
  if (winGame > 3){
    console.log('Game over, You Win!');
    return true;
  }
  else{
    return false;
  }

}

function towersOfHanoi(startStack, endStack) {
  var startMove = stacks[startStack];
  //define starting stack
  var endMove = stacks[endStack];
  //define ending stack
  if (isLegal(startMove, endMove)) {
      movePiece(startStack, endStack);
  //allow the piece to be moved if legal  
  }
  else {
    //illegal move
    console.log('Illegal Move!');
    return false;
  }
}



function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
  //ask for starting stack
    rl.question('end stack: ', (endStack) => {
    //ask for ending stack
      towersOfHanoi(startStack, endStack);
      //then run the parent function
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
