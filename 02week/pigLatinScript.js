'use strict'


//  grabs submit button
let translateBtn = document.getElementById("translate-btn");

// when submit button is clicked
//  display new translated word
translateBtn.addEventListener('click', function(){
  console.log("button is clicked");
  // grabs the value of the input
  let input = document.querySelector('input').value;
  // grabs the p tag 
  let newWord = document.getElementById("translated-word"); 
  //translate input into pig latin
  let translatedWord = pigLatin(input);

  // add translated word to p tag
  newWord.innerText = translatedWord;

});

//this funciton translates a word into pig latin
function pigLatin(input){
  input = input.toLowerCase();
  input = input.trim();
  let vowelString = "aeiou";

  function findVowel(input){
    for (let i=0;i<input.length;i++){
      if(vowelString.indexOf(input[i]) !==-1){
        return i;
      }
    }
  }

  let firstVowel = findVowel(input);
  let begOfWord = input.substring(0, firstVowel);
  let endOfWord = input.substring(firstVowel);

  if (firstVowel > 0) {
        return endOfWord + begOfWord + "ay";
      } else if (input === ''){
        return "Please enter a valid word";
      } else {
        return input + "yay";
      }

}




