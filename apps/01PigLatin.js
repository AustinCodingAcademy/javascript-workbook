'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// console.log("Xilin has coded this function.");

function pigLatin(word) {
//initiate variables 
var vowelArray = ['a', 'e', 'i', 'o', 'u', 'y'];
var vowelIndex = -1;
var word = word.toLowerCase();

//make a loop to get the vowel index
for (var i = 0; i < vowelArray.length; i++ ) {
	var position = word.indexOf(vowelArray[i]);
  //check if the vowelIndex is less than the current position, assign it the new value if so
  //ultimately, we want to find the minimum position, and assign it to vowelIndex
	if ((position > -1 && position < vowelIndex)|| vowelIndex === -1) {
    vowelIndex = position;
    }
}
//directly print if the first letter is a vowel
if (vowelIndex === 0) {
	return(word + 'yay');
}
//go through the standard procedure otherwise
else {
  //break down the word into two parts and flip them
	var firstpart = word.slice(0, vowelIndex);
	var latterpart = word.slice(vowelIndex, word.length);
  return (latterpart + firstpart + 'ay');
    }
}

function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', function () {
    it('should translate a simple word', function () {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', function () {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', function () {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should auto lowercase word before translation', function () {
      assert.equal(pigLatin('HeLlO'), 'ellohay');
      assert.equal(pigLatin('RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
