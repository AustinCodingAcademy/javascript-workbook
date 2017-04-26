'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {

  // Your code here
  var vowel = ['a','e','i','o','u','y'];
  var small = word.toLowerCase();
  var split = small.split("");

  //starts with vowel
  if(vowel.includes(split[0])){
    return(small + "yay");
  }

  //simple word
  else if (split.length === 3){
    var body = small.slice(1)
    return(body+split[0]+"ay");
  }

  //2nd letter vowel
  else if(vowel.includes(split[1])){
    var body = small.slice(1)
    return(body+split[0]+"ay");
  }

  //3rd letter vowel = complex
  else if(vowel.includes(split[2])){
    var body = small.slice(2)
    return(body+split[0]+split[1]+"ay");
  }

};


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
