5'use strict';

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


const printStacks=()=> {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

const movePiece=(startStack, endStack)=> {
  return stacks[endStack].push(stacks[startStack].pop());node

}
// conditionals 
const isLegal=(startStack,endStack)=> {
  if(valueOfStack (startStack,endStack)) {
  const firstValue = stacks[startStack][stacks[startStack].length-1]
    const secondValue = stacks[endStack][stacks[endStack].length-1]
      if(firstValue < secondValue || stacks[endStack].length===0){
       return true
     }else{
      return false 
    }
}
}

const valueOfStack =(startStack,endStack)=>{
if (startStack ==='a'&& endStack==="b"|| endStack ==="c"){
  return true;
}else if( startStack ==="b" && endStack==="a"|| endStack==="c"){
return true;
} else if( startStack==="c" && endStack==="a"|| endStack==="b"){
  return true;
} else{
  return false;
}
}



const checkForWin=()=> {
  if (stacks.c.length === 4){
    return true;
  }else{
    return false;
  }
}

// parent function Main Function where the game happens

const towersOfHanoi=(startStack, endStack) => {
  if (isLegal(startStack,endStack)){
   movePiece( startStack, endStack);
  } else{
    console.log("no Sir");
  } 
  if (checkForWin()){
    console.log (" YOU ARE A GENIUS YOU WON!!!")
    stacks = {
      a: [4, 3, 2, 1],
      b: [],
      c: []
    };
  } 
}

const getPrompt=() => {
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

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
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
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
