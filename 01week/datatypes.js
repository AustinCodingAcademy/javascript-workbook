  // Write a JavaScript program to display the current day and time.
  const now = new Date();
  now;
  console.log(now);
  
  // Write a JavaScript program to convert a number to a string.
  const createString=(num1)=>{
    return String(num1)
  }
  createString(74758);
  // method2
  console.log("'"+74758+"'")
  
  // Write a JavaScript program to convert a string to the number.
  const createNum=(num2)=>{
    return parseInt(num2)
  }
  console.log(createNum("2"));
  
  
  // Write a JavaScript program that takes in different datatypes and prints out whether they are a: Boolean, Null, Undefined, Number, NaN, String
  const defineData=(num)=>{
    return typeof(num);
  }
  console.log(typeof(true));
  console.log(typeof(null));
  console.log(typeof(fakeConst));
  console.log(typeof(7777));
  console.log("NaN");
  console.log(typeof("Mary"));
  
  // Write a JavaScript program that adds 2 numbers together.
  const addNum=(num3, num4)=>{
    return num3+num4;
  }
  console.log(addNum(948, 394));
  
  // Write a JavaScript program that runs only when 2 things are true.
  const firstName = "Mary";
  const lastName = "Heppenstall";
  if ("Mary" && "Heppenstall") {
      output = "Run This Program";
  }
  
  // Write a JavaScript program that runs when 1 of 2 things are true.
  const englishGreeting = "Hello";
  const frenchGreeting = "Bonjour";
  if ("Hello" || "Hola") {
      output = "Run This Program";
  }
  
  
  // Write a JavaScript program that runs when both things are not true.
  const myPet = "Sashi";
  const yourPet = "Javier";
  if ("Spot" !== "Sparky") {
      output = "Run This Program";
  }
  