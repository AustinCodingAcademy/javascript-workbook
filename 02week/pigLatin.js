'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


//function pigLatin(str){
   // str = str.trim().toLowerCase();
    

  //const vowels = ['a','e','i','o','u', 'y'];
  //let vowelIndex = 0 ;
  //const firstLetter = str[0];
  //if (vowels.includes(str[0])) {
   // return str + 'yay';
  //} else { 
   // for (let char of str){
      //vowelIndex = str.indexOf(char);
      //break;
    // }
    //}
  //return str.slice(vowelIndex) + str.slice(0, vowelIndex) + "yay";
    //}
    function toPigLatin(part) {
      str=part.toLowerCase();
      var n =part.search(/[aeiuo]/);
      switch (n){
       case 0: str = str+"way"; break;
       case -1: str = str+"ay"; break;
       default :
          //str= str.substr(n)+str.substr(0,n)+"ay";
          str=str.replace(/([^aeiou]*)([aeiou])(\w+)/, "$2$3$1ay");
       break;
     }
     return str; 
 
 
 }
 
 
 
 
 
 
 
 
 function letters(word) {
      return word.split('');
  }
 
  function pigLatinizeWord(word) {
      var chars = letters(word);
      return chars.slice(1).join('') + chars[0] + 'ay';
  }
 
 function pigLatinizeSentence(sentence) {
     return sentence.replace(/\w+/g, pigLatinizeWord);
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
