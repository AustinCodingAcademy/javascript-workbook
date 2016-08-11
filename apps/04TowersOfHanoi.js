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
    // We want to move a piece from the startStack to the endStack, so we'll
    // pop it off the startStack and push it on the end stack.

    var piece = stacks[startStack].pop();
    stacks[endStack].push(piece);

}

function isLegal(startStack, endStack) {
    // The move is only legal if the piece being moved from the starting stack
    // is smaller than the piece it will be moved on top of in the endStack or
    // if the piece from the starting stack is being moved to an empty stack.
    var sVal = stacks[startStack].length - 1;
    var eVal = stacks[endStack].length -1;

    if((stacks[endStack].length == 0) || (stacks[startStack][sVal] < stacks[endStack][eVal])) {
      return true;
    }
    else {
      return false;
    }

}

function checkForWin() {
    // We know we have a win if stack b or stack c have a length of 4, because
    // we already checked for illegal moves.
    if (stacks.b.length == 4 || stacks.c.length == 4) {
      return true;
    }
    else {
      return false;
    }

}

function towersOfHanoi(startStack, endStack) {
    // Check for a legal move
    if(isLegal(startStack, endStack)){
      // Move the piece from that startStack to the endStack.
      movePiece(startStack, endStack);
      // Check for a win after a piece is moved.
      if(checkForWin()){
        console.log("You win!");
      }
      else {
        getPrompt();
      }
    }
    else {
      console.log("That move was illegal. Read the rules & try again.");
      getPrompt();
    }


}

function getPrompt() {
    printStacks();
    prompt.get(['start stack', 'end stack'], function (error, result) {
      if (validateChoice(result['start stack'], result['end stack'])) {
        towersOfHanoi(result['start stack'], result['end stack']);
      }
      else {
        console.log("Invalid input. Stack choices are a, b or c");
        getPrompt();
      }
    });
}

function validateChoice(startStack, endStack) {
  //Validate the choice was a, b or c
  if ((startStack == 'a' || startStack == 'b' || startStack == 'c') &&
      (endStack == 'a' || endStack == 'b' || endStack == 'c')) {
        return true;
      }
  else {
        return false;
      }

}//end validateChoice()

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
