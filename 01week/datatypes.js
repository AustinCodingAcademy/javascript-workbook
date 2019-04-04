"use strict";

//Write a JavaScript program to display the current day and time.
function dateAndTime() {
    var today = new Date().toLocaleString();
    var dateTime = today.split(",")
    console.log("Today is: " + dateTime[0]);
    console.log("Time right now is: " + dateTime[1])
}

//Write a JavaScript program to convert a number to a string.
//number to string
function numToStr(int) {
    var str = int.toString();
    return str;
}

//string to number
function strToNum(String) {
    var num = parseInt(String);
    return num;
}

//Write a JavaScript program that takes in different datatypes and prints out whether they are a:
function dataType(text) {
    var type = typeof text;
    return type;
}

//Write a JavaScript program that adds 2 numbers together.
function addTwo(number1, number2) {
    return number1 + number2;
}

//Write a JavaScript program that runs only when 2 things are true.
function bothTrue(var1, var2) {
    if (var1 == true && var2 == true) {
        return true;
    } else {
        return false
    }
}

//Write a JavaScript program that runs when 1 of 2 things are true.
function oneTrue(var1, var2) {
    if (var1 == true && var2 == false) {
        return true;
    }

    if (var1 == false && var2 == true) {
        return true;
    }

    else {
        return false;
    }
}

//Write a JavaScript program that runs when both things are not true.
function bothFalse(var1, var2) {
    if (var1 == false && var2 == false) {
        return true;
    } else {
        return false
    }
}

/********* Please uncomment functions below to run fucntion *********/

console.log(dateAndTime());
console.log(numToStr(555));
console.log(strToNum("999"));
console.log(dataType("hjgkjh"));
console.log(addTwo(55, 66));
console.log(bothTrue(true, true));
console.log(oneTrue(true, false));
console.log(bothFalse(false, false))

