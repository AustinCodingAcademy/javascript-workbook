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


function pigLatinInner(word) {

  // Your code here
  // define what vowels are
  
  // defines vowels, trims strings, makes all characters lowercase
  const vowels = ['a','e','i','o','u'];
  // i couldn't remember how to declare something as NOT something (aka a vowel) so i made this string before i remembered
  const consonant = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z']
  console.log(word)

  // if word begins with vowel...
  if (vowels.includes(word[0])) {
  // ... puts "yay" at end
    return word + "yay"
  // if word begins with two consonants, moves two letters to end and adds "ay"
  } else if (consonant.includes(word[0]) && consonant.includes(word[1])) {
    if (vowels.includes(word[2])) {
      let movedLetter = word.slice(0,2);
      return word.substr(2) + movedLetter + "ay";
    }
  // if word begins with one consonant and then a vowel, moves one letter to end and adds "ay"
  } else if (consonant.includes(word[0])) {
    if (vowels.includes(word[1])) {
      let movedLetter = word.slice(0,1);
      return word.substr(1) + movedLetter + "ay";
    }
  }
}


  // perform pigLatin conversion on multiple words...
  // if (word.includes(' ')) {
  //   let separatedWords = word.split(' ');
  //   if(vowels.includes(separatedWords[0][0])) {
  //     if (vowels.includes(separatedWords[1][0])) {
  //       return wordVowel(separatedWords[0]) + ' ' + wordVowel(separatedWords[1])
  //     }
  //   }
  //   if(consonant.includes(separatedWords[0])) {

  //   }
  // }
      // console.log(separatedWords[0])
      // console.log(separatedWords[1]);

// class notes:
// 1. lowercase everything
// 2. is first letter vowel? (split letters into an array --> then do arr[0] to see if it's a vowel --> includes is function to check??)
// 3. move first letter to end (use shift or push to get to end)
// split(0)
// push(split(0))
// 4. add "ay" to string using concat/push/
// 5. shift until we find vowel

// while loop...
// while(arr[0]!=)


// if first letter a consonant, add "ay"... if first letter a vowel, add "hay"


function pigLatin() {
  rl.question('word ', (answer) => {
    if (answer.includes(' ')) {
      let separatedWords = answer.trim().toLowerCase().split(' ');
      if (separatedWords.length < 2){
        console.log(pigLatinInner(separatedWords.toString()))
      } else console.log((pigLatinInner(separatedWords[0])) + ' ' + (pigLatinInner(separatedWords[1])))
      pigLatin();
      
    } else { 
      let newWord = answer.trim().toLowerCase();
      console.log(newWord)
      console.log( pigLatinInner(newWord) );
    pigLatin();
  }
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatinInner('car'), 'arcay');
      assert.equal(pigLatinInner('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatinInner('create'), 'eatecray');
      assert.equal(pigLatinInner('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatinInner('egg'), 'eggyay');
      assert.equal(pigLatinInner('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
    it('should separate two words and return them together', () => {
      assert.equal(pigLatin('hop fest'), 'ophay estfay');
    });
  });
} else {

  pigLatin();

}
