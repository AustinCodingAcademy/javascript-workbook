//1) Write a JavaScript program to display the current day and time.
//use Date class
//const now = new Date();
const getCurrentDayAndTime=()=>{
    const date = new Date();
    return date;
  }
  
  //getCurrentDayAndTime();
  
  
  //2) Write a JavaScript program to convert a number to a string.
  //use toString() 
  const numToString=(num)=>{
    return num.toString();
  }
  
  //numToString(100);
  
  //3) Write a JavaScript program to convert a string to the number.
  //Plan:
  //use parseInt(text, 10)
  const stringToNum=(str)=>{
    return parseInt(str, 10);
  }
   
   //stringToNum("100");
   //stringToNum("hkjadshkjas");
  
  
  //4) Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  //Boolean
  //Null
  //Undefined
  //Number
  //NaN
  //String
  //
  //Plan:
  //typeof, getType
  //use a switch statement or if statements with typeof
  const getDataType=(obj)=>{
    return typeof obj;
  }
  
  //getDataType(1);
  //getDataType("test");
  //getDataType(null);
  
  // 5) Write a JavaScript program that adds 2 numbers together.
  //Plan:
  //use the + operator 
  const addNums=(num1, num2)=>{
    return num1 + num2;
  }
  
  //6) Write a JavaScript program that runs only when 2 things are true.
  //Plan:
  //Use the && operator
  const areBothTrue=(obj1, obj2)=>{
    if(obj1 && obj2) {
      console.log("Both are true");
    } else {
      console.log("One or more are false");
    }
  }
  
  //7) Write a JavaScript program that runs when 1 of 2 things are true.
  //Plan use the || operator
  const isEitherTrue=(obj1, obj2)=>{
    if(obj1 || obj2) {
      console.log("One or more are true");
    } else {
      console.log("Neither are true");
    }
  }
  
  //8) Write a JavaScript program that runs when both things are not true.
  //Plan use the negation of the && operator
  const areBothFalse=(obj1, obj2)=>{
    if(!(obj1 && obj2)) {
      console.log("Both are not true");
    } else {
      console.log("One or more is true");
    }
  }
  
  //areBothFalse(true, true);