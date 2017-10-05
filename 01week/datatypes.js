
//Write a JavaScript program to display the current day and time.
// function that receives data for get date and get time using object
// define variable for new date and implement it into string

var currentDay = new Date(),
      day = currentDay.getDate(),
      month = currentDay.getMonth() + 1,
      year = currentDay.getFullYear();
  console.log(day + "/" + month + "/" + year);



  var currentTime = new Date(),
      hours = currentTime.getHours(),
      minutes = currentTime.getMinutes();

	if (minutes < 10) {
	 minutes = "0" + minutes;
  }

	console.log(hours + ":" + minutes);

//Write a JavaScript program to convert a number to a string.
// function that defines two variables and use toString method

var num = 2;
    var n = num.toString();
    console.log (n);

//Write a JavaScript program to convert a string to the number.
// define two variables and then parse a string argument and return a interger

var str = 2;
    var n = parseInt(str);
    console.log (n * n);


//Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// Function takes in an argument and evaluate the different datatypes using 'typeof' to return what kind of datatype it is

console.log (typeof 3);
console.log (typeof true);
console.log (typeof hello);
console.log (typeof "hello");
console.log (typeof isNaN());
console.log (typeof (null));


//Write a JavaScript program that adds 2 numbers together.
//Define two variables that equal a number and console.log them with a + sign

var x = 4;
var y = 5;
console.log(4+5);


//Write a JavaScript program that runs only when 2 things are true.
// Write a function and define two arguments that are true in the function
//use an if statement to test the variables for both being true

function twoTrue (arg1,arg2) {

if (arg1 && arg2) {
  console.log('true!');
}
else {
console.log('false!');
}

}




//Write a JavaScript program that runs when 1 of 2 things are true.
// Write a function and define two arguments  in the function
//use an if statement to test the variables for one being true

function oneTrue (arg1,arg2) {

if (arg1 || arg2) {
  console.log('true!')
}
else {
console.log('false!')
}

}



//Write a JavaScript program that runs when both things are not true.
// Write a function and define two arguments  in the function
//use an if statement to test the variables for none being true

function noneTrue (arg1,arg2) {

if (arg1 === false && arg2 === false) {
  console.log('cool!')
}
else {
console.log('not cool!')
}

}
