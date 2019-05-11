'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function hangMan(str) {
  let wordArray = [];
  wordArray = str.split('');
  console.log(wordArray);

}


function getPrompt() {
  hangMan('sarad');
  rl.question('Input any letter: ', (letter) => {
      getPrompt();
    });
}

getPrompt();