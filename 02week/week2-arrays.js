import { fileURLToPath } from "url";

// .forEach Practice =======================
// ==========================================

let groceryList = ["bananas", "apples", "beef", "spinach", "eggs"];

function myFunc(value, index){
    console.log(value);
}

groceryList.forEach(myFunc);



// Scope Practice =======================
// ==========================================

// If a word starts with a vowel add "yay" to the end

// If it has a vowel in the middle, then split the word in 2 at the vowel
// then swap the parts and add "ay" to the end

// egg ---> eggyay
// cat --->  c at 
// then flip
// atc
// and add ay ----> atcay

