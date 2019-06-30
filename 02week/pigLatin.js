'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// const wordVowel = (aword) => {
//   return aword + 'yay'
// }


function pigLatin(word) {

  // Your code here
  
  // defines vowels, trims strings, makes all characters lowercase
  const vowels = ['a','e','i','o','u'];
  // i couldn't remember how to declare something as NOT something (aka a vowel) so i made this string before i remembered
  const consonant = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z']
  word = word.trim();
  word = word.toLowerCase();
  console.log(word)

  // if word begins with vowel...
  if (vowels.includes(word[0]) && !word.includes(' ')) {
  // ... puts "yay" at end
    return word + "yay"
  // if word begins with two consonants, moves two letters to end and adds "ay"
  } else if (consonant.includes(word[0]) && consonant.includes(word[1]) && !word.includes(' ')) {
    if (vowels.includes(word[2])) {
      let movedLetter = word.slice(0,2);
      return word.substr(2) + movedLetter + "ay";
    }
  // if word begins with one consonant and then a vowel, moves one letter to end and adds "ay"
  } else if (consonant.includes(word[0]) && !word.includes(' ')) {
    if (vowels.includes(word[1])) {
      let movedLetter = word.slice(0,1);
      return word.substr(1) + movedLetter + "ay";
    }
  } else if (word.includes(' ')) {
    // perform pigLatin conversion on multiple words...
    let separatedWords = word.split(' ');
    if(vowels.includes(separatedWords[0][0])) {
      if (vowels.includes(separatedWords[1][0])) {
        return wordVowel(separatedWords[0]) + ' ' + wordVowel(separatedWords[1])
      }
    } //else if ()
  }
}



function getPrompt() {
  rl.question('word ', (answer) => {
    if (answer.includes(' ')) {
      let separatedWords = answer.trim().toLowerCase().split(' ');
      if (separatedWords.length < 2){
        console.log(pigLatin(separatedWords.toString()))
      } else console.log((pigLatin(separatedWords[0])) + ' ' + (pigLatin(separatedWords[1])))
      getPrompt();
      
    } else { 
      let newWord = answer.trim().toLowerCase();
      console.log(newWord)
      console.log( pigLatin(newWord) );
    getPrompt();
  }
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
    // it('should separate two words and return them together', () => {
    //   assert.equal(pigLatin('hop fest'), 'ophay estfay');
    // });
  });
} else {

  pigLatin();

}
