"use strict"
document.getElementById('jsonButton').addEventListener('click', getJson);

function getJson(){
    fetch('gateway.marvel.com/v1/public/comics?ts=1&apikey=303f63e269c1a34fb60c975f07d2e90e&hash=001e2a8c3cbf6a9de498e9f9cefe0c94')
    // console.log(data)
    .then((res)=>res.json())
    .then((data)=> {
        console.log(data)

        console.log(data.results);
        let output = `<h1>Marvel Character Catelog</h1>`;
        // console.log(output)
        data.results.forEach(function(results){
            output += `
            <ul>
                <li>${data.results.name}</li>   
                // <li>${results.title}</li>
                // <li>${results.body}</li> 
            </ul>
            `
        })
        document.getElementById('output').innerHTML=output;
    }).catch((err) => console.log(err))
}