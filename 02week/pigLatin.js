'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function pigLatin(word) {
  //define input to lowercase
var pig = word.toLowerCase();
  //define array of vowels
var vowels = [a, e, i, o, u];
  //split input up
var split = pig.split("");
  //see if first letter is a vowel, if it is then delete it
if(vowels.includes(split[0])){
    return(pig + "yay");
 }

 else if (split.length === 3){
   var newWord = pig.slice(1);
   return (newWord + split[0] + 'ay');
 }

else if (vowels.includes(split[1])){
  var newWord = pig.slice(1);
  return (newWord + split[0] + 'ay')
}

else if (vowels.includes(split[2])){
  var newWord = pig.slice(1);
  return (newWord + split[0] + split[1] + 'ay')
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
    it('should auto lowercase word before translation', () => {
      assert.equal(pigLatin('HeLlO'), 'ellohay');
      assert.equal(pigLatin('RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}


// car to arcay, take the c off left with ar, put c at end arc
// and add ay arcay

// var string = 'car';
// use the substring, breaks it up on index number of what is follows
// pass in string variable
// string.substring(1,3);
// console.log (string.substring(1,3)); will return ar
// How to make dynamic? use string.length

// var string ='car';
//console.log(string.substring(1,string.length)+string.charAt(0));
// var array = [a, e, i, o, u];
//var string = 'apple';
//compare string.charAt(0) to Vowels
//console.log( vowels.indexOf(string.charAt(0));
