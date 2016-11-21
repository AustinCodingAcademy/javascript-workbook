/*'use strict';

var prompt = require('prompt')

prompt.start();

prompt.get(['first', 'second'], function(error, result)) {
  console.log('First Input: ' + result['first']);
  console.log('Second Input: ' + result['second']);

}
*/
/*
function pigLatin (word) {
  var newWord = word.substring(0,1).toLowerCase();

  var oldWord = word.substring(1, word.length).toLowerCase();

  var ending = 'ay';

  console.log(oldWord + newWord + ending);
}

pigLatin('Greg');
pigLatin('dog');
pigLatin('create');
pigLatin('Blast HardCheese');*/
function add(x, y) {
  var y;
  if (x >= 0) {
    y = inc(y);
    x = dec(x);
  }
  return y;
}

function inc(x) {
  return x + 1;
}

function dec(x) {
  return x - 1;
}

console.log(add(2, 8))

/*function add(x,y) {
    if(x === y) {
        return x;
    } else {
        return add(dec(x), inc(y));
    }
}

console.log(add(2, 8));

// ignore the fact that inc makes use of +
function inc(x) {
  console.log('inc', x + 1);
}



function dec(x) {
  console.log('dec', x - 1);
  return x - 1;
}
*/
