function bubbly(arr) {
  // console.log(arr);
  let left = 0;
  let right = 0;

  for (i = 0; i < arr.length; i++) {
    left = arr[i];//
    right = arr[i+1];//
    if (left > right) { // left = 7, right = 5/7-2
      let mover = null;
      mover = arr.splice(i,1); // i = 0, i+1 = 1, mover is now 7, arr is now [5,2,9,4,3,1]
      const input = arr.splice(i+1,0,mover[0]);
      console.log(arr);
      bubbly(arr);
    // console.log(arr);
    }
  }
}

bubbly([7,5,2,9,10,4,3]);
