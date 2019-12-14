'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(oldWord) {

  var word = oldWord.trim().toLowerCase();

  console.log("the original word is", word);


  const vowel = ["a", "e", "i", "o", "u"];
  let firstVowel, firstHalf, secondHalf, switchedWord, finalSuffix, finalWord;

  for (var i=0;i<vowel.length;i++){

    var wordIndex = word.indexOf(vowel[i]);

    if (wordIndex > -1 && (wordIndex <= firstVowel || !firstVowel )) {
      firstVowel = wordIndex;
    }
  }

  console.log(firstVowel);

  firstHalf = word.substring(0, firstVowel);
  console.log(firstHalf);
  secondHalf = word.substring(firstVowel, word.length);
  console.log(secondHalf);
  switchedWord = secondHalf + firstHalf;
  console.log(switchedWord);
  


  if (firstVowel !== 0) {
    return switchedWord+"ay";  
  } else  {
    return switchedWord+"yay";
  }



  // word.indexOf(vowel, 0)
    // let firstHalf = word.substring(0, word.indexOf(vowel[i]));
    // console.log("first half = ", firstHalf);


  
  // let secondHalf = word.substring(5,8);

  // console.log("second half = ", secondHalf);


  // then word.split(separator, limit)

  // console.log("The index of the first vowel is",  (word));


  // console.log("the position of the firs vowel is", positionOfVowel);

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
