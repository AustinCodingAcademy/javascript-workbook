'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


  // Your code here
  function pigLatin(word) {
    word = word.toLowerCase();
    var n = word.search(/[aeiuo]/);
    switch (n){
      case 0: word = word+"way"; break;
      case -1: word = word+"ay"; break;
      default :
        word = word.replace(/([^aeiou]*)([aeiou])(\w+)/, "$2$3$1ay");
      break;
   }
   return word;

}
pigLatin("true")
//code has passed tests



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


//Write a program that prints the numbers from 1 to 100. But for multiples of 
//three print "Fizz" instead of the number and for the multiples of 
//five print "Buzz". For numbers which are multiples of
// both three and five print "FizzBuzz".
var x = 0;
var Fizz = [3,6,9,12,15,18,21,24,27,30,33,36,39,42,45,48,51,54,57,60,63,66,69,72,75,78,81,84,87,90,93,96,99];
var Buzz = [5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100]

while(x<100){
  x+=1;
  console.log(x);
}
