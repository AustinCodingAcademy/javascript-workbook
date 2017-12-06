let userArray = [
    {
            "customer": {
                "id": 1,
                "customerName":"Marilyn Monroe",
                "customerCity":"New York City",
                "customerState":"NY",
                "product":"Yellow Chair",
                "productPrice": 19.99
            }
        },
        {
            "customer": {
                "id": 2,
                "customerName":"Abraham Lincoln",
                "customerCity":"Boston",
                "customerState":"MA",
                "product":"Movie Tickets",
                "productPrice": 27.00
            }
        },
                {
            "customer": {
                "id": 3,
                "customerName":"John F. Kennedy",
                "customerCity":"Dallas",
                "customerState":"TX",
                "product":"Mustang Convertible",
                "productPrice": 24999.99
            }
        },
                {
            "customer": {
                "id": 4,
                "customerName":"Martin Luther King",
                "customerCity":"Burmingham",
                "customerState":"AL",
                "product":"Sandwiches",
                "productPrice": 7.99
            }
        },
];
/*
I set the map function to a new variable where the new array will be stored. I use the map function to return the
customer name and so on using the format user.customer.____+ 'paid'. when i call the function, or rather console.log
it, it uses the passed in number (0-4) as the user, to select the correct array object, it then selects customer
and then the values
*/
let mapped = userArray.map((user)=>{
  return user.customer.customerName + ' paid ' + user.customer.productPrice + ' for ' + user.customer.product + ' in ' + user.customer.customerCity + ', ' + user.customer.customerState

})
/*
I then wrote a for loop to console.log each customer
*/
console.log(mapped[0])
console.log(mapped[1])
console.log(mapped[2])
console.log(mapped[3])
console.log(mapped[4])

for(let i=0; i<5; i++){
  console.log(mapped[i])
}
