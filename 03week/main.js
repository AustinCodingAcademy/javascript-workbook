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
  
  //filter
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
  
  //filter retail companies
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
  
  //map
  //create array of company names
  const companyNames = companies.map(function(company){
    return company.name;
  });
  console.log(companyNames); 
  
  /*const test = companies.map(function(company){
    return '${company.name}[$(company.start) - ${company.end}]';
  });
  console.log(test);*/

const testMap = companies.map(company => '${company.name} [${company.start} - ${company.end}]');
console.log(testMap);
