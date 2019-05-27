function showTime(){
    var date = new Date();
    var h = date.getHours();// 0 - 23
    var m = date.getMinutes();// 0 - 59
    var s = date.getSeconds();// 0 - 59
    var session = "AM"

    if(h == 0){
        h = 12;
    }
    if(h > 12){
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    h = (m < 10) ? "0" + m : m;
    h = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + 5;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").TEXTContent = time;

    setTimeOut("showTime, 1000");

    showTime();
}




// console.log(Date())
// var today = new Date();
// var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
// var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// var dateTime = date+' '+time;

// var num1 = 9;
// var num2 = '9';
// if (num1 == num2) {
//     console.log(true);
// } else {
//     console.log(false);
// }



// const stringToNumber = (str) => {
//   return parseInt(str)
// }
// console.log(stringToNumber('15' === '5'))

// function myFunction() {
//   document.getElementById("demo").innerHTML = Boolean(10 > 9);

// }function myFunction() {
//   var num = 9;
//   var a = num.toString();
//   var d = num.toString(3);

//   var n = a + "<br>" + d;

//   document.getElementById("demo").innerHTML=n;
// }