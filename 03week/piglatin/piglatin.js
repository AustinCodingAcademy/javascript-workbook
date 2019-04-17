// Save pig latin function in fat arrow function
const pigLatin = (word) => {
    if(event.key === 'Enter') {
        word = word.value;
        // Make sure word is trimmed and put to lowercase first
        word = word.trim();
        word = word.toLowerCase();
        // Set your vowels array to compare to word
        let vowels = ['a', 'e', 'i', 'o', 'u']
        let words = word.split(' ');
        let response = [];
        // Loop around the length of each word
        for(let l = 0; l < words.length; l++) {
        const eachWord = words[l];
            for(let j = 0; j < eachWord.length; j++) {
                const letter = eachWord[j];
                // Check to see if the index of eachWord is included in the vowels array
                if(vowels.includes(letter)) {
                // Check to see if the index of the vowel is 0 (the word begins with a vowel)
                if(j === 0) {
                    let vowelWord = eachWord + 'yay';
                    response.push(vowelWord);
                } else {
                    let otherWords = eachWord.slice(j, eachWord.length) + eachWord.slice(0, j) + 'ay';
                    response.push(otherWords);
                }
                break;
                }
            }
        }
    const answer = response.join(' ');
    let textBox = document.getElementById('text');
    textBox.innerHTML = answer;
    return answer;
    }
}