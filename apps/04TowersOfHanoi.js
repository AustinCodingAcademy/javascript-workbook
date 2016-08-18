'use strict';

var assert = require('assert');
var prompt = require('prompt');
prompt.start();

var stacks = {
    a: [4, 3, 2, 1],
    b: [],
    c: []
};


function legalStack(startStack, endStack) {
    if ((startStack == "a" || startStack == "b" || startStack == "c") &&
        (endStack == "a" || endStack == "b" || endStack == "c")) {
        return true;
    } else {
        return false;
    }
}

//NEW STUFF

var counter = 0;

function add() {
    counter += 1;
}

//NEW STUFF ENDS

function printStacks() {
    console.log("a: " + stacks.a);
    console.log("b: " + stacks.b);
    console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {
    // Your code here

    var piece = stacks[startStack].pop();
    stacks[endStack].push(piece);

}

function isLegal(startStack, endStack) {
    // Your code here
    var startPiece = stacks[startStack].length - 1;
    var endPiece = stacks[endStack].length - 1;

    console.log("startpiece: " + stacks[startStack][startPiece]);
    console.log("endpiece: " + stacks[endStack][endPiece]);


    if (stacks[startStack][startPiece] < stacks[endStack][endPiece] || stacks[endStack].length === 0) {
        return true;
    } else {
        return false;
    }

}

function checkForWin() {
    // Your code here
    if (stacks.b.length === 4 || stacks.c.length === 4) {
        return true;
    } else {
        return false;
    }
}

function towersOfHanoi(startStack, endStack) {
    // Your code here
    if (!legalStack(startStack, endStack)) {
        console.log("The stack must be a, b, or c");
        getPrompt();
    } else {
        if (isLegal(startStack, endStack)) {
            movePiece(startStack, endStack);
            add();
            if (checkForWin()) {
                console.log("You won in " + counter + " moves!");
            } else {
                getPrompt();
            }
        } else {
            console.log("That is not a legal move!");
            getPrompt();
        }
    }
}

function getPrompt() {
    printStacks();
    prompt.get(['start stack', 'end stack'], function(error, result) {
        towersOfHanoi(result['start stack'], result['end stack']);
        // getPrompt();
    });
}

// Tests

if (typeof describe !== 'undefined') {

    describe('#towersOfHanoi()', function() {
        it('should be able to move a block', function() {
            towersOfHanoi('a', 'b');
            assert.deepEqual(stacks, {
                a: [4, 3, 2],
                b: [1],
                c: []
            });
        });
    });

    describe('#isLegal()', function() {
        it('should not allow an illegal move', function() {
            stacks = {
                a: [4, 3, 2],
                b: [1],
                c: []
            };
            assert.equal(isLegal('a', 'b'), false);
        });
        it('should allow a legal move', function() {
            stacks = {
                a: [4, 3, 2, 1],
                b: [],
                c: []
            };
            assert.equal(isLegal('a', 'c'), true);
        });
    });
    describe('#checkForWin()', function() {
        it('should detect a win', function() {
            stacks = {
                a: [],
                b: [4, 3, 2, 1],
                c: []
            }
            assert.equal(checkForWin(), true);
            stacks = {
                a: [1],
                b: [4, 3, 2],
                c: []
            }
            assert.equal(checkForWin(), false);
        });
    })
} else {

    getPrompt();

}
