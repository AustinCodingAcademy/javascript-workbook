'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {

  // Your code here
word = word.toLowerCase(); //put all letters to lower case
var pigLatin = word; //create variable pigLatin to store changes to original word
  /* I use the slice function here as to test the values located in the
  0 and 1 position of the word, then, I use the match function to test and see if the 
  sliced characters happen to be vowels, if true (are vowels) add 'yay' to the end
  of pigLatin and return pigLatin. this covers letter cases, vowels and a means to move the 
  characters in the string off the string as to test the values*/ 
  if(pigLatin.slice(0,1).match(/[aeiouAEIOU]/)){
    pigLatin = pigLatin + 'yay';
  }

  else{
    var wordChange ='';
    while(pigLatin.slice(0,1).match(/[^aeiouAEIOU]/)){
        wordChange += pigLatin.slice(0,1);
        pigLatin = pigLatin.slice(1, pigLatin.length);
    }
    pigLatin = pigLatin + wordChange + 'ay';
  }
return pigLatin;
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
