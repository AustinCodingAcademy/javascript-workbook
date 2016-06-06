'use strict';

var assert = require('assert');
var prompt = require('prompt');
prompt.start();

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

function moveBlock(startStack, endStack) {
    // Your code here
    var endBlock = startStack.pop();
    endStack.push(endBlock);
}

function isLegal(startStack, endStack) {
    // Your code here
    var startStackLast = startStack[startStack.length-1];
    var endStackLast = endStack[endstack.length-1];
    if (startStackLast<endStackLast) {
      return true;
    }
}

function checkForWin() {
    // Your code here
    if (stacks.b.length===4||stack.c.length===4) {
      console.log("You Won!!!");
      return true;
    }
    else {
      return false;
    }
}

function towersOfHanoi(startStack, endStack) {
    var startStackArray = 
    // Your code here
    isLegal();
    moveBlock();
    checkForWin();
}

function getPrompt() {
    printStacks();
    prompt.get(['start stack', 'end stack'], function (error, result) {
        towersOfHanoi(result['start stack'], result['end stack']);
        //towersOfHanoi('a', 'b')
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
