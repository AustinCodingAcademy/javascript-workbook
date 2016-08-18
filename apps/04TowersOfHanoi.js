'use strict';

var assert = require('assert');
var prompt = require('prompt');
prompt.start();



// a[], b[], c[] represent the three rods in the game.
// a: [4, 3, 2, 1] are the disks starting from largest to smallest
// these disks must be moved back and forth betweeen the three rods
// a smaller disk can never sit underneath a larger disk

// only one disk can be moved at a time
// a disk can only be moved if it is the uppermost disk
//
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



// Instructions for Spec 1
// below is our function declaration, or function statement
// function statements should contain:
//
//
// 1. the name of the function  (we already have this)
// 2. arguments in parentheses seperated by commas (we are given these, startStack and endStack)
// 3. javascript statements that define the function enclosed in curly brackets(we are told to startStack.push() and endStack.pull())
//
//
// After we define our function we then need to call this function from another function towersOfHanoi()
// End Spec 1


function movePiece(startStack, endStack) {
    // Your code here

    // startStack.pop();
    // stacks[startStack].pop()
    var stackPiece = stacks[startStack].pop();
    stacks[endStack].push(stackPiece);

}


// Instructions for Spec 2
// 1. the function isLegal() takes two arguments, startStack and endStack
// 2. It should check to see if the block(stackPiece) being moved,
// from startStack is smaller (less than operator) than the last the block in endStack
// 3. return true if it is allowed
// 4. return false if it is not
// 5. if endStack has no block any block can be moved there (if endStack is empty the move is legal)
//
//
//

// what is a legal move?
// if something exists in start stack and nothing exits in endStack then the

function isLegal(startStack, endStack) {
    // Your code here
    var startStackArray = stacks[startStack];
    var endStackArray   = stacks[endStack];

    if (startStackArray.length === 0) {
      return false;
    }
    else if (endStackArray.length === 0) {
      return true;
    }
    else {
      return startStackArray[startStackArray.length - 1] < endStackArray[endStackArray.length - 1];
    }
}


// In checkForWin(), you can simply check if the b stack or c stack has a .length of 4, then consoleing out a message like
// "You Won!!!" and returning true if a win is detected, or a false if not.


function checkForWin( ) {
    // Your code here
    if (stacks.b.length === 4 || stacks.c.length === 4) {
      console.log ('You Won!!!');
      return true;
    }
    else {
      console.log ('Keep Going!!!!');

      return false;
    }

}

function towersOfHanoi(startStack, endStack) {
    movePiece(startStack, endStack);
    checkForWin();

}

function getPrompt() {
    printStacks();
    prompt.get(['start stack', 'end stack'], function (error, result) {
        towersOfHanoi(result['start stack'], result['end stack']);
        getPrompt();
    });
}

// Tests

if (typeof describe !== 'undefined') {

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
            stacks = { a: [], b: [4, 3, 2, 1], c: [] }
            assert.equal(checkForWin(), true);
            stacks = { a: [1], b: [4, 3, 2], c: [] }
            assert.equal(checkForWin(), false);
        });
    })
} else {

    getPrompt();

}
