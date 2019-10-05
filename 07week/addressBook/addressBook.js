// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()
var dataName = ''

fetch('https://randomuser.me/api/?results=10')
  .then(response => {
    return response.json()
  })
  .then(data => {
    // Work with JSON data here
   
    var i;
    for(i = 0; i < data.results.length; i++ ){
     
      var newDiv = document.createElement('div');
      newDiv.innerText = data.results[i].name.first;
      var newPic = document.createElement('img');
      newPic.src = data.results[i].picture.medium;
      const age = document.createElement('li');
      age.innerText = data.results[i].dob.age;
      const ageButton = document.createElement("button");
      ageButton.innerHTML = "Age";
      const cell = document.createElement('li');
      cell.innerText = data.results[i].cell;
      const cellButton = document.createElement('button'); 
      cellButton.innerHTML = 'Cell Phone';


      document.body.appendChild(newDiv);
      document.body.appendChild(newPic);
   
      
      
      let name = document.getElementById('name')
      name.appendChild(newDiv);
      let pic = document.getElementById('img')
      pic.appendChild(newPic)
      let ageDiv = document.getElementById("age");
      let buttonPlace = document.getElementById("ageButton");
      buttonPlace.appendChild(ageButton);
      let cellDiv = document.getElementById('cell')
      let buttonPlace1 = document.getElementById('cellButton')
      buttonPlace1.appendChild(cellButton)
      ageButton.addEventListener("click", function() {
      ageDiv.appendChild(age);
      });
      cellButton.addEventListener('click', function(){
        cellDiv.appendChild(cell);
      })
     
     
      
      
     //change the age button to the data value 
    //  if (newButton is clicked){
    // ageButton = ageDiv
    //     }
      
      
      
      
      
      
  
        
        
      }
      
    })
    
    .then(results => {
      
    })
    // Do something for an error here
    .catch(err => {
      console.log(err)
      console.log('err')
    })
    
    