'use strict';

let translateBtn = document.getElementById('pigLatin-translate');
translateBtn.onclick = function myFunction() {
  pigLatin();
}

function pigLatin(word) {
  let inputText = document.getElementById('pigLatin-word').value;
  word = inputText;

  word = String(word).trim().toLowerCase(); // trim and lower input
  const vowels = ["a", "e", "i", "o", "u"]; //hard coded constants
  let vowelIndex = 0; // initialized vowel

  if (vowels.includes(word[0])) {
    return document.getElementById('result').innerText = word + "way"; // Case one: first letter vowel
  } else {
    for (let char of word) { // loop till first vowel appears
      if (vowels.includes(char)) {
        vowelIndex = word.indexOf(char); //get index of vowel
        break;
      }
    }
    return document.getElementById('result').innerText = word.slice(vowelIndex) + word.slice(0, vowelIndex) + "ay";
  }
}