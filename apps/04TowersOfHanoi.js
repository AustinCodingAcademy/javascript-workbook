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
    endStack.push(startStack.pop());
}

function isLegal(startStack, endStack) {
    // console.log(startStack);
    // console.log(endStack);
    
    if (startStack.length !== 0 && endStack.length === 0 || (endStack[endStack.length - 1] > startStack[startStack.length - 1])){
        return true;
    } else {
        return false;
    }
}

function checkForWin() {
    if (stacks.b.length === 4 || stacks.c.length === 4){
        console.log("You Won!!!");
        return true;
    } else {
        return false;
    }
}

function towersOfHanoi(startStack, endStack) {

    console.log("startStack: " + startStack);
    console.log("endStack: " + endStack);

    if ((startStack === "a" || startStack === "b" || startStack === "c") &&
        (endStack === "a"   || endStack === "b"   || endStack === "c"  )) {      
        
        if (isLegal(stacks[startStack], stacks[endStack])) {
            movePiece(stacks[startStack], stacks[endStack]);
            checkForWin();
        }

    } else {
        console.log("Please enter a, b, or c.");
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
            assert.equal(isLegal('a', 'b'), false);
        });
        it('should allow a legal move', function () {
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
