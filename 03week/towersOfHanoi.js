'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

const printStacks = () => { // prints the playing board to the console
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

const movePiece = (startStack, endStack) => {
  return stacks[endStack].push(stacks[startStack].pop());
  // this funciton takes the last value of the array in the startStack moves it to the last position in the endStack
}

const stackTest = (startStack, endStack) => { //This function tests to make sure that the user is entering an a, b, or c FIRST and a corresponding letter SECOND
  if ((startStack === 'a') && (endStack === 'b' || endStack === 'c')) {
    // tests for combinations with 'a' as the starting stack
    return true;
  } else if ((startStack === 'b') && (endStack === 'a' || endStack === 'c')) {
    // tests for combinations with 'b' as the starting stack
    return true;
  } else if ((startStack === 'c') && (endStack === 'a' || endStack === 'b')) {
    // tests for combinations with 'c' as the starting stack
    return true;
  } else {
    // if no legal combinations were selected by the user the funciton will return FALSE
    return false;
  }
}



const isLegal = (startStack, endStack) => { //This funciton tests to see if the proposed moved by the user is a legal move: the proposed move can only go 'on top' of a value that is smaller
  if (stackTest(startStack, endStack)) {
    // calls the stackTest function above to make sure that the combinations of starting and ending position are a legal combination.  The test for values will only run if the user has entered a stack combination that is legal
    let startTest = stacks[startStack][stacks[startStack].length - 1];
    let endTest = stacks[endStack][stacks[endStack].length - 1];
    // assignes variables to the starting value and the ending value
    if ((startTest < endTest) || (stacks[endStack].length === 0)) {
      // tests to see if the piece to be moved is less than the piece it will sit 'on top of'
      return true;
    } else {
      console.log('I-N-V-A-L-I-D S-E-L-E-C-T-I-O-N');
      //if the destination piece's value is greater than the piece to be moved, the function will exit and the user will get an error message
      return false;
    }
  } else {
    console.log('I-N-V-A-L-I-D S-E-L-E-C-T-I-O-N');
    //if the user did not propose a valid stack combination, the function will exit and the user will receive an error message
    return false;
  }
}


const checkForWin = () => { // the only possible way for the 'winning stack (c)' to get 4 value is if they are largest on the bottom and smallest on the top.  The funciton above will not let them stack any other way
  if (stacks.c.length === 4) {
    return true;
  } else {
    return false;
  }
}

const towersOfHanoi = (startStack, endStack) => {
  if (isLegal(startStack, endStack)) { // if isLegal is true then movePiece will be called
    movePiece(startStack, endStack)
  }
  if (checkForWin()) { // check for win will be called each time to see if the user has won.  If the winner has won, the user will receive a message and the board will re-set.  It gets printed in the in the getPrompt funciton below
    console.log('winner winner chicken dinner');
    stacks = {
      a: [4, 3, 2, 1],
      b: [],
      c: []
    };
  }
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

getPrompt();


// TESTING, TESTING

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'c');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), false);
      stacks = { a: [], b: [], c: [4, 3, 2, 1] };
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
