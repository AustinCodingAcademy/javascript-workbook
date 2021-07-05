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