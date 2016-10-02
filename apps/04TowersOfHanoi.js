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

//COUNTER

var counter = 0;

function add() {
    counter += 1;
}

//COUNTER ENDS

//CHEAT START

function cheat(startStack, endStack) {
  if(startStack === "cheat" || endStack === "cheat") {
  return true;
}else{
  return false;
}
}

//CHEAT ENDS

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
    if(cheat(startStack,endStack)) {
      console.log("Hey, cheater! Enter the following stacks to win (like a cheater)  \n 1. a, c \n 2. a, b \n 3. c, b \n 4. a, c \n 5. b, c \n 6. b, a \n 7. c, a \n 8. c, b \n 9. a, c \n 10. a, b \n 11. c, b \n 12. a, c \n 13. b, c \n 14. b, a \n 15. c, a \n 16. b, c \n 17. a, b \n 18. a, c \n 19. b, c");
      getPrompt();
    } else {
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
