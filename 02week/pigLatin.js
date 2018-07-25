'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {


//check input if its string checkInput()
//trim input to lowercase lowerCase()
// use loop to go through wordarray
// use conditional to check for the vowels a,e,i,o,u,y
// if true splice the 'element', if not true store it in newArr
//once loop is complete use .join() to combine array letters into string
//add 'ay' at the end of the word


  const checkInput=(input)=>
{
  if(typeof input=='string')
  {
    return true;
  }
}

const lowerCase=(input)=>
{
  return input.toLowerCase();
}


const pigLatin=(word)=>
{
  if(checkInput(word))
  {
    word= lowerCase(word);
    const wordarray= word.split("");
    const newArr=[];
    for(i=0;i<wordarray.length;i++)
    {
      if(wordarray[i]=='a'|| wordarray[i]=='e' || wordarray[i]=='i' ||wordarray[i]=='o' ||wordarray[i]=='u' || wordarray[i]=='y')
      {
        return wordarray.splice(i).join("") + newArr.join("") + 'ay';
      }
      else
      {
        newArr.push(wordarray[i]);
      }
    }
  }
  else
    {
      console.log('Please enter a valid input!');
    }
}

pigLatin('StefaN');


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
