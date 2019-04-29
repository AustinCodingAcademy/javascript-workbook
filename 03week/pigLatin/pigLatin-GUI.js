'use strict';

function pigLatin(word) {
  if(event.key === 'Enter') {

    word = word.value;
    word = word.trim().toLowerCase();

    let vowels = ['a', 'e', 'i', 'o', 'u'],
      result = word.split('');

    let firstChar = result[0];

    if (vowels.includes(word.charAt(0))) {
      result.shift();
      result.push(firstChar);
      let answer = result.join('');
      document.getElementById('text').innerHTML = answer += 'yay';
    } else {
      for (let i = 0; i < word.length; i++) {
        if (!vowels.includes(word[i])) {
          result.shift();
          result.push(word[i]);
        } else {
          result.push('ay');
          let answer = result.join('');
          document.getElementById('text').innerHTML = answer;
        }
      }
    }
  }
}
