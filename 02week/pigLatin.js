'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {
  let hi5= word.toLowerCase().trim();
  let x= hi5.indexOf('e');
  let v= hi5.indexOf('a');
  let b= hi5.indexOf('i');
  let n= hi5.indexOf('o');
  let m= hi5.indexOf('u');
  let arr = []
  if (x>-1){
    arr.push(x);
  }
  if(v>-1){
    arr.push(v);
  }
  if(b>-1){
    arr.push(b);
  }
  if(n>-1){
    arr.push(n);
  }
  if(m>-1){
    arr.push(m);
  }
  arr.sort()
  let shft = arr.shift()
  if(shft===0){
    return(hi5+"yay")
  } else {
    let p1 = hi5.substring(shft, hi5.length)
    let p2 = hi5.substring(0,shft)
    return (p1+p2+"ay")
  }



  // Your code here

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
