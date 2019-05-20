let insertionSort = function(array) {
    let lastNonZeroIndex = 0;
    let temp;
    for (let i = 0; i < array.length; i ++) {
      if (array[i] !== 0) {
        //swap(nums[lastNonZeroIndex], nums[i]);
        temp = array[lastNonZeroIndex];
        console.log(temp);
        array[lastNonZeroIndex] = array[i];
        array[i] = temp;
        lastNonZeroIndex ++;
      }
    }
  
  console.log(array);
  return array;
};
insertionSort([0, 1, 0, 3, 12]);
