// Iteration 1: [5,3,1,4,6] → [3,5,1,4,6] → [3,1,5,4,6] → [3,1,4,5,6] → [3,1,4,5,6]

// Iteration 2: [3,1,4,5,6] → [1,3,4,5,6] → [1,3,4,5,6] → [3,1,4,5,6] → [1,3,4,5,6]

// Iteration 3: [1,3,4,5,6] → [1,3,4,5,6] → [1,3,4,5,6] → [1,3,4,5,6] → [1,3,4,5,6]

let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
    }
    return inputArr;
};