//Use a do...while loop to console.log the numbers from 1 to 1000.

i = 0;
do{
i++;
console.log(i)
}while(i > 0 && i <= 1000)

/*Create an object (an array with keys and values) called person with the following data:
firstName: "Jane"
lastName: "Doe"
birthDate: "Jan 5, 1925"
gender: "female"
*/

const Person = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
};

//Use a for...in loop and if statement to console.log the value associated 
//with the key birthDate if the birth year is an odd number.
          
for (const property in Person){
    if(property.birthDate % 3 === 0){
      console.log("for in "+ Person.birthDate);
    }
}

/*Create an arrayOfPersons that contains multiple objects. 
You can simply copy/paste the person object you made above multiple times. 
Feel free to change the values to reflect multiple people you might have in your database.*/
var arrayOfPersons = [
Person1 = {
  firstName: "John",
  lastName: "Smith",
  birthDate: "Feb 15, 1985",
  gender: "male"
},

Person2 = {
  firstName: "Jim",
  lastName: "Beam",
  birthDate: "March 10, 1991",
  gender: "male"
},

Person3 = {
  firstName: "Anna",
  lastName: "Bananna",
  birthDate: "Feb 23, 1993",
  gender: "female"
}
]

console.log(arrayOfPersons);

//Use .map() to map over the arrayOfPersons and console.log() their information.

function getObject(item){
  const fullObject  = [item.firstName, item.lastName, item.birthDate, item.gender];
  return fullObject; 
}
  console.log(arrayOfPersons.map(getObject));


  //Use .filter() to filter the persons array and console.log only males in the array.

var newArray = arrayOfPersons.filter(function(el){
  if (el.gender === "male"){
    return true;
  //keep in list
  }else{
    return false;
  //take out of list
  }
});
console.log(newArray);

//Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.

var birthday = arrayOfPersons.filter(function(person){
  date = new Date("Jan 1, 1990")
  if (new Date(person.birthDate) < date){
    return true;
  }else {
    return false;
  }
  //Date.parse() || new Date() 
  //will give you the date object
  //call get year method will return year for date
  //return true or false
});
console.log(birthday);