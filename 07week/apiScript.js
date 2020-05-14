'use strict'

console.log('hello world');


window.onload = function() {
console.log('window loaded')
getLeague()
}
let getLeague = function(){
    let fetchPromise = fetch("http://api.pathofexile.com/leagues");

        let dataPromise = fetchPromise.then(function(response){
            console.log(response);
            return response.json()
        })

        dataPromise.then(function(data){
            console.log('got my data', data);
            data.forEach(updateHtml);
        });
        console.log('request sent off....')
}
let updateHtml = function(league){
    console.log('updating the html for league=', league);
    let leagueUl = document.getElementById('league');
    let leagueLi = document.createElement('li');
    

    
    leagueLi.innerText  = league.id;
    leagueUl.appendChild(leagueLi);

    let leagueId = league.description;
    let userSpan = document.createElement('span');
    userSpan.innerText = `
    
    Description of the league: ${leagueId}
    
    `;
    leagueLi.appendChild(userSpan);
    
}
let hideDisplay = function() {
    let x = document.getElementById("league");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }