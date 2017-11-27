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
let mapped = userArray.map((user)=>{
  return user.customer.customerName +` paid ` + user.customer.productPrice + ` for ` + user.customer.product + ` in ` + user.customer.customerCity + `, ` + user.customer.customerState

})
console.log(mapped[0])
console.log(mapped[1])
console.log(mapped[2])
console.log(mapped[3])
console.log(mapped[4])

for(let i=0; i<5; i++){
  console.log(mapped[i])
}
