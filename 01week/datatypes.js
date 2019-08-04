//Write a JavaScript program to display the current day and time.
var today = new Date();
//  console.log(today);

//Write a JavaScript program to convert a number to a string.
//Write a JavaScript program to convert a string to the number
  var num = 15;
  var n = num.toString();
  // console.log(typeof num)
  // console.log(typeof n)


//Write a JavaScript program that takes in different datatypes and    //prints out whether they are a:
//Boolean
//Null
//Undefined
//Number
//NaN
//String

//string
     var today = new Date(); 
    //  console.log(today);
     var hournow = today.getHours();
     var greeting;
     if (hournow > 12){
      //  greeting = 'good evening!';
     } else if (hournow < 18){
       greeting = 'good afternoon!';
    }else if (hournow < 0){
      greeting = 'good morning!';
    }else {
      greeting = 'welcome!';
     }


    function sumTriple (x, y) {
    if (x == y) {
     return 3 * (x + y);
     } 
    else
    {
     return (x + y);
    }
  }
//  console.log(sumTriple(10, 20));
//  console.log(sumTriple(30,30));
//  sumTriple(30,30);



//Write a JavaScript program that adds 2 numbers together.
 function sumofnums(x,y){
   return x+y;
 }
//  sumofnums(12,24);

//Write a JavaScript program that takes in different datatypes and    //prints out whether they are a:boolean
  function boolean(x,y){
    var boolean = true;
    var b = false;
    if (boolean) {
      console.log("boolean conditional resolved to true");
     return true;   
   }else if (b){
     console.log("b conditional resolved to false");
     return false;
   }
 }
//  boolean(true,false);



//dont use this one
//  function myFunction(a,b){
//     a = 5;
//     b = 2
//    console.log(a > 4 && b > 1)
//    if (a){
//      console.log(true);
//    }
//    console.log(a > 5 || b > 1);
//    if(b) {
//      console.log(true)
   
//    console.log(!(a > 1 || b > 1))
//    if (a) {
//      console.log(false)
//      return true;
//    }
//  } 
//     myFunction (true,false);


//Write a JavaScript program that runs only when 2 things are true.
//  condition
  function boththingstrue(a,b) {
    a=40;
    b=30;
    if (40 < 50 || 30 < 60) {
      console.log('boththingstrue');
      return true;
    }else {
            if(40 > 50  || 30 > 60);{
             console.log('false');
             return false;
          }
        }
  }
    // boththingstrue(true,false);

//Write a JavaScript program that adds 2 numbers together.repeting to learn the process 
function sumoftwo(x,b){
  return 500+700;
}
  // sumoftwo (500,700);

function resolve(a,z){
  return 1900-1800;
  }
//  resolve(1900,1800);

function learning(z,b){
  return 100%2;
}
//  learning(100,2);

 function gogetit(x,a){
   return 300*2;
 }
//  gogetit(300,2);

function green(q,l){
  return 100*4;
}
// green (100,4);

function getit(v,m){
  return 200/2;
}
// getit(100,2);



// Write a JavaScript program that runs when both things are not true.
function boththingsfalse(a,b){
  a=100;
  b=200;
  if(100>200 || 200<100);
  return boththingsfalse;
}
  // boththingsfalse(100,200);
  
function wrongTwo(z,d){
   z=1000;
   d=2000;
   if(1000>2000 || 2000<1000);
   return false;
 }
//  wrongTwo(1000,2000);

  function bothWrong(w,z){
    var w=false;
    var z=true;
    if (w){
      console.log("w in this case false");
      return false;
    }else if(z){
      console.log("z in this case true");
      return true;
    }
  }
//  bothWrong(false,true);
 
  function bigOne(o,p){
    var o=true;
    var p=false;
    if(o){
      console.log("o in this case true");
      return true;
    }else if(p){
      console.log("p in this case is false");
      return false;
    }
  }
  //     bigOne(true,false);
  function brasil(a,x){
    var x=true;
    var a=false;
    if(a){
      console.log("a vai para puta que te pariu");
      return true;
    }else if(x){
      console.log("x bando de viado da porra");
      return false;
    }
  }
    // brasil(true,false);
  
