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
    // assigned a variable so that it is easier to read when combined with pushinng
    // or moving the game piece to the next spot.
    var piece = stacks[startStack].pop();
    // the variable piece is used instead of that long start stack expression.
    stacks[endStack].push(piece);
}

function isLegal(startStack, endStack) {

    // assigning a local variable for the length of the starting and ending stack so that
    // we may reference it elsewhere in this function easier.
    var startStackLength = stacks[startStack].length;
    var endStackLength = stacks[endStack].length;

    // ** used a Boolean expression to run through scenerios for illegal moves **

    // took the length and checked to see if it was empty, if there is nothing in the first tower
    // then it is an illegal move.
    if (startStackLength === 0) {
      return false;
    }
    else if (endStackLength === 0) {
      return true;
    }
    // checking to see if the last index of startStack is less than the last index of endStack.
    else {
      return stacks[startStack][startStackLength - 1] < stacks[endStack][endStackLength - 1];
    }

}

function checkForWin() {
    // Pretty simple function here, simply checking to see if stacks b or c have
    // a length of 4, meaning that the stack is 4 blocks high, if they do then a win is detected.
    if (stacks['b'].length === 4 || stacks['c'].length === 4) {
      console.log('Congrats, you win!' + '\nCan you beat it in less turns?')
      return true;
    }
    else {
      return false;
    }
}

function towersOfHanoi(startStack, endStack) {
    // calling the function to move the piece from user
    movePiece(startStack, endStack);
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
