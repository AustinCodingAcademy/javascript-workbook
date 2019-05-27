"use strict";
function inputTest() {
    //get the output container
    const output = document.getElementById("wordOutput");
    //get the input value
    let inputValue = document.getElementById("input").value;
    //reassign the input value to the input value that is lowercase/trimmed
    inputValue = inputValue.toLowerCase().trim();
    //assign the innerHTML of the output container 
    //to the return value of the pigLatinWord function that passes in the inputValue
    output.innerHTML = pigLatinWord(inputValue);
}
//ES6 way to write a function
// const pigLatinWord = (inputValue) => {

// ES5 way to write a function
function pigLatinWord(inputValue){
    const firstLetter = inputValue.charAt(0);
    const secondLetter = inputValue.charAt(1);
    const thirdLetter = inputValue.charAt(2);
    const fourthLetter = inputValue.charAt(3);

    if(isVowel(firstLetter)){
        return inputValue + "yay";
    } else if(isVowel(secondLetter)){
        return inputValue.slice(1) + firstLetter + "ay";
    } else if(isVowel(thirdLetter)){
        return inputValue.slice(2) + inputValue.slice(0,2) + "ay";
    } else if(isVowel(fourthLetter)){
        return inputValue.slice(3) + inputValue.slice(0,3) + "ay";
    } else {
        return "Please try again!"
    }
} 

function isVowel(word) {
    if (word === "a" || word === "e" || word === "u" || word === "i" || word === "o"){
        return true;
    }
    return false;
}


function reset() {
    document.getElementById("input").value = "";
    document.getElementById("wordOutput").innerHTML = "";   
}