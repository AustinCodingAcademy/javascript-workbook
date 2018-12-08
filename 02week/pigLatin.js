'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


<<<<<<< HEAD
function pigLatin(word) {
  let tempWord = word.toLowerCase();
  word = tempWord.trim();
  let returnStr ='';
  const vowelArr = ['a','e','i','o','u'];
  const wordArr  = word.split('');
  let i;
  for(i=0;i<wordArr.length;i++){
    if(vowelArr.includes(wordArr[i]))
       break;
  };
  console.log(i);

  if(i!=0){
    let newStr1 = wordArr.slice(i);
    let newStr2 = wordArr.slice(0,i);
    newStr1=newStr1.join('');
    newStr2=newStr2.join('');
    returnStr = (newStr1.concat(newStr2)).concat('ay');
  }
  else{
    returnStr = word.concat('yay');
  }
  return returnStr;
=======
function pigLatin(input) {
  let inputStr = input.split('');
  let counter  = 0;

  inputStr.forEach(isVowel);
  function isVowel(item,index){
    if(index == 0)
      console.log('Input letters are:');
    console.log(item);
  }
  let index;
  let newStr1;
  let newStr2;
  let vowelFound = false;
  for(index = 0; index<inputStr.length;index++){
    switch(inputStr[index]){
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
      case 'A':
      case 'E':
      case 'I':
      case 'O':
      case 'U':
           newStr1 = inputStr.slice(index);
           newStr2 = inputStr.slice(0,index);
           newStr1=newStr1.join('');
           newStr2=newStr2.join('');
           vowelFound = true;
       break;
    }
    if(vowelFound)
      break;
  }
  let returnStr;
  if(vowelFound){
    if(index == 0)
      returnStr = (newStr1.concat(newStr2)).concat('yay');
    else
      returnStr = (newStr1.concat(newStr2)).concat('ay');
    console.log('Input string in pig latin is:',returnStr);
    return returnStr;
  }
  else
  {
    console.log('No vowels in the input.Try again');
    return;
  }  

>>>>>>> 70eafa4431b94fc4f26dd14df09e4b2085e01b61
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
