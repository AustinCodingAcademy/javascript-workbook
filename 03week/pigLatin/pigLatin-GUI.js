'use strict';

function pigLatin(word) {
  if(event.key === 'Enter') {
  
  word = word.value;
  word = word.toLowerCase();
  word = word.trim();

  let vowels = ['a', 'e', 'i', 'o', 'u'],
  result = word.split('');

  
  if (vowels.includes(word.charAt(0))) {
    return word += 'yay';
  } else {
    for (let i = 0; i < word.length; i++) {
      if (!vowels.includes(word[i])) {
        result.push(result.shift());
      } else {
        result.push('ay');
        return result.join('');
      }
    }
  }

function pigLatin(word) {
  return word.split(' ')
  .map(function(w){return w.slice(1) + w.slice(0, 1) + 'ay'})
  .join(' ');
  }
}

let answer = result.join(' ');
let inputBox = document.getElementById('text');
inputBox.innerHTML = answer;
return answer;
}
}
