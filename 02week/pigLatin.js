'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//old code
//function pigLatin(str) {
  //function check(obj) {
  	//return ['a','i','u','e','o'].indexOf(str.charAt(obj)) == -1 ?
      //										  check(obj+1) : obj;}
      										  
  //return str.substr(check(0))
    //        .concat((check(0) === 0 ? 
      //                  'y' : str.substr(0, check(0))) 
        //                + 'ay');
//}

function pigLatin(word){
  let cut = word.substr(1).trim().toLowerCase() + word.charAt(0) + 'ay';
  console.log(cut);
  //convert to lowercase
  word = word.trim().toLowerCase();
  //initiliaze array of vowels
  const vowels = ["a", "e", "i", "o", "u"];
  //initialize vowel index to 0
let vowelIndex = 0;

if (vowels.includes(word[0])) {
  //if first letter is a vowel
  return word + "yay";
} else{
  //if ther first letter isnt a vowel
  for (let char of word){
    //loop through until the first vowel is found
    if(vowels.includes(char)) {
      //store the index at which the first vowel exists
      vowelIndex = word.indexOf(char);
      break;
    }
  }
  //compose final string
  return word.slice(vowelIndex) + word.slice(0, vowelIndex) + "ay";
}
}
// test here
pigLatin("word");


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
