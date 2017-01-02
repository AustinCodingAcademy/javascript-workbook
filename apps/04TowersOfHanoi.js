'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var stacks = {
    //so stacks is an object, and it has 3 modifiable keys
    //these keys are single dimension arrays
    //what we want are functions that will
    a: [4, 3, 2, 1],
    b: [],
    c: []
};

var moveCount = 0;

function printStacks() {
    console.log("a: " + stacks.a);
    console.log("b: " + stacks.b);
    console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {
    //So move piece should get the stack we're removing from, this is the "top piece"
    //for example the virgin board would have an a: [1] as the "top piece" and a: [4] as the bottom piece
    //then it should take the "top piece" and remove it from object key a: and then place it on the selected key
    //If that doesn't work then we should go back to getprompt()

    //so the question is, what kind of information is getting passed to movepiece()
    //so the only thing the user is giving us is the tower, the rest is automatic, so basically all we need as a shift mechanism
    if (isLegal(startStack, endStack)) {
        //removes last item from user selected object key (a, b or c) and places it on the user selected object key (a, b, or c)
        stacks[endStack].push(stacks[startStack].pop());
    }

}

function isLegal(startStack, endStack) {


    //If there's nothing in the key inside stacks then we can initialize startStackValue to 0
    //Otherwise we will give it the length of the key
    if (stacks[startStack].length == 0) {
        var startStackValue = 0;
    } else {
        var startStackValue = stacks[startStack][stacks[startStack].length - 1];
    }

    //If there's nothing in the key inside stacks then we can initialize endStackValue to 0
    //Otherwise we will give it the length of the key
    if (stacks[endStack].length == 0) {
        var endStackValue = 0;
    } else {
        var endStackValue = stacks[endStack][stacks[endStack].length - 1];
    }

    //Finalize the legality of the move
    if (startStackValue < endStackValue || endStackValue == 0) {
        return true;
    } else {
        console.log("Illegal Move")
        return false;
    }

}

function checkForWin() {
  if(stacks.b.length==4 || stacks.c.length==4)
  {
    console.log("You win, your movecount was " + moveCount + "!!!");
    return true;
  }
  else {
    return false;
  }
}

//testing function to expedite the win testing
function winTheGame() {
    stacks.b = [4, 3, 2, 1];
    stacks.a = [];
    stacks.c = [];
}

function resetStacks() {
  console.log("Resetting Stacks!")

  stacks.a = [4,3,2,1];
  stacks.b = [];
  stacks.c = [];
}


//Ensures that the user entry is an a b or c (has already been toLowerCased)
function checkEntry(startStack, endStack) {
    if ((startStack == 'a' || startStack == 'b' || startStack == 'c') && (endStack == 'a' || endStack == 'b' || endStack == 'c')) {
        return true;
    } else {
        console.log("Please enter 'a', 'b', or 'c'");
        return false;
    }
}

function towersOfHanoi(startStack, endStack) {

    //Ensure all entries are lowercased
    startStack = startStack.toLowerCase();
    endStack = endStack.toLowerCase();

    if(startStack=="win"){
      winTheGame();
    }

    //INCLUDE A FORMATTING CHECK THAT VALIDATES THE STRINGS FOR startStack and endStack
    //ENSURE THAT FORMAT CHECK PASSES VALUES A a B b C c and NO OTHERS
    if (checkEntry(startStack, endStack) && isLegal(startStack, endStack)) {

        movePiece(startStack, endStack);
        //We add a move to moveCount on successfull passthrough
        moveCount += 1;

        //We check for win and then if so we reset the stacks
        if(checkForWin()){
          resetStacks();
        }

    }


}

function getPrompt() {
    printStacks();
    rl.question('what stack would you like to move from (a, b or c): ', (startStack) => {
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
