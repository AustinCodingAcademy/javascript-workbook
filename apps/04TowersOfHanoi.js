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

var totalMoves=0;

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack,endStack) {
  // Your code here
  //Remove from the first stack.
  
  var moveChar=stacks[startStack].pop();
  //Place on the ending stack.
  stacks[endStack].push(moveChar)

  totalMoves++;
}

function isLegal(startStack,endStack) {
  // Your code here
  if ((startStack==='a' || startStack==='b' || startStack==='c') && (endStack==='a' || endStack==='b' || endStack==='c'))
    {
    //I have a valid input of a b or c.
    var startStackLength=stacks[startStack].length;
    var endStackLength=stacks[endStack].length;
    if (startStackLength>0)
      {
      //There's stuff in this stack, so it is a valid starting stack.
      var startStackChar=stacks[startStack][(startStackLength-1)];
      if ((endStackLength===0) || (startStackChar<(stacks[endStack][(endStackLength-1)])))
        {
        //The destination stack is empty or is otherwise valid. I can move the piece to the new location.
        return true;
        }
      else  
        {
        return false;
        }
      console.log(startStackChar);
      }    
    }
  else
    {
    //Invalid move due to no A B or C entered.
    return false;
    }

}

function checkForWin() {
  // Your code here
  if (stacks['b'].length===4 || stacks['c'].length===4)
    {
    return true;
    }
  else
    {
    return false;
    }
}

function towersOfHanoi(startStack, endStack) {
  // Your code here
  if (isLegal(startStack,endStack))
    {
    movePiece(startStack,endStack);

    if (checkForWin())
      {
      console.log('You won in ' + totalMoves + ' moves!!')
      }
    else
      {
      console.log(totalMoves + ' moves so far.')
      }
    }
  else
    {
    console.log("//////////////////////////////////")
    console.log("// Can't move there, try again! //")
    console.log("//////////////////////////////////")
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
