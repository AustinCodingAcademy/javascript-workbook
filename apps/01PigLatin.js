'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {
  //after the user types in a word and hits the enter key, they code right here will start running
  //take it for granted that the variable word will have whatever the user typed into it
  //your code goes here


//do not type any code below this line. Do not remove this curly brace
}


function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', function () {
    it('should translate a simple word', function () {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', function () {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', function () {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should auto lowercase word before translation', function () {
      assert.equal(pigLatin('HeLlO'), 'ellohay');
      assert.equal(pigLatin('RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}


/*
  var indexVowel = word.indexOf("a");

  var indexOfE = word.indexOf("e");
  if(indexOfE < indexVowel){
    indexVowel= indexOfE;
  }
  var indexOfI = word.indexOf("i");
  if(indexOfI < indexVowel){
    indexVowel= indexOfI;
  }
  var indexOfO = word.indexOf("o");
  if(indexOfO < indexVowel){
    indexVowel= indexOfO;
  }
  var indexOfU = word.indexOf("u");
  if(indexOfU < indexVowel){
    indexVowel= indexOfU;
  }
   var indexOfY = word.indexOf("y");
  if(indexOfY < indexVowel){
    indexVowel= indexOfY;
  }

  if(indexVowel ===0 ){
    word = word + 'yay';
  }else{
    var beginofword = word.slice(0,indexVowel);
    var afterofword = word.slick(indexVowel, word.length);
    word = afterofword + beginofword + 'ay';
  }

  return word;
  */