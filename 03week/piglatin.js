'use strict'

console.log('loading js script');

let translateButton = document.getElementById('btnTranslate');

translateButton.addEventListener("click", handleClick);

//1. get the word
//2. translate the word
//3. update the span
function handleClick() {
    let wordInput = document.getElementById('wordInput');
    let word = wordInput.value;
    let output = document.getElementById('translation');
    
    let translation = pigLatin(word);
    output.innerText = translation;
}

function pigLatin(word) {
    console.log('The original word is', word);
    word = word.trim();
    word = word.toLowerCase();
    if (word.indexOf('a') === 0 || word.indexOf('e') === 0 || word.indexOf('i') === 0 || word.indexOf('o') === 0 || word.indexOf('u') === 0) {
        let newWord = word + 'yay';
        return newWord;
    }

    for (let i = 1; i < word.length; i++) {
        if (word[i] === 'a') {
        let firstSub = word.substring(0, word.indexOf('a'));
        let secondSub = word.substring(word.indexOf('a'));
        let newWord = secondSub + firstSub + 'ay';
        return newWord;
        } else if (word[i] === 'e') {
        let firstSub = word.substring(0, word.indexOf('e'));
        let secondSub = word.substring(word.indexOf('e'));
        let newWord = secondSub + firstSub + 'ay';
        return newWord;
        } else if (word[i] === 'i') {
        let firstSub = word.substring(0, word.indexOf('i'));
        let secondSub = word.substring(word.indexOf('i'));
        let newWord = secondSub + firstSub + 'ay';
        return newWord;
        } else if (word[i] === 'o') {
        let firstSub = word.substring(0, word.indexOf('o'));
        let secondSub = word.substring(word.indexOf('o'));
        let newWord = secondSub + firstSub + 'ay';
        return newWord;
        } else if (word[i] === 'u') {
        let firstSub = word.substring(0, word.indexOf('u'));
        let secondSub = word.substring(word.indexOf('u'));
        let newWord = secondSub + firstSub + 'ay';
        return newWord;
        }
    }
}