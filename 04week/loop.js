var x = []
  while (x < 1000){
  x++
  console.log(x)
}

var arrPerson = [{
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1924",
    gender: "female"},


    {firstName: "John",
    lastName: "koe",
    birthDate: "Dec 5, 1928",
    gender: "male"},

    {firstName: "Laney",
    lastName: "poe",
    birthDate: "Jan 7, 1944",
    gender: "female"},

    {firstName: "Bane",
    lastName: "Doe",
    birthDate: "Nov 5, 1990",
    gender: "male"},
]

console.log('**** FILTER *****')

const genderArr = arrPerson.filter(object => object.gender == "male")
console.log(genderArr)
console.log("**** MAP ***")
const newArray = arrPerson.map(object => object);

console.log(newArray);

const oldArr = arrPerson.filter(object => object.birthDate == "1990")

console.log('*** filter2 ****')
console.log(oldArr)

var words = arrPerson[0].birthDate.split(' ');
console.log(words[2]);



function ifYounger(item){
  let date = item.birthDate.split(' ');
  if (date[2] < 1990 ){
    return true
}
}

var filteredArr = arrPerson.filter(person => ifYounger(person));
console.log(filteredArr)