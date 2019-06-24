function myDate() {
var d = new Date();
document.getElementById("date").innerHTML = d;
}

function myFunction() {
    var num = 15;
    var n = num.toString();
    document.getElementById("num-string").innerHTML = n;
  }
  function myFunction2() {
  document.getElementById("string-num").innerHTML = 
  parseInt("10") + "<br>" +
  parseInt("10.33") + "<br>" +
  parseInt("10 6") + "<br>" +  
  parseInt("10 years") + "<br>" +  
  parseInt("years 10");  
  }
  function myFunction3() {
    var x = 5;
    document.getElementById("false").innerHTML = (x == 9);
  }
  function myFunction4() {
    var x = 8;
    document.getElementById("true").innerHTML = (x == 8);
  }
function myFunction5() {
var x = 2 + 5;
var y = 2 + 7;
var z = x * y;
document.getElementById("twonumbers").innerHTML = z;
}
function myFunction6() {
    var greeting;
    var time = new Date().getHours();
    if (time < 10) {
      greeting = "Good morning";
    } else if (time < 20) {
      greeting = "Good day";
    } else {
      greeting = "Good evening";
    }
    document.getElementById("if-else").innerHTML = greeting;
  }