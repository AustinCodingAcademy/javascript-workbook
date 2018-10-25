'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {

  // Your code here
  if(typeof(word) == 'string'){
    word = word.split('');
     let
   }
   const pigLatin = (word)=> {
     const vowel = ['a','e','i','o','u'];
     const ending = 'ay';
     const translate = function(word) {
     
       // Array will be the word argument as an array
       const array = word.split('');
       
       // Vowels going to test against
        vowels = ['a','e','i','o','u'];
       
       // Create newWord var to hold reordered letters
        newWord = '';
       
        // Loop through leters in word
           for( y = 0; y < word.length-1; y++) {
       
        // Loop through vowels
           for( i = 0; i < vowels.length-1; i++) {
         
             
             // If any letter in word matches a letter in vowwels
               if(word[y] === vowels[i]) {
                 
                 
                   for( x = y; x < word.length; x++){
                       newWord = newWord + word[x];
                   }
                   for( n = 0; n < y; n++){ 
                       newWord = newWord + word[n];
                   }
                   return newWord + "ay";
               }       
           }
       }
   }
   
   translate('hi my name is jose');
}


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
