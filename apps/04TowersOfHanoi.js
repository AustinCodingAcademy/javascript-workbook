'use strict';

var assert = require('assert');
var prompt = require('prompt');
prompt.start();

var stacks = {
    a: [4, 3, 2, 1],
    b: [],
    c: []
};
var start;
var end;

function printStacks() {
    console.log("a: " + stacks.a);
    console.log("b: " + stacks.b);
    console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {
    var move = stacks[startStack].pop();
    stacks[endStack].push(move);
};
//
function isLegal(startStack, endStack){
  if (stacks[endStack].length === 0){
    return true;
  }else{
    if (startStack === 'a'){
      start = stacks.a[stacks.a.length-1];
 		}else if(endStack==='a'){
 			end = stacks.a[stacks.a.length-1];
 		}
 		if (startStack === 'b'){
			start = stacks.b[stacks.b.length-1];
 		}else if(endStack==='b'){
 			end = stacks.b[stacks.b.length-1];
 		}
 		if (startStack === 'c'){
			start = stacks.c[stacks.c.length-1];
 		}else if(endStack==='c'){
 			end = stacks.c[stacks.c.length-1];
 		}
		if (start<end){
 			return true;
 		}else if (start>end){
 			return false;
 		}
 	}
}

function checkForWin() {
    if(stacks['b'].length === 4 || stacks['c'].length === 4 ){
      console.log("You Won!!!");
      return true;
    }else{
      return false;
    }
}

function towersOfHanoi(startStack, endStack) {
    if (isLegal === true && checkForWin === false){
      movePiece(startStack, endStack);
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
            towersOfHanoi('a','b');
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
