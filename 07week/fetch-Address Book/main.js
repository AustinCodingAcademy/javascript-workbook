let arrayOfUsers;


function getUsers() {
  fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => arrayOfUsers = data)
    console.log(data) 
}


document.getElementById("users").addEventListener("click", function () {
  getUsers()
})
