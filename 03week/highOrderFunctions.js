const companies = [
  {name: "Howard Edward", category: "Grocery", start: 1980, end: 2020},
  {name: "Dell", category: "Tech", start: 1981, end: 1990},
  {name: "Nike", category: "retail", start: 1975, end: 2020 }
];

const ages = [33, 34, 35, 20];

/*for(let i = 0; i < companies.length; i++){
  console.log(companies[i]);
}*/
//forEach efficient way to loop through an array, doesn't return anything back to you

companies.forEach(function(company) {
  console.log(company.name);
  })
  
  //<<<===== Filter =====>>>
  /*let canDrink = [];
  for(let i = 0; i < ages.length; i++){
    if(ages[i] >= 21){
      canDrink.push(ages[i]);
      //adds the age to the new array
    }
  }
  console.log(canDrink);
  */
  
  
  /*const canDrink = ages.filter(function(age){
    if(age >= 21){
      return true;
    }
  });
  console.log(canDrink);
  */
  //3 different ways to do the same thing
  const canDrink = ages.filter(age => age >= 21);
  console.log(canDrink);
  
  //<<<======= filter =======>>>

  //retail companies
  /*const retail = companies.filter(function(company){
    if(company.category === "retail"){
      return true;
    }
  });
  console.log(retail);
  */                           //parameter
  const retail = companies.filter(company => company.category === 'retail');
  console.log(retail);
  
  //Get 80s Companies
  const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));
  console.log(eightiesCompanies);
  
  //Companies that lasted 10 years plus
  const TenYearCompanies = companies.filter(company =>(company.end - company.start >= 10));
  
  console.log(TenYearCompanies);
  
  //<<<===== MAP ======>>>

  //create array of company names
  const companyNames = companies.map(function(company){
    return company.name;
  });
  console.log(companyNames); 
  
  /*const test = companies.map(function(company){
    return '${company.name}[$(company.start) - ${company.end}]';
  });
  console.log(test);*/

//const testMap = companies.map(company => '${company.name} [${company.start} - ${company.end}]');
//console.log(testMap);

const agesSquare = ages.map(age => Math.sqrt(age));
console.log(agesSquare)

const agesTimesTwo = ages.map(age => age * 2);
console.log(agesTimesTwo);


//Square a number and then multiply it by two

const agesSqrtTimesTwo = ages
  .map(age => Math.sqrt(age))
  .map(age => age * 2);

  console.log(agesSqrtTimesTwo);

  //<<<====== SORT ======>>>
//sort companies by start year
  /*const sortedCompanies = companies.sort(function(c1, c2) {
 if(c1.start > c2.start){
   return 1;
 }else {
   return -1;
 }
 });
console.log(sortedCompanies);
*/

const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1)); 
console.log(sortedCompanies);

//ascending order
const sortAges = ages.sort((a,b) => a - b);
console.log(sortAges);

//for descending order b - a

//<<<====== REDUCE =======>>>
//reduces the array to one single value, an iteration method. Uses a callback function that
//you provide to iterate through elements in the array and gradually combine their values into 
// a final return value.

/*let ageSum = 0;
for(let i = 0; i < ages.length; i++){
ageSum = ageSum + ages[i];
}
console.log(ageSum);
*/

/*const ageSum = ages.reduce(function(total, age){
  return total + age;
}, 0 );
console.log(ageSum);*/

const ageSum = ages.reduce((total,age) => total + age, 0);
console.log(ageSum);

//get total years for all companies

/*const totalYears = companies.reduce(function(total, company){
  return total + (company.end - company.start);
}, 0);

console.log(totalYears);
*/

const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
console.log(totalYears); 

//<<<===== COMBINE METHODS =====>>>

/*
const combined = ages;
  .map(age => age * 2)
  .filter(age => age >= 35)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);

  console.log(combined);
*/