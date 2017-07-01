'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//variables
let vowels = ['a','e','i','o','u','y'];
let dice = [];
let fvind;

//if word starts with a vowel
function pigLatin(word){
  let firstlet = word.charAt();
  if(firstlet === ('a'||'e'||'i'||'o'||'u'||'y')){
    console.log(word+'nay');
  }
  else{
    for(var i = 0; i < vowels.length; i++){
      dice.push(word.indexOf(vowels[i]));
    }
//filter the indexes and get the minimum, slice and rearrange. Send it.
    dice = dice.filter(x=>x>=0);

    fvind = (Math.min.apply(null,dice));
    let pig = word.slice(0, fvind);
    let latin = word.slice(fvind) + pig + 'ay';
    return latin;
  }
};

function getPrompt() {
  rl.question('word ', (word) => {
    console.log( pigLatin((word.toLowerCase())) );
    getPrompt();
  });
}
getPrompt();

//Tests

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

module.exports = pigLatin;
