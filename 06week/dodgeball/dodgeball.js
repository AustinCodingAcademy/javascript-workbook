
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
  
  class DodgeballPlayer {
    constructor(id, name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){
        this.id = id;
        this.name = name;
        this.age = age;
        this.skillSet = skillSet;
        this.placeBorn = placeBorn;
        this.canThrowBall = canThrowBall;
        this. canDodgeBall = canDodgeBall;
        this.hasPaid = hasPaid;
        this.isHealthy = isHealthy;
        this.yearsExperience = yearsExperience;
    }
  }
  class blueTeammate {
    constructor(id, name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience, mascot, teamColor){
        this.id = id;
        this.name = name;
        this.age = age;
        this.skillSet = skillSet;
        this.placeBorn = placeBorn;
        this.canThrowBall = canThrowBall;
        this. canDodgeBall = canDodgeBall;
        this.hasPaid = hasPaid;
        this.isHealthy = isHealthy;
        this.yearsExperience = yearsExperience;
        this.mascot = mascot;
        this.teamColor = teamColor;
    }
  }
  class redTeammate {
    constructor(id, name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience, mascot, teamColor){
        this.id = id;
        this.name = name;
        this.age = age;
        this.skillSet = skillSet;
        this.placeBorn = placeBorn;
        this.canThrowBall = canThrowBall;
        this. canDodgeBall = canDodgeBall;
        this.hasPaid = hasPaid;
        this.isHealthy = isHealthy;
        this.yearsExperience = yearsExperience;
        this.mascot = mascot;
        this.teamColor = teamColor;
    }
  }
  
  const listPeopleChoices = () => {
    const listElement = document.getElementById('people')
    arrOfPeople.map(person => {
      const li = document.createElement("li")
      const button = document.createElement("button")
      button.innerHTML = "Make Player"
      button.addEventListener('click', function() {
          makePlayer(person.id)
            listElement.removeChild(li)
        } )
      li.appendChild(button)
      li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
      listElement.append(li)
    })
  }
  
  const makePlayer = (id) => {
    const listElement = document.getElementById('players')
    // identify which id was clicked on
    // find the position(index) of the id that was clicked
    // remove person from one array and push them into another array
    const found = arrOfPeople.find(person => person.id == id);
    const personIndex = arrOfPeople.indexOf(found);
    arrOfPeople.splice(personIndex, 1)
    const newPlayer = new DodgeballPlayer 
        (found.id, found.name, found.age, found.skillSet, found.placeBorn, found.canThrowBall, found.canDodgeBall, found.hasPaid, found.isHealthy, found.yearsExperience)
        listOfPlayers.push(newPlayer)
        const li = document.createElement("li")
        const redbutton = document.createElement("button")
        redbutton.innerHTML = "red Team"
        redbutton.addEventListener('click', function() {
            makeredPlayer(newPlayer.id)
              listElement.removeChild(li)
          } )
        li.appendChild(redbutton)
        const bluebutton = document.createElement("button")
        bluebutton.innerHTML = "blue Team"
        bluebutton.addEventListener('click', function() {
            makebluePlayer(newPlayer.id)
              listElement.removeChild(li)
          } )
        li.appendChild(bluebutton)
        li.appendChild(document.createTextNode(newPlayer.name + " - " + newPlayer.skillSet))
        listElement.append(li)
  }
  const makeredPlayer = id => {

  }
  const makebluePlayer = id => {

  }