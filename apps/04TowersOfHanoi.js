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
var moveCount = 1; // store the total number of moves played by user;
var legalMoveCount = 0;
/* function movePiece will handle moving the user selected stacks from startStack to endStack */
function movePiece(startStack, endStack) {
  // Your code here : 
   var temp; // store the popped stack value here, temp

    temp = stacks[startStack].pop(); // pop the user selected stack and store value in temp
    stacks[endStack].push(temp); // push temp onto the user selected endstack
   }

    // penguins are the best (wmy ife requested something about penguins)

/* isLegal will check to see if the user input stack push was legal*/
function isLegal(startStack, endStack) {
  // Your code here
  /* check if the the endStack is empty, or check if the stack being pushed is less than the
     stack already on endStack */
  var end = stacks[endStack].length; // store length of endStack in end;
  var start = stacks[startStack].length; // store length of startStack in start;
    if(stacks[endStack].length === 0 || stacks[startStack][start - 1] < stacks[endStack][end - 1]){
      legalMoveCount++; // add 1 to legal move counter here
      moveCount++;
    return true;
  
}
  else{
   // send invalid moves back
    var temp = stacks[endStack].pop();
    stacks[startStack].push(temp);
    console.log("invalid move Try Again");
    moveCount++;
return false;
  }
}

function checkForWin(){
  // Your code here
/* checks if the length of stacks 'b' or 'c' is 4, or, a completed game, provided all moves
  were legal */
if(stacks['b'].length === 4 || stacks['c'].length === 4){ 
  // reset the board after a win
    stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};
  legalMoveCount = 0;
  
return true; 
}
  
return false;
  
}

function towersOfHanoi(startStack, endStack) {
  // Your code here
  if(isLegal(startStack, endStack)){
    console.log("Number of Legal Moves: " + legalMoveCount);  
  } //call isLegal to check if moves done have passed true
  movePiece(startStack, endStack); // call movePiece to allow user to move stacks
  checkForWin(); // test for a win here
  console.log("Number of Moves: " + moveCount++);
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
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });
} else {

  getPrompt();

}
