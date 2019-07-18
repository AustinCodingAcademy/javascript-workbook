// function pigLatin(word) {
//   return (word);
// }
function pigLatin(word) {
  // Your code here
  word = word.trim().toLowerCase();
  function convert(word) {

    const vowels = ['a','e','i','o','u','y'];
    const splitWord = word.toLowerCase().trim().split('');//['c','a','r']

    const ending = new Array('a','y');
    const firstLetter = splitWord[0];
    word = word.toLowerCase().split(" ");


    if (vowels.includes(firstLetter)) {//is the first letter a vowel?
      const myTranslation = word+'yay'; //then add 'yay' and we are done!
      myTranslation[0].toUpperCase();
      return myTranslation;
    } else {
      splitWord.push((splitWord.shift()));//remove the first consonant, send to end

      for (let i=0;i<splitWord.length;i++) {
        //check the next letters (is or isNotVowel)
        if (!vowels.includes(splitWord[i])) {//if not vowel
          splitWord.push(splitWord.shift());//remove the first vowel, sent to end.
        } else {
          const myTranslation = splitWord.join('');
          myTranslation[0].toUpperCase();
          return myTranslation.concat('ay');
        }
      }
    }

  }
  //Lets get started with the processing
  if (word.split(" ").length>1) {//if it's more than 1 word
    let mySplitPhrase = word.split(" ");// then split up the words
    let myTranslations = [];
  // return convert(word);
    for (let i=0;i<mySplitPhrase.length;i++) {//for each of the words (mySplitPhrase[i])
        myTranslations.push(convert(mySplitPhrase[i]));
    }
    return myTranslations.join(" ");
  }
  else {
    return convert(word);//only one word, so translate once!
  }
}

//Client Coding (Vanilla JS)
// let translateButton = document.getElementById('myTranslator');
// translateButton.addEventListener('click',pigLatin("myWords"));


//client coding (jQuery)
$('#myTranslator').on('click',function(){
  let myWords= $('#word').val();
  let myTranslation = pigLatin(myWords);
  $('#results').val(myTranslation)
});
