//change quantity of stacks
  //4-8 discs in each stack
//log total moves
//start on a-b-c-


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
    //startStack pop off last element
    // console.log(startStack);
    // console.log(endStack);
    var lastEl = stacks[startStack].pop();
    stacks[endStack].push(lastEl);
      //add that last element
        //to end stack


}

function isLegal(startStack, endStack) {
    // Your code here
    var startStackArray = stacks[startStack];
    var lastElStartStack = startStackArray[startStackArray.length - 1];
    var endStackArray = stacks[endStack];
    var lastElEndStack = endStackArray[endStackArray.length - 1];
    console.log(lastElStartStack, lastElEndStack);

    if(startStackArray.length === 0){
      return false;
    }

    if(endStackArray.length === 0){
      return true;
    }

    if(lastElStartStack < lastElEndStack){
      return true;

    }
    else{
      return false;
    }



}

function checkForWin() {
    // Your code here
    if(stacks["b"].length === 4 || stacks["c"].length === 4){
      console.log("stacks b length",stacks["b"].length);
      console.log("stacks c length",stacks["c"].length);
      return true;
    }
    else{
      return false;
    }


}

function isValid(startStack, endStack){
  if(stacks[startStack] === undefined || stacks[endStack] === undefined){
    return false;
  }
}

function towersOfHanoi(startStack, endStack) {

  if(isValid(startStack, endStack)){
    console.log('valid');
    if( isLegal(startStack, endStack) ){
      movePiece(startStack, endStack);
      if(checkForWin()){
        console.log('you won');
      };
    }

    else{
      console.log('invalid move. enter valid please');
    }

  }
  else{
    console.log('invalid');
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
