'use strict';

// in order for the code to work properly I had to remove
// several already coded functions like the getPrompt

function pigLatin() {
  let newWord = document.getElementById("input").value;

  newWord = newWord.trim().toLowerCase();  // trim removes spaces before or after the word
  let vowels = ['a','e','i','o','u'];
  let finish;

  if (vowels.includes(newWord[0])) {  // if the first letter is a vowel
    finish = newWord + "yay";  // remove nothing and add 'yay' to the end of the word
  } else if (vowels.includes(newWord[1])) {  // if the second letter is a vowel
      let letter1 = newWord.charAt(0);  // obtain the first letter of the word
      let letter2 = newWord.substring(1, newWord.length)  // beginning after the first letter obtain the remainder of the word
      finish = letter2 + letter1 + "ay";  // remainder of the word after the first letter + the first letter + 'ay'
  } else if (vowels.includes(newWord[2])) {  // if the third letter is a vowel
      let letter3 = newWord.substring(0, 2);  // from the beginning of the word obtain the first 2 letters
      let letter4 = newWord.substring(2, newWord.length)  // after the second letter obtain the remainder of the word
      finish = letter4 + letter3 + "ay";  // remainder of the word after the second letter + the first 2 letters + 'ay'
  } else {
    return "isthay igpay atinlay eneratorgay onlyyay anslatestray ordsway omfray ethay englishyay anguagelay"
  }
  document.getElementById('finish').innerHTML = finish;
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
}
