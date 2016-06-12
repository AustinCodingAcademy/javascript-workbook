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

function movePiece(startStack, endStack) {
    // Your code here
    var endBlock = startStack.pop();
    endStack.push(endBlock);
}

function isLegal(start, end) {
    // Your code here
    var startStack = stacks[start];
    var endStack = stacks[end];
    var startStackLast = Number(startStack[startStack.length - 1]);
    var endStackLast = Number(endStack[endStack.length - 1]);
    if (startStackLast < endStackLast || endStack.length === 0) {
        return true;
    } else {
        return false;
    }
}

function checkForWin() {
    // Your code here
    if (stacks.b.length === 4 || stacks.c.length === 4) {
        console.log("You Win!");
        return true;
    } else {
        return false;
    }
}

function towersOfHanoi(start, end) {
    // Your code here
    if(isLegal(start, end)) {
        movePiece(stacks[start], stacks[end]);
        return true
    } else {
        return false
    }
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
