'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


//pig Latin function. Made up Argument name = 'word'
function pigLatin(word){
  // lowestVowel possible is 2 or the length of the word


  lowestVowel = 2 || word.length;
  
  // Finding the lowest index value of each vowel and setting the value to equal lowestVowel
  if (word.indexOf("a") > -1 &&
word.indexOf ("a") <lowestVowel) {
  lowestVowel = word.indexOf ("a")
}
if (word.indexOf("e") > -1 &&
word.indexOf ("e") <lowestVowel) {
  lowestVowel = word.indexOf ("e")
}
if (word.indexOf("i") > -1 &&
word.indexOf ("i") <lowestVowel) {
  lowestVowel = word.indexOf ("i")
}
if (word.indexOf("o") > -1 &&
word.indexOf ("o") <lowestVowel) {
  lowestVowel = word.indexOf ("o")
}
if (word.indexOf("u") > -1 &&
word.indexOf ("u") <lowestVowel) {
  lowestVowel = word.indexOf ("u")
}

console.log(lowestVowel)

//if the lowestVowel found is at index 0, just add "yay" to end of word

if(lowestVowel === 0){
  return word.toLowerCase() + "yay";
}
//otherwise, remove any letters before the index of lowestVowel and add to end of word, then add "ay"
  else{
    return word.toLowerCase().slice (lowestVowel,word.length) + word.toLowerCase().slice(0,lowestVowel) + "ay"
  }
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
    it('should auto lowercase word before translation', () => {
      assert.equal(pigLatin('HeLlO'), 'ellohay');
      assert.equal(pigLatin('RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
