function duplicate(array) {
    const duplicatedArray = array;
    const createArray = array.concat(duplicatedArray);
    // const concatenate = array+','+duplicatedArray;
    // const createArray = concatenate.split(',');
    return createArray;
}

const answer = duplicate([1,2,3,4,5]); 
console.log(answer); // [1,2,3,4,5,1,2,3,4,5]