function binarySearch(needle, haystack) {
  // grab the middle index, rounding up if it isn't an integer
  let halfIdx = Math.ceil((haystack.length - 1) / 2);
  // set the needle index to keep track of absolute middle index value
  let needleIdx = halfIdx;
  // break up array into two halves
  let firstHalf = haystack.slice(0, halfIdx);
  let secondHalf = haystack.slice(halfIdx);
  // as long as either half has at least two items
  while (firstHalf.length > 1 || secondHalf.length > 1) {
    // if the needle is less than the first item in the second half, the
    // item must be in the first
    if (needle < secondHalf[0]) {
      // calculate middle index of first half
      halfIdx = Math.ceil((firstHalf.length - 1) / 2);
      // break up arrays
      secondHalf = firstHalf.slice(halfIdx);
      firstHalf = firstHalf.slice(0, halfIdx);
      // correct the absolute position of the needle index to match
      // the first item in the second array
      needleIdx -= secondHalf.length;
    } else { // needle must be in second half
      // calculate middle index of second half
      halfIdx = Math.ceil((secondHalf.length - 1) / 2);
      // break into halves
      firstHalf = secondHalf.slice(0, halfIdx);
      secondHalf = secondHalf.slice(halfIdx);
      // correct the absolute position of the needle index to match
      // the first item in the second half
      needleIdx += firstHalf.length;
    }

  }

  // Eventually we'll get down to either on or both halves have a
  // a single item.
  if (firstHalf[0] === needle) {
    // if it's in the first half, then need to subtract one to move
    // it back from the first index in the seconf half
    return needleIdx - 1;
  } else if (secondHalf[0] === needle) {
    // otherwise we are right on the money
    return needleIdx;
  }
  // if item is in neither array at this point, no dice
  return false;
}

binarySearch(20, [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);
