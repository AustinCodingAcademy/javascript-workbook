

'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {
  var pigLatin = '';
  var startVowel = /[aeiou]/gi;
  var cons = /[bcdfghjklmnpqrstvwxyz]/gi

//Step 1: Turn all letters to lowercase.
  var lowerCase = word.toLowerCase();
  var splitWord = lowerCase.split('');

// Step 2: Find first letter, if vowel, then add 'way'
if (lowerCase[0].match(startVowel)){
    lowerCase = word.toLowerCase() + 'way';
    return(lowerCase);
  }

// Step 3: split word. Then, remove first two letters. Then add it back.
//Words that start with 4 consonants.
  if (lowerCase[0].match(cons) && lowerCase[1].match(cons) && lowerCase[2].match(cons) && lowerCase[3].match(cons)){
    var removeLetter = splitWord.shift();
    var simpWord = splitWord.push(removeLetter);
    var removeSecondLetter = splitWord.shift();
    var secSimpWord = splitWord.push(removeSecondLetter);
    var removeThirdLetter = splitWord.shift();
    var thirdSimpWord = splitWord.push(removeThirdLetter);
    var removeFourthLetter = splitWord.shift();
    var FourthSimpWord = splitWord.push(removeFourthLetter);
    var simpleWord = splitWord.join('');
    simpleWord = simpleWord + 'ay';
    return(simpleWord);
  }
//Words that start with 3 consonants.
  else if (lowerCase[0].match(cons) && lowerCase[1].match(cons) && lowerCase[2].match(cons)){
    var removeLetter = splitWord.shift();
    var simpWord = splitWord.push(removeLetter);
    var removeSecondLetter = splitWord.shift();
    var secSimpWord = splitWord.push(removeSecondLetter);
    var removeThirdLetter = splitWord.shift();
    var thirdSimpWord = splitWord.push(removeThirdLetter);
    var simpleWord = splitWord.join('');
    simpleWord = simpleWord + 'ay';
    return(simpleWord);
  }
//Words that start with 2 consonants.
  else if (lowerCase[0].match(cons) && lowerCase[1].match(cons)){
    var removeLetter = splitWord.shift();
    var simpWord = splitWord.push(removeLetter);
    var removeSecondLetter = splitWord.shift();
    var secSimpWord = splitWord.push(removeSecondLetter);
    var simpleWord = splitWord.join('');
//     console.log(removeLetter);
    simpleWord = simpleWord + 'ay';
    return(simpleWord);
  }
//Words that start with 1 consonant.
 else{
   var removeLetter = splitWord.shift();
    var simpWord = splitWord.push(removeLetter);
    var simpleWord = splitWord.join('');
//     console.log(removeLetter);
    simpleWord = simpleWord + 'ay';
    return(simpleWord);
 }

};
pigLatin('String');







function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}
// d
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
