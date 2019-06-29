'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word){
  word = word.trim().toLowerCase();
  var letters = word.split('');
  var vowels = ['a','e','i','o','u'];
  var newWord = '';
    for(var i = 0; i < vowels.length-1; n++) {
      for (var y=0; y< word.length-1; y++) {
        if (word[y] === vowels[i]){
          for (var x=y; x< word.length; x++){
            newWord = newWord + word[x];
          }
        for(var n = 0; n < y; n++) {
            newWord = newWord + word[n];
          }
        return newWord + 'yay";'
          }
        }
      }
    }

  // Your code 
  //var word= "trish"
  // function pigLatin(word) {
 // 
//var word = word.split("");
 // console.log (word);

 // var word ="abcd";
   // for(i=0; i<s. length;i++){
    //        char c=s. charAt(i);
     
  



function getPrompt() {
  rl.question('word ', (answer) => {
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