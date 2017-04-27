function pigLatin(word) {
// Your test code here
  // var word = window.prompt('Enter a word to be Pig Latined!');
  // Variables to be used
  var pigLatined = '';
  var vowel = /[aeiouy]/gi;
  // Checking if the first character is a vowel
  if (word[0].match(vowel)) {
    pigLatined = word + 'yay';

  } else {
    // Finding how many consonants occur before the first vowel
    var vowelIndice = word.indexOf(word.match(vowel)[0]);
    // Take the string from the first vowel to the last character
    // then add the consonants that were previously omitted and add the ending.
    pigLatined = word.substr(vowelIndice) + word.substr(0, vowelIndice) + 'ay';
  }
  return pigLatined;
}
