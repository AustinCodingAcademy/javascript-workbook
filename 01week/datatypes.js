'use strict'

//get current date time
var d = new Date();
    isTypeOf(d);
    console.log(d);

// convert number to string
var num = 7;
var n =num.toString();
    isTypeOf(n);
    console.log(n);

// convert string to number
var a = parseInt("10");
    isTypeOf(a);
    console.log(a);

// add 2 numbers 
var b = 9;
var c = 13;
    isTypeOf(b,c);
    console.log(b+c);

//both are true
var d = 5;
var e = 10;
    if((d<e) && (e>d)) {
    isTypeOf(d,e);
    console.log("Both are True");
}

//1 is true
var f = 3;
var g = 9;
    if((f===g) || ( g>f)) {
    isTypeOf(f,g);
    console.log("one of these are True");
}

//neither are true
var a1 = 4;
var a2 = 8;
    if ((a1===a2) || (a1===a1)) {
    isTypeOf(a1,a2);
    console.log("neither is True");
}

// different datatypes
var b1 = true;
    isTypeOf(b1);
    console.log(typeof b1);

var b2 = null;
    isTypeOf(b2);
    console.log (b2); 

var b3 = "Trish";
    isTypeOf(b3);
    console.log (typeof b3);

var b4 = 39;
    isTypeOf(b4);
    console.log (typeof b4);  

var x = undefined;
    isTypeOf(x);
    console.log (typeof x);

var b6 = NaN
    isTypeOf(b6)
    console.log (typeof b6);

//problem 9

var n = false;
    function isTypeOf(data) {
    return console.log(typeof data);
}
    isTypeOf(n);