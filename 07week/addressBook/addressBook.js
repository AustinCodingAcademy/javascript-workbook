// Use the api: https://randomuser.me/api/ to fetch a user now.
// Fetch a new user multiple times and store them in an array.
// Then list out all the users in your address book array by name and picture.
// Figure out how to fetch multiple users in one fetch requests
// Fetch multiple users on window load.
// Add a button to each user that when clicked displays the rest 
//of their information like DOB, address and so forth.
// Once you have the functionality working, feel free to style and 
//structure your address book with CSS and HTML
// YOU KNOW HOW TO DO ALL OF THIS BY NOW. TRUST YOURSELF!!

// var arrayNewUser;


//     const getUser = () => {
//         return fetch('https://randomuser.me/api/')
//           .then(res => res.json())
//           .then(user => arrayNewUser = user['results'])
         
//       } 

//       const displayUser = () =>{
//           getUser()
//           const x = document.getElementById('users')
//           x.innerHTML= arrayNewUser[0]['gender']
//         //   console.log(arrayNewUser)
// //MAP will be used!
//       }
// console.log('NewUserArr' , arrayNewUser)
// console.log('UserFunction' , getUser)


"use strict"
document.getElementById('apiButton').addEventListener('onclick', getApi);

function getApi(){
    fetch('https://randomuser.me/api/?results=5')
    .then((res)=>res.json())
    .then((data)=> {
        console.log(data.results);
        let output = `<h1>Address Book</h1>`;
        data.results.forEach(function(results){
            output += `
            <ul>
                <li>${results.name.first}</li>   
                <li>${results.location.city}</li> 
                <img src="${results.picture.large}">
            `
        })
        document.getElementById('all-info').innerHTML=output
    })
}