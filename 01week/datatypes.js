// Problem 1, displaying date using console.log and Date(), and using function to allow displayDate() to execute function at any point
function displayDate(){
  console.log(Date());
}
displayDate();

/* Problem 2, create function that changes number to string, then displays a check for both the type of data and the string itself*/

function numToString(num){
  const string = num.toString();
  console.log(typeof num.toString());
  console.log(string);
}
numToString(2);

/*Problem 3, create function that changes string to number, then displays check for both type of data and the number itself*/

function StringToNum(string){
  const num = Number(string);
  console.log(typeof num);
  console.log(num);
}
StringToNum('45');

/*Problem 4, create function that checks and displays data type*/

function DataType(dataper){
  console.log(typeof dataper);
}
DataType('undefined');

/*Problem 5, create function that adds two data types together (technically addition adds two data types, not just numbers, but will add two numbers together mathmatically)*/

function additionFun(data1, data2){
  console.log(data1 + data2);
}

additionFun(2, 2*3);

/*Problem 6, created function that checks both parameters for truthiness*/

function bothTrue(data1, data2){
  if(data1 && data2){
    console.log('true');
  }else{
    console.log('false');
  }
}

bothTrue(1, 2);
bothTrue(1, 0);
bothTrue(1, undefined);

/*Problem 7, create function with if/else statement that runs if true, otherwise shows false */

function oneTrue(par1, par2){
  if(par1 || par2){
    console.log('true');
  }else{
    console.log('false');
  }
}

oneTrue(2, undefined);

/*Problem 8, created function where false variables will trigger if, rather than else*/

function bothFalse(false1, false2){
  if(!false1 && !false2){
    console.log('true');
  }else{
    console.log('false');
  }
}
bothFalse(undefined, NaN)
