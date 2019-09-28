//doWhile
var number = 0
do{
number += 1;
console.log(number);
}
while(number < 1000);

//createArray
let person = {
firstName: "Jane",
lastName: "Doe",
birthDate: "Jan 5, 1925",
gender: "female",
};
//forInLoop
  for(let birthDate in person){
  if (person['birthDate'] %2 !=0){
console.log(person['birthDate']);
break;
  }}
//createArrayOfPeople
let arrayOfPeople = [
  {
firstName: "Jane",
lastName: "Doe",
birthDate: "Jan 5, 1925",
gender: "female"
},
{
firstName: "Jon",
lastName: "Doe",
birthDate: "November 24, 1935",
gender: "Male",
},
{
firstName: "Mary",
lastName: "Jane",
birthDate: "April 20, 1969",
gender: "female",
},
{
firstName: "Maddie",
lastName: "Yoko",
birthDate: "November 7, 1996",
gender: "female",
}
]
//.map()
let mapOver = arrayOfPeople.map((value) =>{
console.log(value);
});

//filterMales
let onlyMales = arrayOfPeople.filter((value) => {
  
  if (value.gender === "Male"){
 console.log(value)
  }

});

//filter people born before 1990
let bornBefore = arrayOfPeople.filter((value) => {

  if (value.birthDate.split(' ')[2] < 1990){
  console.log(value);
  }
});
