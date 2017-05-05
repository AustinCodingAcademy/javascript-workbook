'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Your code here

function pigLatin(word) {

    var vowel = ['a', 'e', 'i', 'o', 'u', 'y'];
    var lower = word.toLowerCase();
    var sep = lower.split("");

    //starts with vowel add "yay" on the end
    if (vowel.includes(sep[0])) {
        return (lower + "yay");
    } //easy word take the first letter off add to the end then add "ay"
    else if (sep.length === 3) {
        var main = lower.slice(1)
        return (main + sep[0] + "ay");
    }
    // second letter starts with a vowel add "ay"
    else if (vowel.includes(sep[1])) {
        var main = lower.slice(1)
        return (main + sep[0] + "ay");
    }
    // complex words
    else if (vowel.includes(sep[2])) {
        var main = lower.slice(2)
        return (main + sep[0] + sep[1] + "ay");
    }


}

function getPrompt() {
    rl.question('word ', (answer) => {
        console.log(pigLatin(answer));
        getPrompt();
    });
}

// Tests

if (typeof describe === 'function') {

    describe('#pigLatin()', () => {
        it('should translate a simple word', () => {
            assert.equal(pigLatin('car'), 'arcay');
            assert.equal(pigLatin('dog'), 'ogday');
        });
        it('should translate a complex word', () => {
            assert.equal(pigLatin('create'), 'eatecray');
            assert.equal(pigLatin('valley'), 'alleyvay');
        });
        it('should attach "yay" if word begins with vowel', () => {
            assert.equal(pigLatin('egg'), 'eggyay');
            assert.equal(pigLatin('emission'), 'emissionyay');
        });
        it('should auto lowercase word before translation', () => {
            assert.equal(pigLatin('HeLlO'), 'ellohay');
            assert.equal(pigLatin('RoCkEt'), 'ocketray');
        });
    });
} else {

    getPrompt();

}
