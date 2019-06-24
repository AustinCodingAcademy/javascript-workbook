const arrOfPeople = [
    {
      id: 2,
      name: "Ben Patterson",
      age: 55,
      skillSet: "coding",
      placeBorn: "Seekonk, Massachussetts"
    },
    {
      id: 3,
      name: "Reese Tiger",
      age: 35,
      skillSet: "camping",
      placeBorn: "Louisville, Kentucky"
    },
    {
      id: 4,
      name: "Cynthia Doolittle",
      age: 20,
      skillSet: "singing",
      placeBorn: "Pawnee, Texas"
    },
    {
      id: 5,
      name: "Maine Willouby",
      age: 28,
      skillSet: "pipe fitting",
      placeBorn: "New York, New York"
    },
    {
      id: 6,
      name: "Stan Breef",
      age: 20,
      skillSet: "boom-a-rang throwing",
      placeBorn: "Perth, Australia"
    },
    {
      id: 7,
      name: "Mia Habib",
      age: 17,
      skillSet: "acrobatics",
      placeBorn: "Los Angeles, California"
    },
    {
      id: 8,
      name: "Ashley Cole",
      age: 32,
      skillSet: "jump rope",
      placeBorn: "New Orleans, Louisiana"
    },
  ]
  
  const listOfPlayers = []
  const blueTeam = []
  const redTeam = []
  
  class Player {
    constructor(person){
        this.id = person.id;
        this.name = person.name;
        this.age = person.age;
        this.skillSet = person.skillSet;
        this.placeBorn = person.placeBorn;
        this.canTrowBall = false;
        this.canDodgeBall = false;
        this.hasPaid = false;
        this.isHealthy = false;
        this.yearsExperience = false;
        this.team = null;
        this.isPlayer = false;
    }
  }
  class blueTeammate {
    constructor(){}
  }
  class redTeammate {
    constructor(){}
  }
  
//   const players = arrOfPeople.map(person => new Player(person.name, person.age, person.skillSet, person.placeBorn))
  const people = arrOfPeople.map(person => new Player(person))

  console.log("people:", people)

  const listPeopleChoices = () => {
    const listElement = document.getElementById('people')
    people.filter(person => !person.isPlayer).map(person => {
      const li = document.createElement("li")
      const button = document.createElement("button")
      button.innerHTML = "Make Player"
      button.addEventListener('click', function() {makePlayer(person.id)} )
      li.appendChild(button)
      li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
      listElement.append(li)
    })
  }
  
  const makePlayer = (id) => {
    console.log(`li ${id} was clicked!`)
    people.find(person => person.id === id).isPlayer = true;
    listPlayer()
    document.getElementById("people").innerHTML = ""
    listPeopleChoices()
  }

//   const unique = (value, index, self) => {
//       return self.indexOf(value) === index
//   }
  const listPlayer = (id) => {
    console.log(id)
    const listElement = document.getElementById('players')
    listElement.innerHTML = "";
    people.filter(person => person.isPlayer).map(person => {
        if(person.team == null){
            const li = document.createElement("li")
            const redButton = document.createElement("button")
            redButton.innerHTML = "Red Team"
            const blueButton = document.createElement("button")
            blueButton.innerHTML = "Blue Team"
            redButton.addEventListener('click', function() {makeRedTeam(person.id)} )
            blueButton.addEventListener('click', function() {makeBlueTeam(person.id)} )
            li.appendChild(redButton)
            li.appendChild(blueButton)
            li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
            listElement.append(li)  
        }      
    })
  }
  
  const makeRedTeam = (id) => {
    console.log(`li ${id} was clicked!`)
    people.find(person => person.id === id).team = 'Red';
    console.log(people)
    listRedPlayer()
  }

  const listRedPlayer = (id) => {
    console.log(id)
    const listElement = document.getElementById('red')
    listElement.style.color = 'red'
    listElement.innerHTML = ""
    // const uniquePeople = people.filter(unique);
    listPlayer();
    people.filter(person => person.team === 'Red').map(person => {

            const li = document.createElement("li")
            li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
            listElement.append(li)  
       
    })
  }
  const makeBlueTeam = (id) => {
    console.log(`li ${id} was clicked!`)
    people.find(person => person.id === id).team = 'Blue';
    console.log(people)
    listBluePlayer()
  }
  const listBluePlayer = (id) => {
    console.log(id)
    const listElement = document.getElementById('blue')
    listElement.style.color = 'blue'
    listElement.innerHTML = ""
    // const uniquePeople = people.filter(unique);
    listPlayer();
    people.filter(person => person.team === 'Blue').map(person => {

            const li = document.createElement("li")
            li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
            listElement.append(li)  
       
    })
  }