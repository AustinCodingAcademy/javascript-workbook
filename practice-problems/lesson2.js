//1. In your own words, explain what conditionals do.

//Answer:Conditionals essentially compare two or more values and excute statement if the condition is accepted or is truthy.




//2. Write a conditional statement that prints out “good job” if the variable answer is true and “try again” if the variable answer is false.

//Answer: if (2== 'two')
//{
// console.log("good job");
//}
//else{
//console.log("try again");
//}
//
//3. Write a conditional statement that prints out “divisible by 2”, “divisible by 3”, “divisible by 4”, or “divisible by 5” if a number is divisible by each of these numbers, respectively.
//Answer:
function division(number){
  if( number % 2 === 0){
  console.log("divisible by 2");
  }
  else if (number % 3 === 0) {
    console.log("divisible by 3");
  }
  else if (number % 4 === 0) {
    console.log("divisible by 4");
  }
  else if (number % 5 === 0) {
    console.log("divisible by 5");
  }
}
//4. Write the code for a function that prints out the text passed into the function as an argument.

//Answer:I dont know what this means.

//5. Create a function that prints out the average of a set of numbers.

//Answer:
function average(number[10])
{
  var sum =0;
  var av =0;
  var n=0;
  for (var i=0;i<10;i++){
    sum=sum+number[i];
    if (number[i]===0) {
      break;
    }
    else {
    n++;}
  }
  av = sum/n;
  return av;
}




//6. Call your above function and write the code to make the average print out.

//Answer:
var avr= average(12,3,4,5,6,2,4,3,5,9);
console.log("The average is "+avr);
