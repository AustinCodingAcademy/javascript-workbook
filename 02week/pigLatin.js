'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {

  // Your code here
  
  //create an array for every vowel
  var vowels = ['a','e','i','o','u'];
  //temp variable to make word lowercase
  var temp_word = word.toLowerCase();
  //create an extra variable to put the letters back 
  var newWord = '';

  //word loop
  for(var y = 0; y < word.length-1; y++) {
    //vowel loop
    for(var i = 0; i < vowels.length-1; i++) {
      //if letter in word is a vowel
      if(word[y] === vowels[i]) {

        for(var x = y; x < word.length; x++){
          newWord = newWord + word[x];
        }

        for(var n = 0; n < y; n++){ 
          newWord = newWord + word[n];
        }


      }
    }
    
  }
  
  console.log(newWord);

  




}


function getPrompt() {
  rl.question('Word: ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
