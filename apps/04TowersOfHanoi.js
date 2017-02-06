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
    // Your code here
    var len1 = stacks[endStack].length;
    var  token = stacks[startStack].pop();

    if (isEmpty(endStack)) {

        stacks[endStack].push(token);
        console.log(token + " was pop'd as token");
    } else if (isLegal(startStack, endStack, token)) {
        stacks[endStack].push(token);
        console.log('islegal is true');
    } else {
        console.log('not legal and not empty')
        console.log(token + "   this is token when not legal or empty")
        stacks[startStack].push(token);
        console.log(startStack);
        console.log(stacks[startStack] + "  value of start stack when illegal ");
        return false;
    }

}

function isEmpty(endStack) {
    var arr1 = stacks[endStack].length - 1;
    //console.log(arr1);
    if (arr1 < 0) {
        console.log("made it true to isEmpty")
        return true;
    } else {
        return false;
    }
}

function isLegal(startStack, endStack, token) {
    // Your code here
    console.log(token + "  initial token value in isLegal")
    var position = stacks[endStack].length - 1
    if (token < stacks[endStack][position]) {

        console.log("  token < position");
        return true;
    } else {
        console.log("  not token < position")
        console.log(token + " token value");
        console.log (position + "  position value")
        console.log(stacks[endStack][position] + "   ---Position");
        console.log(endStack);
        console.log(startStack);
        return false;
    }

}

function checkForWin() {
    // Your code here

}

function towersOfHanoi(startStack, endStack) {
    // Your code here

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

if (typeof describe === 'function') {

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
            };
            assert.equal(checkForWin(), true);
            stacks = {
                a: [1],
                b: [4, 3, 2],
                c: []
            };
            assert.equal(checkForWin(), false);
        });
    });
} else {

    getPrompt();

}
