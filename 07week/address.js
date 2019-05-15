'use strict';

fetch('https://randomuser.me/api/')
.then(res => res.json())
.then( data =>{
    console.log(data.results["0"].name)

})
.catch(error => console.log("Something went wrong. Try again"));