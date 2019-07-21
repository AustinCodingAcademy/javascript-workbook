// Return unsorted scores in a descending sorted array.

/*Example*/
const unsortedScores = [37, 89, 41, 65, 91, 53, 100];

function sortedScores(n) {
    let change = false;
    for (let index = 0; index < n.length; index++) {
        const element = n[index];
        const nextelement = n[index+1]
        if(element > nextelement) {
            n[index] = nextelement;
            n[index+1] = element;
            change = true;
        }
    }
    console.log(n);
    if(change){
        sortedScores(n);
    } else {
        return n;
    }
}

const sortedArray = sortedScores(unsortedScores);
console.log(sortedArray);

  // [91, 89, 65, 53, 41, 37]