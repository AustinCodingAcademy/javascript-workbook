'use strict';

const currentTime = ()=>{
  const theDate = new Date();
  const hour = theDate.getHours();
  const mins = theDate.getMinutes();
  //I wanted to get more use time in with const, though I would have liked to
  //make these lets in general because I like to manipulate them to add to a string
  //as I find this makes more flexable code as well as readable...and this turned
  //out to be the case as the basic way I solved the problem would be better
  //solved with modifying the hour variable directly in the if statements
  //with a final outputString hurrah at the end. 
  console.log(hour);
  let outputString;
  if (hour>12){
    //padding to make it look like a digital clock
    outputString=(hour-12).toString().padStart(2, '0');
    //hours part
    outputString+=":" + mins.toString().padStart(2, '0');
    //: seperator and minutes
    outputString+="PM";
  }else{
    if (hour == 0){
      outputString=(hour+12).toString().padStart(2, '0');
    }else{
      outputString=hour.toString().padStart(2, '0');
    }
    //hours part
    outputString+=":" + mins.toString().padStart(2, '0');
    //: seperator and minutes
    outputString+="AM"
  }

  //considering making hour a let so I can just subtract 12 and use the same string combining code at the end, one hates to see the same basic code twice!
  return outputString;
}

const numberToString = (numberConvertString) =>{
  //after watching your first data type video, I became obsessed with error checking!
  //all instead of just using the toString, I wanted to catch problems that
  //might arise with nonsense inputs  
  if(Number.isNaN(numberConvertString)){
    return "Technically not a number, don't listen to Javascript, it lies!";
  }
  if(typeof(numberConvertString)=="number"){
    return numberConvertString.toString();
  }
  return "Not a number at all, get with it";
}

const stringToNumber = (stringConvertNumber) => {
  //Using some good old nested truthyness to test for bad data.   
  if(typeof(stringConvertNumber)=="string"){
    const converted = Number(stringConvertNumber);
    if(converted ){
      return converted;
    }else{
      return "String contains no numbers and/or things that aren't numbers";  
    }
  }
  return "Data type is not string"

}

const superTypeOf = (tester) =>{

  //type of is already a really flexable primative, but null being an object
  //and NaN technically being a number means we have to add in some special cases
  //Tripple vs double equalls nullifies undefined accidently getting a null return value
  //as both null and undefined are double equal to each other  
  if (tester===null){
    return null;
  }else if (Number.isNaN(tester)){
    return NaN
  }

  return typeof tester;
}

const sumOfTwoNumbers = (num1, num2) =>{
  const numberConvert1 = Number(num1);
  const numberConvert2 = Number(num2);
  if(typeof numberConvert1 == "number" && typeof numberConvert1 == "number" &&
   !Number.isNaN(numberConvert1) && !Number.isNaN(numberConvert2)){
  //yikes, but the logic is just convert the numbers that might be strings 
  //to numbers and if the aren't 'numbers' and don't turn into NaNs 
  //because of the conversion, then go ahead and add them.
    return numberConvert1 + numberConvert2;

  }
  return "Not valid number or string of numbers"
}

const bothTrue = (bool1 , bool2 ) => {
  if (bool1 && bool2){
    return true;
  }
  return false;
}

const oneTrue = (bool1 , bool2) => {
  if(bool1 || bool2){
    return true;
  }
  return false;
}

const noneTrue = (bool1 , bool2) => {
  //the oneTrue will only be false when both are false, so the not of it
  //does what we want it to.   
  return !(oneTrue(bool1,bool2));
}



console.log(currentTime());
console.log(numberToString(6));
console.log(stringToNumber("4"));

console.log(superTypeOf(true));
console.log(superTypeOf(null));
console.log(superTypeOf(undefined));
console.log(superTypeOf(678));
console.log(superTypeOf(NaN));
console.log(superTypeOf("5678"));


console.log(sumOfTwoNumbers("1am",2));
console.log("both true")
console.log(bothTrue(false,true));
console.log(bothTrue(false,false));
console.log(bothTrue(true,true));
console.log("---------------")
console.log("one true")

console.log(oneTrue(false,false));
console.log(oneTrue(false,true));
console.log(oneTrue(true,true));
console.log("---------------")
console.log("None true")

console.log(noneTrue(false,true));
console.log(noneTrue(true,true));
console.log(noneTrue(false,false));

