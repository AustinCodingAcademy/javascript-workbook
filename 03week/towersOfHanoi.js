'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//   stacks is an object containing 3 arrays which the last value in the first array is the lesser value . the goal of the game is to get the exact same alignment to the last stack which is the array "c"

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

// the movie piece functions allows us to play the game it simply uses the array method pop which removes the last item in and array and pushes it back to another array also know as stacks in this game
const movePiece=(startStack, endStack)=> {
  return stacks[endStack].push(stacks[startStack].pop());node

}
// conditionals check the value of the element ion this case the last value in the array given which was our start stacks the lowest value was one and was place at the end of that array which is found through the.lenght-1 method

// in the towers game a move is only legal based on the value only smaller inputs can be placed on top of higher inputs. the ,lenght-1 methods allows us to target the very last element in an array

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
//   this function is used to determine which blocks become and endStack or a StartStack in this case there is only 3 possible outcome we have 3 stacks which are the 3 areas where the items will be place . if a is a start stack b and c naturally become end stack same for b"startStack where a and c are now end stacks and when c is a startStack  then naturally a and b now become end stacks

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

// when 4 values are in  order in the end stack which is our last array "c" the game has been won 
const checkForWin=()=> {
  if (stacks.c.length === 4 || stacks.b.length === 4){
    return true;
  } else{
    return false;
  }
}

// Parent function Main Function where the game happens which thru we passed the is legal functions which checks to see if the move is legal according to the rule of the game in this case if the value on the very top is always lesser then the values on the bottom, then we used the move pieve function to play our game  then we reset the game back so that someone else can use it

const towersOfHanoi=(startStack, endStack) => {
  if (isLegal(startStack,endStack)){
   movePiece( startStack, endStack);
  } else{
    console.log("no Sir");
  } 
  if (checkForWin()){
    console.log (" YOU ARE A GENIUS YOU WON!!!")
    // repositions the stacks "RESET" all the item are now back to the start stack
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
    it('should detect a win at stack b', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win at stack c', () => {
      stacks = { a: [], b: [], c: [4,3,2,1] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

  describe('#valueOfStack()', () => {
    it('check the amount of tokens in a stack', () => {

      assert.equal(valueOfStack('a','c'), true);
      assert.equal(valueOfStack('b','c'), false);
    });
  });

} else {

  getPrompt();

}
