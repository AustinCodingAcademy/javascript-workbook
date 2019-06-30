'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {
  //first I'm going to take the input and make an array of letters called 'newWord' that doesn't contain any spaces or capital letters
  let newWord = word.trim().toLowerCase().split('');

  //Now I need to create an array to hold the letters because split will not create the array for me
  let pigLatin = [];

  //Next I need to declare an array of vowels that I want to compare to the first letter of each word
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  //if the word starts with a vowel, then all I need to do is add "ay" to the end
  if (newWord.indexOf(vowels) === 0) {
    return newWord + 'ay';
  } else if (newWord.indexOf(vowels) === 1)
      newWord.split([1])
}

//for loop to check each letter in the word
for (i=[0]; i<newWord.length; i++){
  
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
