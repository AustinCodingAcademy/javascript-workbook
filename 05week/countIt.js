'use strict'

let str = "This is a test of the emergency broadcast system.";
let pattern = /\w/;
let arr = str.toLowerCase().split('');
let arrLetters = [];
let arrCount = [];

for(let i = 0; i < arr.length; i++) {
  if(pattern.test(arr[i])) {
    arrLetters.push(arr[i]);
  }
}

for(let j = 0; j < arrLetters.length; j++) {
  if (j == 0) {
    arrCount.push(1);
  }
  else if(arrLetters.indexOf(arrLetters[j]) == j) {
    arrCount.push(1);
  }
  else {
    arrCount[arrLetters.indexOf(arrLetters[j])]++;
    arrCount.push(null);
  }
}

let outputStr = '';
for(let x = 0; x < arrLetters.length; x++) {
  if(arrCount[x] != null) {
    outputStr += arrLetters[x] + ':' + arrCount[x] + ' ';
  }
}
console.log(outputStr);