
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
    const listElement = document.getElementById('red')
    const findPerson = listOfPlayers.find(person => person.id == id)
      const personIndex = listOfPlayers.indexOf(findPerson)
        listOfPlayers.splice(personIndex,1)
        const redPlayer = new redTeammate(
          findPerson.id,
         findPerson.name,
         findPerson.age,
         findPerson.skillSet,
         findPerson.placeBorn,
         findPerson.canThrowBall,
         findPerson.canDodgeBall,
         findPerson.hasPaid,
         findPerson.isHealthy,
         findPerson.yearsExperience,
         findPerson.mascot =
         'Rats', 
         'Red'
        )
        console.log(redPlayer)
        redTeam.push(redPlayer)
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(`${redPlayer.name} Mascot: ${redPlayer.mascot}`))
        listElement.append(li)

  }
  const makebluePlayer = id => {
    const listElement = document.getElementById('blue')
    const findPerson = listOfPlayers.find(person => person.id == id)
      const personIndex = listOfPlayers.indexOf(findPerson)
        listOfPlayers.splice(personIndex,1)
        const bluePlayer = new blueTeammate(
          findPerson.id,
          findPerson.name,
          findPerson.age,
          findPerson.skillSet,
          findPerson.placeBorn,
          findPerson.canThrowBall,
          findPerson.canDodgeBall,
          findPerson.hasPaid,
          findPerson.isHealthy,
          findPerson.yearsExperience,
          findPerson.mascot =
         'Chickens', 
         'Blue'
        )
        blueTeam.push(bluePlayer)
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(`${bluePlayer.name} Mascot: ${bluePlayer.mascot}`))
        listElement.append(li)

        
        //tests
        // const assert = require('assert');




// if (typeof describe === 'function') {

  
//   describe('addToTeam()', () => {
//     it('should create a teammate and set mascot', () => {
//       const blueGal = new Player(1);
//       const blueGuy = new Teammate(blueGal, 'blue');
//       assert.equal(blueGuy.mascot, 'chickens');
//     });

  
//     it('should assign correct team color', () => {
//       const redGal = new Player(1);
//       const redGuy = new Teammate(redGal, 'red');
//       assert.equal(redGuy.color, 'red')
//     });
//   });

  
//   describe('makePlayer()', () => {
//     it('should create a player and extend player traits to the object', () => {
//       const newGuy = new Player(1, 'Jackson', 91, 'making sushi', 'Rome, Italy', 'Yes', 'Yes', 'Yes', 'Yes', 100)
//       assert.equal(newGuy.canThrowBall, 'Yes');
//     });
//   });
// }

  }