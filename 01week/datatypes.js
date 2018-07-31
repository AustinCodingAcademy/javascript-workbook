//1. Write a JavaScript program to display the current day and time.

// Will use Date and array to display the current Day, because getDay functions displays 0-6 values

const showDayTime=()=>{

    const date = new Date();
    const day= new Array(7);
    day[0]='Sunday';
    day[1]='Monday';
    day[2]='Tuesday';
    day[3]='Wednesday';
    day[4]='Thursday';
    day[5]='Friday';
    day[6]='Saturday'
    return 'Day: ' + day[(date.getDay())] + ', time: ' + (date.getHours()-12) + ':' + date.getMinutes() + ':' + date.getSeconds();
}

showDayTime();


//2. Write a JavaScript program to convert a number to a string.
// Will use toString, which is a method to convert a number to String.

const numToString=(num1)=>{
    const text= num1.toString();
    return text;
}

numToString(5545);

//3. Write a JavaScript program to convert a string to the number.
// Will use parseInt, which is a method to convert String to Integer.

const textToNumber=(inp1)=>{
    const num1= parseInt(inp1);
    return num1;
}

textToNumber('5354');

//4. Write a JavaScript program that takes in different datatypes and prints out 

// Will use typeof, which is a method that shows the datatype 
const checkType=(input1)=>{
    return 'Datatype: ' + typeof input1;
}

checkType(5);


//5. Write a JavaScript program that adds 2 numbers together.

const addNumbers=(num1, num2)=>{
    return num1+num2;
}

addNumbers(5,2);


//6. Write a JavaScript program that runs only when 2 things are true.
const ifTrue=(inp1, inp2)=>{
    if(inp1 && inp2){
      return 'Both inputs true';
        }
    else{
      return 'The entered inputs are not true';
    }
}

ifTrue('test',5);


//7. Write a JavaScript program that runs when 1 of 2 things are true.


const ifTrue=(inp1, inp2)=>{
    if(inp1 || inp2){
      return 'One of the inputs is true';
    }
    else{
      return 'The entered inputs are not true';
    }
}

ifTrue('test',null);

