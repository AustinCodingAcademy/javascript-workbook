 /////////
// part 1
console.log("\n\nPart 1:\n");

let today = new Date();

console.log(today);

 /////////
// part 2
console.log("\n\nPart 2:\n");

let num = 99;

console.log("Here is " + num + " in binary: " + num.toString(2));

 /////////
// part 3
console.log("\n\nPart 3:\n");

let str = "3.14 ≠ π";

console.log("This number has been stripped of its stringyness: " + parseFloat(str));

 /////////
// part 4
console.log("\n\nPart 4:\n");

let yarn = "Nylon";
let life = 42;
let falseness = true;
let wormHole = 0 / 0;
let theVoid = null;
let theTrueVoid = undefined;

function checkForTheImpossible(x) {
  if (isNaN(x)) {
    return 'NaN';
  }
  return x;
}

console.log(typeof yarn);
console.log(typeof life);
console.log(typeof falseness);
console.log(checkForTheImpossible(wormHole));
console.log(typeof theVoid);
console.log(typeof theTrueVoid);

 /////////
// part 5
console.log("\n\nPart 5:\n");

function addTheseTwo(num1, num2) {
  return num1 + num2;
}

let int1 = 64;
let int2 = 32;

console.log(int1 + " plus " + int2 + " equals " + addTheseTwo(int1, int2));

 /////////
// part 6
console.log("\n\nPart 6:\n");

let on  = true;
let off = false;

function logicGateAnd(input1, input2) {
  if( input1 && input2 ) {
    return "Running";
  } else {
    return "Waiting";
  }
}
console.log("On / On is " + logicGateAnd(on, on));
console.log("On / Off is " + logicGateAnd(on, off));
console.log("Off / Off is " + logicGateAnd(off, off));

 /////////
// part 7
console.log("\n\nPart 7:\n");

function logicGateOr(input1, input2) {
  if( input1 || input2 ) {
    return "Running";
  } else {
    return "Waiting";
  }
}
console.log("On / On is " + logicGateOr(on, on));
console.log("On / Off is " + logicGateOr(on, off));
console.log("Off / Off is " + logicGateOr(off, off));

 /////////
// part 8
console.log("\n\nPart 8:\n");

function logicGateNot(input1, input2) {
  if( !(input1 && input2) ) {
    return "Running";
  } else {
    return "Waiting";
  }
}
console.log("On / On is " + logicGateNot(on, on));
console.log("On / Off is " + logicGateNot(on, off));
console.log("Off / Off is " + logicGateNot(off, off));