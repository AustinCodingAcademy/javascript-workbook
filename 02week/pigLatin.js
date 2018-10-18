'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//CODE PLAN
//user enters a word
//check if entry is a valid string
//if entry isn't a valid string ask the user for another entry
//if y is not first letter of word, change value of vowel array, then continue as normal
//if entry is a valid string detach the first letters up to the first vowel
//if first letter is a vowel add "yay" to the end of the word OR
//move first consenants to end of word
//add "ay" to end of added letters
//display word to user

let vowels = ['a', 'e', 'i', 'o', 'u'];

const validWord = (userEntry) => {
  if (typeof userEntry== 'string'){
    return true;
  } else {
    return false;
  }
};

const isFirstLetterVowel = (userEntry) => {
  if (vowels.includes(userEntry.split('')[0])){
    return true;
  } else {
    return false;
  }
};

const isYFirstLetter = (userEntry) => {
  const userEntryArr = userEntry.split('');
  if (userEntryArr[0]== 'y') {
    return true;
  } else {
    return false;
  }
};


const detachAndSwitchLettersAddAy = (userEntry) => {
  const userArr = userEntry.split('');
  for (let i=0; i < userArr.length; i++){
    for ( let  a=0; a < vowels.length; a++){
      if (userArr[i] === vowels[a]){
        const spliceValue = userArr.splice(0, i);
        const spliceValueString = spliceValue.join('');
        userArr.push(spliceValueString);
        userArr.push('ay');
        const finalUserWord = userArr.join('');
        console.log(finalUserWord);
      }
    }
  }
};



const addYayToFirstLetterVowel = (userEntry) => {
    const userEntryArr = userEntry.split('');
    userEntryArr.push('yay');
    const userEntryArrAndYay = userEntryArr.join('');
    console.log(userEntryArrAndYay);
};




const pigLatin = (userEntry) => {
  if (validWord(userEntry)){
    if (isFirstLetterVowel(userEntry)){
      addYayToFirstLetterVowel(userEntry);
    }else if (isYFirstLetter(userEntry)){
      detachAndSwitchLettersAddAy(userEntry);
    }else {
      vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
      detachAndSwitchLettersAddAy(userEntry);
    }
  } else {
    return 'please enter a valid word';
  }
};

pigLatin('yard');

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
