'use strict';

function pigLatin(word) {
  if(event.key === 'Enter') {

  word = word.value;
  word = word.toLowerCase();
  word = word.trim();

  let vowels = ['a', 'e', 'i', 'o', 'u'],
  result = word.split('');

  if(vowels.includes(word.charAt(0))) {
  return word += 'yay';
  } else {
    for (let i = 0; i < word.length; i++) {
      if (!vowels.includes(word[i])) {
        result.push(result.shift());
        let finish = result.join('');
        document.getElementById('text').innerHTML = finish;
      } else {
        result.push('ay');
        let answer = result.join('');
        document.getElementById('text').innerHTML = answer;
      }
    }
  }
}
}
