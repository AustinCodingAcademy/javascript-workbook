let userArr;

window.onload = function() {
  getUsers();
};

const getUsers = () => {
  fetch("https://randomuser.me/api/")
    .then(data => data.json())
    .then(users => (userArr = users));
};

// const displayUsers = () => {
//   const user = document.getElementsByClassName("pBox");
//   userArr.map(user => {
//     let img = document.getElementById(img);
//     let name = document.getElementById(name);
//     user.append(users.img);
//   });
// };

getUsers();
// displayUsers()
