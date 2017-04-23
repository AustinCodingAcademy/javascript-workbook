function reduce(arr, fn, initial) {
      // SOLUTION GOES HERE
  return(function reduceOne(index, value){
    if(index > arr.length - 1){
      return value;
    }
    return reduceOne(arr[index] + 1, fn(value, arr[index], index, arr))
  })
};

module.exports = reduce
