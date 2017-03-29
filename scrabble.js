/* Scrabble: take in a random generated string, or user input string, letters scrambled
   and  sort the letters to find certain words, output if you can return the sorted word
   allow question marks to be wildcards and turn them into any letter you like*/

var input    = prompt("enter random letters: ");
var userWord = prompt("Enter the word here: ");

function sort(unSortedWord, word){
    var index1, index2, x = 0; // index
    var sortedWord = '';
    for(index1 = 0; index1 <= word.length; index1++){
        for(index2 = 0; index2 <= unSortedWord; index2++){
            if(word[index1] === unSortedWord[index2]){
               SortedWord[x] = unSortedWord[index2]; 
               x++;
               index2 = 0;
            }
        }
    }
    return "here is you're word: " + sortedWord;
}

sort(input, userWord);