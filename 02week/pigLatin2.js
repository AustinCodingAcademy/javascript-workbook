"use strict";

function inputTest() {
  var output = document.getElementById("wordOutput");
  var inputValue = document.getElementById("pigLatin").value;
      inputValue = inputValue.toLowerCase().trim();
      const pigLatinWord = (inputValue) => {
        if (isVowel(inputValue.charAt(0)))
            return inputValue + "yay";
            else if (isVowel(inputValue.charAt(1)))
            return inputValue.slice(1) + inputValue.charAt(0) + "ay";
            else if (isVowel(inputValue.charAt(2)))
            return inputValue.slice(2) + inputValue.slice(0,2) + "ay";
            else if (isVowel(inputValue.slice(3)))
            return inputValue.slice(3) + inputValue.slice(0,3) + "ay";
            else return "Please try again!"
      } 
      output.innerHTML = pigLatinWord(inputValue);
  console.log(pigLatinWord(inputValue));
}

function reset() {
  document.getElementById("pigLatin").value = "";
  document.getElementById("wordOutput").innerHTML = "";
}
  
  function isVowel(word) {
    if (
      word === "a" ||
      word === "e" ||
      word === "u" ||
      word === "i" ||
      word === "o"
      )
      return true;
      else return false;
    }

    function getPrompt() {
      rl.question("Enter a word ", answer => {
        var words = answer.split(' ');
        var newWords = [];
        for(let i = 0; i < words.length; i++){
          newWords.push(pigLatin(words[i]));
        }
        console.log(newWords.toString())
    getPrompt();
  });
}
