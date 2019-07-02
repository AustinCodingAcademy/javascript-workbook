'use strict';

function pigLatin(word) {
  //the first thing I need to do is to create an array of just words. If the user puts in multiple words, this condition should separate these words and add them to an array I called twoWords
  let twoWords = word.split(' ');
  console.log(twoWords);

//once I have each word as an array, I'm going to create another array of just letters (for each word). Using a for loop, I'm going to cy 
  for (let x=0; x < twoWords.length; x++){
    let pigString = twoWords[x];
    pigString = pigString.trim().toLowerCase().split('');
    console.log('1: ' + pigString);
//breaks two words into two arrays

  let newWord = [];
  let finalPhrase = [];
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  if (vowels.includes(pigString[0])) {
    newWord = pigString.join('') + 'ay';
    finalPhrase.push(newWord);
    console.log('here: ' + finalPhrase);
  } else {

  for (let i = 0; i < pigString.length; i++) {

    if (! (vowels.includes(pigString[i]))){
      console.log(i, newWord);
      newWord.push(pigString[i]);
    } else {
      newWord = pigString.slice(i, pigString.length).concat(newWord).join('') + 'ay';
      console.log('3 ' + newWord);
      break;    
    }
  } 
  }
  finalPhrase.push(newWord);
  console.log('last ' + finalPhrase);
  };
};

//I'm not sure how to add/concat the new push() values together so the entire phrase is displayed all together. Instead, I keep getting one word, then the next word. It doesn't push them in order, it seems to overwrite them.

pigLatin('please stop okay');



function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
};

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
