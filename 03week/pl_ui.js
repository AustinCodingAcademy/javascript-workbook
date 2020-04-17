let translateButton = document.getElementById('translateButton');

// submit word to translate
translateButton.addEventListener('click', function() {
  let textToTranslate = document.getElementById('toTranslate').value;
  pigLatin(textToTranslate);
})

//pig latin translator
const pigLatin = (textToTranslate)  => {
  // initialize variables
  let vowels = /[aeiou]/;
  let whatIfY = /[y]/;
  let translation;
  let character;
  let wordIndex;

  // remove whitespace from argument and convert to lowercase
  let cleanWord = textToTranslate.toLowerCase().trim();

  // check to see if the zero index of the argument is a vowel & return translation if true
  if (cleanWord[0].match(vowels)) {
    translation = cleanWord + "yay";
    document.getElementById("translatedText").innerHTML = translation;
  } else {
    // when the first letter is not a consonant, loop through argument until the first vowel appears and store its index
      for (character of cleanWord) {

        if (character.match(vowels)) {
          wordIndex = cleanWord.indexOf(character);
          // create and return translation
          translation = cleanWord.slice(wordIndex) + cleanWord.slice(0, wordIndex) + "ay";
          document.getElementById("translatedText").innerHTML = translation;

        } else if (character.match(whatIfY)) {
            wordIndex = cleanWord.indexOf(character);
            // create and return translation
            translation = cleanWord.slice(wordIndex) + "egg" + cleanWord.slice(0, wordIndex) ;
            document.getElementById("translatedText").innerHTML = translation;
          } 
      }
  }
}

// reset button
let resetButton = document.getElementById('resetButton');

  resetButton.addEventListener('click', function() {
  document.getElementById('toTranslate').value = '';
  document.getElementById("translatedText").innerHTML = '';
})


