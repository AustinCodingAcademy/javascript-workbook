console.log('pigLatinGui Here!')

const submit = document.querySelector('.input-section__submit');

submit.addEventListener('click', renderTranslation);

function renderTranslation() {
  textArea = document.querySelector('.input-section__textarea');
  let input = textArea.value;

  //If there is text in the quote, clear text.
  if(document.querySelector('.pig-section__quote-div__p')) {
    clearQuote();
  }
  //make the quote bubble appear
  const renderArea = document.querySelector('.pig-section__quote-div');
  renderArea.classList.remove('hidden');

  //translation holds returned logic from pigLatin()
  const translation = pigLatin(input);

  const translationText = document.createElement('p');

  translationText.textContent = translation;
  translationText.classList.add('pig-section__quote-div__p');

  renderArea.appendChild(translationText);
  clearInput();
  console.log(translation);
}

function clearInput() {
  const textArea = document.querySelector('.input-section__textarea');
  textArea.value = "";
};

function clearQuote() {
  const quoteChild = document.querySelector('.pig-section__quote-div__p')
  
  quoteChild.parentNode.removeChild(quoteChild);
}

function pigLatin(input) {

  //trims words and sets to lowercase "   Dog" => "dog"
  input = input.trim().toLowerCase();

  //split into multiple words if there are spaces in between words:
  input = input.split(' ');

  function translate(word){
    //vowels
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    //finds and stores first letter of given word
    let firstLetter = word[0];

    //will store position of first vowel
    let vowelIndex;

    //will store new word to be returned
    let newWord;

    if(vowels.includes(firstLetter)) {

      //If so, make that word
      newWord = word + 'yay';


  
    } else {

      // find the first vowel 
      for(let i = 0 ; i < word.length ; i++ ) {
  
      // For each letter from the beginning, if this letter is a vowel return the index of the first vowel and stop the loop
        if(vowels.includes(word[i])){
          vowelIndex = i;

          //target and store the consonants before the first vowel:
          let firstConsonants = word.slice(0, vowelIndex);

          //target and store the end of the word after first consnants:
          //slice from the end by multiplying word.length by -1. then add vowel index.
          //if word = Chocolate: wordlength = 9, vowel index = 2. then -9 + 2 = -7. word.slice(-7) targets 'ocolate'
          let endOfWord = word.slice((word.length*(-1) + vowelIndex));

          //build the new word and stop the loop
          newWord = endOfWord + firstConsonants + 'ay';
  
          break;
        }
      }
    }

    return newWord;
  }

  //will store translated words:
  const translatedWords = []

  input.forEach(word=>{
    translatedWords.push(translate(word));
  })

  let finalTranslation = translatedWords.join(' ');

  return finalTranslation;
}