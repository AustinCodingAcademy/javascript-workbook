const skateShops = [
  {name: "No Comply", state: "TX", start: 2010, end: 2020},
  {name: "Supreme", state: "NY", start: 1992, end: 2022},
  {name: "Overtime", state: "TX", start: 2018, end: 2018}
];

const boardsSold = [10, 20, 25, 27, 30];

//forEach

skateShops.forEach(function(company){
  console.log(company.name);
});

//FILTER
const boards = boardsSold.filter(function(sold){
  if(sold > 20){
   return true;
  }
});
//shorthand version of above function
//const boards = boardsSold.filter(sold => sold > 20);
console.log(boards);

/*const texasShop = skateShops.filter(function(shops){
  if (shops.state === "TX"){
    return true;
  }
});*/

const texasShop = skateShops.filter(shops => shops.state === "TX");
console.log(texasShop);

const ninetiesCompanies = skateShops.filter(shops => (shops.start >= 1990 && shops.start < 2000));
console.log(ninetiesCompanies);
//map
//sort
//reduce
const greeting = function greet(name){
 return "Hi, im " + name;
}
console.log(greeting("Ben"));