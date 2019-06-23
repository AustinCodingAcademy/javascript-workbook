const arrOfPeople = [
{
    id: 2,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska"
},
{
    id: 3,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky"
},
{
    id: 4,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas"
},
{
    id: 5,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York"
},
{
    id: 6,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia"
},
{
    id: 7,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California"
},
{
    id: 8,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana"
},
]

const listOfPlayers = []
const blueTeam = []
const redTeam = []

class Player {
    constructor(id, name, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){
        this.id = id
        this.name = name
        this.canThrowBall = canThrowBall
        this.canDodgeBall = canDodgeBall
        this.hasPaid = hasPaid
        this.isHealthy = isHealthy
        this.yearsExperience = yearsExperience

    }
}
class blueTeammate {
    constructor(){}
}
class redTeammate {
    constructor(){}
}

const listPeopleChoices = () => {
const listElement = document.getElementById('people')
arrOfPeople.map((person) => {
    if (person) {
        const li = document.createElement("li")
        const button = document.createElement("button")
        button.innerHTML = "Make Player"
        button.addEventListener('click', function() {makePlayer(person.id)} )
        li.appendChild(button)
        li.appendChild(document.createTextNode(person.name  + " - " + person.skillSet))
        listElement.append(li)
    }
})
}

const makePlayer = (id) => {
    let person = arrOfPeople.find(function(player){
        return player.id == id  
    }) 
    console.log(person)
    let index = arrOfPeople.indexOf(person)
    console.log(index)
    arrOfPeople.splice(index, 1)
    //Generate Random Skill lvls for Players and push to list of players
    const newPlayer = new Player (person.id, person.name, Math.floor(Math.random()* 10 ), Math.floor(Math.random()* 10 ), Math.floor(Math.random()* 10 ), Math.floor(Math.random()* 10 ), Math.floor(Math.random()* 10 ))
    listOfPlayers.push(newPlayer)
    //removes person from dom
    showPlayers();
}

const showPlayers = () => {
    const listElement = document.getElementById('players')
    listElement.innerHTML = ""
    //makes a new array of players
    listOfPlayers.map(person => {
    const li = document.createElement("li")
    li.appendChild(document.createTextNode(`Player #: ${person.id}   ${person.name},  ThrowBall Lvl:${person.canThrowBall}  CanDodge Lvl:${person.canDodgeBall} Years Playing:${person.yearsExperience}` ))
    listElement.append(li)
    // arrOfPeople[index] = null
    document.getElementById('people').innerHTML = ''
    listPeopleChoices()
    //blue btn
    const blueButton = document.createElement("button")
    blueButton.id = 'blueButton'
    blueButton.innerHTML = "Blue Team"
    blueButton.addEventListener('click', function() {makeBluePlayer(person)} )
    li.appendChild(blueButton)
    //red btn
    const redButton = document.createElement("button")
    redButton.id = 'redButton'
    redButton.innerHTML = "Red Team"
    redButton.addEventListener('click', function() {makeRedPlayer(person)} )
    li.appendChild(redButton)
    })
}

const makeBluePlayer = (player) => {
    blueTeam.push(player)
    console.log(blueTeam)
    let bluePlay = listOfPlayers.indexOf(player)
    listOfPlayers.splice(bluePlay, 1)
    document.getElementById("blue").innerHTML = "";
    showPlayers();
    const blueEl = document.getElementById('blue')
    blueTeam.map(players => {
        const li = document.createElement("li")
        li.appendChild(document.createTextNode(`Player #: ${players.id}   ${players.name},  ThrowBall Lvl: ${players.canThrowBall}  CanDodge Lvl: ${players.canDodgeBall} Years Playing: ${players.yearsExperience}` ))
        blueEl.append(li)   
    })
}


const makeRedPlayer = (player) => {
    redTeam.push(player)
    let redPlay = listOfPlayers.indexOf(player)
    listOfPlayers.splice(redPlay, 1)
    document.getElementById('red').innerHTML =''
    showPlayers()
    const redEl = document.getElementById('red')
    redTeam.map(players => {
        const li = document.createElement("li")
        li.appendChild(document.createTextNode(`Player #: ${players.id}   ${players.name},  ThrowBall Lvl:${players.canThrowBall}  CanDodge Lvl:${players.canDodgeBall} Years Playing:${players.yearsExperience}` ))
        redEl.append(li)
        
    })
}




    //  FUNCTION FOR RED====BROKEN
    // const makeRedPlayer = () => {
    //     document.getElementById('players').innerHTML = ''
       
    //     const listElement = document.getElementById('red')
    //     listOfPlayers.map((person, index) => {
    //         if (person) {
    //             const li = document.createElement("li")
    //             const button = document.createElement("button")
    //             button.innerHTML = "remove Player"
    //             button.addEventListener('click', function() {removePlayer(person.id, index)} )
    //             li.appendChild(button)
    //             li.appendChild(document.createTextNode(person.name  + " - " + 'years exp:' + person.yearsExperience))
    //             listElement.append(li)
    //         }
    //     })
    //     }
