let myarray = [1, 5, 10, 4, 2];
let newarray = [];
let arr = [];
let sum = 0;

for (let i = 0; i < myarray.length; i++) {
  newarray = myarray[i] * myarray[i];
  arr.push(newarray);
  for(var j in arr) {
      if(j % 4 === 0) {
        sum += arr[j];
      }
      
  }
}
console.log(sum);
 
