// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()
var dataName = ''

fetch('https://randomuser.me/api/?results=10')
  .then(response => {
    return response.json()
  })
  .then(data => {
    // Work with JSON data here
    console.log(data);
    console.log(data.results[0].name.first);
    console.log(data.results[0].picture.thumbnail)
    console.log(data.results);
    var i;
    for(i = 0; i < data.results.length; i++ ){
     
      var newDiv = document.createElement('li');
      newDiv.id = i;
      newDiv.innerText = data.results[i].name.first;
      var newPic = document.createElement('img');
      newPic.id = i;
      newPic.src = data.results[i].picture.thumbnail;
      var newButton = document.createElement('button');
      newButton.id = i;
      newButton.innerText = 'click for more info'
      newButton.addEventListener('click',openModal)
      newButton.src = data.results[i] //NOT WORKING
 
     
      
      
      document.body.appendChild(newDiv);
      document.body.appendChild(newPic);
      document.body.appendChild(newButton);
      
      
      
      function openModal() {
        newButton.src = data.results[i]
        authors.style.display = 'block';
        modal.style.display = 'block';
    }


    }
   
    
}
    
  )

  .then(results => {

  })
  .catch(err => {
    console.log(err)
    console.log('err')
    // Do something for an error here
  })

// function getInfo(){
// document.getElementById("button").innerText = dataName;
// }


// var modal = document.querySelectorAll('.modal')
// function openModal(){
// backdrop.style.display = 'block'
// modal.style.display = 'block'
// }

// button.onclick = openModal()
    // document.getElementsByTagName('button').addEventListener('click',newInfo

    // })