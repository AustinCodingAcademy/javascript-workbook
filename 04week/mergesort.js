function mergeSort(arr) {
  // base case: if array less than two items, then technically it's sorted
  if (arr.length < 2) {
    return arr;
  }

  // cut arrays roughly in half
  const firstHalf = arr.slice(0, arr.length / 2);
  const secondHalf = arr.slice(arr.length / 2); // goes to end

  // recurse array halves
  const sortedFirst = mergeSort(firstHalf);
  const sortedSecond = mergeSort(secondHalf);

  // sorted array container
  let sortedArr = [];

  while (sortedFirst.length && sortedSecond.length) {
    // if the first item in the first array is smaller, push
    // it in the sorted array
    if (sortedFirst[0] < sortedSecond[0]) {
      sortedArr.push(sortedFirst.shift());
    } else {
      // else push the first item in the second array
      sortedArr.push(sortedSecond.shift());
    }
  }

  // eventually one of the arrays are going to be emptied,
  // meaning the other one will be pre sorted and attachable
  // to the end
  if (!sortedFirst.length) {
    sortedArr = sortedArr.concat(sortedSecond);
  } else if (!sortedSecond.length) {
    sortedArr = sortedArr.concat(sortedFirst);
  }
  return sortedArr;
}


console.log(mergeSort([10, 9, 8, 7, 6, 5]));
