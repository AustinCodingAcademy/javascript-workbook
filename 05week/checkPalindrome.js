// function checkPalindrome(str) {
//     for(let i = str.length; i > 0; i--){
//         if(str[i] = str.charAt(str.length) -1) {
//             console.log('the word is a palindrome!');
//         } else {
//             console.log('the word is not a palindrome!');
//         }
//     }
// }
// checkPalindrome('racecar');

function checkPalindrome(str) {
    if(str == str.split('').reverse().join('')) {
        console.log(str + ' is palindrome');
    } else {
        console.log(str + ' is not palindrome');
    }
}
checkPalindrome('sarad');

console.log("i'm a lasagna hog".split("").reverse().join(''));