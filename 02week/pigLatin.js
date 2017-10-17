'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {
  let hi5= word.toLowerCase().trim();
if (hi5.indexOf("a")===0){
  console.log(word + "yay")
} else if (hi5.indexOf("e")===0){
  console.log(word + "yay")
} else if (hi5.indexOf("i")===0){
  console.log(word + "yay")
} else if (hi5.indexOf("o")===0){
  console.log(word + "yay")
} else if (hi5.indexOf("u")===0){
  console.log(word + "yay")
}  else if (hi5.indexOf("a" )===1) {
  console.log (hi5.substring(1,10) + hi5.substring(0,1) + "ay")
}  else if (hi5.indexOf("e" )===1) {
  console.log (hi5.substring(1,10) + hi5.substring(0,1) + "ay")
}  else {
  console.log(word)
}
  // Your code here

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
