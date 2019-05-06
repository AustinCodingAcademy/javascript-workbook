const arr = [10, 20, 30, 40, 50];

function map(array, callback) {
    // Create an empty array to store the looped thru elements
    let newArray = [];
    // Loop thru the array
    for (let index = 0; index < array.length; index++) {
        // The callback takes the number in the array
        // Save it to variable element
        let element = callback(array[index]);
        // Push all of the saved elements into the new array
        newArray.push(element);
    }
    // returns a new array
    return newArray;
}