function reduce(arr, fn, initial) {
  // SOLUTION GOES HERE
  return (function reduceOne(index, value) {
    if (index > arr.length - 1) return value
    return reduceOne(index + 1, fn(value, arr[index], index, arr))
  })(0, initial)
}
module.exports = reduce

/*
  return (function reduceOne(index, value) {
    if (index > arr.length - 1) return value
    return reduceOne(index + 1, fn(value, arr[index], index, arr))
  })(0, initial)
  */
