var standard_input = process.stdin;

// Set input character encoding.
standard_input.setEncoding("utf-8");

// Prompt user to input data in console.
console.log("Please guess a letter:");

// When user input data and click enter key.

standard_input.on("data", function (guess) {
    let arr = "hello";
    var splitWord = arr.split("");
    console.log(splitWord);

    let dashes = splitWord.map(dashes => {
        return "_";
    });
    console.log(dashes);
    if (guess == //dashes position, return updated dashes with correct letter in c position)

});





