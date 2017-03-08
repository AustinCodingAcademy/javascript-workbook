
var callMe = function(){
    return 'i like to be called';
}

//what is the differene between this
console.log(callMe);
//and
console.log(callMe() + " babe");




















//Implement a function that takes a function as its first argument, a number num as its second argument, then executes the passed in function num times.
function repeat(operation, num) {
    // SOLUTION GOES HERE
    for(var i =0; i <num; i ++){
        operation();
    }
}

repeat(callMe,5);










//what does the concept of map in programming mean?











//you will notice that we are going to address functionality that is only applicable to arrays
//map means a function that takes an array and a function,  

//call that function on every item in an array and put the results of each call into a new array and return that new array


function map(arry, func){
  var newArray = [];
  for(var i =0; i < arry.length;i++){
    newArray.push(func(arry[i]));
  }
  return newArray;
}

//what is the point of this?








//what if we had an array of Person objects with last and first name
var people = [
    {lname:'smith',fname:'jon'},
    {lname:'mosbey',fname:'ted'},
    {lname:'stinson',fname:'barney'},
    {lname:'aldrin',fname:'lilly'}
]
//and our app was supposed to show a list of these peoples names in format "hello" + firstname + " " + lastname
var names = map(people,function(person){
    return 'goodbye ' + person.fname + ' ' + person.lname;
});


//what is in names now?











//filter
//what do you think a function that takes an array and function as a parameter, returns an array and is called filter does?
//what does the function fnc do?
function filter(arry,fnc){
  var newArray = [];
  for(var i =0; i < arry.length;i++){
    if(fnc(arry[i])){
        newArray.push(arry[i]);
    }
  }
  return newArray;
}
//given our people array, what might we want to do with filter 

var smithpersons = filter(people,(person)=>{
    return person.lname === "smith";
});









//how can you loop without using loops
//print the numbers x through 10 out without a loop or hard coding  x through 10
//make assumption that x is less than 10
function printUpToTen(number){
    
}
printUpToTen(1);


















//given an array of whatever, print out everything in the array without a loop
function printArrayItems(arry){

}


printArrayItems(['arnold','lou','frank','ronnie']);