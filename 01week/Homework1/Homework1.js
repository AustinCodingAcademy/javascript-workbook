var today = new Date();
var date = today.getFullYear()+ '-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours()-5 + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date + ' ' + time;
console.log(dateTime);

  {var num = 7;
  var n = num.toString();
  console.log(n)
}

var text = '7';
var integer = parseInt(text, 10);
console.log(integer);

function sumOf(x, y) {
  return (x + y);
}  
  sumOf(10, 7);

   
 var a = 5
 var b = 5
 var c = "5"
 var d = "five"

 function bothArgumentsAreTrue(arg1,arg2){
   if(arg1 && arg2){
     console.log ('both are true');
   }
 }

bothArgumentsAreTrue(a, b);

function oneArgumentIsTrue(arg1,arg2){
   if(arg1 || arg2){
     return ('one is true');
   }
 }

 oneArgumentIsTrue(b, c);

 function neitherAreTrue(arg1,arg2){
   if(arg1 !== arg2){
     return ('neither are true');
   }
 }

 neitherAreTrue(false, true);

 function notANumber(arg1){
   if(isNaN(arg1)){
     return NaN
   }
   return arg1
 }
  
notANumber(d)

var i = true

  function showType (obj) {
    return typeof(obj) 
    
  }
  showType (i)
