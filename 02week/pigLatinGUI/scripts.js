

// Vars
const pigInput = document.getElementById("pig_input");
const pigOutput = document.getElementById("pig_output");
const pigSubmit = document.getElementById("pig_submit");
const pigSay = document.getElementById("pig_say");


// Events
pigSubmit.onclick = function() {
	pigOutput.textContent = pigLatin(pigInput.value);
};


pigSay.onclick = function() {
	let msg = new SpeechSynthesisUtterance(pigOutput.textContent);
	window.speechSynthesis.speak(msg);
};

// Functions
function pigLatin(word) {

	// scrub the word and convert word to arry
	word = word.trim().toLowerCase().split('');

	// vowles arry
	let vowels = [ 'a', 'e', 'i', 'o', 'u' ];

	// newWord arry
	let newWord = [];

	// check if first letter is a vowel
    if ( vowels.includes(word[0]) ) {

        // make the newWord, the word but not as an arry
        newWord = word.join('');

        // add our pig latin
        newWord += "yay";

    } else {

        // loop through the word arry
        for ( let i = 0; i <= word.length; i++ ) {

            // if the word contains a vowel
            if ( !(vowels.includes(word[i]) ) ) {

                // add consonants to new word
                newWord.push(word[i]);

            } else {

                // slice the word from the vowel to the end, concat the newWord, and join it to a string
				newWord = word.slice( i, word.length ).concat(newWord).join('');

                // add our pig latin
                newWord += "ay";

                // break from loop
				break;
				
            }
        }
	}
	
    return newWord;
}